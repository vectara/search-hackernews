import { DeserializedSearchResult } from "../types";
import { GroupedSearchResult } from "./GroupedSearchResult";

type Props = {
  results: Array<DeserializedSearchResult>;
};

type UrlData = {
  title: string;
  date: string;
  snippets: string[];
}

export const SearchResultList = ({ results }: Props) => {
  // Let's dedupe the data here

  const deduped = results.reduce((acc: Record<string, UrlData>, result: DeserializedSearchResult) => {
    console.log("result", result)  // TEMP
    const snippet_display = result.snippet.pre + '<b>' + result.snippet.text + '</b>' + result.snippet.post
    if (!acc[result.url]) {
      const urlData = { 
        title: result.title, 
        date: result.metadata.date,
        snippets: [snippet_display] 
      } as UrlData;
      acc[result.url] = urlData;
    } else {
      acc[result.url].snippets.push(snippet_display);
    }

    return acc;
  }, {});

  return (
    <>
      {Object.keys(deduped).map((url, i) => (
        <GroupedSearchResult key={i} url={url} title={deduped[url].title} date={deduped[url].date} snippets={deduped[url].snippets} position={i}/>
      ))}
    </>
  );
};
