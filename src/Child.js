import React,{useState,createContext} from 'react';
import Post from "./Post";

const countContext=createContext(1);
const Child = ({getValue}) => {
    const [count,setCount]=useState(1);
    return (
        <div>
            <countContext.Provider value={{count,val:'salam'}}>
                <Child2 count={count}/>
            </countContext.Provider>

            <button onClick={()=>getValue('okay')}>Child button</button>
        </div>
    );
};

export default Child;

const Child2 = (props) => {
    return (
        <div>
            <h1>child2</h1>
            <Child3 count={props.count}/>
        </div>
    );
};

const Child3 = (props) => {
    return (
        <div>
            <h1>child3 -- {props.count}</h1>
            <Child4/>
        </div>
    );
};

const Child4 = () => {
    return (
        <div>
            <h1>child4</h1>
            <countContext.Consumer>
                { ({count,val})=> <h1>{count} --  {val}</h1>}
            </countContext.Consumer>
        </div>
    );
};