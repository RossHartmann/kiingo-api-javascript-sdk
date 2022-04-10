import { utility } from '../../utilities/utilities';

enum LogEventType {
    Error = 'Error',
    Message = 'Message',
    Warning = 'Warning',
};

class LogEvent {
    Type: LogEventType;
    Message: string;

    constructor(data: {}|undefined) {

        var defaultValues = {
        };
        utility.initializeObjFromData(this, defaultValues, data || {});
    }


}


export {
    LogEvent
}
