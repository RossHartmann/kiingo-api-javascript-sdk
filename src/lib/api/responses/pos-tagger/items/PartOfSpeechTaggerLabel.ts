import { utility } from "../../../../utilities/utilities";

class PartOfSpeechTaggerLabel {
  label: string;
  score: number;

  constructor(data: any | undefined) {
    var defaultValues = {};
    utility.initializeObjFromData(this, defaultValues, data || {});
  }
}

export { PartOfSpeechTaggerLabel };
