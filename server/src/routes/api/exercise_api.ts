import { Router, type Request, type Response } from 'express';
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

const apiKey = process.env.EXERCISE_DB_API_KEY;
const apiHost = "exercisedb.p.rapidapi.com";
const baseURL = "https://exercisedb.p.rapidapi.com";

if (!apiKey) {
    throw new Error("API key is missing.");
}

router.get("/bodyPart/:part", async (req: Request, res: Response) => {
    try {
        const { part } = req.params;
        const response = await axios.get(`${baseURL}/exercises/bodyPart/${part}`, {
            headers: {
                "x-rapidapi-host": apiHost,
                "x-rapidapi-key": apiKey,
            },
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch exercises" });
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${baseURL}/exercises/exercise/${id}`, {
            headers: {
                "x-rapidapi-host": apiHost,
                "x-rapidapi-key": apiKey,
            },
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch exercise details" });
    }
});

export default router;


