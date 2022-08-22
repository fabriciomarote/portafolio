import styled from 'styled-components';

export const NavBarContainer = styled.div `
    * {
        background-color: ${({ theme }) => theme.bgc};
    }
    
    body {
        background-color: ${({ theme }) => theme.bgc};
    }
   
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
    .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
      background-color: ${({ theme }) => theme.colorHoverButtons}; 
    }
    .nav > .nav-btn > label > span {
      border-top: 3.5px solid  ${({ theme }) => theme.text}; 
    }
    .nav > .nav-links {
        background-color: ${({ theme }) => theme.bgc};
    }
`;

export const HomeContainer = styled.div`
    .home-container {
        background-color: ${({ theme }) => theme.bgc};
        color: ${({ theme }) => theme.text};
    }
    .box-home {
        color: ${({ theme }) => theme.text};
    }
`;

export const SkillsContainer = styled.div`
    .skills-container {
        background-color: ${({ theme }) => theme.bgc};
        color: ${({ theme }) => theme.text};
    }
    .icon:hover {
        color: ${({ theme }) => theme.colorHoverButtons}; 
    }
`;

export const FooterContainer = styled.div`
    .main-footer {
        color: ${({ theme }) => theme.text};
    }
    .icon-f{
        color: ${({ theme }) => theme.text}; 
    }
    .icon-f:hover {
        color: ${({ theme }) => theme.colorHoverButtons}; 
    }
`;
