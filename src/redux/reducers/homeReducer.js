import { DATE, GET_ASTRONOMOIES_LIST } from "../actions/types"

const intialState = {
    astronomiesList: [],
    date: "2022-10-07"
}

const HomepageReducer = (state = intialState, action) => {
    switch(action.type){
        case GET_ASTRONOMOIES_LIST:
            return {
                ...state,
                astronomiesList: state.astronomiesList.concat(action.payload)
            }
        case DATE:
            return {
                ...state,
                date: action.payload
            }
        default:
            return state
    }
}

export default HomepageReducer