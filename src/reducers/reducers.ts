// import
import { combineReducers } from 'redux'
import {
    FONT_VALUE,
    LINE_VALUE,
    MARGIN_VALUE,
    TEXT_VALUE,
    TEXT_LIST
} from '../actions/action'

// interface
interface action {
    type: string,
    size?: number,
    text?: string,
    textObj?: any
}

const fontValue = (
    state: number = 16,
    action: action
) => {
    switch (action.type) {
        case FONT_VALUE:
            return action.size
        default:
            return state
    }
}

const lineValue = (
    state: number = 1.5,
    action: action
) => {
    switch (action.type) {
        case LINE_VALUE:
            return action.size
        default:
            return state
    }
}

const marginValue = (
    state: number = 16,
    action: action
) => {
    switch (action.type) {
        case MARGIN_VALUE:
            return action.size
        default:
            return state
    }
}

const textValue = (
    state: string = '',
    action: action
) => {
    switch (action.type) {
        case TEXT_VALUE:
            return action.text
        default:
            return state
    }
}

let initTextList = [
    {
        text: '',
        isDefault: true
    },
    {
        text: '',
        isDefault: true
    },
    {
        text: '',
        isDefault: true
    }
]

const textList = (
    state: object[] = initTextList,
    action: action
) => {
    switch (action.type) {
        case TEXT_LIST:
            return [
                ...state,
                {
                    text: action.textObj.text,
                    isDefault: false
                }
            ]
        default:
            return state
    }
}

const rootReducers = combineReducers({
    fontValue,
    lineValue,
    marginValue,
    textValue,
    textList
})

export default rootReducers