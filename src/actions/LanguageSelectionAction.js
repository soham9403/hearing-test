export const setLanguageList = (data)=>{
    return {
        type:"SET_LANGUAGE_LIST",
        value:data
    }
}

export const selectLanguage = (langName)=>{
    return {
        type:"SELECT_LANGUAGE",
        value:langName
    }
}