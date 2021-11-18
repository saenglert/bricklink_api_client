import { Completeness } from "../enums/Completness";
import { Condition } from "../enums/Condition";
import { Item } from "./Item";

export interface OrderItem {
    /** The ID of the inventory that includes the item */
    inventory_id: number;

    /** An object representation of the item */
    item: Item;

    /** The ID of the color of the item */
    color_id: number;

    /**
     * Color name of the item 
     * 
     * Upcoming feature
     */
    color_name: string;

    /**
     * 	The number of items purchased in this order 
     */
    quantity: number;

    /** Indicates whether the item is new or used */
    new_or_used: Condition;

    /** Indicates whether the set is complete or incomplete
     * 
     * (This value is valid only for SET type)
     */
    completeness: Completeness;

    /** The original price of this item per sale unit */
    unit_price: number;

    /** The unit price of this item after applying tiered pricing policy */
    unit_price_final: number;

    /** The original price of this item per sale unit in display currency of the user */
    disp_unit_price: number;

    /** The unit price of this item after applying tiered pricing policy in display currency of the user */
    disp_unit_price_final: number;

    /**
     * The currency code of the price
     * 
     * @see http://en.wikipedia.org/wiki/ISO_4217
     */
    currency_code: string;

    /**
     * The display currency code of the user 
     * 
     * @see http://en.wikipedia.org/wiki/ISO_4217
     */
    disp_currency_code: string;

    /** User remarks of the order item */
    remarks: string;

    /** User description of the order item */
    description: string;

    /**
     * The weight of the item that overrides the catalog weight 
     * 
     * Upcoming feature
     */
    weight: number;
}