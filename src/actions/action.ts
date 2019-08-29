export const FONT_VALUE: string = 'FONT_VALUE'
export const LINE_VALUE: string = 'LINE_VALUE'
export const MARGIN_VALUE: string = 'MARGIN_VALUE'
export const TEXT_VALUE: string = 'TEXT_VALUE'
export const TEXT_LIST: string = 'TEXT_LIST'

export const fontUpdate = (size: number) => {
    return {
        type: FONT_VALUE,
        size
    }
}

export const lineUpdate = (size: number) => {
    return {
        type: LINE_VALUE,
        size
    }
}

export const marginUpdate = (size: number) => {
    return {
        type: MARGIN_VALUE,
        size
    }
}

export const textUpdate = (text: string) => {
    return {
        type: TEXT_VALUE,
        text
    }
}

export const addTextList = (textObj: object) => {
    return {
        type: TEXT_LIST,
        textObj
    }
}