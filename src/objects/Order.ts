import { Timestamp } from ".";
import { Cost } from "./Cost";
import { DispCost } from "./DispCost";
import { Payment } from "./Payment";
import { Shipping } from "./Shipping";


export type OrderStatus = "Pending" | "Updated" | "Processing" | "Ready" | "Paid" | "Shipped" | "Received" | "Completed" | "QCR" | "NPB" | "NPX" | "NRS" | "NSS" | "Cancelled";

/**
 * Representation of an order placed by a buyer
 * 
 * @see https://www.bricklink.com/v3/api.page?page=resource-representations-order
 */
interface Order {
    /** Unique identifier for this order for internal use */
    order_id: string;

    /** The time the order was created */
    date_ordered: Timestamp;

    /** The time the order status was last modified */
    date_status_changed: Timestamp;

    /** The username of the seller in BL */
    seller_name: string;

    /** The store name displayed on BL store pages */
    store_name: string;

    /** The username of the buyer in BL  */
    buyer_name: string;

    /** E-mail address of the buyer */
    buyer_email: string;

    /** Total count of all orders placed by the buyer in the seller's store. Includes the order just placed and also purged orders  */
    buyer_order_count: string;

    /** Indicates whether the buyer requests insurance for this order  */
    require_insurance: boolean;

    /** The status of an order */
    status: OrderStatus;

    /** Indicates whether the order invoiced  */
    is_invoiced: boolean;

    /** Indicates whether the order is filed  */
    is_filed: boolean;

    /** Indicates whether "Thank You, Drive Thru!" email has been sent  */
    drive_thru_sent: boolean;

    /** Indicates if sales tax are collected by BL or not */
    salesTax_collected_by_bl: boolean;

    /** User remarks for this order */
    remarks: string;

    /** The total number of items included in this order */
    total_count: number;

    /** The unique number of items included in this order */
    unique_count: number;

    /**
     * The total weight of the items ordered
     * It applies the seller's custom weight when present to override the catalog weight
     * 0 if the order includes at least one item without any weight information or incomplete set 
     */
    total_weight: number;

    /** Information related to the payment of this order */
    payment: Payment;

    /** Information related to the shipping of this order */
    shipping: Shipping;

    /** Cost information for this order */
    cost: Cost;

    /** Cost information for this order in DISPLAY currency */
    disp_cost: DispCost;
}

export default Order;