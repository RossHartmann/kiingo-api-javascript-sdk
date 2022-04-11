import { KiingoAPI, AssociationsRequest, AssociationsResponse } from '../lib';
const api = new KiingoAPI();

const apiKey = 'MY-API-KEY';
const secretKey = 'MY-SECRET-KEY';
api.initialize(apiKey, secretKey);

document.querySelector("body").innerHTML = `<h1>Loading results...</h1>`;


console.log("Retrieving associations...");

const queryText = 'cloudy';
var request = new AssociationsRequest(queryText);
api.getAssociations(request)
    .then((response: AssociationsResponse) => {
        var html = '<h1>"' + response.queryText + '" Associations</h1><div>';
        for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            html += '<div>' + item.text + '(' + item.cosineSimilarity + ')' + '</div>';
        }
        html += '</div>';
        document.querySelector("body").innerHTML = html;
    });

