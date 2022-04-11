export const changeUseOfHours = (selectedIndex) => {
    return {
        type: "PERSONAL_INTREST_CHANGE_HOURS_OF_USE",
        selectedIndex: selectedIndex
    }
}
export const setPurpose = (index) => {
    return {
        type: "PERSONAL_INTREST_SET_PURPOSE",
        index: index
    }
}
export const setDevice = (deviceType) =>{
    return {
        type: "PERSONAL_INTREST_SET_DEVICE",
        value: deviceType
    }
}