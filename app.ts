import express from 'express';
import bodyParser from 'body-parser';
import { calculateCarValue } from './src/carValueController';
import { calculateRiskRating } from './src/riskRatingController';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/calculate_car_value', calculateCarValue);
app.post('/calculate_risk_rating', calculateRiskRating);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

