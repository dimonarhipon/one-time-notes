// import { useState, useEffect } from 'react';


// const useDebounce = (callback: () => void, delay: number) => {
//   const [debouncedCallback, setDebouncedCallback] = useState(callback);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedCallback(callback);
//     }, delay);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [callback, delay]);

//   return callback;
// };

// export default useDebounce;
