import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import { API_GET_DATA } from "../global/constants";
import axios from "axios";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        // 獲取DB.JSON的資料。
        axios.get(API_GET_DATA).then((res) => {
            const data = res.data;
            console.log(data);
            const acton = initListAction(data);
            dispatch(acton);
        });
    }
}