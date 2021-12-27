import React, {useState, useEffect} from "react";

import { createContext } from "react";

let signedUser = sessionStorage.getItem("member");

export const SignedInUserContext = createContext();

export const SignedInUserContextProvider = ({children}) => {


    const [signedInUser, setSignedInUser] = useState(signedUser? JSON.parse(signedUser) : null );

    return(<SignedInUserContext.Provider value={{signedInUser, setSignedInUser}}>

     {children}


    </SignedInUserContext.Provider>)


}