import React from 'react';
import { Wrapper, TextItem, Title, Subtitle, ButtonGroup, LeftButton, RightButton, DownArrow, Buttons } from './Section.styles';
import { Fade } from "react-awesome-reveal";


export const Section = ({ title, description, image, leftBtn, rightBtn }) => {
    return (
        <Wrapper image={image}>
            <Fade>
                <TextItem>
                    <Title>{title}</Title>
                    <Subtitle>{description}</Subtitle>
                </TextItem>
            </Fade>
            <Fade>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtn}
                        </LeftButton>
                        {rightBtn &&
                            <RightButton>
                                {rightBtn}
                            </RightButton>
                        }
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Buttons>
            </Fade>
        </Wrapper>
    )
}
