import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);

const Select = ({ children }: any) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <SelectContext.Provider value={{ test: "ami jafor" }}>
      <select onChange={() => setSelectedOption(e.target.value)}>
        {children}
      </select>
      ;
    </SelectContext.Provider>
  );
};
const SelectOption = ({ value, children }: any) => {
  const { selectedOption }: any = useContext(SelectContext);

  const isActive = selectedOption === value;
  return (
    <option
      className={`${isActive ? "bg-purple-500" : "bg-slate-400"}`}
      value={value}
    >
      {children}
    </option>
  );
};

Select.SelectOption = SelectOption;
export default Select;
