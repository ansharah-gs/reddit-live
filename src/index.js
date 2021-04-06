import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
 import './index.css';
 import axios from 'axios';
// import App from './App';
import MediaCard from './MediaCard';
function Reddit(){
  const [posts,setPosts]=useState([]);//because data is in array thats why we made it an array
  const [refresh,setrefresh]=useState(false);
    useEffect(()=>{
      //then method
      // axios.get(`https://www.reddit.com/r/reactjs.json`)
      // .then(res => {
      //   const newPosts = res.data.data.children
      //     .map(obj => obj.data);
      //   setPosts(newPosts);
      // });

      //async method of ECMA6
      (async()=>{
        let response=await axios.get("https://www.reddit.com/r/reactjs.json");
        let children = response.data.data.children;
        let newPosts= children.map((obj)=>{
          return obj.data;
        });
        setPosts(newPosts);
      })()
  }
  , [refresh]);
    //console.log("api data",post);
    return(
      <div>
        <ul>
          {posts.map(post=>(
            <li key={post.id}><MediaCard title={post.title} url={post.url} author={post.author} subscriber={post.subreddit_subscribers}/>
            </li>
          ))}
        </ul>
        <button onClick={()=>setrefresh(true)}>Refresh</button>
      </div>
    );
  }

ReactDOM.render(
  <div>
    <Reddit/>
    <MediaCard />
    </div>,
  document.getElementById('root')
);
