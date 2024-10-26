# Vectara sample code for a Semantic Search UI

This app provides Semantic Search for [Hacker News](https://hackernews.com), powered by [Vectara](https://vectara.com/). It was generated using the [Create-UI code-generator](https://github.com/vectara/create-ui), and updated to the requirements of good search for Hacker News. 

## Dependencies

Install [npm and node](https://nodejs.org/en/download).

Install dependencies with:

```
npm install
```

## Configuration

Rename `.env.example` to `.env` or create a new `.env` and replace the configurations.

```
REACT_APP_CORPUS_ID=<Vectara corpus ID>
REACT_APP_CUSTOMER_ID=<Vectara customer ID>
REACT_APP_APP_TITLE=<App title - e.g Search Hackernews >
REACT_APP_API_KEY=<Vectara API KEY>
REACT_APP_ENDPOINT=api.vectara.io
REACT_APP_QUESTION=<Questions , separated - e.g What is Gemini-Flash?,When will GPT-5 be released?>
```

## Running locally

Run the code locally and serve it at `http://localhost:3000/` with:

```
npm run start
```

If you make changes to the source code, the app will automatically reload with your changes.

## Running it with Docker
To run it wit docker execute the following command.
```
bash ./docker/run.sh
```

## Set up your Hacker News data in Vectara

To set up this app to pull data from your Vectara corpus:

1. [Create a Vectara account](https://console.vectara.com/signup).
2. [Create a corpus and add data to it](https://docs.vectara.com/docs/console-ui/creating-a-corpus).
3. [Create a **QueryService** API key](https://docs.vectara.com/docs/console-ui/manage-api-access#create-an-api-key).

**Pro-tip:** After you create an API key, navigate to your corpus and click on the "Access control" tab. Find your API key on the bottom and select the "Copy all" option to copy your customer ID, corpus ID, and API key. This gives you all the data you need to configure a Create-UI app.

Make sure your `CUSTOMER_ID` and `CORPUS_ID` (in your .env file) point to a Vectara corpus where you have crawled Hacker News stories.
You can use the [vectara-ingest hackernews crawler](https://github.com/vectara/vectara-ingest/blob/main/crawlers/hackernews_crawler.py) for that purpose.

You can see a live demo [here](https://hackernews.demo.vectara.com/)

# Author

👤 **Vectara**

- Website: https://vectara.com
- Twitter: [@vectara](https://twitter.com/vectara)
- GitHub: [@vectara](https://github.com/vectara)
- LinkedIn: [@vectara](https://www.linkedin.com/company/vectara/)
- Discord: [@vectara](https://discord.gg/GFb8gMz6UH)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br/>
Feel free to check [issues page](https://github.com/vectara/search-hackernews/issues). You can also take a look at the [contributing guide](https://github.com/vectara/vectara-answer/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2024 [Vectara](https://github.com/vectara).<br />
This project is [Apache 2.0](https://github.com/vectara/search-hackernews/blob/main/LICENSE) licensed.
