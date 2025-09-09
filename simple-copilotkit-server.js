import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Enable CORS for your frontend
app.use(cors({ 
  origin: ['http://localhost:5000', 'http://localhost:5001', 'http://localhost:8080', 'http://localhost:8081', 'http://localhost:8082', 'http://localhost:8083'],
  credentials: true 
}));

// Parse JSON bodies
app.use(express.json());

// Mock CopilotKit API endpoint
app.post('/api/copilotkit', (req, res) => {
  console.log('📨 CopilotKit request received:', req.body);
  
  const { operationName, query, variables } = req.body;
  
  // Handle different GraphQL operations
  if (operationName === 'availableAgents') {
    res.json({
      data: {
        availableAgents: {
          agents: [],
          __typename: 'AvailableAgents'
        },
        __typename: 'Query'
      }
    });
  } else if (operationName === 'generateCopilotResponse') {
    // Get the last user message
    const messages = variables.data.messages || [];
    console.log('🔍 All messages:', JSON.stringify(messages, null, 2));
    const lastUserMessage = messages.find(msg => msg.textMessage && msg.textMessage.role === 'user');
    console.log('👤 Last user message:', lastUserMessage);
    const userInput = lastUserMessage ? lastUserMessage.textMessage.content : '';
    console.log('💬 User input extracted:', userInput);
    
    // Generate dynamic response based on user input
    let aiResponse = "I understand you'd like to start the brief collection process for your e-commerce business. Let's begin by understanding your current business model and the specific challenges you're facing. Can you tell me more about your target market and what products or services you're planning to offer?";
    
    if (userInput && userInput.length > 0) {
      // Analyze user input and provide contextual response
      if (userInput.toLowerCase().includes('website') || userInput.toLowerCase().includes('site')) {
        aiResponse = "Great! I can help you build a website for your business. Let's start with the basics: What type of business are you running? Are you selling products online, offering services, or something else?";
      } else if (userInput.toLowerCase().includes('ecommerce') || userInput.toLowerCase().includes('e-commerce')) {
        aiResponse = "Perfect! E-commerce is a great business model. To help you build the best platform, I need to understand: What products are you planning to sell? Do you have a target audience in mind?";
      } else if (userInput.toLowerCase().includes('help') || userInput.toLowerCase().includes('assist')) {
        aiResponse = "I'm here to help you through the entire brief collection process! We'll cover 7 key areas: Business understanding, Requirements, Technical needs, Goals, Decision making, Analysis, and Confirmation. What would you like to start with?";
      } else if (userInput.toLowerCase().includes('business') || userInput.toLowerCase().includes('company')) {
        aiResponse = "Excellent! Let's dive into your business details. Can you tell me: What industry are you in? How long have you been operating? What's your current revenue model?";
      } else {
        aiResponse = `I see you mentioned: "${userInput}". That's helpful context! Let's dive deeper into your business needs. Can you tell me more about your target market and what specific challenges you're facing?`;
      }
    }
    
    const mockResponse = {
      data: {
        generateCopilotResponse: {
          threadId: variables.data.threadId,
          runId: `run_${Date.now()}`,
          extensions: {
            openaiAssistantAPI: {
              runId: `assistant_${Date.now()}`,
              threadId: variables.data.threadId,
              __typename: 'OpenAIAssistantAPI'
            },
            __typename: 'Extensions'
          },
          status: {
            code: 'SUCCESS',
            __typename: 'SuccessResponseStatus'
          },
          messages: [
            {
              id: `msg_${Date.now()}`,
              createdAt: new Date().toISOString(),
              status: {
                code: 'SUCCESS',
                __typename: 'SuccessMessageStatus'
              },
              content: [aiResponse],
              role: 'assistant',
              parentMessageId: null,
              __typename: 'TextMessageOutput'
            }
          ],
          metaEvents: [],
          __typename: 'CopilotResponse'
        },
        __typename: 'Mutation'
      }
    };
    
    res.json(mockResponse);
  } else {
    // Default response for other operations
    res.json({
      data: {
        success: true,
        message: 'CopilotKit API is working!',
        timestamp: new Date().toISOString()
      }
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'CopilotKit server is running',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 CopilotKit server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/copilotkit`);
  console.log(`🔗 Frontend should connect to: http://localhost:${PORT}/api/copilotkit`);
});

export default app;
