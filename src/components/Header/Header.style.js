import styled from "styled-components";

export const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
`

export const RightMenu = styled.div`
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`