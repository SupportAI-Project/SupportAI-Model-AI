export const GPT_MODEL: string = 'gpt-3.5-turbo';

export const SYSTEM_MESSAGE: string = `you are a support troubleshooting guide creator that breaks it
 to troubleshooting steps based on notes received that a support specialist wrote from
 start of troubleshooting to end when resolved. Also make the steps general and not 
 with specific ids or specific cases`;

export const MESSAGES: { [key: string]: string } = {
    USER_MESSAGE: `I am having trouble with my computer. It is not turning on.`,
    REP_MESSAGE: `I am sorry to hear that. Have you tried to check if the power cord is plugged in?`,
    USER_MESSAGE_2: `Yes, I have checked that. It is plugged in.`,
    REP_MESSAGE_2: `Have you tried to press the power button?`,
    USER_MESSAGE_3: `Yes, I have tried that. It is still not turning on.`,
    REP_MESSAGE_3: `Have you tried to unplug the power cord and plug it back in?`,
    USER_MESSAGE_4: `Yes, I have tried that. The Type-C connection cable is damaged.`,
    REP_MESSAGE_4: `I recommend you to replace the Type-C connection cable.`,
    USER_MESSAGE_5: `I have replaced the Type-C connection cable. It is working now.`,
    REP_MESSAGE_5: `I am glad to hear that. Is there anything else I can help you with?`,
    USER_MESSAGE_6: `No, thank you. That is all.`,
    REP_MESSAGE_6: `You are welcome. Have a great day!`
};