import { utility } from "../utilities/utilities";
import { AssociationsRequest } from "./requests/associations/AssociationsRequest";
import { APIResponse } from "./responses/APIResponse";
import { AssociationsResponse } from "./responses/associations/AssociationsResponse";
import axios from "axios";
import { PartOfSpeechTaggerRequest } from "./requests/pos-tagger/PartOfSpeechTaggerRequest";
import { PartOfSpeechTaggerResponse } from "./responses/pos-tagger/PartOfSpeechTaggerResponse";

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
          parsed.badRequest ||
          parsed.forbidden ||
          parsed.notAuthorized ||
          parsed.tooManyRequests ||
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
          !ex.response.data.errors ||
          ex.response.data.errors.length <= 0)
      ) {
        console.log("Network Error when calling the Kiingo API.");
        console.log(ex);
        throw ex;
      }

      var response = ex.response;
      if (!response) {
        console.log(
          "Network error when calling the Kiingo API. No response received."
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

  tagPartsOfSpeech(
    request: PartOfSpeechTaggerRequest
  ): Promise<PartOfSpeechTaggerResponse> {
    const route = "/pos-tagger";
    var callOptions = getCallOptions(this);
    return call(HTTP_METHOD.POST, route, request, callOptions).then(
      (response: any) => {
        return new PartOfSpeechTaggerResponse(response);
      }
    );
  }
}

export { KiingoAPI };
