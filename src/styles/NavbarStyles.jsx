import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`;

export const Logo = styled.div`
    font-weight: 700;
    font-size: 25px;
    span {
        color: #eee;
    }
`;

export const NavLinks = styled.div`
    
`

export const Link = styled.a`
    text-decoration: none;
    margin-right: 50px;
    color: ${({theme}) => theme.fontColor};
    font-weight: 500;

    &:last-child {
        margin-right: 0;
    }
    &:hover {
        color: #ffc14d;
    }
`;

export const ThemeIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
`;