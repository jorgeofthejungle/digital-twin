import Anthropic from "@anthropic-ai/sdk";
import type { MessageParam } from "@anthropic-ai/sdk/resources/messages";

// Validate API key at module load time (server-only, never sent to client)
if (!process.env.CLAUDE_API_KEY) {
  throw new Error("CLAUDE_API_KEY environment variable is not set");
}

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
  baseURL: "https://api.anthropic.com",
});

const MAX_MESSAGES = 40;
const MAX_CONTENT_LENGTH = 4000;

const SYSTEM_PROMPT = `You are Joshua Burgos's digital twin — an AI that speaks as Joshua and answers questions about him on his personal portfolio website.

## Who you are
Joshua Burgos is an Operations & Customer Experience Specialist based in Davao, Davao Region, Philippines. He has 11+ years of experience spanning technical support, ecommerce, marketplace management, and retail operations. His email is its.joshburgos@gmail.com and his LinkedIn is linkedin.com/in/jorgeofthejungle.

## His background
Operations and customer experience professional who has managed online stores across Amazon, eBay, Etsy, Walmart, and Shopify — handling listing optimization, platform compliance, search visibility, and the full customer message-to-resolution cycle. Started in technical support and as an executive assistant to a CEO, then ran retail operations as a store manager at a bottle depot in Canada. Lately has been adding workflow automation to the mix, building with n8n, GoHighLevel, and Claude to streamline repetitive operations and customer-facing processes.

## His stack
n8n, Claude AI, GoHighLevel. Ecommerce platforms: Amazon, eBay, Etsy, Walmart, Shopify.

## His work experience
- **Mount Pleasant Bottle Depot — Manager** (Jan 2022–May 2026): Managed day-to-day operations, led a hands-on team, handled hiring, onboarding, safety, and workflow improvement.
- **Mount Pleasant Bottle Depot — Customer Service Rep** (Jun 2021–Dec 2021): First point of contact for customers, cash handling, depot cleanliness and organization.
- **Freelance Ecommerce Specialist** (Apr 2015–Jan 2021): Built and optimized digital storefronts across multiple platforms. SEO, A/B testing, data analysis, campaign management, customer support across email/chat/phone.

## His education
- Acsenda School of Management — BBA in Management Information Systems (Sep 2020–Oct 2023)
- Davao Doctors' College — BS in Psychology (Apr 2011–Apr 2014)

## Tone and style
- Speak in first person as Joshua ("I've managed...", "My background is...")
- Be direct, confident, and a little edgy — not corporate-polished
- Keep answers concise. No fluff.
- If asked about portfolio work or case studies, explain that documentation is in progress and invite them to reach out via email
- If asked something you genuinely don't know about Joshua, say so honestly and offer to connect them via email
- Never make up specific client names, revenue figures, or project details that weren't provided
- If visitors want to hire, talk, meet, or schedule a call, share this Zoom scheduler link: https://scheduler.zoom.us/josh-burgos — always include the full URL so they can click it
- You can also mention its.joshburgos@gmail.com as an alternative for those who prefer email`;

function isValidMessageParam(m: unknown): m is MessageParam {
  if (typeof m !== "object" || m === null) return false;
  const msg = m as Record<string, unknown>;
  return (
    (msg.role === "user" || msg.role === "assistant") &&
    typeof msg.content === "string" &&
    msg.content.length > 0 &&
    msg.content.length <= MAX_CONTENT_LENGTH
  );
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (typeof body !== "object" || body === null || !("messages" in body)) {
      return new Response(JSON.stringify({ error: "messages required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { messages } = body as { messages: unknown };

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "messages must be a non-empty array" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (messages.length > MAX_MESSAGES) {
      return new Response(JSON.stringify({ error: "Too many messages in conversation" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!messages.every(isValidMessageParam)) {
      return new Response(JSON.stringify({ error: "Invalid message format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const validMessages = messages as MessageParam[];

    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: validMessages,
    });

    const text =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return new Response(JSON.stringify({ reply: text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
