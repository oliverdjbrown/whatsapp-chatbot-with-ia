import { Request, Response } from "express";
import { httpResponses } from "../enums/http_responses";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});


const postPrompt = async (req: Request, res: Response): Promise<Response> => {
  
  try {
    const { prompt } = req.body;
    const response = await openai.chat.completions.create({
      model: "text-davinci-003",
      messages: [{role: 'user', content: prompt}],
      max_tokens: 4000,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });

    return res.status(200).json({
      success: true,
      data: response.choices,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : httpResponses.status400
    });
  }
};

export { postPrompt };