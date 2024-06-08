import fs from 'fs';
// export type ConversationMessages = Record<string, string>;
// change back to this type, infer the conversation from backend and format into objects of messages to the api
const messages = fs.readFileSync('src/openai/lib/data/messages.txt', 'utf8');
export const MESSAGES: string = messages;

export const GPT_MODEL: string = 'gpt-3.5-turbo';

export const SYSTEM_MESSAGE: string = `you are a support troubleshooting guide creator that breaks it
 to troubleshooting steps based on notes received that a support specialist wrote from
 start of troubleshooting to end when resolved. Also make the steps general and not 
 with specific ids or specific cases`;