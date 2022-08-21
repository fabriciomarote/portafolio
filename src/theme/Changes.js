import styled from 'styled-components';

export const HomeContainer = styled.div`
    .container {
        background-color: ${({ theme }) => theme.bgc};
        color: ${({ theme }) => theme.text};
    }
`;

export const NavBarContainer = styled.div `
    .nav{
        background-color: ${({ theme }) => theme.bgc};
        color: ${({ theme }) => theme.text};
    }
    .nav > .nav-links > a {
        color: ${({ theme }) => theme.text}; 
    }
    .nav > .nav-links > a:hover {
        color: ${({ theme }) => theme.colorHoverButtons}; 
    }
    .btn-btn {
        background-color: ${({ theme }) => theme.bgc};
    }
`;
