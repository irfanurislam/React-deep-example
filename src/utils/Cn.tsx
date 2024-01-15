import { twMerge } from "tailwind-merge";

import { ClassValue, clsx } from "clsx";
const Cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default Cn;
