export type Metadata = {
  name: string;
  value: string;
};

export type SearchError = {
  message?: string;
  response?: {
    data?: {
      message?: string;
    };
  };
};

export type SearchResponseDoc = {
  id: string;
  metadata: Metadata[];
};

export type SearchResponseResult = {
  corpusKey: {
    corpusId: string;
    customerId: string;
    dim: string[];
  };
  documentIndex: string;
  metadata: Metadata[];
  resultLength: number;
  resultOffset: number;
  score: number;
  text: string;
};

export type SearchResponse = {
  document: SearchResponseDoc[];
  response: SearchResponseResult[];
};

export type CombinedResult = {
  document: SearchResponseDoc;
  response: SearchResponseResult;
};

export type CombinedResults = CombinedResult[];

export type DeserializedSearchResult = {
  doc_id: string;
  doc_by: string;
  doc_date: string;
  url: string;
  title: string;
  snippet: {
    pre: string;
    text: string;
    post: string;
  };
  by: string;
  date: string;
};

export const standardRerankerId = 272725717;
export const mmrRerankerId = 272725718;
export const SlingshotRerankerId = 272725719;
