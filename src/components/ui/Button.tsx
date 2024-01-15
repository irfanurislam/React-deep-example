import { twMerge } from "tailwind-merge";
const Button = ({ className, children }: any) => {
  return (
    <div>
      <button className={twMerge(`bg-red-400 ${className}`)}>{children}</button>
    </div>
  );
};

export default Button;
