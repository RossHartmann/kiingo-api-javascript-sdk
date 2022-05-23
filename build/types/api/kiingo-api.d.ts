import { AssociationsRequest } from "./requests/associations/AssociationsRequest";
import { AssociationsResponse } from "./responses/associations/AssociationsResponse";
import { PartOfSpeechTaggerRequest } from "./requests/pos-tagger/PartOfSpeechTaggerRequest";
import { PartOfSpeechTaggerResponse } from "./responses/pos-tagger/PartOfSpeechTaggerResponse";
declare class KiingoAPI {
    apiKey: string;
    secretKey: string;
    constructor();
    initialize: (apiKey: string, secretKey: string) => boolean;
    getAssociations(request: AssociationsRequest): Promise<AssociationsResponse>;
    tagPartsOfSpeech(request: PartOfSpeechTaggerRequest): Promise<PartOfSpeechTaggerResponse>;
}
export { KiingoAPI };
