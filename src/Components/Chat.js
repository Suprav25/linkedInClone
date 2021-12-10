import React,{useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function Chat() {
    const [openChat,changeChatStatus] = useState(false)
    const openMessenger = () =>{
        changeChatStatus(!openChat)
    }
    return (
        <div className="chat">
            <div className="messaging" onClick={openMessenger}><b>Messaging{(openChat)?<ArrowDropDownIcon/>:<ArrowDropUpIcon/>}</b></div>
            {(openChat)?<div className="messenger">
                hello from messenger
            </div>:null}
        </div>
    )
}

export default Chat
