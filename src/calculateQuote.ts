import { Request,  Response } from "express";

export function calculateQuote(req: Request, res: Response) {
    try {
        //check if car value and risk rating are available
        if (carValue === undefined || riskRating === undefined) {
            return res.status(400).json({error: 'car value or risk rating not available'})
        }

        
    }
}