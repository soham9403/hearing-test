export const setSnr = (val) => {
    return {
        type: "SET_SNR",
        value: val
    }
}
export const setFrequencyVal = (data) => {
    return {
        type: "SET_FREQUENCY_VAL",
        data:data
    }
}