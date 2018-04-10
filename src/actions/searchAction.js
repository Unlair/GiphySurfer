import {
    SET_TERM,
    DATA_RESET,
    DATA_UPDATE,
    OFFSET_RESET,
    OFFSET_INC
} from '../constants/searchConst'

export function setTerm(searchTerm) {
    return {
        type: SET_TERM,
        payload: searchTerm
    }
}

export function dataReset() {
    return {
        type: DATA_RESET,
        payload: []
    }
}

export function dataUpdate(data) {
    return {
        type: DATA_UPDATE,
        payload: data
    }
}

export function offsetReset() {
    return {
        type: OFFSET_RESET,
        payload: 0
    }
}

export function offsetInc(offset) {
    return {
        type: OFFSET_INC,
        payload: offset
    }
}
