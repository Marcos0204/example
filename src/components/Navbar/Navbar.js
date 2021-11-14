import React from 'react'
import {Badge} from '@material-ui/core';
import {Search, ShoppingCartOutlined} from '@material-ui/icons';

import { Container,
    Wrapper,
    Left,
    Center,
    Right,
    Lenguage, 
    SearchContainer,
    Input,
    Logo,
    MunuIten
    } from './Navbar.element'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Lenguage>EN</Lenguage>
                    <SearchContainer>
                        <Input/>
                        <Search style={{ colo:'gray', fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Marcos</Logo> </Center>
                <Right>
                    <MunuIten>register</MunuIten>
                    <MunuIten>sign in</MunuIten>
                    <MunuIten>
                    <Badge badgeContent={13} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                    </MunuIten>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
