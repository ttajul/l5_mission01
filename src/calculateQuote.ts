import { Request,  Response } from "express";
import { calculateCarValue } from "./carValueController";
import { calculateRiskRating } from "./riskRatingController";

export function calculateQuote(req: Request, res: Response) {
    try {
        // extract car_value and  risk_rating from request body
        const {car_value, risk_rating} = req.body;
        
        // check if car_value and risk_rating are valid numbers
        if (!car_value || isNaN(car_value) || !risk_rating || isNaN(risk_rating)) {
            return res.status(400).json({error: 'Invalid input. car value and risk rating must be number'})
        }

    } catch (error) {
        res.status(500).json({error: 'An error occur when processing the request'})
    }
}