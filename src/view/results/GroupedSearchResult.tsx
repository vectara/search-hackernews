import { forwardRef } from "react";
import { VuiGroupedSearchResult } from "../../ui/components/groupedSearchResult/GroupedSearchResult";
import { VuiText, VuiTextColor } from "../../ui";
import "./SearchResult.scss";

type Props = {
  url: string;
  title: string;
  snippets: string[];
  position: number;
};

export const GroupedSearchResult = forwardRef<HTMLDivElement | null, Props>(({ url, title, snippets, position }: Props, ref) => {

  return (
    <VuiGroupedSearchResult
      ref={ref}
      result={{
        title,
        url,
        snippets: snippets
      }}
      position={position + 1}
      subTitle={
        url && (
          <VuiText size="s" className="searchResultSiteCategory">
            <p>
              <VuiTextColor color="subdued">{url}</VuiTextColor>
            </p>
          </VuiText>
        )
      }
    />
  );
});
