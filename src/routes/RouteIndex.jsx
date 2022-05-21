import {
    Routes, BrowserRouter,
    Route
} from "react-router-dom";
import NavBar from "../components/NavBar";
import FrequencyTestController from "../controllers/FrequencyTestController";
import KeyPadTestController from "../controllers/KeyPadTestController";
import LanguageSelectionController from "../controllers/LanguageSelectionController";
import PdfCreate from "../controllers/PdfCreate";
import TestingMainController from "../controllers/TestingMainController";
import EarTestFinishAndBoneStart from "../pages/EarTestFinishAndBoneStart";
import HeadphoneOrSpeakerForm from "../pages/HeadphoneOrSpeakerForm";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import PerSonalDetailsForm from "../pages/PerSonalDetailsForm";
import PersonalIntrestForm from "../pages/PersonalIntrestForm";
import Result from "../pages/Result";
import StepViewer from "../pages/StepViewer";
import TestMode from "../pages/TestMode";
export const rootUrl = ''
const RouteIndex = () => {

    return (
        <>
            <BrowserRouter>
                {/* <NavBar> */}
                    <Routes>
                        <Route path={rootUrl + "/"} element={<Index />} />
                        <Route path={rootUrl + "/step"} element={<TestingMainController />}>
                            <Route path={rootUrl + "/step/1"} element={<PerSonalDetailsForm />} />
                            <Route path={rootUrl + "/step/2"} element={<PersonalIntrestForm />} />
                            <Route path={rootUrl + "/step/3"} element={<HeadphoneOrSpeakerForm />} />
                            <Route path={rootUrl + "/step/select-mode"} element={<TestMode />} />
                            <Route path={rootUrl + "/step/4"} element={<StepViewer />} />
                            <Route path={rootUrl + "/step/5"} element={<FrequencyTestController />} />
                            <Route path={rootUrl + "/step/bone/5/"} element={<FrequencyTestController boneTest={true} />} />
                            <Route path={rootUrl + "/step/ear-finish/5/"} element={<EarTestFinishAndBoneStart />} />
                            <Route path={rootUrl + "/step/6"} element={<StepViewer />} />
                            <Route path={rootUrl + "/step/7"} element={<LanguageSelectionController />} />
                            <Route path={rootUrl + "/step/8/:language"} element={<KeyPadTestController />} />
                            <Route path={rootUrl + "/step/result"} element={<PdfCreate />} />
                        </Route>
                        
                        <Route path={rootUrl + "/pdf"} element={<PdfCreate />} />
                        <Route path={"*"} element={<NotFound/>}></Route>

                    </Routes>
                {/* </NavBar> */}
            </BrowserRouter>
        </>
    );
}
export default RouteIndex;