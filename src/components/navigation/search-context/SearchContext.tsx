import React from "react";
import { useEffect } from "react";
import { Wrapper } from "./SearchContextStyles";
import $ from "jquery";
import SearchItem from "./search-item/SearchItem";

const SearchContext: React.FC<{ show: boolean }> = ({ show }) => {
  useEffect(() => {
    $("#searchContext").css({ display: "none" });
    document.getElementById("body")?.addEventListener("click", (e) => {
      $("#searchContext").animate({ top: "2rem", opacity: 0 }, 100, () => {
        $("#searchContext").css({ display: "none" });
      });
    });
  }, []);

  useEffect(() => {
    if (show) {
      $("#searchContext").css({ display: "flex", opacity: 1, top: "2.85rem" });
    }
  }, [show]);
  return (
    <Wrapper id="searchContext" onClick={(e) => e.stopPropagation()}>
      <h3>Recent</h3>
      {[...Array(20)].map((_) => (
        <SearchItem />
      ))}
    </Wrapper>
  );
};

export default SearchContext;
