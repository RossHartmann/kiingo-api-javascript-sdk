import { LogEvent } from "../log/LogEvent";
import { utility } from "../../utilities/utilities";

class APIResponse {
  Errors: LogEvent[];
  HasError: boolean;

  NotAuthorized: boolean;
  Forbidden: boolean;

  BadRequest: boolean;
  TooManyRequests: boolean;

  constructor(data: {} | undefined) {
    var defaultValues = {};
    utility.initializeObjFromData(this, defaultValues, data || {});
  }

  hasErrors(): boolean {
    return this.Errors && this.Errors.length > 0;
  }
}

export { APIResponse };
