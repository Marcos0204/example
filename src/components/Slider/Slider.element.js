import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    //align-items: center;
    position: relative;
    //background-color: coral;
`

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction ==='left' && '10px'};
    right:  ${props => props.direction ==='right' && '10px'};
    cursor: pointer;
    opacity: 0.5;
`
export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Slide = styled.div`
    width: 90%;
    height: 90%;
    /* width: 90%;
    height: 100vh; */
    display: flex;
    align-items: center;
    
`
export const ImgContainer = styled.div`
    height: 100%;
    flex:1;
    
` 

export const Image = styled.img`
    /* height: 100%;
    width: 100%;
    border-radius: .7rem;
    //object-fit: cover; */
    height: 80%;
`
export const InfoContainer = styled.div`
    flex:1;
    padding:50px;
` 
export const Title = styled.h1`
    font-size: 70px;
`
export const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`





