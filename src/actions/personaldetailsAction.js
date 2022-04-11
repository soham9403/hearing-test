export const changeName = (val) => {
    return {
        type: "CHANGE_PERSONAL_DETAIL_NAME",
        value: val
    }
}
export const changeEmail = (val) => {
    return {
        type: "CHANGE_PERSONAL_DETAIL_EMAIL",
        value: val
    }
}
export const changeAge = (val) => {
    return {
        type: "CHANGE_PERSONAL_DETAIL_AGE",
        value: val
    }
}
export const changeGender = (val) => {
    return {
        type: "CHANGE_PERSONAL_DETAIL_GENDER",
        value: val
    }
}