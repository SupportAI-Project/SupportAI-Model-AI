import * as fs from 'fs';
const FILE_PATH = "src/openai/lib/data/messages.txt";
const ENCODING = "utf8";
const exampleConversation = fs.readFileSync(FILE_PATH, ENCODING);
export const MESSAGES: string = exampleConversation;

export const GPT_MODEL: string = 'gpt-3.5-turbo';
export const VALID_ROLES: string[] = ['system', 'assistant', 'user', 'function'];

export const SYSTEM_MESSAGE: string = `System Prompt: You are an AI assistant designed to generate troubleshooting guides,
                                        for resolving customer support issues based on provided documentation,
                                        provided by a support specialist.
                                        Your job is to generate a guide based on the conversation between the user and the support specialist.`;

export const USER_PROMPT: string = `Initial User Prompt: I am a client, wishing to get some help in solving my problems.
                                        Please break down the solution to a problem into a series of steps, 
                                        from the beginning of the troubleshooting process to resolution. 
                                        Ensure the steps are accurate and applicable to a wide range of cases, 
                                        avoiding specific IDs or unique scenarios.`; 

export const OUTPUT_INDICATOR: string = `Output Indicator - Please return the guide in a clear and concise manner. Return it as a String.
                                        The String will have an opening and closing sentence (think of it like item [0] and item [n] in a list).
                                        The String will be numbered sentences, like this "1. Go to .... it.  2. Plug in the ..... on. " .
                                        The numbers will be used to indicate the order of the steps. No need of escape characters. 
                                        The backend will transform the strings into array of strings, each index will be a step (exclude numbering on opening and closing sentences).`;
                                        
export const CONTEXT_GUIDE: string = `Context Guide (example): Based on the conversation, here is a troubleshooting guide for fixing an ansible playbook that is not running:
                                    Check which process is using port 3000.
                                    Identify the Docker container using port 3000.
                                    Stop the Docker container using the "docker ps" and "docker stop [container_id]" commands
                                    Run the Ansible playbook again.
                                    Verify that the Ansible playbook runs successfully.
                                    Consider configuring a different port to avoid conflicts in the future.
                                    Test and validate that both the Docker container and the Ansible playbook can run simultaneously with different ports.
                                    By following these steps, you should be able to troubleshoot and resolve the issue of your Ansible playbook failing due to port 3000 being in use.
                                    `;