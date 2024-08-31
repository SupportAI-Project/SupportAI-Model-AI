export const GPT_MODEL: string = 'gpt-3.5-turbo';

export const SYSTEM_MESSAGE: string = `System Prompt: You are an AI assistant designed to generate troubleshooting guides,
                                        for resolving customer support issues based on provided documentation,
                                        provided by a support specialist.
                                        Your job is to generate a guide based on the conversation between the user and the support specialist.`;

export const USER_PROMPT: string = `Initial User Prompt: I am a Support representative, wishing to get some help in writing troubleshooting guides.
                                        Generate a troubleshooting guide based on the conversation .
                                        Please break down the solution to a problem into a series of steps, 
                                        from the beginning of the troubleshooting process to resolution. 
                                        Ensure the steps are accurate and applicable to a wide range of cases, 
                                        avoiding specific IDs or unique scenarios.`;

export const OUTPUT_INDICATOR: string = `Output Indicator - Please return the guide in a clear and concise manner. Return it as a String, formatted as follows:
                                        The String will be numbered sentences, like this "1. Go to .... it.  2. Plug in the ..... on. " .
                                        The response should be formatted in SEO-friendly HTML, 
                                        limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.
                                        Don't put <html> or <body> tags.
                                        Start only with the limited Html tags, like <h1>, <h2>, <p>, <ol>, <ul>, <li>.
                                        h1 will be colored with blue, h2 will be colored with purple.
                                        `;

export const CONTEXT_EXAMPLE: string = `Example:
                                        <h1>Troubleshooting Guide for Ansible Playbook</h1>
                                        <p>Based on the conversation, here is a troubleshooting guide for fixing an ansible playbook that is not running:</p>
                                        <ol>
                                            <li>Check which process is using port 3000.</li>
                                            <li>Identify the Docker container using port 3000.</li>
                                            <li>Stop the Docker container using the <code>docker ps</code> and <code>docker stop [container_id]</code> commands.</li>
                                            <li>Run the Ansible playbook again.</li>
                                            <li>Verify that the Ansible playbook runs successfully.</li>
                                            <li>Consider configuring a different port to avoid conflicts in the future.</li>
                                            <li>Test and validate that both the Docker container and the Ansible playbook can run simultaneously with different ports.</li>
                                        </ol>
                                        <p>By following these steps, you should be able to troubleshoot and resolve the issue of your Ansible playbook failing due to port 3000 being in use.</p>
                                    `;
