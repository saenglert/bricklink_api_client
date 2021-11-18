import { Timestamp } from "..";
import { PaymentStatus } from "../../enums/PaymentStatus";

export interface Payment {
    /** The payment method for this order */
    method: string;

    /**
     * Currency code of the payment 
     * 
     * http://en.wikipedia.org/wiki/ISO_4217
     */

    curreny_code: string;

    /** The time the buyer paid */
    date_paid: Timestamp;

    /** http://www.bricklink.com/help.asp?helpID=121 */
    status: PaymentStatus;
    
}