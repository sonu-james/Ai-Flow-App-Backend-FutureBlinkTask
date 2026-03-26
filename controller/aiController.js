import axios from "axios";

export const askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/auto",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const aiText =
      response.data?.choices?.[0]?.message?.content || "No response";

    res.json({ result: aiText });

  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).json({ error: "AI failed" });
  }
};