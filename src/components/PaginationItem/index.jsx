import React from "react";
import { Container } from "./style";

const PaginationItem = ({ page, isCurrent, haddleChangePage }) => {
  return (
    <Container
      onClick={() => haddleChangePage(page)}
      color={isCurrent ? "#65C18C" : "#F7ECDE"}
    >
      {page}
    </Container>
  );
};

export default PaginationItem;
