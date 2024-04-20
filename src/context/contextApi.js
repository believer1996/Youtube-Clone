
import { createContext, useEffect, useState,React } from "react";
import { fetchDataFromApi } from "../utils/api";
 
export const Context=createContext();
export const AppContext=(props)=>{
    const[loading,setLoading]=useState(false);
    const[searchResult,setSearchResult]=useState([]);
    const[selectedCategories,setSelectedCategories]=useState("New");
    const[mobileMenu,setMobileMenu]=useState(false);

    const fetchSelectedCategoryData=(query)=>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            setSearchResult(contents);
            setLoading(false);
        });

    }

    useEffect(()=>{
        fetchSelectedCategoryData(selectedCategories)
    },[selectedCategories])


    return(
        <Context.Provider value={{
            loading,
            setLoading,
            searchResult,
            setSearchResult,
            selectedCategories,
            setSelectedCategories,
            mobileMenu,
            setMobileMenu,
        }}>
            {props.children}
        </Context.Provider>
    )
}