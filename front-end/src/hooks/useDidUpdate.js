const { useRef, useEffect } = require('react');

const useDidUpdate = (func, deps) => {
  const update = useRef(false);
  useEffect(() => {
    if (update.current) func();
    else update.current = true;
  // eslint-disable-next-line
  }, deps);
};

export default useDidUpdate;
