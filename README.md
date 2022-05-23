
[![npm version](https://img.shields.io/npm/v/kiingo-api.svg?style=flat-square)](https://www.npmjs.org/package/kiingo-api)


## Installing

Using npm:

```bash
$ npm install kiingo-api
```

Using bower:

```bash
$ bower install kiingo-api
```

Using yarn:

```bash
$ yarn add kiingo-api
```

## Examples

### Get Associations
```js
const { KiingoAPI, AssociationsRequest, AssociationsResponse } = require('kiingo-api');

const api = new KiingoAPI();

const apiKey = 'MY-API-KEY';
const secretKey = 'MY-SECRET-KEY';
api.initialize(apiKey, secretKey);

const queryText = 'cloudy';
var request = new AssociationsRequest(queryText);

api.getAssociations(request)
    .then((response) => {
        // TODO: Process results
    })
    .catch((ex) => {
        // TODO: Handle Exception
    });
```


### Tag Parts-of-Speech
```js
const { KiingoAPI, PartOfSpeechTaggerRequest, PartOfSpeechModel, PartOfSpeechTaggerResponse } = require('kiingo-api');

const api = new KiingoAPI();

const apiKey = 'MY-API-KEY';
const secretKey = 'MY-SECRET-KEY';
api.initialize(apiKey, secretKey);

const queryText = 'The quick brown fox jumps over the lazy dog.';
const model = PartOfSpeechModel.standard;
var request = new PartOfSpeechTaggerRequest(queryText, model);

api.tagPartsOfSpeech(request)
    .then((response) => {
        // TODO: Process results
    })
    .catch((ex) => {
        // TODO: Handle Exception
    });
```
