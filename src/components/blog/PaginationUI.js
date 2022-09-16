import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import paginate from "../../utils/paginate";

export default class PaginationUI extends Component {
  prevPage = () => {
    if (this.props.currentPage > 0) {
      return this.props.changePage(this.props.currentPage - 1);
    }
  };

  nextPage = pages => {
    if (this.props.currentPage < pages.length - 1) {
      return this.props.changePage(this.props.currentPage + 1);
    }
  };

  render() {
    const { changePage, currentPage, posts, numberPerPage } = this.props;
    const pages = paginate.getPages(posts, numberPerPage);
    return (
      <div>
        <Pagination data-testid="pagination">
          <Pagination.First
            data-testid="firstPage"
            onClick={() => changePage(pages[0])}
          ></Pagination.First>
          <Pagination.Prev
            data-testid="prevPage"
            onClick={this.prevPage}
          ></Pagination.Prev>
          {pages.map(number => {
            return (
              <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => changePage(number)}
              >
                {number}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            data-testid="nextPage"
            onClick={() => this.nextPage(pages)}
          ></Pagination.Next>
          <Pagination.Last
            data-testid="lastPage"
            onClick={() => changePage(pages.length - 1)}
          ></Pagination.Last>
        </Pagination>
      </div>
    );
  }
}
