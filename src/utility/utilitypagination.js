

// Pagination utility function
export const paginate = (items, currentPage, itemsPerPage) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };
  

//   // Function to handle input search filter
// export const handleFilter = (e, setSearchTerm) => {
//   setSearchTerm(e.target.value);
// };

// // Function to handle filter selection
// export const handleFilterSelect = (e, setSortBy) => {
//   setSortBy(e.target.value);
// };

// Function to handle page change
export const handlePageChange = (pageNumber, setCurrentPage) => {
  setCurrentPage(pageNumber);
};