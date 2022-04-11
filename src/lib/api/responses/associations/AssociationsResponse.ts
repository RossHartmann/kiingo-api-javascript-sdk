import { utility } from "../../../utilities/utilities";
import { APIResponse } from "../APIResponse";
import { AssociationsItem } from "./AssociationsItem";

class AssociationsResponse extends APIResponse {
  queryText: string;
  partOfSpeechCategories: string[];
  items: AssociationsItem[];

  constructor(data: any | undefined) {
    super(data);

    var defaultValues = {};
    utility.initializeObjFromData(this, defaultValues, data || {});

    this.items = utility.select(this.items || [], (item) => {
      return new AssociationsItem(item);
    });
  }
}

export { AssociationsResponse };
