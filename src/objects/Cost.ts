export interface Cost {
    /**
     * The currency code of the transaction 
     * 
     * @see The currency code of the transaction 
     */
    currency_code: string;

    /**
     * The total price for the order exclusive of
     * shipping and other costs
     * 
     * (This must equal the sum of all the items)
     */
    subtotal: number;

    /** The total price for the order inclusive of tax, shipping and other costs */
    grand_total: number;

    /** Sales tax collected by BL, if that applies */
    salesTax_collected_by_BL: number;

    /** Grand total minus sales tax collected by BL */
    final_total: number;

    /** Extra charge for this order (tax, packing, etc.) */
    etc1: number;

    /** Extra charge for this order (tax, packing, etc.) */
    etc2: number;

    /** Insurance cost */
    insurance: number;

    /** Shipping cost */
    shipping: number;

    /** Credit applied to this order */
    credit: number;

    /** Amount of coupon discount */
    coupon: number;

    /** VAT percentage applied to this order */
    vat_rate: number;

    /** Total amount of VAT included in the grand_total price */
    vat_amount: number;

}