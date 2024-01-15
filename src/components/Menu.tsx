import { createContext } from "react";

const MenuContext = createContext(null);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MenuList = ({children}) =>{
    return(

        <MenuContext.Provider value='ami'>

        </MenuContext.Provider>
    )
}

export const MenuItem = () =>{
    return <div>Menu item</div>
}