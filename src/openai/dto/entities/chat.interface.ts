import { Message } from './message.interface';

export interface Chat {
    chatId: number;
    customerId: number;
    messages: Message[];
}