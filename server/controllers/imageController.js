import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

const apiKeys = [
  process.env.CLIPDROP_API_1,
  process.env.CLIPDROP_API_2,
  process.env.CLIPDROP_API_3,
  process.env.CLIPDROP_API_4,
  process.env.CLIPDROP_API_5,
  process.env.CLIPDROP_API_6,
];
let currentKeyIndex = 0;

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;
    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }
    if (user.creditBalance === 0 || userModel.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }
    const formData = new FormData();
    formData.append("prompt", prompt);
    const currentKey = apiKeys[currentKeyIndex];
    console.log(
      `Using API key index: ${currentKeyIndex}, Key: ${currentKey.slice(
        0,
        5
      )}***`
    );
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": currentKey,
        },
        responseType: "arraybuffer",
      }
    );
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });
    currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};