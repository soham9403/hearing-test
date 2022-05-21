const initialstate = {
    hours_of_use: ["0-1 hrs", "1-2 hrs", "2-3 hrs" , "3-4 hrs" , "4-5 hrs" , "5+ hrs"],
    selected_hours_of_use: '0-1 hrs',
    purpose_list: [
        {
            label: "Work from home",
            value: false
        },
        {
            label: "Binge watch shows",
            value: false
        },

        {
            label: "Listening Music",
            value: false
        },
        {
            label: "Study from home",
            value: false
        },
        {
            label: "Constant Calling",
            value: false
        },
        {
            label: "Podcasts",
            value: false
        },
        {
            label: " Social Media",
            value: false
        },
        {
            label: "Webinars",
            value: false
        },
    ],
    device_selected: "",
    test_mode:'ear',

}
const personalIntrestReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "PERSONAL_INTREST_CHANGE_HOURS_OF_USE": return { ...state, selected_hours_of_use: action.selectedIndex };
        case "PERSONAL_INTREST_SET_PURPOSE":
            const currentState = { ...state }
            const list = currentState.purpose_list;
            const ele = list[action.index]
            ele.value = !ele.value
            list[action.index] = ele
            return { ...state, purpose_list: list };
        case "PERSONAL_INTREST_SET_DEVICE": return { ...state, device_selected: action.value };
        case "PERSONAL_INTREST_SET_TEST_MODE": return { ...state, test_mode : action.value };

        default: return { ...state }
    }
}
export default personalIntrestReducer