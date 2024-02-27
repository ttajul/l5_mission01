import { Request, Response } from 'express';
import { calculateCarValue } from './carValueController';
import { calculateRiskRating } from './riskRatingController';

export async function calculateQuote(req: Request, res: Response): Promise<void> {
    try {
        // Call the calculateRiskRating function from the riskRatingController
        const riskRatingResponse = await calculateRiskRating(req, res) as Response<any, Record<string, any>>;

        // Call the calculateCarValue function from the carValueController
        const carValueResponse = await calculateCarValue(req, res) as Response<any, Record<string, any>>;

        // Check if risk rating and car value responses are successful
        if (riskRatingResponse && carValueResponse && !riskRatingResponse.locals.error && !carValueResponse.locals.error) {
            // Extract risk rating and car value from the responses
            const riskRating: number = riskRatingResponse.locals.risk_rating;
            const carValue: number = carValueResponse.locals.car_value;

            // Calculate yearly premium
            const yearlyPremium: number = carValue * riskRating / 100;

            // Calculate monthly premium
            const monthlyPremium: number = yearlyPremium / 12;

            // Send the response with the calculated premiums
            res.json({ monthly_premium: monthlyPremium, yearly_premium: yearlyPremium });
        } else {
            // If either risk rating or car value response has an error, return an error response
            res.status(400).json({ error: 'Error in processing risk rating or car value.' });
        }
    } catch (error) {
        // If an error occurs during the process, return a 500 internal server error response
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
}
