import React from 'react';
import ChildComp from "./ChildComp";

import {useRef} from 'react';
const Parent = () => {
    const childRef = useRef();
    const updateChildState = () => {
        childRef.current.changeVal();
    }
    return (
        <>
            <ChildComp cref={childRef} />
            <button onClick={updateChildState}>触发子组件方法</button>
        </>
    )
}


export default Parent
