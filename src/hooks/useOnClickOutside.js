import { useEffect } from "react";

export default function useOnCLickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      // 안을 클릭했다면 return
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      // 아니면 handler 호출
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    }
  }, [ref, handler]);
}