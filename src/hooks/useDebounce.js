/** const {useCallback, useRef} = require('react');

const useDebounce = (callback, delay) => {
  const debounceTimer = useRef(null);

  const debounceCallback = useCallback(
    (...arg) => {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        callback(...arg);
      }, delay);
    },
    [callback, delay],
  );
};
export default useDebounce;
 */