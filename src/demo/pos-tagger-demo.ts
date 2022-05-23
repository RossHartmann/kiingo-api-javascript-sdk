import { KiingoAPI, PartOfSpeechTaggerRequest, PartOfSpeechModel, PartOfSpeechTaggerResponse } from '../lib/index';
const api = new KiingoAPI();

const apiKey = 'MY-API-KEY';
const secretKey = 'MY-SECRET-KEY';
api.initialize(apiKey, secretKey);

var body = document.querySelector("body");
body.innerHTML = `<h1>Loading results...</h1>`;


console.log("Retrieving parts of speech...");

const queryText = 'The quick brown fox jumps over the lazy dog.';
const model = PartOfSpeechModel.standard;
var request = new PartOfSpeechTaggerRequest(queryText, model);
api.tagPartsOfSpeech(request)
    .then((response: PartOfSpeechTaggerResponse) => {
        var html = '<h1>Part-of-Speech Tags</h1><div>';
        for (var i = 0; i < response.sentences.length; i++) {
            var sentence = response.sentences[i];
            for (var j = 0; j < sentence.tokens.length; j++) {
                var token = sentence.tokens[j];

                html += '<div>' +
                    token.text +
                    (token.labels.length > 0 ? ' (' + token.labels.map((label) => { return label.label + ' - ' + label.score; }).join(' | ') + ')' : '') +
                    '</div>';
            }
        }
        html += '</div>';
        body.innerHTML = html;
    })

    .catch((ex) => {
        // TODO: Handle Exception
        body.innerHTML = '<h1>Error Received. Please check development console.</h1><div>Have both the API Key and Secret Key been properly set?</div>';
        throw ex;
    });

