import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLanguageList, selectLanguage } from "../actions/LanguageSelectionAction";
import Loader from "../components/Loader";
import db from "../config/firebaseConfig"
import LanguageSelection from "../pages/LanguageSelection";

const LanguageSelectionController = () => {
    const [loading, setLoading] = useState(false)
    const languageList = useSelector(state => { return state.language });
    const dispatch = useDispatch()

    const getLanguageList = async () => {
        setLoading(true)
        const querySnapshot = await getDocs(collection(db, "languages"));
        const arr = []
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        dispatch(setLanguageList(arr))
        setLoading(false)
    }
    useEffect(() => {
        (async () => {
            await getLanguageList()
        })()
    }, [])

    const selectLan = (lang) => {
        dispatch(selectLanguage(lang))
    }
    if (loading) {
        return <Loader />
    } else {
        return (
            <>
                <LanguageSelection
                    selectLan={selectLan}
                    selectedLang={languageList.selected}
                    data={languageList.languageList}

                />
            </>
        )
    }

}
export default LanguageSelectionController