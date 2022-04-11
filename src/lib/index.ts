import "./index.css";
import { KiingoAPI } from "./api/kiingo-api";
import {
  AssociationsItem,
  WordRelationshipType,
  PartOfSpeechCategory,
} from "./api/responses/associations/AssociationsItem";
import { AssociationsResponse } from "./api/responses/associations/AssociationsResponse";
import { AssociationsRequest } from "./api/requests/associations/AssociationsRequest";

export {
  KiingoAPI,
  AssociationsRequest,
  AssociationsResponse,
  AssociationsItem,
  WordRelationshipType,
  PartOfSpeechCategory,
};
