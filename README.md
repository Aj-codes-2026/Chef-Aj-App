# Chef Aj - AI Recipe Generator 👨‍🍳

An intelligent recipe generator that takes a list of ingredients you have and suggests delicious recipes you could make. Powered by Mistral AI.

**[Live Demo](https://chef-app-app.vercel.app)** | **[GitHub](https://github.com/Aj-codes-2026/Chef-Aj-App)**

---

## ✨ Features

- 🤖 **AI-Powered Recipes** - Uses Mistral AI to generate custom recipes
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- ➕ **Easy Management** - Add/remove ingredients with one click
- 📋 **Copy Recipes** - Copy generated recipes to clipboard instantly
- ⚡ **Fast & Smooth** - Optimized with loading states and error handling

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Styling:** CSS with responsive design
- **AI API:** Mistral AI (Mixtral-8x7B model)
- **Markdown:** react-markdown
- **Deployment:** Vercel

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm
- Mistral API key from [console.mistral.ai](https://console.mistral.ai)

### Installation

```bash
# Clone repository
git clone https://github.com/Aj-codes-2026/Chef-Aj-App.git
cd Chef-Aj-App

# Install dependencies
npm install

# Create environment file
echo "VITE_MISTRAL_API_KEY=your_key_here" > .env.local

# Run locally
npm run dev
