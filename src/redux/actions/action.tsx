export const ADD = (item:any) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const Delete = (item:any) => {
    return {
        type: "RMV_CART",
        payload: item
    }
}

// remove individual iteam

export const REMOVE = (item:any) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}
