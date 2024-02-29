open vscode

git clone https://github.com/ttajul/l5_mission01.git

right click open into integrated terminal of the l5_mission01 folder

npm i

nodemon app.ts

make sure the terminal console.log("server is running at http://localhost:3000")

Open Postman

there are 3 API in the app.ts

1st API http://localhost:3000/calculate_car_value
2nd API http://localhost:3000/calculate_risk_rating
3rd API http://localhost:3000/calculate_quote

copy the API path that you desired and paste on Postman.

Change the GET to POST

Click on Body button, then click on raw button

type the request.body in the raw

for 1st api, type {"model":"model name", "year" : number} and click send. It will spit out car_value
for 2nd api, type {"claim_history":"any claim history"} and click send. It will spit out risk_rating
for 1st api, type {"car_value": number, "risk_rating" : number} and click send. It will spit out monthly_premium and yearly_premium

