import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Carousel = styled.div`
    width: 60%;
    object-fit: cover;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        width: 80%
    }
`

export const Specifications = styled.div`
    margin: 2rem 2rem; 
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 45px;
        margin: 0
    }
`
export const ButtonsContainer = styled.div`
    background-color: #f4f4f4;
    border-radius: 20px;
    padding: 4px;
`

export const Button = styled.button`
    background-color: white;
    border: none;
    border-radius: 20px;
    padding: 8px;
    cursor: pointer;
    border: white 2px solid;

    &:hover {
        border: #f4f4f4 2px solid;
    }
`