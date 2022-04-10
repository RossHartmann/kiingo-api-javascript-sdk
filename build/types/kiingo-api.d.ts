declare class KiingoAPI {
    apiKey: string;
    secretKey: string;
    constructor();
    initialize: (apiKey: string, secretKey: string) => boolean;
}
export default KiingoAPI;
