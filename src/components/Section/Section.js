import React from 'react';
import { Wrapper, TextItem, Title, Subtitle, ButtonGroup, LeftButton, RightButton, DownArrow, Buttons } from './Section.styles';

export const Section = ({ title, description, image, leftBtn, rightBtn }) => {
    return (
        <Wrapper image={image}>
            <TextItem>
                <Title>{title}</Title>
                <Subtitle>{description}</Subtitle>
            </TextItem>
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
        </Wrapper>
    )
}
