const express = require('express');
const cors = require('cors');
const { CopilotRuntime, OpenAIAdapter } = require('@copilotkit/runtime');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// CopilotKit API endpoint
app.post('/api/copilotkit', async (req, res) => {
  try {
    const runtime = new CopilotRuntime();
    
    const openai = new OpenAIAdapter({
      model: "gpt-4",
      apiKey: process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY,
    });

    const response = await runtime.response(req, openai);
    
    // Forward the response
    res.status(response.status || 200);
    res.set(response.headers || {});
    res.send(response.body);
  } catch (error) {
    console.error("CopilotKit API Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`CopilotKit API server running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/copilotkit`);
});
