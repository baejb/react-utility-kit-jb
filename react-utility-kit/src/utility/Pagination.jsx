import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {styled} from 'styled-components';

const Container = styled.div`
    width: 1200px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;

`
const ItemDiv = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
 
`
const TitleDiv = styled.div`
    width: 150px;
    text-align: center;
`
const ImgDiv = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const PrevNextBtn = styled.button`
  
`

const Pagination = () => {
    const [allData, setAllData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); //현재 페이지 
    const itemPerPage = 25; // 한 페이지 당  아이템 수 
    const totalPages = Math.ceil(allData.length / itemPerPage) // 전체 데이터에서 필요한 페이지 수 
    const maxPageButtons = 10;
    // const PageButtons = Math.ceil(currentPage / maxPageButtons) // 현재 페이지 번호 / 한 화면에 보여질 버튼 개수  
    
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
        // 응답 데이터에 접근하여 처리
        console.log(response.data);
        setAllData(response.data);
        
        })
        .catch(error => {
        // 오류 처리
        console.error('에러 발생:', error);
        })

    },[]);
      
    const renderPageNumbers = () => { // 페이지네이션 버튼 구현 함수 
      const pageNumbers = [];
      const startPage = ((Math.ceil(currentPage / maxPageButtons) - 1) * maxPageButtons) + 1; 
      const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);
     // 1~10 / 11~20  ... 버튼은 총 10개씩 존재함 
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    };
    
    const handleClickPrevBtn = () => {
      setCurrentPage(prevPage => Math.max(prevPage - maxPageButtons, 1)); //10개 전으로 이동 
    };
    
    const handleClickNextBtn = () => {
      setCurrentPage(prevPage => Math.min(prevPage + maxPageButtons, totalPages)); // 10개 후로 이동 
    };

    const startIndex = (currentPage - 1 ) * itemPerPage; //화면에 보여줄 데이터의 시작 
    const endIndex = currentPage * itemPerPage ; // 화면에 보여줄 데이터의 끝 
    const currentData = allData.slice(startIndex, endIndex); // slice로 데이터 배열을 복사해 저장 


    return (
        <Container>
          {currentData.map((data) => (
            <ItemDiv key={data.id}>
              <ImgDiv>
                <img src={data.thumbnailUrl} alt={data.title} />
              </ImgDiv>
              <TitleDiv>
                {data.title}
              </TitleDiv>
            </ItemDiv>
          ))}
          <ButtonContainer>
              <PrevNextBtn onClick={handleClickPrevBtn} disabled={currentPage === 1}>
                  이전
              </PrevNextBtn>
              <div>
              {renderPageNumbers().map(page => (
                    <button key={page} onClick={() => setCurrentPage(page)}>
                        {page}
                    </button>
                ))}
              </div>
              <PrevNextBtn onClick={handleClickNextBtn} disabled={currentPage === totalPages}>
                  다음
              </PrevNextBtn>
          </ButtonContainer>
        </Container>
      );
};

export default Pagination;