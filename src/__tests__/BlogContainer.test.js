import React from "react";
import { render, cleanup } from "@testing-library/react";
import BlogContainer from "../components/blog/BlogContainer";
import paginate from "../utils/paginate";
import "@testing-library/jest-dom/extend-expect";
import * as mockedQueries from "../utils/queries";

jest.mock("../utils/queries", () => {
  return {
    getAuthor: jest.fn(() => {
      return {
        name: "Ahmed Hossam",
        website: "www.facebook.com"
      };
    })
  };
});

jest.mock("../utils/paginate", () => {
  return {
    getItems: jest.fn(() => [
      {
        userId: 1,
        id: 1,
        title:
          "sadsadsadsdsadsdsadas",
        body:
          "sdasadsadsadasdsadasdads"
      },
      {
        userId: 1,
        id: 2,
        title: "sdadadadddadas",
        body:
          "dsadadsadadsadsadsadsa"
      }
    ])
  };
});

describe("dsadsadsadasdasdas", () => {
  it("casdsadsadsadsadadadasda", () => {
    const { container } = render(
      <BlogContainer
        posts={"fake"}
        numberPerPage={6}
        currentPage={0}
        users={["fake"]}
      ></BlogContainer>
    );

    expect(paginate.getItems).toHaveBeenCalledTimes(1);
    expect(paginate.getItems).toHaveBeenCalledWith("fake", 0, 6);

    expect(container).toHaveTextContent(
     
    );

    expect(mockedQueries.getAuthor).toHaveBeenCalledTimes(2);
    expect(mockedQueries.getAuthor).toHaveBeenCalledWith(["fake"], 1);
    expect(container).toHaveTextContent(/Ahmed Hossam/i);
    expect(container).toHaveTextContent(/www.facebook.com/i);

    cleanup();
  });
});
