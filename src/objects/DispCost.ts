export interface DispCost {

    /**
     * The display currency code of the user 
     * 
     * @see http://en.wikipedia.org/wiki/ISO_4217
     */
    currency_code: string;

    /**
     * The subtotal price in DISPLAY currency 
     */
    subtotal: number;

    /** The grand total price in DISPLAY currency */
    grand_total: number;

    /** Extra charge for this order (tax, packing, etc.) in DISPLAY currency */
    etc1: number;

    /** Extra charge for this order (tax, packing, etc.) in DISPLAY currency */
    etc2: number;

    /** Insurance cost in DISPLAY currency */
    insurance: number;

    /** Shipping cost in DISPLAY currency */
    shipping: number;

    /** Credit applied to this order in DISPLAY currency */
    credit: number;

    /** Amount of coupon discount in DISPLAY currency */
    coupon: number;

    /** VAT percentage applied to this order */
    vat_rate: number;

    /** Total amount of VAT included in the grand_total price in DISPLAY currency */
    vat_amount: number;
}