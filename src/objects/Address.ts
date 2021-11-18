import { Name } from "./Name";

/** The object representation of the shipping address */
export interface Address {
    /** Name of the person the address belongs to */
    name: Name;

    /** The full address in not-well-formatted */
    full: string

    /**
     * The first line of the address
     * 
     * It is provided only if a buyer updated his/her address and name as a normalized form 
     */
    address1: string;

    /**
     * The second line of the address
     * 
     * It is provided only if a buyer updated his/her address and name as a normalized form 
     */
    address2: string;

    /**
     * 	ISO 3166-1 alpha-2 (exception: UK instead of GB) 
     * 
     * @see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
     */
    country_code: string;

    /**
     * It is provided only if a buyer updated his/her address and name as a normalized form 
     */
    city: string;

    /**
     * 	It is provided only if a buyer updated his/her address and name as a normalized form 
     */
    state: string;

    /**
     * 	It is provided only if a buyer updated his/her address and name as a normalized form 
     */
    postal_code: string;
}