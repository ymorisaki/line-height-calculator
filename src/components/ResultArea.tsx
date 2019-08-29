import React, { FC } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// styledComponents
const ResultWrap = styled.div`
    margin-top: 15px
`

const Text = styled.p`
    margin: 0;
    background-color: #eee;
`

// interface
interface ResultArea {
    fontValue: number,
    lineValue: number,
    marginValue: number,
    textValue: string,
    textList: {
        text?: string,
        index?: number,
        isDefault?: boolean,
        map: any
    },
}

const ResultArea: FC<ResultArea> = (
    {
        fontValue,
        lineValue,
        marginValue,
        textValue,
        textList
    }
) => (
    <ResultWrap>
        {textList.map((text, index: number) => (
            <Text
                key={index}
                style={
                    {
                        fontSize: `${fontValue}px`,
                        marginTop: `${marginValue}px`,
                        lineHeight: `${lineValue}`,
                    }
                }
            >
                {
                text.isDefault ?
                `FontSizeは${fontValue}px、lineHeightは${lineValue}、marginTopは${marginValue}pxです。`:
                `${text.text}`
                }
            </Text>
        ))}
    </ResultWrap>
)


export default connect(
    state => (
        {
            fontValue: state.fontValue,
            lineValue: state.lineValue,
            marginValue: state.marginValue,
            textValue: state.textValue,
            textList: state.textList
        }
    )
)(ResultArea)