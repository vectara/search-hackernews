import { Config } from "./contexts/ConfigurationContext";

export const configuration: Config = {
  corpusId: process.env.REACT_APP_CORPUS_ID,
  customerId: process.env.REACT_APP_CUSTOMER_ID,
  appTitle: process.env.REACT_APP_APP_TITLE,
  apiKey: process.env.REACT_APP_API_KEY,
  endpoint: process.env.REACT_APP_ENDPOINT,
  questions: process.env.REACT_APP_QUESTION?.split(',') || []
};
