# SABERG

SABERG is a sophisticated AI-powered nutrition platform that helps users track calories and generate personalized diet plans.

## Features

- **Smart Meal Planning**: Get personalized meal plans based on your dietary preferences and restrictions
- **Calorie Detection**: Instantly detect calories in food through image recognition
- **Progress Analytics**: Track your nutrition journey with detailed insights
- **AI-Powered**: Utilizes advanced AI models (Gemini and GROQ) for accurate analysis

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/pimatis/saberg.git
cd saberg
```
2. Install dependencies:
```bash
npm install
```
3. Copy `.env.example` to `.env` and fill in your API keys:
```bash
cp .env.example .env
```
4. Start the development server:
```bash
npm run dev
```

## Environment Variables

The following environment variables are required:

- `VITE_APP_GROQ_KEY`: Your GROQ API key for diet plan generation
- `VITE_APP_GEMINI_API_KEY`: Your Gemini API key for image analysis

## Contributing

We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project under the MIT License. See the LICENSE file for details.

<div align="center" style="display: flex; align-items: center; justify-content: space-between;">
   <p style="margin-left: 25rem; margin-top: 1.2rem;">Created by <a href="https://github.com/pimatis">Pimatis Labs</a></p>
   <img src="https://www.upload.ee/image/17796243/logo.png" alt="PiContent Logo" width="30" style="opacity: 0.2; position: absolute;">
</div>
