import {ActionTypes} from "../constants/userConstant";
import axios from "axios";

export const register = (userData) => async (dispatch) => {

    const config = {data: { "Content-Type": "multipart/form-data" }}
    const {data} = await axios.post(
        `/api/v1/register`,
        userData,
        config
    );

    dispatch({
        type: ActionTypes.REGISTER_USER,
        payload: data
    })
}