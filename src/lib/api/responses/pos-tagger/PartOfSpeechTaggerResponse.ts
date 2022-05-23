import { utility } from "../../../utilities/utilities";
import { APIResponse } from "../APIResponse";
import { PartOfSpeechTaggerSentence } from "./items/PartOfSpeechTaggerSentence";

class PartOfSpeechTaggerResponse extends APIResponse {
  sentences: PartOfSpeechTaggerSentence[];

  constructor(data: any | undefined) {
    super(data);

    var defaultValues = {};
    utility.initializeObjFromData(this, defaultValues, data || {});

    this.sentences = utility.select(this.sentences || [], (s) => {
      return new PartOfSpeechTaggerSentence(s);
    });
  }
}

export { PartOfSpeechTaggerResponse };
