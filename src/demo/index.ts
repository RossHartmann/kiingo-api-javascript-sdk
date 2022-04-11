import { KiingoAPI, AssociationsRequest, AssociationsResponse } from '../lib/index';
const api = new KiingoAPI();

const apiKey = 'MY-API-KEY';
const secretKey = 'MY-SECRET-KEY';
api.initialize(apiKey, secretKey);

var body = document.querySelector("body");
body.innerHTML = `<h1>Loading results...</h1>`;


console.log("Retrieving associations...");

const queryText = 'cloudy';
var request = new AssociationsRequest(queryText);
api.getAssociations(request)
    .then((response: AssociationsResponse) => {
        var html = '<h1>"' + response.queryText + '" Associations</h1><div>';
        for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            html += '<div>' +
                item.text +
                (item.relationshipTypes.length > 0 ? ' (' + item.relationshipTypes.join(' | ') + ')' : '') +
                (item.partOfSpeechCategories.length > 0 ? ' (' + item.partOfSpeechCategories.join(' | ') + ')' : '') +
                ' (' + item.cosineSimilarity + ')' +
                '</div>';
        }
        html += '</div>';
        body.innerHTML = html;
    })

    .catch((ex) => {
        // TODO: Handle Exception
        body.innerHTML = '<h1>Error Received. Please check development console.</h1><div>Have both the API Key and Secret Key been properly set?</div>';
        throw ex;
    });

