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

// CORS configuration for development and production
app.use(cors({
  origin: [
    'http://localhost:5000',
    'http://localhost:5001', 
    'http://localhost:5173',
    'http://localhost:8001',
    'https://amoai.vercel.app',
    'https://amoai-81u5gok1s-fx-1000.vercel.app'
  ],
  credentials: true
}));

app.use(express.json());

// Configure OpenAI adapter with optimal settings
const serviceAdapter = new OpenAIAdapter({
  model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7,
  maxTokens: 1000,
});

// CopilotKit endpoint with comprehensive error handling
app.post('/api/copilotkit', async (req, res) => {
  if (!process.env.OPENAI_API_KEY) {
    console.error('⚠️ Missing OPENAI_API_KEY environment variable');
    return res.status(500).json({ 
      error: 'Configuration Error',
      message: 'OpenAI API key is not configured. Please set OPENAI_API_KEY in your .env file',
      solution: 'Add OPENAI_API_KEY=your-key to .env file'
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
    
    // Provide detailed error information for debugging
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
      port: PORT,
      env: process.env.NODE_ENV || 'development'
    }
  };
  
  // Return 503 if OpenAI is not configured
  const statusCode = health.services.openai === 'configured' ? 200 : 503;
  res.status(statusCode).json(health);
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const distDir = path.join(__dirname, 'dist');
  app.use(express.static(distDir));
  
  // SPA fallback - serve index.html for all non-API routes
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(distDir, 'index.html'));
    }
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred',
    timestamp: new Date().toISOString()
  });
});

const PORT = Number(process.env.COPILOT_PORT || 8001);

// Start server with detailed logging
app.listen(PORT, () => {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║           CopilotKit Server Successfully Started           ║');
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log(`║ 🚀 Server URL:     http://localhost:${PORT.toString().padEnd(23)}║`);
  console.log(`║ 📡 API Endpoint:   http://localhost:${PORT}/api/copilotkit    ║`);
  console.log(`║ 🏥 Health Check:   http://localhost:${PORT}/api/health        ║`);
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log(`║ 🔑 OpenAI Status:  ${process.env.OPENAI_API_KEY ? '✅ Configured'.padEnd(39) : '❌ Missing (Check .env file)'.padEnd(39)}║`);
  console.log(`║ 🤖 Model:          ${(process.env.OPENAI_MODEL || 'gpt-4-turbo-preview').padEnd(39)}║`);
  console.log(`║ 🌍 Environment:    ${(process.env.NODE_ENV || 'development').padEnd(39)}║`);
  console.log('╚════════════════════════════════════════════════════════════╝');
  
  if (!process.env.OPENAI_API_KEY) {
    console.log('\n⚠️  WARNING: OpenAI API key not found!');
    console.log('   Add OPENAI_API_KEY to your .env file to enable AI features.\n');
  }
});

export default app;
