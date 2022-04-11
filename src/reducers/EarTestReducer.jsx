const initialState = {
    defaultDb: -55,
    frequencyList: [250, 500, 1000, 2000, 3000, 5000, 8000],
    snr: 0,
    F1L: -55 + 100,
    F2L: -45 + 100,
    F3L: -65 + 100,
    F4L: -55 + 100,
    F5L: -55 + 100,
    F6L: -55 + 100,
    F7L: -55 + 100,
    F1R: -55 + 100,
    F2R: -55 + 100,
    F3R: -55 + 100,
    F4R: -55 + 100,
    F5R: -55 + 100,
    F6R: -55 + 100,
    F7R: -55 + 100,
}
const EarTestReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'SET_LANGUAGE_LIST': return { ...state, languageList: action.value };
        // case 'SELECT_LANGUAGE': return { ...state, selected: action.value };

        case "SET_SNR": return { ...state, snr: action.value }
        case "SET_FREQUENCY_VAL": return { ...state, ...action.data }
        default: return { ...state }
    }
}
export default EarTestReducer