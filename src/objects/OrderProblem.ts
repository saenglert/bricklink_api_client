import { OrderProblemReason } from "../enums/OrderProblemReason";
import { OrderProblemType } from "../enums/OrderProblemType";

export interface OrderProblem {
    /** Type of the problem */
    type: OrderProblemType;

    /** Your comment about the problem */
    message: string;

    /** Reason why you file the case */
    reason_id: OrderProblemReason
}