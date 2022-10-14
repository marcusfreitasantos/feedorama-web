import api from "../api";

export async function getCategories() {
  try {
    const res = await api.get(`/category`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getCategoryByName(categoryName) {
  try {
    const res = await api.get(`/category/${categoryName}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function deleteCategories(categoryName) {
  try {
    const res = await api.delete(`/category/${categoryName}`);
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function postCategories(category, description ) {
  try {
    const res = await api.post(`/category`, {
      description,
      category
    });
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}
