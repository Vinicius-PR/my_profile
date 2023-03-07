import React from "react";
import PaginationItem from "../PaginationItem";
import { Container, Dots } from "./style";

const Pagination = ({ page, numberOfPages, haddleChangePage }) => {
  const siblinsCount = 1;

  function generatePagesArray(from, to) {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter((page) => page > 0);
  }

  const previousPages =
    page > 1 ? generatePagesArray(page - 1 - siblinsCount, page - 1) : [];

  const nextPages =
    page < numberOfPages
      ? generatePagesArray(page, Math.min(page + siblinsCount, numberOfPages))
      : [];

  return (
    <Container>
      {page > 1 + siblinsCount && (
        <PaginationItem
          haddleChangePage={haddleChangePage}
          isCurrent={false}
          page={1}
        />
      )}

      {page > siblinsCount + 2 && <Dots>...</Dots>}

      {previousPages.map((page) => (
        <PaginationItem
          key={page}
          haddleChangePage={haddleChangePage}
          isCurrent={false}
          page={page}
        />
      ))}

      <PaginationItem
        haddleChangePage={haddleChangePage}
        isCurrent={true}
        page={page}
      />

      {nextPages.map((page) => (
        <PaginationItem
          key={page}
          haddleChangePage={haddleChangePage}
          isCurrent={false}
          page={page}
        />
      ))}

      {page < numberOfPages - (siblinsCount + 1) && <Dots>...</Dots>}

      {page < numberOfPages - siblinsCount && (
        <PaginationItem
          haddleChangePage={haddleChangePage}
          isCurrent={false}
          page={numberOfPages}
        />
      )}
    </Container>
  );
};

export default Pagination;
