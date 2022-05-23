import { utility } from "../../../utilities/utilities";
import { APIRequest } from "../APIRequest";

enum PartOfSpeechModel {
  unknown = "unknown",
  standard = "standard",
  fast = "fast",
}

class PartOfSpeechTaggerRequest extends APIRequest {
  text: string;
  model: PartOfSpeechModel;

  constructor(text: string, model: PartOfSpeechModel) {
    super(null);

    this.text = text;
    this.model = model;
  }
}

export { PartOfSpeechTaggerRequest, PartOfSpeechModel };
