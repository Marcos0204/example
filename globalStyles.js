import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
    @media screen and (max-width: 991px){
        padding-left: 30px;
        padding-right: 30px;
    }
` 
export const Button = styled.button`
    border: none;
    border-radius: 4px;
    background : ${({primary}) =>( primary ? '#4B59F7' : '#0467FB') };
    padding: ${({big}) =>( big ? '12px 64px' : '10px 20px' )};
    color : #fff;
    font-size: ${({fontBig})=>( fontBig ? '20px' : '16px' )};

    &:hover{
        transition: all 0.3s ease-out;
        //background: #fff;
        background : ${({primary}) =>( primary ? '#0467FB' : '#4B59F7') };
    }

    @media screen and (max-width: 960px){
        width : 100%;
    }
`

export default GlobalStyles