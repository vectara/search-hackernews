import { createContext, useContext, ReactNode } from "react";
import { SlingshotRerankerId } from "../view/types";
import { configuration } from "../configuration";

export interface Config {
  // Search
  endpoint: string | undefined;
  corpusId: string | undefined;
  customerId: string | undefined;
  apiKey: string | undefined;

  // App
  appTitle?: string | undefined;

  // Questions
  questions?: string[] | [];
}

type Search = {
  endpoint?: string;
  corpusId?: string;
  customerId?: string;
  apiKey?: string;
};

type App = {
  title: string;
};

type ExampleQuestions = string[];
type Rerank = {
  isEnabled: boolean;
  numResults?: number;
  id?: number;
  diversityBias?: number;
};
type Hybrid = { numWords: number; lambdaLong: number; lambdaShort: number };

interface ConfigContextType {
  search: Search;
  app: App;
  rerank: Rerank;
  hybrid: Hybrid;
  exampleQuestions: ExampleQuestions;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const SEARCH_CONFIGS = {
  endpoint: configuration.endpoint,
  corpusId: configuration.corpusId,
  customerId: configuration.customerId,
  apiKey: configuration.apiKey
};

const APP_CONFIGS = {
  title: configuration.appTitle ?? ""
};

export const ConfigContextProvider = ({ children }: Props) => {
  const exampleQuestions = configuration.questions ?? [];
  const rerankConfig = {
    isEnabled: true,
    numResults: 100,
    id: SlingshotRerankerId,
  };

  const hybrid = {
    numWords: 2,
    lambdaLong: 0.0,
    lambdaShort: 0.05
  };

  return (
    <ConfigContext.Provider
      value={{
        search: SEARCH_CONFIGS,
        app: APP_CONFIGS,
        rerank: rerankConfig,
        hybrid,
        exampleQuestions
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfigContext = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfigContext must be used within a ConfigContextProvider");
  }
  return context;
};
