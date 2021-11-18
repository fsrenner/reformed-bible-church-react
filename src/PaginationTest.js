import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';


export default function PaginationTest() {
  const [sermons, setSermons] = useState(global.sermons);
  const [pageNumber, setPageNumber] = useState(0);

  const sermonsPerPage = 5;
  const marginPagesDisplayed = 2;
  const pagesVisited = pageNumber * sermonsPerPage;

  const displaySermons = sermons
    .slice(pagesVisited, pagesVisited + sermonsPerPage)
    .map((sermon, key) => {
      return (
        <div key={key}>
          <h2>{sermon.title}</h2>
          <p>{sermon.scripture}</p>
          <p>{sermon.date}</p>
          <p>{sermon.src}</p>
          <p>{sermon.speaker}</p>
          <p>{sermon.series}</p>
        </div>
      );
    });

    const pageCount = Math.ceil(sermons.length / sermonsPerPage);
    const changePage = ({ selected }) => setPageNumber(selected);

  return(
    <div style={{marginTop: '100px'}}>
      <h1>This is the pagination page.</h1>
      <ReactPaginate 
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break'}
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={sermonsPerPage}
        onPageChange={changePage}
        containerClassName={'pagination'}
        previousLinkClassName={'previous'}
        nextLinkClassName={'next'}
        disabledClassName={'disabled'}
        activeClassName={'active'}
      />
      {displaySermons}
    </div>
  )
}