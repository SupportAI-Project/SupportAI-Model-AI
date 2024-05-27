export class OpenAiDTO {
    model: string;
    messages: Array<{
        role: 'system' | 'user' | 'assistant' | 'function',
        content: string, 
        name: string
    }>;
}