import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-5 h-full w-full max-w-[1250px] mx-auto bg-primary-gradient bg-pink-500">
      {children}
    </div>
  );
};

export default Container;
