import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons' 
import { Container,
    Arrow,
    Wrapper,
    Slide,
    ImgContainer,
    InfoContainer,
    Image,
    Title,
    Description,
    Button
    }  from './Slider.element'

const Slider = () => {
    return (
        <Container>
            <Arrow 
                direction='left'
            >
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src='https://cdn.pixabay.com/photo/2021/11/05/12/27/woman-6771288_960_720.jpg'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER ALL</Title>
                        <Description>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
                        </Description>
                        <Button>Show Now!</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow 
                direction='right'
                >
                <ArrowRightOutlined />
            </Arrow>    
        </Container>
    )
}

export default Slider
