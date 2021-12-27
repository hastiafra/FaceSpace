import React, { useState, useEffect } from "react";

import { createContext } from "react";




export const CurrentMembersContext = createContext();

export const CurrentMembersProvider= ({children})=>{

    const [currentMembers, setCurrentMembers] = useState([]);

    const [status, setStatus] = useState("loading");


    const getMembers = () =>{
    
            // console.log("hello");
        
            fetch("/api/users")
              .then((res) => {
                return res.json();
            
              })
        
              .then((data) => {
                console.log(data)
                setStatus("idle");
                setCurrentMembers(data.data);
                
              });
            //   console.log(currentMember)
              
          
        
    }

    useEffect(() => {
        getMembers();
      }, []);

return (<CurrentMembersContext.Provider value={{currentMembers, status }}>
    {children}
</CurrentMembersContext.Provider>)
}

