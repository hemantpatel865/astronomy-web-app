
import { DATE, GET_ASTRONOMOIES_LIST } from "./types"
import moment from "moment"



const fetchAPICall = async (url) => {
    let response = await fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
            })
            .catch((err) => err.response)
        return response;
}


export const getAstronomiesList = (handleLoader, startDate, endDate) => {
    return async (dispatch, getState) => {
        fetchAPICall(`https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=${startDate}&end_date=${endDate}&thumbs=trues`)
        .then((data) => {
            dispatch({
                type: GET_ASTRONOMOIES_LIST,
                payload: data
            })
            handleLoader()
        })
        .catch(err => console.log(err))
        

    }
}

export const setDate = (date) => {
    return (dispatch) => {
        dispatch({
            type: DATE,
            payload: date
        })
    }
}

