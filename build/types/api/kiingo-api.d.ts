import { AssociationsRequest } from "./requests/associations/AssociationsRequest";
import { AssociationsResponse } from "./responses/associations/AssociationsResponse";
declare class KiingoAPI {
    apiKey: string;
    secretKey: string;
    constructor();
    initialize: (apiKey: string, secretKey: string) => boolean;
    getAssociations(request: AssociationsRequest): Promise<AssociationsResponse>;
}
export { KiingoAPI };
