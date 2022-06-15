const initialState = {
    defaultDb: -55,
    frequencyList: [1000, 500, 250, 125, 1000, 2000, 4000, 6000, 8000],
    snr: 0,
    F1000L: -80 + 100,
    F500L: -80 + 100,
    F250L: -80 + 100,
    F125L: -80 + 100,
    F2000L: -80 + 100,
    F4000L: -80 + 100,
    F6000L: -80 + 100,
    F8000L: -80 + 100,

    F1000R: -55 + 100,
    F500R: -55 + 100,
    F250R: -55 + 100,
    F125R: -55 + 100,
    F2000R: -55 + 100,
    F4000R: -55 + 100,
    F6000R: -55 + 100,
    F8000R: -55 + 100,

    bone_F1000L: -85 + 100,
    bone_F500L: -85 + 100,
    bone_F250L: -85 + 100,
    bone_F125L: -85 + 100,
    bone_F2000L: -85 + 100,
    bone_F4000L: -85 + 100,
    bone_F6000L: -85 + 100,
    bone_F8000L: -85 + 100,

    bone_F1000R: -15 + 100,
    bone_F500R: -85 + 100,
    bone_F250R: -85 + 100,
    bone_F125R: -85 + 100,
    bone_F2000R: -85 + 100,
    bone_F4000R: -95 + 100,
    bone_F6000R: -85 + 100,
    bone_F8000R: -85 + 100,
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