// if you think it is better to seperate the interfaces into different entity files, please let me know.
export interface Message {
    name: string;
    content: string;
    role: Role;
}

export interface Chat {
    chatId: number;
    customerId: number;
    messages: Message[];
}

export interface User {
    userId: number;
    username: string;
    roles?: Role[];
}

enum Role {
    ASSISTANT = 'assistant',
    USER = 'user',
    SYSTEM = 'system',
    FUNCTION = 'function',
}

export class apiRequestDTO {
    chatId: number;
    customerId: number;
    user: User;
    messages: Message[];
}