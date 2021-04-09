import { disconnect } from 'node:process'
import React from 'react'
import c from './Message.module.css'

type TypeMessage = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: TypeMessage) {
    return (
        <div className={c.message}>
            <div className={c.avatarImage}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={c.triangle}>    
            </div>
            <div className={c.messageContent}>
                <h4>{props.name}</h4>
                <p>{props.message}</p>
                <p className={c.time}>{props.time}</p>
            </div>

        </div>
    )
}

export default Message
