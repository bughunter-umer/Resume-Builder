import OpenAI from 'openai';
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export async function generateResumeText(prompt) {
const response = await client.chat.completions.create({
model: 'gpt-3.5-turbo',
messages: [
{ role: 'system', content: 'You are an expert resume writer. Produce a clean professional resume as plain text or markdown.' },
{ role: 'user', content: prompt }
],
max_tokens: 1000
});


// safety: check response shape
const text = response?.choices?.[0]?.message?.content ?? '';
return text;
}