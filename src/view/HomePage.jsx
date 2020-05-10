import {useTranslation} from "react-i18next";
import React from "react";
import { Button } from 'antd';
import io from 'socket.io-client';

const socket = io('ws://localhost:3001')

const HomePage = () => {
    socket.on('news', (data)=>{
        console.log(data);
    });
    const handleMsg = () => {
        //emit是发送事件
        socket.emit('sendmsg', 'hello justin...')
        socket.on('recvmsg', (data)=>{
           console.log(data);
        });
    }
    const {t} = useTranslation();
    return (
        <div>
            <h2>{t('welcome')}</h2>
            <Button onClick={handleMsg}>Test</Button>
        </div>
    );
};

export default HomePage
