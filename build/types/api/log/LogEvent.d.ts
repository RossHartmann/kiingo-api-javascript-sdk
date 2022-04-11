declare enum LogEventType {
    Error = "Error",
    Message = "Message",
    Warning = "Warning"
}
declare class LogEvent {
    Type: LogEventType;
    Message: string;
    constructor(data: {} | undefined);
}
export { LogEvent };
