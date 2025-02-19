import { Router, type Request, type Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

const apiKey = process.env.NUTRITION_DB_API_KEY;
const baseURL = "https://api.spoonacular.com";

if (!apiKey) {
    throw new Error("API error.");
}

// Get nutrition details of a food item by its ID
router.get("/food/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${baseURL}/food/menuItems/${id}`, {
            params: { apiKey },
        });

        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch food details" });
    }
});

// Search for food items based on a query
router.get("/search/:query", async (req: Request, res: Response) => {
    try {
        const { query } = req.params;
        const response = await axios.get(`${baseURL}/food/menuItems/search`, {
            params: { query, apiKey },
        });

        res.json(response.data);
    } catch (err:any) {
        console.error(err);
        res.status(500).json({ error: "Failed to search for food items" });
    }
});

// Get a breakdown of a food ingredient by ID
router.get("/ingredient/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${baseURL}/food/ingredients/${id}/information`, {
            params: { apiKey },
        });

        res.json(response.data);
    } catch (err:any) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch ingredient details" });
    }
});

export default router;
