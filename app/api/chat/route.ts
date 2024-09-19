import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant that provides information about artists and events. Be concise and friendly in your responses.'
      },
      ...messages
    ]
  })

  return result.toDataStreamResponse()
}