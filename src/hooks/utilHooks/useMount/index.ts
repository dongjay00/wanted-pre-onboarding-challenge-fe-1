import { useEffect } from "react";

const useMount = (func: Function) => {
  return useEffect(() => func(), []);
};

export default useMount;
