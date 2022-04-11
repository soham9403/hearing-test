export const addZeroPrefix = (val) => {
    if (parseInt(val) < 10) {
        return "0" + val.toString()
    }
    return val
}
export const getTodaysDate = () => {
    const date = new Date()
    const day = addZeroPrefix(date.getDate());
    const month = addZeroPrefix(date.getMonth() + 1);
    const year = date.getFullYear()
    return day + "/" + month + "/" + year
}