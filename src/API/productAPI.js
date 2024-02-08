// apiFunctions.js

async function fetchDataFromAPI(category) {
    try {
      const resp = await fetch(`https://yingkiongstore.onrender.com/products/category/${category}`);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }
  


  async function getallProducts(){
    try {
      const resp=await fetch('https://yingkiongstore.onrender.com/products/')
      const data=resp.json()
      return data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }

//addProduct
async function addProduct(product) {
  try {
    const resp=await fetch('https://yingkiongstore.onrender.com/products/addproduct',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(product)
    })
    if (resp.ok) {
      const data = await resp.json();
      console.log('Product added successfully:', data);
      return data;
    } else {
      const errorData = await resp.json();
      console.error('Error adding product:', errorData);
      throw new Error(errorData.message);
    }
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

//Edit Product function here
async function editProduct(productId, updatedData) {
  try {
    const resp = await fetch(`https://yingkiongstore.onrender.com/products/editproduct/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}


//Delete Product function here
async function deleteProduct(productId) {
  try {
    const resp = await fetch(`https://yingkiongstore.onrender.com/products/deleteproduct/${productId}`, {
      method: 'DELETE',
    });

    if (resp.ok) { 
      return { success: true, message: 'Product deleted successfully' };
    } else {
 
      const errorData = await resp.json();
      const errorMessage = errorData ? errorData.message : 'Unknown error';
      throw new Error(`Error deleting product: ${errorMessage}`);
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}



  export { fetchDataFromAPI,getallProducts,addProduct,editProduct,deleteProduct };