import React,{useState,useEffect} from 'react';
import Child from "./Child";
import Post from "./Post";

const App = () => {
    const [message,setMessage]=useState('Hello');
    const [count,setCount]=useState(0);
    const getValue=()=>{}

    useEffect(function (){
        console.log('effect')
        let d=document.getElementById("div_1");
        console.log(d)
    },[message])
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={()=>setMessage('Message is changed')}>change name</button>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count-1)}}>Minus</button>
            <button onClick={()=>{setCount(count+1)}}>Plus</button>
            <div id="div_1"></div>
            <Child getValue={getValue}/>
            {/*<Post/>*/}
        </div>
    );
};

export default App;