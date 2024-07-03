import { DeserializedSearchResult } from "../types";
import { GroupedSearchResult } from "./GroupedSearchResult";

type Props = {
  results: Array<DeserializedSearchResult>;
};

export type SnippetData = {
  text: string;
  by: string;
  date: string;
}

export type ResultData = {
  title: string;
  date: string;
  by: string
  snippets: SnippetData[];
}

export const SearchResultList = ({ results }: Props) => {
  // Let's dedupe the data here
  const deduped = results.reduce((acc: Record<string, ResultData>, result: DeserializedSearchResult) => {
    const snippetDisplay = result.snippet.pre + '<b>' + result.snippet.text + '</b>' + result.snippet.post
    const snippetData = { 
      text: snippetDisplay, 
      by: result.by || result.doc_by, 
      date: result.date || result.doc_date
    } as SnippetData;
    if (!acc[result.url]) {
      const resultData = { 
        title: result.title, 
        date: result.doc_date,
        by: result.doc_by,
        snippets: [snippetData] 
      } as ResultData;
      acc[result.url] = resultData;
    } else {
      acc[result.url].snippets.push(snippetData);
    }

    return acc;
  }, {});

  return (
    <>
      {Object.keys(deduped).map((url, i) => (
        <GroupedSearchResult key={i} url={url} title={deduped[url].title} doc_date={deduped[url].date} doc_by={deduped[url].by} snippets={deduped[url].snippets} position={i}/>
      ))}
    </>
  );
};
