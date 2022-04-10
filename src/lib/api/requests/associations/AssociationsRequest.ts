import { utility } from '../../../utilities/utilities';
import { APIRequest } from '../APIRequest';

class AssociationsRequest extends APIRequest {
    text: string;

    constructor(data: any|undefined) {
        super(data);

        var defaultValues = {
        };
        utility.initializeObjFromData(this, defaultValues, data || {});

    }
}


export {
    AssociationsRequest
}
