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

export async function getCategoryById(categoryId) {
  try {
    const res = await api.get(`/category/${categoryId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function deleteCategories(categoryId) {
  try {
    const res = await api.delete(`/category/${categoryId}`);
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function postCategories(description, category) {
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
