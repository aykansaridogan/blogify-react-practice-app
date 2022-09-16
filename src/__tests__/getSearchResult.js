import { getSearchResult } from "../utils/queries";

describe("function to get search result", () => {
  it("should return search result given array of posts and query", () => {
    const fakePosts = [
      {
        userId: 1,
        id: 1,
        title:
          "dasdasdasdasdasd",
        body:
          "dsadsadasdasddasda"
      },
      {
        userId: 1,
        id: 2,
        title: "dsadasdasdasd",
        body:
          "dsadsadasdasdasdasd"
      }
    ];

    expect(getSearchResult(fakePosts, "dsadsadasdasdasdasd")).toEqual([
      {
        userId: 1,
        id: 2,
        title: "dsadsadasdasdasdasd",
        body:
          "dsadsadasdasdasdasd"
      }
    ]);
  });
});
