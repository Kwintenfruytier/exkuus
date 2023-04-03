import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { mq } from 'styles/media-query';

export const Button = styled.button<{
    shadow?: string;
    backgroundColor?: string;
    width?: string;
    t_width?: string;
    m_width?: string;
}>`
    border-radius: 12px;
    width: ${props => props.width || '500px'};
    box-shadow: ${props => props.shadow || '2px 2px 4px'};
    border: none;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 12px;
    padding-right: 12px;
    font-weight: 500;
    font-display: swap;
    margin-top: 37px;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: ${props => props.backgroundColor};

    ${(props: any) => ({ ...props })};
    ${props => css`
        ${mq['md']} {
            width: ${props.t_width || '100%'};
        }
        ${mq['sm']} {
            width: ${props.m_width || '100%'};
        }
    `}
`;
