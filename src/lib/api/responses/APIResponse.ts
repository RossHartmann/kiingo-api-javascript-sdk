import { LogEvent } from "../log/LogEvent";
import { utility } from "../../utilities/utilities";

class APIResponse {
  errors: LogEvent[];

  notAuthorized: boolean;
  forbidden: boolean;

  badRequest: boolean;
  tooManyRequests: boolean;

  creditsUsed: number;

  constructor(data: {} | undefined) {
    var defaultValues = {};
    utility.initializeObjFromData(this, defaultValues, data || {});
  }

  hasErrors(): boolean {
    return this.errors && this.errors.length > 0;
  }
}

export { APIResponse };
