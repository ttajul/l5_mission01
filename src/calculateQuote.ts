import { Request,  Response } from "express";


export function calculateQuote(req: Request, res: Response) {
    try {
        // extract car_value and  risk_rating from request body
        const {car_value, risk_rating} = req.body;
        
        // check if car_value and risk_rating are valid numbers
        if (!car_value || isNaN(car_value) || !risk_rating || isNaN(risk_rating)) {
            return res.status(400).json({error: 'Invalid input. car value and risk rating must be number'})
        }

        // convert car_value and risk_rating to numbers
        const parsedCarValue: number = Number(car_value);
        const parsedRiskRating: number = Number(risk_rating);

        // calculate yearly premium
        const yearlyPremium: number = parsedCarValue * parsedRiskRating / 100;

        //calculate monthly premium 
        const monthlyPremium: number = parseFloat((yearlyPremium / 12).toFixed(2));


        //send the response with the calculated premiums
        return res.json({monthly_premium: monthlyPremium, yearly_premium: yearlyPremium});


    } catch (error) {
        res.status(500).json({error: 'An error occur when processing the request'})
    }
}