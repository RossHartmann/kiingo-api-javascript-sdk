import { utility } from "../../../../utilities/utilities";
import { PartOfSpeechTaggerLabel } from "./PartOfSpeechTaggerLabel";

class PartOfSpeechTaggerToken {
  text: string;
  labels: PartOfSpeechTaggerLabel[];

  constructor(data: any | undefined) {
    var defaultValues = {};
    utility.initializeObjFromData(this, defaultValues, data || {});

    this.labels = utility.select(this.labels || [], (l) => {
      return new PartOfSpeechTaggerLabel(l);
    });
  }
}

export { PartOfSpeechTaggerToken };
