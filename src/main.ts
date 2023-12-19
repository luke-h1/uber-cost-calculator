import csvParser from "csv-parser";
import fs from "fs";
import path from "path";

interface TripData {
  City: string;
  "Product Type": string;
  "Trip or Order Status": string;
  "Request Time": string;
  "Begin Trip Time": string;
  "Begin Trip Lat": string;
  "Begin Trip Lng": string;
  "Begin Trip Address": string;
  "Dropoff Time": string;
  "Dropoff Lat": string;
  "Dropoff Lng": string;
  "Dropoff Address": string;
  "Distance (miles)": string;
  "Fare Amount": string;
  "Fare Currency": string;
}

const logTripCosts = async () => {
  const results: TripData[] = [];
  const __dirname = path.resolve();
  // open file in data folder
  const filePath = path.join(__dirname, "src/data/trips_data.csv");
  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      const allFares: number[] = [0];
      const startYear = results[0]["Request Time"].split(" ")[0].split("-")[0];
      const startMonth = results[0]["Request Time"].split(" ")[0].split("-")[1];

      const endYear = results[results.length - 1]["Request Time"]
        .split(" ")[0]
        .split("-")[0];
      const endMonth = results[results.length - 1]["Request Time"]
        .split(" ")[0]
        .split("-")[1];

      results.forEach((trip) => {
        const fare = parseFloat(trip["Fare Amount"]);
        if (fare) {
          allFares.push(fare);
        }
      });

      const totalCost = allFares.reduce((a, b) => a + b, 0).toFixed(2);
      console.log(
        `You spent £${totalCost} on uber trips between ${endMonth}/${endYear} and ${startMonth}/${startYear}`
      );
    });
};

interface EatsOrderData {
    Territory: string;
    'Restaurant ID': string;
    'Order ID': string;
    'Order Time': string;
    'Order Status': string;
    'Item Name': string;
    Customizations: string;
    'Special Instructions': string;
    'Item Price': string;
    'Order Price': string;
    Currency: string;
}

const logEatsCosts = async () => {
    const results: EatsOrderData[] = [];
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, "src/data/eats_order_details.csv");

    fs.createReadStream(filePath)
    .pipe(csvParser())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
        const startYear = results[0]["Order Time"].split(" ")[0].split("-")[0];
        const startMonth = results[0]["Order Time"].split(" ")[0].split("-")[1];

        const endYear = results[results.length - 1]["Order Time"]
          .split(" ")[0]
          .split("-")[0];

        const endMonth = results[results.length - 1]["Order Time"]
            .split(" ")[0]
            .split("-")[1];

        const allFares: number[] = [0];

        results.forEach((order) => {
            const fare = parseFloat(order["Order Price"]);
            if (fare) {
              allFares.push(fare);
            }
          });

            const totalCost = allFares.reduce((a, b) => a + b, 0).toFixed(2);
            console.log(
                `You spent £${totalCost} on uber eats orders between ${endMonth}/${endYear} and ${startMonth}/${startYear}`
            );


    })

}

logTripCosts();
logEatsCosts();
