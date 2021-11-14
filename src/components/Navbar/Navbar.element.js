import styled from 'styled-components'

export const Container = styled.div`
    height: 60px;
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
//////LEFT
export const Left= styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`
    export const Lenguage = styled.span`
        font-size:14px;
        cursor: pointer;
    `
    export const SearchContainer = styled.div`
        border: 0.5px solid lightgray;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px 6px;
        box-shadow: 0 1px 3px rgb(23 23 23 / 24%);
        border-radius: 24px;
    `
    export const Input = styled.input`
        border: none;
    `

///////CENTER
export  const Center= styled.div`
    flex: 1;
    text-align: center
`
export const Logo = styled.h1`
    font-weight: bold;
`


/////RIGHT  
export const Right= styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
export const MunuIten = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`