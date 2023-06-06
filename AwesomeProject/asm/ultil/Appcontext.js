import { createContext, useState } from "react";


export const AppContext = createContext();

export const AppContextProvider =(props) =>{
    const {children} = props;
    const [islogin,setislogin] = useState(false);
    const [inforuser,setinforuser] = useState({});
    return (
        <AppContext.Provider value={{islogin,setislogin,inforuser,setinforuser}}>
            {children}
        </AppContext.Provider>
    )
}