import { APIResponse } from "../APIResponse";
import { AssociationsItem } from "./AssociationsItem";
declare class AssociationsResponse extends APIResponse {
    queryText: string;
    partOfSpeechCategories: string[];
    items: AssociationsItem[];
    constructor(data: any | undefined);
}
export { AssociationsResponse };
