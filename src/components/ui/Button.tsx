import { twMerge } from "tailwind-merge";
const Button = ({ className }: any) => {
  return (
    <div>
      <button className={twMerge(`bg-red-400 ${className}`)}>trigger</button>
    </div>
  );
};

export default Button;
