declare enum WordRelationshipType {
    Related = "Related",
    Synonym = "Synonym",
    Antonym = "Antonym",
    Context = "Context",
    Hypernym = "Hypernym",
    Hyponym = "Hyponym",
    Holonym = "Holonym",
    Meronym = "Meronym"
}
declare enum PartOfSpeechCategory {
    Noun = "Noun",
    Verb = "Verb",
    Adjective = "Adjective",
    Adverb = "Adverb",
    Interjection = "Interjection",
    Article = "Article",
    Plural = "Plural",
    Conjunction = "Conjunction",
    Preposition = "Preposition",
    Unknown = "Unknown",
    Phrase = "Phrase",
    Abbreviation = "Abbreviation"
}
declare class AssociationsItem {
    text: string;
    cosineSimilarity: number;
    partOfSpeechCategories: PartOfSpeechCategory[];
    relationshipTypes: WordRelationshipType[];
    constructor(data: any | undefined);
}
export { WordRelationshipType, PartOfSpeechCategory, AssociationsItem };
