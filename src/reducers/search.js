export default (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
  }
};
