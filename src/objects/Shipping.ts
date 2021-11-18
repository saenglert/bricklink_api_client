import { Timestamp } from ".";
import { Address } from "./Address";

/**
 * Information about the shipment of an order
 * 
 * @see https://www.bricklink.com/v3/api.page?page=resource-representations-order
 */
export interface Shipping {
    /** Shipping method name  */
    method: string;

    /** Shipping method ID  */
    method_id: string;

    /** Tracking numbers for the shipping  */
    tracking_no: string;

    /** 
     * URL for tracking the shipping 
     * API-only field. It is not shown on the BrickLink pages. 
     */
     tracking_link: string;

     /**
      * Shipping date 
      * 
      * API-only field. It is not shown on the BrickLink pages. 
      */
    date_shipped: Timestamp

    /** The object representation of the shipping address */
    adress: Address;

}