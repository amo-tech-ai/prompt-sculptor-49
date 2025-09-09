const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple CopilotKit API endpoint
app.post('/api/copilotkit', async (req, res) => {
  try {
    console.log('CopilotKit API request received:', req.body);
    
    // For now, return a simple response
    res.json({ 
      message: "CopilotKit API is working",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Simple API server running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/copilotkit`);
});
