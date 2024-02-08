// Function to toggle sorting direction
export const toggleSortDirection = (sortDirection, setSortDirection) => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };
  
  // Function to sort items based on a field and direction
  export const sortItems = (items, sortField, sortDirection) => {
    return [...items].sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
  
      if (sortDirection === "asc") {
        return fieldA < fieldB ? -1 : 1;
      } else {
        return fieldA > fieldB ? -1 : 1;
      }
    });
  };
  
  
  // Function to search items based on a search query
  export const searchItems = (items, searchQuery) => {
    return items.filter(item => {
      // Customize the condition based on your search requirements
      return Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };