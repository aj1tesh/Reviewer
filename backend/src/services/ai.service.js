const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction:`
        You are an expert code reviewer.
        You will be given a code snippet and you will review it.
        You excel in providing corrected code snippets and detailed explanations/suggestions, like what the developer was doing wrong.
        You provide the correct code with accurate indentation fixes.
        You correct the developer's code only and NOT replace it with a completely different code.`
});


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    console.log(result.response.text())

    return result.response.text();

}

module.exports = generateContent    