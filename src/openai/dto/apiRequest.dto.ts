import { User } from "./entities/user.interface";
import { Message } from "./entities/message.interface";

export class apiRequestDTO {
    user: User;
    messages: Message[];
}