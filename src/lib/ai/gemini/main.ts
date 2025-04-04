import { calorieImagePrompt } from "$lib/prompts/calorieFind";

export const geminiImageGen = async (imageFile: File) => {
  const GEMINI_API_KEY = import.meta.env.VITE_APP_GEMINI_KEY;

  const reader = new FileReader();
  const imageBase64Promise = new Promise<string>((resolve) => {
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      resolve(base64);
    };
  });
  reader.readAsDataURL(imageFile);

  const imageBase64 = await imageBase64Promise;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${import.meta.env.VITE_APP_GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            {text: calorieImagePrompt()},
            {
              inline_data: {
                mime_type: 'image/jpeg',
                data: imageBase64
              }
            }
          ]
        }],
        generationConfig: {responseModalities: ['Text', 'Image']}
      })
    }
  );

  const data = await response.json();

  if (!data?.candidates?.[0]?.content?.parts?.[0]?.text) {
    throw new Error('Invalid response format from Gemini API');
  }

  return data.candidates[0].content.parts[0].text;
};
