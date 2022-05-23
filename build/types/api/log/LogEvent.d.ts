declare enum LogEventType {
    error = "error",
    message = "message",
    warning = "warning"
}
declare class LogEvent {
    type: LogEventType;
    message: string;
    constructor(data: {} | undefined);
}
export { LogEvent };
