import { PartOfSpeechTaggerLabel } from "./PartOfSpeechTaggerLabel";
declare class PartOfSpeechTaggerToken {
    text: string;
    labels: PartOfSpeechTaggerLabel[];
    constructor(data: any | undefined);
}
export { PartOfSpeechTaggerToken };
