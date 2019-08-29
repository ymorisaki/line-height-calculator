import React, { FC } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import styled from 'styled-components'
import { fontUpdate, lineUpdate, marginUpdate, textUpdate, addTextList } from '../actions/action';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: 20px auto 0;
`

const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #98a7c8;
`

const LabelText = styled.p`
    margin: 0 0 10px;
    font-size: 20px;
`

// interface
interface InputWrap {
    fontValue: number,
    marginValue: number,
    lineValue: number,
    fontUpdate: (number) => number,
    lineUpdate: (number) => number,
    marginUpdate: (number) => number,
}

const InputWrap: FC<InputWrap> = (
    {
        fontValue,
        marginValue,
        lineValue,
        fontUpdate,
        lineUpdate,
        marginUpdate,
    }
) => (
    <>
        <Wrapper>
            <label>
                <LabelText>FontSize</LabelText>
                <Input type="number" step="1" value={fontValue} onChange={e => fontUpdate(e.target.value)} />
            </label>
            <label>
                <LabelText>LineHeight</LabelText>
                <Input type="number" step="0.1" value={lineValue} onChange={e => lineUpdate(e.target.value)} />
            </label>
            <label>
                <LabelText>MarinTop</LabelText>
                <Input type="number" step="1" value={marginValue} onChange={e => marginUpdate(e.target.value)} />
            </label>
        </Wrapper>
        <Form />
    </>
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
    ),
    { fontUpdate, lineUpdate, marginUpdate, textUpdate, addTextList }
)(InputWrap)