import {
    GET_ORDER_FAIL,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    MY_ORDER_LIST_FAIL,
    MY_ORDER_LIST_REQUEST,
    MY_ORDER_LIST_RESET,
    MY_ORDER_LIST_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DELEVER_FAIL,
    ORDER_DELEVER_REQUEST,
    ORDER_DELEVER_RESET,
    ORDER_DELEVER_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_RESET,
    ORDER_PAY_SUCCESS
} from "../constants/orderConstants";

export const orderCreateReducer = (state = { order: { orderItems: [], shippingAddress: {} } }, action) => {
    switch (action?.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true }
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, order: action?.payload }
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action?.payload }
        default:
            return state;
    }
}

export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action?.type) {
        case ORDER_DETAILS_REQUEST:
            return { loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action?.payload }
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action?.payload }

        default:
            return state;
    }
}

export const orderPayReducer = (state = {}, action) => {
    switch (action?.type) {
        case ORDER_PAY_REQUEST:
            return { loading: true };
        case ORDER_PAY_SUCCESS:
            return { loading: false, success: true };
        case ORDER_PAY_FAIL:
            return { loading: false, error: action?.payload }
        case ORDER_PAY_RESET:
            return {}

        default:
            return state;
    }
}

export const myOrderListReducer = (state = { orders: [] }, action) => {
    switch (action?.type) {
        case MY_ORDER_LIST_REQUEST:
            return { loading: true };
        case MY_ORDER_LIST_SUCCESS:
            return { loading: false, orders: action?.payload };
        case MY_ORDER_LIST_FAIL:
            return { loading: false, error: action?.payload }
        case MY_ORDER_LIST_RESET:
            return { orders: [] }
        default:
            return state;
    }
}

export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action?.type) {
        case GET_ORDER_REQUEST:
            return { loading: true };
        case GET_ORDER_SUCCESS:
            return { loading: false, orders: action?.payload };
        case GET_ORDER_FAIL:
            return { loading: false, error: action?.payload }
        default:
            return state;
    }
}

export const orderDeleverReducer = (state = {}, action) => {
    switch (action?.type) {
        case ORDER_DELEVER_REQUEST:
            return { loading: true };
        case ORDER_DELEVER_SUCCESS:
            return { loading: false, success: true };
        case ORDER_DELEVER_FAIL:
            return { loading: false, error: action?.payload }
        case ORDER_DELEVER_RESET:
            return {}

        default:
            return state;
    }
}