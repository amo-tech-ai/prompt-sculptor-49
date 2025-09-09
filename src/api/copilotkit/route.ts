import { CopilotRuntime, OpenAIAdapter } from "@copilotkit/runtime";

export async function POST(req: Request) {
  try {
    const runtime = new CopilotRuntime();
    
    const openai = new OpenAIAdapter({
      model: "gpt-4",
      apiKey: process.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY,
    });

    return runtime.response(req, openai);
  } catch (error) {
    console.error("CopilotKit API Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}