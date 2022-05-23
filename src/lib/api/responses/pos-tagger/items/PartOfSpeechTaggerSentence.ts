import { utility } from "../../../../utilities/utilities";
import { PartOfSpeechTaggerToken } from "./PartOfSpeechTaggerToken";

class PartOfSpeechTaggerSentence {
  tokens: PartOfSpeechTaggerToken[];

  constructor(data: any | undefined) {
    var defaultValues = {};
    utility.initializeObjFromData(this, defaultValues, data || {});

    this.tokens = utility.select(this.tokens || [], (t) => {
      return new PartOfSpeechTaggerToken(t);
    });
  }
}

export { PartOfSpeechTaggerSentence };
