export const Input = styled.input`
    border-radius: 15px;
    width: 485px;
    font-weight: 500;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 10px;
    ${(props: any) => ({ ...props })};
    ${mq['md']} {
        width: ${(props: any) => props.m_width || '98%'};
    }
`;

import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

// Define the styled textarea
export const TextArea = styled.textarea`
    border-radius: 15px;
    width: 485px;
    font-weight: 500;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 10px;
    ${(props: any) => ({ ...props })};
    ${mq['md']} {
        width: ${(props: any) => props.m_width || '98%'};
    }
`;
