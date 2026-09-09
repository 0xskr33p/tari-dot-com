'use client';

import styled from 'styled-components';

export const BadgeLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;

    color: #fe5e35;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const BadgeMark = styled.img`
    display: block;
`;
