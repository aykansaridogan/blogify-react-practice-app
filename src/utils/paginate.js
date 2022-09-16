const paginate = {
  getItems: (items, currentPage, numberPerPage) => {
    const firstIndex = numberPerPage * currentPage;
    const lastIndex = firstIndex + numberPerPage;
    const currentitems = items.slice(firstIndex, lastIndex);
    return currentitems;
  },

  getPages: (items, numberPerPage) => {
    const numberOfPages = Math.ceil(items.length / numberPerPage);
    let pages = [];
    for (let i = 0; i < numberOfPages; i++) {
      pages.push(i);
    }

    return pages;
  },

  changePage: (newPage, callback) => {
    callback(newPage);
  }
};

export default paginate;
