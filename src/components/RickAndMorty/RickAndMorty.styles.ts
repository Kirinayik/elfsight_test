import styled from "@emotion/styled";
import {Box, GridItem} from "@chakra-ui/react";
import {theme} from '../../assets/styles/theme'

type ItemStatusProps = {
    status: 'Alive' | 'Dead' | 'unknown'
}

export const ItemContainer = styled(GridItem)`
    min-height: 230px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    
    & > img {
        width: 100%;
        height: 100%;
    }
    
    &:hover > div {
        opacity: 1;
        visibility: visible;
        background: rgba(0,0,0, 0.5);
    }
`

export const ItemHover = styled(Box)`
    user-select: none;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font: 400 14px/18px Roboto, sans-serif;
    width: 100%;
    height: 100%;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: transparent;
    visibility: hidden;
    color: white;
    transition: all 0.2s ease-in-out;
`

export const ItemStatus = styled(Box)<ItemStatusProps>`
    position: relative;
    padding-left: 10px;
    
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: ${({status}) => status === 'Alive' ? theme.colors.green["400"] : status === 'Dead' ? theme.colors.red["600"] : theme.colors.gray['400']};
    }
`