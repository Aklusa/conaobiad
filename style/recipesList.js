import styled from 'styled-components'

// #20E046;
// rgb(241, 248, 142)

export const Container = styled.div`
    border: ${ props => props.border === false ? "none" : "2px solid #000"};
    text-decoration: none;
    width: 90%;
    margin: 0;
    margin-left: 5%;
    
`

export const RecipeContainer = styled.div`
    display: flex;
    border: 1px solid #000;
    margin: 2%;
        &:hover {
            background-color: #D6F78B;
        }
    
`
export const Recipe = styled.li`
    list-style-type: none;
    

`
export const RecipeList = styled.ul`
    padding: 0;
`

export const RecipeListImg = styled.img`
    width:10%;
    height:10%;
    border: 1px solid #17B336;
    margin: 1% 2% 1% 2%;
`

export const RecipeListTextContainer = styled.div`
    width:80%;
    color: #17B336;
    text-align: left;  
    margin-left: 2%;
`
export const Name = styled.p`
    margin: 0;
    margin-top: 1%;
`
export const Description = styled.p`
    text-align: justify;  
`

export const Hr = styled.hr`
    margin:1% 0 1% 0;
`