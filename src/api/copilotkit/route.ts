// Temporary stub endpoint for CopilotKit until secrets are configured.
// See: project Useful Context on handling API keys & Supabase secrets.

export async function POST(_req: Request) {
  // Return a clear message so the app builds without type errors.
  const body = {
    error: "Copilot backend not configured",
    message:
      "Set up a secure OpenAI key via Supabase secrets and wire it to CopilotKit before enabling this endpoint.",
    docs: "https://docs.copilotkit.ai/",
  };

  return new Response(JSON.stringify(body), {
    status: 501,
    headers: { "Content-Type": "application/json" },
  });
}
