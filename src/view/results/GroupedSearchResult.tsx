import { forwardRef } from "react";
import { VuiGroupedSearchResult } from "../../ui/components/groupedSearchResult/GroupedSearchResult";
import { SnippetData } from "./SearchResultList";
import { VuiText, VuiTextColor } from "../../ui";
import "./SearchResult.scss";

type Props = {
  url: string;
  title: string;
  doc_date: string;
  doc_by: string;
  snippets: SnippetData[];
  position: number;
};

export const GroupedSearchResult = forwardRef<HTMLDivElement | null, Props>(({ url, title, doc_date, doc_by, snippets, position }: Props, ref) => {

  return (
    <VuiGroupedSearchResult
      ref={ref}
      result={{
        title,
        url,
        doc_date,
        doc_by,
        snippets: snippets
      }}
      position={position + 1}
      subTitle={
        url && (doc_date ? (
          <VuiText size="s" className="searchResultSiteCategory">
            <p>
              <VuiTextColor color="warning">{doc_by} ({doc_date}): {url} </VuiTextColor>
            </p>
          </VuiText>
        ) : (
          <VuiText size="s" className="searchResultSiteCategory">
            <p>
                <VuiTextColor color="subdued">{url}</VuiTextColor>
            </p>
          </VuiText>
        ))
      }
    />
  );
});
