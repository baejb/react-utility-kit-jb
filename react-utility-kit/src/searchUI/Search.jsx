import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import fetchCountries from "./countries";

const Search = () => {
    const [query, setQuery] = useState(""); //검색어 
    const [countries, setCountries] = useState([]); //검색 결과로 나온 국가 목록 
    const [searching , setSearching] = useState(false); // 현재 검색중인지 여부 

    useEffect(()=>{
        setSearching(true);
        fetchCountries(query).then((countries) => {
            setCountries(countries);
            setSearching(false);
        });
    },[query]);

    return (
        <>
        <div>일반 버전</div>
           <SearchBox value={query} onChange={(e)=> setQuery(e.target.value)}/>
           <SearchResults countries={countries} searching={searching}/>
        </>
    );
};

export default Search;