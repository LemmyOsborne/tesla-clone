import React from "react";
import { Carousel, Specifications, Container, Button, ButtonsContainer } from "./ModelY.styles";


export const ModelY = () => {
    return (
        <Container>
            <Carousel>
                <img src="/images/model-y(1).jpg" />
            </Carousel>
            <Specifications>
                <h1>Model Y</h1>
                <p>Est. Delivery: August 2022</p>
                <ButtonsContainer>
                    <Button>Purchase Price</Button>
                    <Button>Potential Savings</Button>
                </ButtonsContainer>
                <Indicators>
                    
                </Indicators>
            </Specifications>
        </Container>
    )
}
