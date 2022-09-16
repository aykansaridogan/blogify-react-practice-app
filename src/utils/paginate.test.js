import paginate from "./paginate";

const posts = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15"
];

describe("paginate function", () => {
  it("returns current posts", () => {
    const expectedRes1 = ["1", "2", "3", "4", "5", "6"];
    const expectedRes2 = ["7", "8", "9", "10", "11", "12"];
    const expectedRes3 = ["13", "14", "15"];

    expect(paginate.getItems(posts, 0, 6)).toEqual(expectedRes1);
    expect(paginate.getItems(posts, 1, 6)).toEqual(expectedRes2);
    expect(paginate.getItems(posts, 2, 6)).toEqual(expectedRes3);
  });
});

describe("getPages function", () => {
  it("returns current pages array", () => {
    expect(paginate.getPages(posts, 6)).toEqual([0, 1, 2]);
  });
});
