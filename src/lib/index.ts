import "./index.css";
import { KiingoAPI } from "./api/kiingo-api";
import {
  AssociationsItem,
  WordRelationshipType,
  AssociationsPartOfSpeechCategory,
} from "./api/responses/associations/AssociationsItem";
import { AssociationsResponse } from "./api/responses/associations/AssociationsResponse";
import { AssociationsRequest } from "./api/requests/associations/AssociationsRequest";

import { PartOfSpeechTaggerSentence } from "./api/responses/pos-tagger/items/PartOfSpeechTaggerSentence";
import { PartOfSpeechTaggerToken } from "./api/responses/pos-tagger/items/PartOfSpeechTaggerToken";
import { PartOfSpeechTaggerLabel } from "./api/responses/pos-tagger/items/PartOfSpeechTaggerLabel";
import { PartOfSpeechTaggerResponse } from "./api/responses/pos-tagger/PartOfSpeechTaggerResponse";
import {
  PartOfSpeechTaggerRequest,
  PartOfSpeechModel,
} from "./api/requests/pos-tagger/PartOfSpeechTaggerRequest";

export {
  KiingoAPI,
  AssociationsRequest,
  AssociationsResponse,
  AssociationsItem,
  WordRelationshipType,
  AssociationsPartOfSpeechCategory,
  PartOfSpeechTaggerSentence,
  PartOfSpeechTaggerToken,
  PartOfSpeechTaggerLabel,
  PartOfSpeechTaggerRequest,
  PartOfSpeechModel,
  PartOfSpeechTaggerResponse,
};
