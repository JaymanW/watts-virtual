import styled from 'styled-components'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);;
    height: max-content;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    top: 13vh;
    right: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '13vh' : '-13%')};

    @media screen and (min-width: 768px) {
        width: 30%;
    }
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;
    font-family: "Roboto", sans-serif;

    &:hover {
        color: #27EE8E;
        transition: 0.2s ease-in-out;
    }

    &:nth-child(n+2) {
        margin-top: 1.5rem;
        /* border-top: 1px dotted #bdbdbd; */
        /* padding-top: 0.75rem; */
    }

    /* & .contact-btn {
        color: #fff;
        background: $primary;
        padding: 0.5rem 1rem;
        transition: all 0.2s ease-in-out;
    } */

    @media screen and (min-width: 480px) {
        font-size: 1.3rem;
    }
`