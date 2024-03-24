import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";

const DogImage = styled.img`
    width : 300px;
    height: 200px;
`
const fetchData = () => {
    return axios.get('https://dog.ceo/api/breeds/image/random/50');
}

const ReactQuery = () => {
    const { isLoading , isError , error , data} = useQuery('getDog',
    fetchData)
    if(isLoading){
        return( 
        <>
            Loading...
        </>)
    }
    if(isError) {
        return (
            <>
                {error.message}
            </>
        )
    }

    return (
        <div>
            {data && data.data.message.map((img, index) => (
                <DogImage key={index} src={img} />
            ))}
           
        
        </div>
    );
};

export default ReactQuery;