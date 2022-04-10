const API_ROOT = 'https://api.kiingo.com/v1';

class CallOptions {
    headers: {}|null;
    constructor() {

    }
}
enum HTTP_METHOD {
    GET = 'GET',
    POST =  'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
};
var call = function (method: HTTP_METHOD, path: string, params: any, options: CallOptions) {

    var url = API_ROOT + path;
    if (!options) {
        options = new CallOptions();
    }
    if (method !== HTTP_METHOD.GET && !params) {
        params = {};
    }

    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    if (options.headers) {
        headers = Object.assign(headers, options.headers);
    }
    if (method === HTTP_METHOD.GET && params) {
        const queryParams = encodeURIComponent(JSON.stringify(params));
        url += `?${queryParams}`;
        params = null;
    }
    var promise = axios({
        method: method,
        url: url,
        data: params,
        headers: headers,
        json: true
    });

    return promise
        .then((response) => {
            if (response.data && response.data.NotAuthorized) {
                throw new Error();
            }
            return response.data;
        })
        .catch((ex) => {
            if (ex.isAxiosError && (!ex.response || !ex.response.data || !ex.response.data.Errors || ex.response.data.Errors.length <= 0)) {
                
                console.log('Call to API failed.');
                response = { hasError: true };
                return response;
                
            }

            var response = ex.response;
            if (!response) {
                response = { hasError: true };
                comm.showError('Fatal Exception received.');
                console.log(JSON.stringify(ex));
                return response;
            }

            if (response.data && response.data.NotAuthorized) {
            }

            response.data.hasError = true;

            if (response.data && response.data.Errors) {
            }

            if (response.status === 401) {
            }

        });
};

class KiingoAPI {
    apiKey: string;
    secretKey: string;

    constructor() {
    }

    initialize = (apiKey: string, secretKey: string): boolean => {
        this.apiKey = apiKey;
        this.secretKey = secretKey;
        return true;
    };
}

export {
    KiingoAPI
};
