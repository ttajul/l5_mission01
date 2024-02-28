import { Request,  Response } from "express";
import { calculateCarValue } from "./carValueController";
import { calculateRiskRating } from "./riskRatingController";

export function calculateQuote(req: Request, res: Response) {
    try {
        // extract car_value and  risk_rating from request body
        const {car_value, risk_rating} = req.body;
        

    } catch (error) {
        res.status(500).json({error: 'An error occur when processing the request'})
    }
}