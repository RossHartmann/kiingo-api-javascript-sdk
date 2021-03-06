class Utility {
  initializeObjFromData(obj: any, ...args: {}[]) {
    // First collapse the args so that their data does overlap, even if not missing
    // We want to do this in case the root object in args is an object of default values
    var collapsed = Object.assign({}, ...args);
    return this.extendMissingValues(obj, collapsed);
  }

  /*
   * Extends only those values that are null or undefined
   * All given args must be objects
   *
   * Usage: destination = utility.extendMissingValues(destination, source);
   * */
  extendMissingValues(...args: {}[]) {
    var self = this;
    if (args.length <= 1) {
      return args[0];
    }

    var doCopy = function (target: any, source: any) {
      self.foreach(source, (value: any, key: string, index: number) => {
        // Only copy to target if target doesn't already have a value for this property/key
        if (!self.hasValue(target[key])) {
          target[key] = value;
        }
        return true; // Keep going
      });
    };

    // Start at n, copy to n-1
    for (var i = args.length - 1; i > 0; i--) {
      var source = args[i];
      var target = args[i - 1];
      doCopy(target, source);
    }

    return args[0];
  }

  isUndefined(value: any | undefined): boolean {
    return typeof value === "undefined";
  }
  isDefined(value: any | undefined): boolean {
    return !this.isUndefined(value);
  }

  hasValue(value: any | undefined | null): boolean {
    return value !== null && this.isDefined(value);
  }
  hasValueAndLength(value: any | undefined | null): boolean {
    return (
      this.hasValue(value) && this.isDefined(value.length) && value.length > 0
    );
  }

  isArray(obj: any): boolean {
    return Object.prototype.toString.call(obj) === "[object Array]";
  }

  getProperties(obj: {}): string[] {
    return Object.keys(obj);
  }

  foreach(
    source: {} | [],
    action:
      | ((itemValue: any, propertyName: string, index: number) => boolean)
      | ((itemValue: any, index: number) => boolean)
  ) {
    if (!this.isArray(source)) {
      var objAction = action as (
        itemValue: any,
        propertyName: string,
        index: number
      ) => boolean;
      var properties = this.getProperties(source);
      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        if (false === objAction(source[property], property, i)) {
          return;
        }
      }
    } else {
      var arrayAction = action as (itemValue: any, index: number) => boolean;
      var array = source as [];
      for (var i = 0; i < array.length; i++) {
        if (false === arrayAction(source[i], i)) {
          return;
        }
      }
    }
  }

  /*
   * selector: (item, index) => {return value;}
   * */
  select(
    source: {} | [],
    selector: (item: any, key: string, index: number) => any
  ): any[] {
    var result: any[] = [];
    var i = -1;
    this.foreach(source, (value: any, key: string, i: number) => {
      i++;
      result.push(selector ? selector(value, key, i) : value);
      return true;
    });
    return result;
  }

  constructor() {}
}

var utility = new Utility();
export { utility };
