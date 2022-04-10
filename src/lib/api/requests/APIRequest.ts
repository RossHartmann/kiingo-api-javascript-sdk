import { utility } from '../../utilities/utilities';

class APIRequest {
    constructor(data: any|undefined) {
        var defaultValues = {
        };
        utility.initializeObjFromData(this, defaultValues, data || {});

    }
}


export {
    APIRequest
}
