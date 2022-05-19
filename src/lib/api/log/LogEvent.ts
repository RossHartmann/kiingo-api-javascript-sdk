import { utility } from '../../utilities/utilities';

enum LogEventType {
    error = 'error',
    message = 'message',
    warning = 'warning',
};

class LogEvent {
    type: LogEventType;
    message: string;

    constructor(data: {}|undefined) {

        var defaultValues = {
        };
        utility.initializeObjFromData(this, defaultValues, data || {});
    }


}


export {
    LogEvent
}
