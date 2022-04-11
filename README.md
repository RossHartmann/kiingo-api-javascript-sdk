
[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/kiingo-api)


## Installing

Using npm:

```bash
$ npm install axios
```

Using bower:

```bash
$ bower install axios
```

Using yarn:

```bash
$ yarn add axios
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