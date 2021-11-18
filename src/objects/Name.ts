export interface Name {
    /** The full name of this person, including middle names, suffixes, etc. */
    full: string;
    
    /**
     * The given name (first name) of this person
     * 
     * It is provided only if a buyer updated his/her address and name as a normalized form 
     * */
    first: string;

    /**
     * The family name (last name) of this person
     *
     * It is provided only if a buyer updated his/her address and name as a normalized form  
     */
    last: string;
}