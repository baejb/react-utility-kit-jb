//검색창 컴포넌트
const SearchBox = ({value , onChange}) => { //부모요소에서 상태관리를 위해 prop으로 value와 onChange를 받게 함 
    return (
        <input
        type='search'
        placeholder="국가 이름을 입력하세요"
        value={value}
        onChange={onChange}
        
        />
       
    );
};

export default SearchBox;