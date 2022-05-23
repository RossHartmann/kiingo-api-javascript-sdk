import { APIRequest } from "../APIRequest";
declare enum PartOfSpeechModel {
    unknown = "unknown",
    standard = "standard",
    fast = "fast"
}
declare class PartOfSpeechTaggerRequest extends APIRequest {
    text: string;
    model: PartOfSpeechModel;
    constructor(text: string, model: PartOfSpeechModel);
}
export { PartOfSpeechTaggerRequest, PartOfSpeechModel };
