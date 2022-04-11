import { LogEvent } from "../log/LogEvent";
declare class APIResponse {
    Errors: LogEvent[];
    HasError: boolean;
    NotAuthorized: boolean;
    Forbidden: boolean;
    BadRequest: boolean;
    TooManyRequests: boolean;
    constructor(data: {} | undefined);
    hasErrors(): boolean;
}
export { APIResponse };
