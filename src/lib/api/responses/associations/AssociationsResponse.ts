import _ from 'underscore';
import { utility } from '../../../utilities/utilities';
import { APIResponse } from '../APIResponse';
import { AssociationsItem } from './AssociationsItem';

class AssociationsResponse extends APIResponse {
    queryText: string;
    partOfSpeechCategories: string[];
    items: AssociationsItem[];

    constructor(data) {
        super(data);

        var defaultValues = {
        };
        utility.initializeObjFromData(this, defaultValues, data || {});

        this.items = f.select(this.items || [], (item) => { return new AssociationsItem(item); });
    }


}


export {
    AssociationsResponse
}
