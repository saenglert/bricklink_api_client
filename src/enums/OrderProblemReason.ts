export enum OrderProblemReason {
    /** Buyer did not respond to emails */
    NO_RESPONSE = 6,

    /** Buyer email address bounced */
    MAIL_BOUNCED = 7,

    /** Seller did not receive payment */
    PAYMENT_NOT_RECEIVED = 8,

    /** Buyer found items elsewhere */
    ITEMS_ELSEWHERE = 9,

    /** Buyer no longer wants to purchase items */
    NO_LONGER_WANT = 10,

    /** Buyer does not have enough funds to pay */
    NO_FUNDS = 11,

    /** Buyer did not comply with store policies */
    POLICY_VIOLATION = 12,

    /** Buyer submitted a bogus order */
    BOGUS_ORDER = 13,

    /** Buyer demanded a lower price on items */
    DEMAND_LOWER = 16,

    /** Package returned with incorrect address */
    INCORRECT_ADDRESS = 57,

    /** Seller did not have items after order was submitted */
    NO_STOCK = 60,

    /** Buyer is underage */
    UNDERAGE = 63,

    /** Buyer is no longer registered */
    UNREGISTERED = 72,

    /** Package cannot be delivered to buyer's address */
    CANNOT_DELIVER = 97,

    /** Buyer did not pay for order */
    NO_PAY = 100,

    /** System Problem */
    SYSTEM_PROBLEM = 70,

    /** Mutual agreement between buyer and seller to cancel */
    MUTUAL_AGREEMENT = 107,
}