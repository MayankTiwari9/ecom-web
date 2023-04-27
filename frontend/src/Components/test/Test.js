import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {getProduct} from "../../Redux/actions/testAction";

const Test = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

  return (
    <div>Test</div>
  )
}

export default Test;