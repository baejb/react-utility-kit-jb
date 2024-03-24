import {styled} from 'styled-components'
import { Link } from 'react-router-dom';
const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
`
const Child = styled.div`
    width: 30%;
    height: 200px;
    font-size: 30px;
    border: 2px solid #E66666;
    margin: 10px;


`
const HomePage = () => {
    return (
        <Container>
            <Child>
              <Link to='/pagination'> Pagination 구현 </Link>
              
            </Child>
            <Child>
             <Link to='/search'>SearchUI 구현</Link>
            </Child>
            <Child>
             <Link to='/debouncedsearch'>향상된 SearchUI 구현</Link>
            </Child>
            <Child>
                <Link to='/reactquery'>React-query 연습</Link>
            </Child>
        </Container>
    );
};

export default HomePage;