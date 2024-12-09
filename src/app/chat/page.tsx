"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

// 定义聊天消息的类型
type ChatMessage = {
    type: 'user' | 'bot';
    text: string;
};

export default function Home() {
    // 使用ChatMessage类型来定义chatHistory的状态
    const [message, setMessage] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

    const sendMessage = async () => {
        if (message.trim()) {
            // 确保type属性的值是"用户"或"bot"
            const newChatHistory: ChatMessage[] = [...chatHistory, { type: 'user', text: message }];
            setChatHistory(newChatHistory);
            setMessage('');

            try {
                const response = await axios.post('/api/chat', { message });
                setChatHistory([...newChatHistory, { type: 'bot', text: response.data.reply }]);
            } catch (error) {
                console.error("Error: ", error);
            }
        }
    };

    return (
        <div>
            <Head>
                <title>Liva Chat Application</title>
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
            <div className="chat">
                <div className="chat-header">
                    Liva Chat Assistance
                </div>
                <div className="chat-body" id="chat-body">
                    {chatHistory.map((chat, index) => (
                        <div key={index} className={`chat-message ${chat.type}`}>
                            {chat.text}
                        </div>
                    ))}
                </div>
                <div className="chat-footer">
                    <input
                        type="text"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                    />
                    <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                </div>
            </div>
            <style jsx>{`
                body, html {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f1f1f1;
                }
                .chat {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    max-width: 600px;
                    margin: auto;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    background-color: #ffffff;
                }
                .chat-header {
                    padding: 15px;
                    background-color: #007bff;
                    color: white;
                    text-align: center;
                }
                .chat-body {
                    flex-grow: 1;
                    padding: 15px;
                    overflow-y: auto;
                    background-color: #f8f9fa;
                }
                .chat-message {
                    margin: 10px 0;
                    padding: 10px;
                    border-radius: 5px;
                    width: fit-content;
                    max-width: 80%;
                }
                .chat-message.user {
                    background-color: #007bff;
                    color: white;
                    align-self: flex-end;
                }
                .chat-message.bot {
                    background-color: #e2e3e5;
                    color: black;
                    align-self: flex-start;
                }
                .chat-footer {
                    padding: 15px;
                    background-color: #f8f9fa;
                    display: flex;
                    align-items: center;
                    border-top: 1px solid #dee2e6;
                }
                .chat-footer input {
                    flex-grow: 1;
                    margin-right: 10px;
                }
            `}</style>
        </div>
    );
}