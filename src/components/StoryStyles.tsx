import styled from "styled-components";

interface IProps {
    prime: boolean
}

export const Wrapper = styled.div`
    position: relative;
    
    
    .previous {
        left: -2rem
    }
    
    .next {
        right: -2rem
    }
`

export const StoryContainer = styled.div<IProps>`
    position: relative;
    border-radius: .5rem;
    width: ${props => props.prime ? '25vw' : '134px'};
    height: ${props => props.prime ? '90vh' : '239px'}; 
    background: black;
    transition: all .2s ease-in-out;
`

export const Btn = styled.div`
    z-index: 50000;
    position: absolute;
    width: 30px;
    height: 30px;
    background: #444;
    color: white;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 -.5rem;
`

export const IntervalContainer = styled.div`
    max-width: 100%;
    top: 5px;
    display: flex;
    padding: 1rem;
    height: 2px;
    justify-content: space-between;
`

export const PauseBtn = styled.button`
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 6%;
    cursor: pointer;
    z-index: 10000000000000000
`