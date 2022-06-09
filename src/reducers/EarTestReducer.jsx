const initialState = {
    defaultDb: -55,
    frequencyList: [250, 500, 1000, 2000, 3000, 5000, 8000],
    snr: 0,
    F1L: -55 + 100,
    F2L: -22 + 100,
    F3L: -55 + 100,
    F4L: -55 + 100,
    F5L: -55 + 100,
    F6L: -55 + 100,
    F7L: -55 + 100,
    F1R: -100 + 100,
    F2R: -100 + 100,
    F3R: -100 + 100,
    F4R: -100 + 100,
    F5R: -100 + 100,
    F6R: -100 + 100,
    F7R: -100 + 100,

    bone_F1L: -70 + 100,
    bone_F2L: -95 + 100,
    bone_F3L: -30 + 100,
    bone_F4L: -70 + 100,
    bone_F5L: -95 + 100,
    bone_F6L: -50 + 100,
    bone_F7L: -95 + 100,
    bone_F1R: -60 + 100,
    bone_F2R: -90 + 100,
    bone_F3R: -90 + 100,
    bone_F4R: -90 + 100,
    bone_F5R: -90 + 100,
    bone_F6R: -90 + 100,
    bone_F7R: -90 + 100,
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