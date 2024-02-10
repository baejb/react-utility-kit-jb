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
    width: 100%;
    text-align: center;
`
const ImgDiv = styled.div`
    width: 20%;
    height: 100%;
`
const ButtonContainer = styled.div`
    
`
const Pagination = () => {
    const [allData, setAllData] = useState([]);
    const [currenPage, setCurrentPage] = useState(1); //현재 페이지 
    const [itemPerPage, setItemPerPage] = useState(20); // 버튼 20개 
    let totalItems = allData.length ; //전체 데이터 개수 
    const itemCountPerPage = 100; // 페이지 당 보여줄 갯수 
    const totalPages = Math.ceil(totalItems / itemCountPerPage)  // 페이지 수 
  
    const currentPage = 1 ; //현재 페이지 수 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
        // 응답 데이터에 접근하여 처리
        console.log(response.data);
        const sliceData = response.data.slice(1,100);
        setAllData(sliceData);
        
        })
        .catch(error => {
        // 오류 처리
        console.error('에러 발생:', error);
        })

    },[]);
    

    return (
        <Container>
          {allData && allData.map((data) => (
            <ItemDiv key={data.id}>
              <ImgDiv>
                <img src={data.thumbnailUrl} alt={data.title} />
              </ImgDiv>
              <TitleDiv>
                {data.title}
              </TitleDiv>
            </ItemDiv>
          ))}
        </Container>
      );
};

export default Pagination;