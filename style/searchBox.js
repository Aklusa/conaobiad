import styled from 'styled-components'



export const MyForm = styled.form`
    position: relative;
    z-index:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
`
export const FilteredIngredients = styled.ul`
    // margin-left: 20%;
    // margin-top: 12%;
    max-height: 100px;
    overflow-y: auto;
    width: 60%;
    padding: 0;
    border: ${ props => props.FIBorder === false ? "none" : "1px solid #000"};
    // position: absolute;
    position: relative;
    z-index: 2;
    top: -10;
    background-color: #fff;
    top: 30;
    left:0;
`

export const FilteredIngredient = styled.li`
    list-style-type: none;
    margin-left: 0;  
    z-index: 50;
    padding: 0.5%;

    &:hover{
        background-color: #FDFFCC;
        cursor: pointer;
    }
`
export const IngredientsList = styled.ul`
    margin-top: 2%;
    padding: 0.5%;
    // background-color: rgb(241, 248, 152);
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-height: 50%;
    overflow-y: auto;
    border: ${ props => props.ILBorder === false ? "none" : "1px solid #000"};
    
`
// ${  props => props.border === false ? "none" : "2px solid #000"}}
export const Ingredient = styled.li`
    margin: 0.5%;
    display: inline-block;
    padding: 1%; 
    display: flex;
    background-color: #D6F78B;
    border-radius: 3px;
`
export const SearchBar = styled.input`
    font-family: FontAwesome;
    width: 60%;
    height: 12%;
    font-size: 1.2em;
    padding: 0.5%;
    border: 1px solid #000;
    
    &::placeholder{
        
    }
`
export const FindButton = styled.div`
    margin-top: 2%;
    width: 12%;
    height: 12%;
    border-radius: 15px;
    background-color: #06C716;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    font-size: 1.1em;
    padding: 3px;

            &:hover {
            background-color: #09DB1A ;
            cursor: pointer;
        }
`

export const Delete = styled.button`
        color: #DDD;
        height: 20px;
        margin-top: 2px;
        font-size: 0.8em;
        margin-left: 4px;
        padding: 0 6px;    
        border: none;
        border-radius: 4px;
        background-image: linear-gradient(to top, #FF0026, #FF0000);
        &:active{
            background-image: linear-gradient(to top,#FF0000, #FF0026 );
        }
        &:hover{
            
        }
        
`