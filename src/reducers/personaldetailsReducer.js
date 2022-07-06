const initialState = {
    name: "",
    email: "sohampatel9403@gmail.com",
    age: "",
    gender: "Male"
}
const personaldetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_PERSONAL_DETAIL_NAME': return { ...state, name: action.value };
        case 'CHANGE_PERSONAL_DETAIL_EMAIL': return { ...state, email: action.value };
        case 'CHANGE_PERSONAL_DETAIL_AGE': return { ...state, age: action.value };
        case 'CHANGE_PERSONAL_DETAIL_GENDER': return { ...state, gender: action.value };

        default: return { ...state }
    }
}
export default personaldetailsReducer