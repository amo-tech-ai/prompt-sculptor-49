import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { 
  CopilotRuntime, 
  OpenAIAdapter,
  copilotRuntimeNodeHttpEndpoint 
} from '@copilotkit/runtime';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5000',
    'http://localhost:5173',
    'http://localhost:8001',
    'https://amoai.vercel.app',
    'https://amoai-81u5gok1s-fx-1000.vercel.app',
    /^https:\/\/.*\.vercel\.app$/
  ],
  credentials: true
}));

app.use(express.json());

// Configure OpenAI adapter
const serviceAdapter = new OpenAIAdapter({
  model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7,
  maxTokens: 1000,
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  const health = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    services: {
      copilotkit: 'ready',
      openai: process.env.OPENAI_API_KEY ? 'configured' : 'missing',
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview'
    },
    environment: {
      node: process.version,
      port: process.env.PORT || 8001,
      env: process.env.NODE_ENV || 'development'
    }
  };
  
  const statusCode = health.services.openai === 'configured' ? 200 : 503;
  res.status(statusCode).json(health);
});

// CopilotKit endpoint
app.post('/api/copilotkit', async (req, res) => {
  if (!process.env.OPENAI_API_KEY) {
    console.error('⚠️ Missing OPENAI_API_KEY environment variable');
    return res.status(500).json({ 
      error: 'Configuration Error',
      message: 'OpenAI API key is not configured',
      solution: 'Add OPENAI_API_KEY to your environment file'
    });
  }

  try {
    const handler = copilotRuntimeNodeHttpEndpoint({
      endpoint: '/api/copilotkit',
      serviceAdapter,
    });
    
    return await handler(req, res);
  } catch (error) {
    console.error('❌ CopilotKit Runtime Error:', error);
    
    if (error.message?.includes('API key')) {
      return res.status(401).json({ 
        error: 'Authentication Error',
        message: 'Invalid OpenAI API key',
        solution: 'Check that your OPENAI_API_KEY is valid'
      });
    }
    
    return res.status(500).json({ 
      error: 'Runtime Error',
      message: error.message || 'An unexpected error occurred',
      timestamp: new Date().toISOString()
    });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const distDir = path.join(__dirname, 'dist');
  app.use(express.static(distDir));
  
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(distDir, 'index.html'));
    }
  });
}

const PORT = Number(process.env.PORT || 8003);

app.listen(PORT, () => {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║           🚀 CopilotKit Server Started                     ║');
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log(`║ 🌐 Server URL:     http://localhost:${PORT}                   ║`);
  console.log(`║ 📡 API Endpoint:   http://localhost:${PORT}/api/copilotkit    ║`);
  console.log(`║ 🏥 Health Check:   http://localhost:${PORT}/api/health        ║`);
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log(`║ 🔑 OpenAI Status:  ${process.env.OPENAI_API_KEY ? '✅ Configured' : '❌ Missing'}           ║`);
  console.log(`║ 🤖 Model:          ${process.env.OPENAI_MODEL || 'gpt-4-turbo-preview'}                    ║`);
  console.log('╚════════════════════════════════════════════════════════════╝');
  
  if (!process.env.OPENAI_API_KEY) {
    console.log('\n⚠️  Add OPENAI_API_KEY to enable AI features\n');
  }
});

export default app;