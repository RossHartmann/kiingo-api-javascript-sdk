import { utility } from "../../../utilities/utilities";

enum WordRelationshipType {
    Related = 'Related',
    Synonym = 'Synonym',
    Antonym = 'Antonym',
    Context = 'Context',
    NearAntonym = 'NearAntonym',
    Hypernym = 'Hypernym',
    Hyponym = 'Hyponym',
    Holonym = 'Holonym',
    Meronym = 'Meronym'
};

enum PartOfSpeechCategory {
    Noun = 'Noun',
    Verb = 'Verb',
    Adjective = 'Adjective',
    Adverb = 'Adverb',
    Interjection = 'Interjection',
    Article = 'Article',
    Plural = 'Plural',
    Conjunction = 'Conjunction',
    Preposition = 'Preposition',
    Unknown = 'Unknown',
    Phrase = 'Phrase',
    Abbreviation = 'Abbreviation'
};

class AssociationsItem {
    text: string;
    cosineSimilarity: number;
    partOfSpeechCategories: PartOfSpeechCategory[];
    relationshipTypes: WordRelationshipType[];

    constructor(data: any|undefined) {

        var defaultValues = {
        };
        utility.initializeObjFromData(this, defaultValues, data || {});

    }


}


export {
    WordRelationshipType,
    PartOfSpeechCategory,
    AssociationsItem
}
