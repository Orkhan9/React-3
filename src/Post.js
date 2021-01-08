import React, {useEffect, useState} from 'react';

const Post = () => {
const [posts,setPosts]=useState([]);
    useEffect(function (){
        console.log('effect')
       fetch('https://jsonplaceholder.typicode.com/posts')
           .then(response=>{
               if(!response.ok){
                   console.log('error var')
                   // throw new Error('http error with ' + response.status)
               }else{
                   return response.json()
               }
           })
           .then(data=>{
               setPosts(data);
           })
           .catch(error=>console.log(error))
    },[])
    return (
        <div>
            {posts.map(post=>
                <p key={post.id}>{post.body}</p>
            )}
        </div>
    );
};

export default Post;