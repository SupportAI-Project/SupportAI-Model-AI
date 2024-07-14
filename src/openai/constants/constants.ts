import * as fs from 'fs';
// export type ConversationMessages = Record<string, string>;
// change back to this type, infer the conversation from backend and format into objects of messages to the api
const messages = fs.readFileSync('src/openai/lib/data/messages.txt', 'utf8');
export const MESSAGES: string = messages;

export const GPT_MODEL: string = 'gpt-3.5-turbo';

export const SYSTEM_MESSAGE: string = `You are an assistant designed to generate troubleshooting guides. 
                                        Break down the solution to a problem into general troubleshooting steps, 
                                        based on notes provided by a support specialist, 
                                        from the beginning of the troubleshooting process to resolution. 
                                        Ensure the steps are accurate and applicable to a wide range of cases, 
                                        avoiding specific IDs or unique scenarios. please return the steps in a clear and concise manner, as HTML element <ul>.`;