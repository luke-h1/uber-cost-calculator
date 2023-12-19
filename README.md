## uber cost calculator

> A simple node script that takes in a csv file from uber's 'download your data' request and calculates how much you've spent over the lifetime of your account 🙈


### Getting started

1. Request + Download your data from uber (https://myprivacy.uber.com/privacy/exploreyourdata/download)
2. Unzip the uber data folder and copy the `trips_data.csv` and `eats_order_details.csv` files into the 'data' folder in 'src'
3. install dependencies with `pnpm i` - install pnpm if you don't have it already (https://pnpm.io/installation)
4. run the script with `pnpm start`
5. Open the console to see the total amount spent on trips and eats 🙈

### Contributing
Feel free to contribute! I've not accounted for all the different types of data that uber can return (i.e. I've not accounted for data that includes if you've worked for Uber). If you'd like to fix up the script for your own use case, please feel free to submit a PR! 🙌

We follow conventional commits (https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. Please ensure that your commit messages follow this format.

## License
MIT
