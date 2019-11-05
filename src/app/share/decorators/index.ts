export function Emoji() {
  return (target: object, key: string) => {
    let val = target[key];
    const getter = () => {
      return val;
    };
    const setter = (value: string) => {
      console.log(value);

      val = `😄${value}😄`;
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

export function Confirmable(message) {
  return (target, key, descriptor: PropertyDescriptor) => {
    console.log(descriptor);

    const original = descriptor.value;
    console.log(original);

    descriptor.value = function(...args) {
      const allow = window.confirm(message);
      console.log(allow);

      if (allow) {
        const result = original.apply(this, args);
        console.log(result);

        return result;
      }
      return null;
    };
    console.log(descriptor, descriptor.value);

    return descriptor;
  };
}
