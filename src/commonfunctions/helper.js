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
export const getFrequencyName = frquencyVal => {
    switch (frquencyVal) {
      case 250:
        return '250'
      case 500:
        return '500'
      case 125:
        return '125'
      case 1000:
        return '1K'
      case 2000:
        return '2K'
      case 4000:
        return '4k'
      case 6000:
        return '6k'
      case 8000:
        return '8K'
      default:
        return frquencyVal
    }
  }