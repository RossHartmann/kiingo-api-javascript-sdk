import { utility } from "../utilities/utilities";
import { AssociationsRequest } from "./requests/associations/AssociationsRequest";
import { APIResponse } from "./responses/APIResponse";
import { AssociationsResponse } from "./responses/associations/AssociationsResponse";
import axios from "axios";

const API_ROOT = "https://api.kiingo.com/v1";

class CallOptions {
  headers: {} | null;
  constructor() {}
}
enum HTTP_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}
var call = function (
  method: HTTP_METHOD,
  path: string,
  params: any,
  options: CallOptions
) {
  var url = API_ROOT + path;
  if (!options) {
    options = new CallOptions();
  }
  if (method !== HTTP_METHOD.GET && !params) {
    params = {};
  }

  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (options.headers) {
    headers = Object.assign(headers, options.headers);
  }
  if (method === HTTP_METHOD.GET && params) {
    const queryParams = encodeURIComponent(JSON.stringify(params));
    url += `?${queryParams}`;
    params = null;
  }
  var config = {
    method: method,
    url: url,
    data: params,
    headers: headers,
    json: true,
  };
  var promise = axios(config);

  return promise
    .then((response) => {
      var data = response.data;
      if (data) {
        var parsed = new APIResponse(data);
        if (
          parsed.BadRequest ||
          parsed.Forbidden ||
          parsed.NotAuthorized ||
          parsed.TooManyRequests ||
          parsed.hasErrors()
        ) {
          // Treat this as an exception
          throw { response: response };
        }

        return parsed;
      }
      return data;
    })
    .catch((ex) => {
      if (
        ex.isAxiosError &&
        (!ex.response ||
          !ex.response.data ||
          !ex.response.data.Errors ||
          ex.response.data.Errors.length <= 0)
      ) {
        console.log("Network Error when calling Kiingo API.");
        console.log(ex);
        throw ex;
      }

      var response = ex.response;
      if (!response) {
        console.log(
          "Network error when calling Kiingo API. No response received."
        );
        console.log(ex);
        throw ex;
      }

      throw ex;
    });
};

var getCallOptions = function (api: KiingoAPI): CallOptions {
  if (!utility.hasValueAndLength(api.apiKey)) {
    throw new Error(
      "Kiingo API must first be initialized with a valid API key."
    );
  }
  if (!utility.hasValueAndLength(api.secretKey)) {
    throw new Error(
      "Kiingo API must first be initialized with a valid secret key."
    );
  }
  var options = new CallOptions();
  options.headers = {
    "x-api-key": api.apiKey,
    "x-secret-key": api.secretKey,
  };
  return options;
};

class KiingoAPI {
  apiKey: string;
  secretKey: string;

  constructor() {}

  initialize = (apiKey: string, secretKey: string): boolean => {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    return true;
  };

  getAssociations(request: AssociationsRequest): Promise<AssociationsResponse> {
    const route = "/associations";
    var callOptions = getCallOptions(this);
    return call(HTTP_METHOD.GET, route, request, callOptions).then(
      (response: any) => {
        return new AssociationsResponse(response);
      }
    );
  }
}

export { KiingoAPI };
