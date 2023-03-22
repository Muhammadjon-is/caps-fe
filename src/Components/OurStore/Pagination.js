import { Link, useParams } from "react-router-dom";

const Pagination = ({ pages }) => {
  const { keyword, page } = useParams();

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => (
      <li
        className={`page-item ${number === +page ? "active" : null}`}
        key={number}
      >
        <Link
          to={keyword ? `/search/${keyword}/page/${number}` : `/page/${number}`}
          className="page-link"
        >
          {number}
        </Link>
      </li>
    ));
  };

  return (
    pages > 1 && (
      <nav>
        <ul className="pagination justify-content-center">
          {renderPageNumbers()}
        </ul>
      </nav>
    )
  );
};

export default Pagination;
