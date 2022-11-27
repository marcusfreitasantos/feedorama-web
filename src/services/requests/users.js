import api from "../api";

export async function getUsers(token) {
  try {
    const res = await api.get(`/users/`, {
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

export async function getUserByEmail(token, userEmail) {
  try {
    const res = await api.get(`/user/${userEmail}`, {
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

export async function deleteUser(token, userId) {
  try {
    const res = await api.delete(`/user/account/${userId}`, {
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

export async function postUser(
  username,
  name,
  email,
  preferences_categories,
  profile_type
) {
  try {
    const res = await api.post(`/user`, {
      username,
      name,
      email,
      preferences_categories: [preferences_categories],
      profile_type,
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
