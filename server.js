import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { CopilotRuntime, OpenAIAdapter } from '@copilotkit/runtime';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Security middleware
app.use(helmet());

// CORS configuration for single origin
app.use(cors({ 
  origin: ["http://localhost:5000"], 
  credentials: true 
}));

// Body parsing
app.use(express.json({ limit: "2mb" }));

// Create CopilotKit runtime with OpenAI
const runtime = new CopilotRuntime({
  adapter: new OpenAIAdapter({
    model: 'gpt-4',
    apiKey: process.env.OPENAI_API_KEY || 'sk-placeholder-key-for-demo'
  })
});

// CopilotKit API endpoint
app.use('/api/copilotkit', runtime.router);

// Health check endpoint
app.get('/api/healthz', (_req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'CopilotKit server is running',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// Serve static files (Vite build)
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for SPA routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, _req, res, _next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    error: String(err?.message || err),
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/copilotkit`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/healthz`);
  console.log(`🌐 Frontend: http://localhost:${PORT}`);
});

export default app;
