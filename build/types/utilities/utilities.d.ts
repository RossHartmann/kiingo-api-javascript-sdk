declare class Utility {
    initializeObjFromData(obj: any, ...args: {}[]): {};
    extendMissingValues(...args: {}[]): {};
    isUndefined(value: any | undefined): boolean;
    isDefined(value: any | undefined): boolean;
    hasValue(value: any | undefined | null): boolean;
    hasValueAndLength(value: any | undefined | null): boolean;
    isArray(obj: any): boolean;
    getProperties(obj: {}): string[];
    foreach(source: {} | [], action: ((itemValue: any, propertyName: string, index: number) => boolean) | ((itemValue: any, index: number) => boolean)): void;
    select(source: {} | [], selector: (item: any, key: string, index: number) => any): any[];
    constructor();
}
declare var utility: Utility;
export { utility };
