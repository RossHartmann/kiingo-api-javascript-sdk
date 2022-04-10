class KiingoAPI {
  apiKey: string;
  secretKey: string;

  constructor() {}

  initialize = (apiKey: string, secretKey: string): boolean => {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    return true;
  };
}

export default KiingoAPI;
