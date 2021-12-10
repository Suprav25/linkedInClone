import React,{useState,useEffect} from 'react'
import '../Styles/body.css'
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Chat from '../Components/Chat'
import Posts from '../Components/Posts'
import Modal from '../Components/Modal'
import { db } from '../app/firebase';
import * as firebase from 'firebase';

function Body() {
    const [isMore,openHandler]=useState(false)
    const [openModal,openModalHandler]=useState(false)
    const [input,inputHandler]=useState('')
    const [posts,postsHandler]=useState([])
    const [postCount,postCountHandler]=useState({
        profileViewCount:0,
        postViewCount:0
    })
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    useEffect(()=>{
        db.collection("posts").onSnapshot(snapshot =>(
            postsHandler(snapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
        postCountHandler({
            ...postCount,
            profileViewCount:()=>{Math.floor(Math.random(3)*100)},
            postViewCount:()=>{Math.floor(Math.random(4)*200)},
        }   
        )     
        }, [])

    const fileChangeHandler = () =>{
        alert('photo uploaded')
    }
    
    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name:'Suprav Soumyajeet',
            description:'this is a test',
            message:input,
            photoUrl:'',
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    // ()=>{Math.floor(Math.random(3)*100)}
    return (
        <div className="main-body">
            <div className="side-bar">
                <div className="side-bar-profile">
                    <div className="side-bar-top"></div>
                    <div className="profile"><AccountCircleIcon /></div>
                    <div className="profile-data border-bottom">
                        <h5 className="mt-4">SUPRAV SOUMYAJEET</h5>
                        <small>Front end developer at Tata Consultancy Services</small>
                    </div>
                    <div className="p-2 border-bottom">
                        <p><small>Who viewed your profile <span style={{ color: "blue", float: 'right' }}><b>{postCount.profileViewCount}</b></span></small></p>
                        <p><small>Views of your posts <span style={{ color: "blue", float: 'right' }}><b>{postCount.postViewCount}</b></span></small></p>
                    </div>
                    <div className="p-2">
                        <b>My Items</b>
                    </div>
                </div>
                <div className="side-bar-profile recent-tab mt-2 p-3">
                    <div><b>Recent</b></div>
                    <div><small># ReactJS,VueJS</small></div>
                    <div><small># Angular</small></div>
                    <div><small># Web Development</small></div>
                    <div><small># Hybrid App Development</small></div>
                    {(isMore)?<div>
                        <b>Groups</b>
                        <div><small>Angular + React Jobs</small></div>
                        <div><small>Tata Consultancy Services</small></div>
                        <div><small>Accenture</small></div>
                        <div><small>Information technology</small></div>
                    </div>:null}
                    <div className="blue-text" onClick={()=>{openHandler(!isMore)}}>{(isMore)?<span>show less</span>:<span>show more</span>}</div>
                </div>
            </div>
            <div className="post-list">
                <div className="posts">
                    <div className="new-post">
                        <div className="profile"></div>
                        <form className="search" onSubmit={sendPost}>
                            <input placeholder="Start a post" value={input} onChange={(e)=>{inputHandler(e.target.value)}}/>
                        </form>
                    </div>
                    <div className="action-items">
                        <div className="action-list-item" onClick={()=>{openModalHandler(true)}}><PhotoIcon style={{ color: "#03a9f4" }} /><div>Photo</div></div>
                        <div className="action-list-item"><VideoCameraFrontIcon style={{ color: "#12f403" }} /><div>Video</div></div>
                        <div className="action-list-item"><EventIcon style={{ color: "#ff9800" }} /><div>Event</div></div>
                        <div className="action-list-item"><ArticleIcon style={{ color: "#f9a6c2" }} /><div>Write article</div></div>
                    </div>
                </div>
                {posts.map(({id,data})=>(
                    // console.log(data)
                    <div key={id} className="posts"><Posts name={data.name} description={data.description} message={data.message} timestamp={data.timestamp} photo={data.photoUrl}/></div>
                ))}
            </div>
            <div className="widgets">
                <b>LinkedIn News</b>
                <ul className="mt-2">
                    <li>How to have productive conversations</li>
                    <li>Dudes where is my car?</li>
                    <li>A diwali bonanza for job seekers</li>
                    <li>Go ahead and ask for a raise</li>
                    <li>Red flags on a resume</li>
                </ul>
            </div>
            <Modal/>
            <div className="message"><Chat/></div>
            
        </div>
    )
}

export default Body
