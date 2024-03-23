import {styled} from 'styled-components'
import { Link } from 'react-router-dom';
const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const Child = styled.div`
    width: 30%;
    font-size: 20px;


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
        </Container>
    );
};

export default HomePage;