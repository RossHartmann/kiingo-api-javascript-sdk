import { LogEvent } from '../log/LogEvent';
import { utility } from '../../utilities/utilities';

class APIResponse {
    Errors: LogEvent[];
    HasError: boolean;

    NoSessionFound: boolean;
    InvalidSession: boolean;
    NotAuthorized: boolean;
    Forbidden: boolean;

    BadRequest: boolean;
    TooManyRequests: boolean;

    constructor(data: {}|undefined) {

        var defaultValues = {
        };
        utility.initializeObjFromData(this, defaultValues, data || {});
    }


}


export {
    APIResponse
}
