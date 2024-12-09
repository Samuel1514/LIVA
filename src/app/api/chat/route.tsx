import { NextRequest, NextResponse } from 'next/server';
import { ChatOpenAI } from "@langchain/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";

// 創建一個函數來獲取或創建記憶對象
function getMemory() {
  if (!(global as any).memory) {
    (global as any).memory = new BufferMemory({
      returnMessages: true,
      memoryKey: "history"
    });
  }
  return (global as any).memory;
}

export async function POST(request: NextRequest) {
  const { message } = await request.json();

  // 创建ChatOpenAI实例
  const chat = new ChatOpenAI({
    modelName: "nousresearch/hermes-3-llama-3.1-405b:free",
    openAIApiKey: process.env.OPENROUTER_API_KEY,
    configuration: {
      baseURL: "https://openrouter.ai/api/v1",
    },
    maxTokens: 50, // 降低到50个token
    temperature: 0.5, // 进一步降低温度
  });

  // 创建聊天提示模板
  const chatPrompt = ChatPromptTemplate.fromMessages([
    ["system", "short sentance"],
    new MessagesPlaceholder("history"),
    ["human", "{input}"],
  ]);

  // 创建对话链
  const chain = new ConversationChain({
    llm: chat,
    memory: getMemory(),
    prompt: chatPrompt,
  });

  // 运行对话链并获取响应
  const response = await chain.call({ input: message });
  
  return NextResponse.json({ reply: response.response });
}