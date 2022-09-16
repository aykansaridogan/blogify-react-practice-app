const getAuthor = (users, id) => {
  return users.find(el => el.id === id);
};

const getSearchResult = (posts, searchQuery) => {
  if (searchQuery.length) {
    const regex = new RegExp(searchQuery);

    const searchResult = posts.filter(
      el => el.title.match(regex) || el.body.match(regex)
    );

    return searchResult;
  } else {
    return null;
  }
};

export { getAuthor, getSearchResult };
