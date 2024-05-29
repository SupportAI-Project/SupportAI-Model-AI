export type message = {
    name: string;
    role: 'system' | 'user' | 'assistant' | 'function';
    content: string;
}

export class OpenAiDTO {
    model: string;
    messages: message[];
}