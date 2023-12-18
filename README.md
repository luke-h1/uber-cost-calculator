
## uber cost calculator

> A simple deno script that takes in a csv file from uber's 'download your data' request and calculates how much you've spent over the lifetime of your account 🙈


### Getting started

1. Request + Download your data from uber (https://myprivacy.uber.com/privacy/exploreyourdata/download)
2. Move the csv into the root of the project
3. Install deno (https://deno.com/)
4. Run `deno run --allow-read --allow-write index.ts`
5. Open the console to see the total amount spent 🙈

### Contributing
Feel free to contribute! I've not accounted for all the different types of data that uber can return (i.e. I've not accounted for data that includes if you've worked for Uber). If you'd like to fix up the script for your own use case, please feel free to submit a PR! 🙌

We follow conventional commits (https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. Please ensure that your commit messages follow this format.

## License
MIT
