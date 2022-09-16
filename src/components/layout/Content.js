import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import BlogContainer from "../blog/BlogContainer";
import PaginationUI from "../blog/PaginationUI";
import { getSearchResult } from "../../utils/queries";

export default class Content extends Component {
  render() {
    const {
      appState,
      posts,
      currentPage,
      numberPerPage,
      users,
      pages,
      errorMessage,
      changePage,
      searchQuery
    } = this.props;

    const outputPosts = getSearchResult(posts, searchQuery)
      ? getSearchResult(posts, searchQuery)
      : posts;

    let BlogOutput = null;

    if (appState === "loading") {
      BlogOutput = <div>Loading...</div>;
    } else if (appState === "error") {
      BlogOutput = <div>Something went wrong: {errorMessage}</div>;
    } else if (appState === "success" && !posts.length) {
      BlogOutput = <div>No Posts</div>;
    } else if (!outputPosts.length && posts.length) {
      BlogOutput = <div>No search result found.</div>;
    } else {
      BlogOutput = (
        <BlogContainer
          posts={outputPosts}
          currentPage={currentPage}
          numberPerPage={numberPerPage}
          users={users}
        ></BlogContainer>
      );
    }

    return (
      <div className="my-5">
        <Container>
          <Row>
            <Col xs={12} md={2}>
              <Sidebar></Sidebar>
            </Col>
            <Col xs={12} md={10}>
              {BlogOutput}

              <PaginationUI
                changePage={changePage}
                posts={outputPosts}
                currentPage={currentPage}
                numberPerPage={numberPerPage}
                pages={pages}
              ></PaginationUI>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
