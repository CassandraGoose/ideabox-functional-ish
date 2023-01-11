export const pipe = (...functions) => {
  return (output) => {
    return functions.reduceRight((result, currentFunction) => {
      result = currentFunction(result);
      return result;
    }, output);
  };
};
