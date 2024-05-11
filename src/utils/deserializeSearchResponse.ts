import { parseSnippet } from "./parseSnippet";
import { Metadata, SearchResponse, DeserializedSearchResult } from "../view/types";

const convertMetadataToObject = (metadata: Metadata[]) => {
  const obj: Record<string, string> = {};
  metadata.forEach((item) => {
    obj[item.name] = item.value;
  });
  return obj;
};

const parseDocMetadata = (rawMetadata: Metadata[]) => {
  const metadata = convertMetadataToObject(rawMetadata);
  return {
    url: metadata.url,
    title: metadata.title || "Untitled",
    doc_by: metadata.by,
    doc_date: metadata.date,
    metadata
  };
};

const parseResponseMetadata = (rawMetadata: Metadata[]) => {
  const metadata = convertMetadataToObject(rawMetadata);
  return {
    by: metadata.by,
    date: metadata.date,
    metadata
  };
};


export const deserializeSearchResponse = (
  searchResponse?: SearchResponse
): Array<DeserializedSearchResult> | undefined => {
  if (!searchResponse) return undefined;

  const results: Array<DeserializedSearchResult> = [];
  const { response: responses, document: documents } = searchResponse;

  responses.forEach((response) => {
    const { documentIndex, text: rawText, score, metadata: rawMetadata } = response;
    const { by, date } = parseResponseMetadata(rawMetadata);
    const { pre, post, text } = parseSnippet(rawText);
    const document = documents[Number(documentIndex)];

    const { id: doc_id, metadata: docMetadata } = document;
    const { url, title, doc_by, doc_date } = parseDocMetadata(docMetadata);

    if (score > 0.7) {
      results.push({
        doc_id,
        doc_by,
        doc_date,
        snippet: {
          pre,
          text,
          post
        },
        by,
        date,
        url,
        title,
      });
    }
  });

  return results;
};
