import api from "../api";

export async function getCategories(token) {
  try {
    const res = await api.get(`/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getCategoryByName(categoryName, token) {
  try {
    const res = await api.get(`/category/${categoryName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function deleteCategories(categoryName, token) {
  try {
    const res = await api.delete(`/category/${categoryName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function postCategories(category, description, token) {
  try {
    const res = await api.post(
      `/category`,
      {
        description,
        category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function putCategories(
  categorySlug,
  category,
  description,
  token
) {
  try {
    const res = await api.put(
      `/category/${categorySlug}`,
      {
        description,
        category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}
