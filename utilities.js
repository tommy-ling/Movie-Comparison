// Debouncing an input using helper function
// Passing a func into debounce and debounce returns another func
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if(timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay)
  }
}
// ----------------------------