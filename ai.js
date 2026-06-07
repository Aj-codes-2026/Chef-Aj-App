import { Mistral } from "@mistralai/mistralai";
const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
const client = new Mistral({ apiKey });

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const showLoading = () => {
  const loadingEl = document.getElementById("loading");
  loadingEl.style.display = "flex";
};

const hideLoading = () => {
  const loadingEl = document.getElementById("loading");
  loadingEl.style.display = "none";
};

const showError = (message) => {
  const errorEl = document.getElementById("error");
  errorEl.style.display = "block";
  setTimeout(() => {
    errorEl.style.display = "none";
  }, 3000);
};

export async function getRecipeFromMistral(ingredientsArr) {
  showLoading();
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    hideLoading();
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
    hideLoading();
    showError();
  }
}
