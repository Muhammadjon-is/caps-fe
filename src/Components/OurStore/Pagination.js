import React from "react";
import { Link,  } from "react-router-dom";

const Pagination = ({ pages, page, keyword = "" }) => {
  const pageLinks = [];
  const limit = 6;
  const pageCount = Math.ceil(pages / limit);

  for (let i = 1; i <= pageCount; i++) {
    pageLinks.push(i);
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentProducts = pageLinks.slice(startIndex, endIndex);

  // const location = useLocation();

  return (
    pageCount > 1 && (
      <nav>
        <ul className="pagination justify-content-center">
          {currentProducts.map((pageNumber) => (
            <li
              className={`page-item ${pageNumber === page ? "active" : ""}`}
              key={pageNumber}
            >
              <Link
                className="page-link"
                to={
                  keyword
                    ? `/search/${keyword}/page/${pageNumber}`
                    : `/page/${pageNumber}`
                }
                replace={pageNumber === page}
              >
                {pageNumber}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Pagination;
