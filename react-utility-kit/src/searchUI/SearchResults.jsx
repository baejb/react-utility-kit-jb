//검색 결과 컴포넌트
//검색 결과로 사용자가 입력한 검색어를 포함하고 있는 국가들을 리스트 형태로 보여줌 
const SearchResults = ({countries , searching}) => {
    return (
        <article aria-busy={searching}>
            {searching ? (
                "잠시만 기다려주세요. 국가를 검색하고 있습니다."
            ): (
                <>
                    <header>
                        총 {countries.length}개의 국가가 검색되었습니다.
                    </header>
                    <ul>
                        {countries.map(({code, en, ko})=>(
                            <li key={code}>
                                {ko} ({en})
                            </li>
                        ))}

                    </ul>
                </>

            )}

        </article>
    );
};

export default SearchResults;