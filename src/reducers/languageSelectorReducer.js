const initialState = {
    languageList:[],
    selected:"",
}
const languageSelectorReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'SET_LANGUAGE_LIST': return { ...state, languageList: action.value };
        case 'SELECT_LANGUAGE': return { ...state, selected: action.value };
        

        default: return { ...state }
    }
}
export default languageSelectorReducer