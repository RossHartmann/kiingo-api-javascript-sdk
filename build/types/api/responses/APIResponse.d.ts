import { LogEvent } from "../log/LogEvent";
declare class APIResponse {
    errors: LogEvent[];
    notAuthorized: boolean;
    forbidden: boolean;
    badRequest: boolean;
    tooManyRequests: boolean;
    creditsUsed: number;
    constructor(data: {} | undefined);
    hasErrors(): boolean;
}
export { APIResponse };
