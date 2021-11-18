import { Timestamp } from ".";

export interface OrderMessage {
    /** Subject of the message */
    subject: string;

    /** Content of the message */
    body: string;

    /** Username of who sends the message */
    from: string;

    /** Username of who receives the message */
    to: string;

    /** Time te message was sent */
    dateSent: Timestamp;
}