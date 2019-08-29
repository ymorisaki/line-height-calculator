import React, { FC } from 'react'
import InputWrap from './InputWrap'
import styled from 'styled-components'
import ResultArea from './ResultArea';

const Section = styled.div``

const SectionInner = styled.div`
    max-width: 600px;
    margin: auto;
`

const Main: FC = () => (
    <main>
        <Section>
            <SectionInner>
                <InputWrap />
                <ResultArea />
            </SectionInner>
        </Section>
    </main>
)

export default Main