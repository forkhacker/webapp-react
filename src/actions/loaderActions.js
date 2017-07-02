import * as types from './actionTypes';

export function show() {
    return {
        type : types.SHOW_LOADER,
        loader: true
    };
}

export function hide() {
    return {
        type : types.HIDE_LOADER,
        loader: false
    };
}
