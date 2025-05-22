
import React, { createContext, useEffect, useState } from "react";


// zeptocontext file 
export const ZeptoContext = createContext();

export const ZeptoContextProvider = ({children})=>{

    const [data, setData] = useState([]);  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <ZeptoContext.Provider value={{data,setData}} >
            {children}
        </ZeptoContext.Provider>
    )
}