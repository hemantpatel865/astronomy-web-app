import { combineReducers } from "redux";
import HomepageReducer from "./homeReducer";


const rootReducers = combineReducers({
    homepage: HomepageReducer

})


export default rootReducers