import React, { FC } from 'react'
import { connect } from 'react-redux'
import { textUpdate, addTextList } from '../actions/action'
import styled from 'styled-components'

const FormWrap = styled.form`
    max-width: 600px;
    margin: 20px auto 0;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 35px;
    padding: 5px 0px 5px 5px;
    font-size: 14px;
`

const Button = styled.button`
    display: block;
    width: 140px
    margin: 15px auto 0;
    padding: 5px 15px;
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    border-radius: 4px;
    background-color: #6eb4c3;
    color: #fff;
`

// interface
interface Form {
    textValue: string,
    textList: {
        text: string,
        isDefault: boolean
    }
    textUpdate: (string) => string,
    addTextList: (object) => object
}

const Form: FC<Form> = (
    {
        textValue,
        textUpdate,
        addTextList
    }
) => {
    return (
        <FormWrap onSubmit={e => {
            e.preventDefault();
            if (!textValue) return
            addTextList({ text: textValue, isDefault: false })
            textUpdate('')
        }}>
            <TextArea
                placeholder="追加するテキストを入力してください"
                onChange={e => textUpdate(e.target.value)}
                value={textValue}
            >
            </TextArea>
            <Button type="submit">テキストを追加</Button>
        </FormWrap>
    )
}

export default connect(
    state => ({ textValue: state.textValue }),
    { textUpdate, addTextList }
)(Form)