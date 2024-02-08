
export const openEditModal = (order, setEditModalOpen, setSelectedOrderForEdit) => {
    setEditModalOpen(true);
    setSelectedOrderForEdit(order);
  };
  
  export const closeEditModal = (setEditModalOpen, setSelectedOrderForEdit) => {
    setEditModalOpen(false);
    setSelectedOrderForEdit(null);
  };
  
  export const submitEditChanges = (editedOrder, setEditModalOpen, setSelectedOrderForEdit) => {
    // Your logic for submitting changes
    console.log("Changes submitted:", editedOrder);
  
    // Close the modal
    closeEditModal(setEditModalOpen, setSelectedOrderForEdit);
  };
  
  export const handleMouseEnterRow = (index, setHoveredRow) => {
    setHoveredRow(index);
  };
  
  export const handleMouseLeaveRow = (setHoveredRow) => {
    setHoveredRow(null);
  };
  
  export const openDeleteModal = (setIsModalOpened, setIsDeleteModalOpen, setHoveredRow) => {
    setIsModalOpened(true); // Indicate that modal is about to open
    setIsDeleteModalOpen(true);
    // Pass the index of the hovered row to handleDelete
    setHoveredRow(index);
  };
  
//   export const handleCheckboxChange = (index, setCheckboxStates) => {
//     setCheckboxStates((prevState) => {
//       return { ...prevState, [index]: !prevState[index] };
//     });
//   };