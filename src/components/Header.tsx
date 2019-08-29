import React, { FC } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    padding: 40px 0;
    background-color: #6eb4c3;
`

const HeaderInner = styled.div`
    max-width: 900px;
    margin: auto;
`

const H1 = styled.h1`
    margin: 0;
    color: #fff;
    text-align: center;
`

const Header: FC = () => (
    <HeaderWrapper>
        <HeaderInner>
            <H1>LineHeightCalclator</H1>
        </HeaderInner>
    </HeaderWrapper>
)

export default Header