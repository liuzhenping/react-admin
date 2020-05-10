import React from 'react';
import { useImperativeHandle} from 'react';

// props子组件中需要接受ref
const ChildComp = ({props, cref}) => {
    // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
    useImperativeHandle(cref, () => ({
        changeVal: () => {
            alert('oo');
        }
    }));

    return (
        <div>
            Hello
        </div>
    );
};
export default ChildComp


