import Prompt from "../model/Prompt.js";

export const savePrompt = async (req, res) => {
  try {
    const { prompt, response } = req.body;

    const data = new Prompt({ prompt, response });
    await data.save();

    res.json({ message: "Saved successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Save failed" });
  }
};

export const getHistory = async (req, res) => {
  try {
    const data = await Prompt.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Fetch failed" });
  }
};
