import styled from "styled-components";
import { FiMessageSquare } from 'react-icons/fi';

export const Container = styled.div`
    background-color: var(--color-link);
    padding: 0 16px;

    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;    

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 2; // para o header ficar por cima de todos

    @media (min-width: 1180px) {
        display: none;
    }
`;


export const ProfileCircle = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid var(--color-icons);
    flex-shrink: 0;
`;

export const Search = styled.input`
    margin-left: 16px;
    width: 100%;

    background-color: var(--color-input);
    color: var(--color-black);
    font-size: 14px;
    padding: 7.4px 8px;
    border: none;
    border-radius: 2px;
    outline: 0;
    
    &:focus {
        background-color: var(--color-white);
    }
`;

export const MessageIcon = styled(FiMessageSquare)`
    width: 24px;
    height: 24px;
    color: var(--color-white);
    border-radius: 4px;
    flex-shrink: 0;

    margin-left: 17px;
    
`;
