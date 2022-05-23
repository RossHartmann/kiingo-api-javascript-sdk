import { APIResponse } from "../APIResponse";
import { PartOfSpeechTaggerSentence } from "./items/PartOfSpeechTaggerSentence";
declare class PartOfSpeechTaggerResponse extends APIResponse {
    sentences: PartOfSpeechTaggerSentence[];
    constructor(data: any | undefined);
}
export { PartOfSpeechTaggerResponse };
