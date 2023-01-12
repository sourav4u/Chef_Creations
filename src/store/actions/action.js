export const addData = () => {

    return {
        type:"START"
    }

}

export const addDataFromFireStore = (payload) => {

    return {
        type:"ADD_DATA_FROM_FIRESTORE",
        payload:payload
    }

}