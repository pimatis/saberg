import { dietPrompts } from "$lib/prompts/diet";
const key = import.meta.env.VITE_APP_GROQ_KEY;

export const groq = async (age: number, calories: number, weight: number, activityLevel: string) => {
  const system = dietPrompts();
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: system
        },
        {
          role: "user",
          content: `Ben ${age} yaşında, ${weight} kilo ağırlığında ve ${activityLevel} aktivite seviyesinde biriyim. Günlük ${calories} kalori hedefim var. Bana bu bilgilere göre 1 haftalık detaylı bir diyet listesi hazırlar mısın?`
        }
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
};
