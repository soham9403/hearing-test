import { combineReducers } from "@reduxjs/toolkit"
import EarTestReducer from "./EarTestReducer";
import languageSelectorReducer from "./languageSelectorReducer";
import personaldetailsReducer from "./personaldetailsReducer";
import personalIntrestReducer from "./personalIntrestReducer";
const rootReducer = combineReducers({
    personalDetails: personaldetailsReducer,
    personalIntrest: personalIntrestReducer,
    language: languageSelectorReducer,
    earTest: EarTestReducer
})
export default rootReducer;