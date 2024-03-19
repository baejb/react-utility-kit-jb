import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import fetchCountries from "./countries";
import useDebouncedState from "./useDebouncedState";

const DebouncedSearch = () => {
    const [query, setQuery] = useState(""); //검색어
    const debouncedQuery = useDebouncedState(query, 1000);
    const [countries, setCountries] = useState([]); //검색 결과로 나온 국가 목록 
    const [searching , setSearching] = useState(false); // 현재 검색중인지 여부 

    useEffect(()=>{
        setSearching(true);
        fetchCountries(debouncedQuery).then((countries) => {
            setCountries(countries);
            setSearching(false);
        });
    },[debouncedQuery]);

    return (
        <>
            <div>향상된 버전</div>
           <SearchBox value={query} onChange={(e)=> setQuery(e.target.value)}/>
           <SearchResults countries={countries} searching={searching}/>
        </>
    );
};

export default DebouncedSearch;