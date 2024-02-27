import { Request, Response } from 'express';

export function calculateRiskRating(req: Request, res: Response) {
    const {claim_history} = req.body;

    //check if claim_history is provided in the request body
    if (!claim_history || typeof claim_history !== 'string') {
        return res.status(400).json({error: 'Invalid input. Claim history must be provided as string'
    });
    }
}

