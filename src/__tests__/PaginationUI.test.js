import React from "react";
import { render, cleanup, wait, fireEvent } from "@testing-library/react";
import PaginationUI from "../components/blog/PaginationUI";
import paginate from "../utils/paginate";

jest.mock("../utils/paginate", () => {
  return {
    getPages: jest.fn(() => [0, 1, 2, 3, 4])
  };
});

describe("dsdadsasadasd", () => {
  it("dsadsadsdsadsa", async () => {
    const { getByTestId } = render(
      <PaginationUI
        posts={"fake"}
        numberPerPage={6}
        currentPage={0}
      ></PaginationUI>
    );

    expect(paginate.getPages).toBeCalledTimes(1);
    expect(paginate.getPages).toBeCalledWith("fake", 6);

    await wait(() => {
      expect(getByTestId("pagination")).toHaveTextContent("12");
    });

    cleanup();
  });

  it("interacts with user correctly", () => {
    const mockChange = jest.fn(number => number);
    const { getByTestId } = render(
      <PaginationUI
        posts={"fake"}
        numberPerPage={6}
        currentPage={0}
        changePage={mockChange}
      ></PaginationUI>
    );
    const nextPage = getByTestId("nextPage");
    const lastPage = getByTestId("lastPage");
    const firstPage = getByTestId("firstPage");
    fireEvent.click(nextPage);
    expect(mockChange).toBeCalledWith(1);

    fireEvent.click(lastPage);
    expect(mockChange).toBeCalledWith(4);

    fireEvent.click(firstPage);
    expect(mockChange).toBeCalledWith(0);
    cleanup();
  });
});
