import express from 'express';
import cors from 'cors';
import { CopilotRuntime, OpenAIAdapter } from '@copilotkit/runtime';

const app = express();
const PORT = 8001;

// Enable CORS for your frontend
app.use(cors({ 
  origin: ['http://localhost:5000', 'http://localhost:5001', 'http://localhost:8080', 'http://localhost:8081', 'http://localhost:8082', 'http://localhost:8083'],
  credentials: true 
}));

// Parse JSON bodies
app.use(express.json());

// Create CopilotKit runtime
const runtime = new CopilotRuntime({
  adapter: new OpenAIAdapter({
    model: 'gpt-4',
    apiKey: process.env.OPENAI_API_KEY || 'sk-placeholder-key-for-demo'
  })
});

// CopilotKit API endpoint
app.use('/api/copilotkit', runtime.router);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'CopilotKit server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 CopilotKit server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/copilotkit`);
  console.log(`🔗 Frontend should connect to: http://localhost:${PORT}/api/copilotkit`);
});

export default app;
