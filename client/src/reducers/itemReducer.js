import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        {
            id: uuid(),
            todo: "Make this app."
        },
        {
            id: uuid(),
            todo: "Find a job."
        },
        {
            id: uuid(),
            todo: "Seek fulfillment."
        },
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}