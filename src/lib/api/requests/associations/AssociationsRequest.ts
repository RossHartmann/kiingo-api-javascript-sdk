import { utility } from "../../../utilities/utilities";
import { APIRequest } from "../APIRequest";

class AssociationsRequest extends APIRequest {
  text: string;

  constructor(text: string) {
    super(null);

    this.text = text;
  }
}

export { AssociationsRequest };
