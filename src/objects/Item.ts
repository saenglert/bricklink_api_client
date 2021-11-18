import { ItemType } from "../enums/ItemType";

export interface Item {
    /** Item's identification number in BL catalog */
    no: string;

    /** The name of the item */
    name: string;

    /** The type of the item  */
    type: ItemType;

    /** The main category of the item */
    category_id: number;
}