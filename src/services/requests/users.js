import api from "../api";

export async function getUsers() {
  try {
    const res = await api.get(`/user`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getUserByEmail(userEmail) {
  try {
    const res = await api.get(`/user/${userEmail}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function deleteUser(userId) {
  try {
    const res = await api.delete(`/user/account/${userId}`);
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function postUser(username, name, email, preferences_categories) {
  try {
    const res = await api.post(`/user`, {
      username,
      name,
      email,
      preferences_categories,
    });
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function loginUser(email) {
  try {
    const res = await api.post(`/login`, {
      email,
    });
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}
