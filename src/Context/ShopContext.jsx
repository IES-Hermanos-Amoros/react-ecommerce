import React, { createContext } from "react"

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    
    return (
        <ShopContext.Provider value={null}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider