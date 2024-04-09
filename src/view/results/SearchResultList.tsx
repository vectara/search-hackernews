import { DeserializedSearchResult } from "../types";
import { GroupedSearchResult } from "./GroupedSearchResult";

type Props = {
  results: Array<DeserializedSearchResult>;
};

type UrlData = {
  title: string;
  snippets: string[];
}

export const SearchResultList = ({ results }: Props) => {
  // Let's dedupe the data here

  const deduped = results.reduce((acc: Record<string, UrlData>, result: DeserializedSearchResult) => {
    if (!acc[result.url]) {
      const urlData = { 
        title: result.title, 
        snippets: [result.snippet.text] 
      };
      acc[result.url] = urlData;
    } else {
      acc[result.url].snippets.push(result.snippet.text);
    }

    return acc;
  }, {});

  return (
    <>
      {Object.keys(deduped).map((url, i) => (
        <GroupedSearchResult key={i} url={url} title={deduped[url].title} snippets={deduped[url].snippets} position={i}/>
      ))}
    </>
  );
};
