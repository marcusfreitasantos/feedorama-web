import api from "../api";

export async function getStories(token) {
  try {
    const res = await api.get(`/story`, {
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

export async function getStoryById(storyId, token) {
  try {
    const res = await api.get(`/story/${storyId}`, {
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

export async function deleteStories(storyId, token) {
  try {
    const res = await api.delete(`/story/${storyId}`, {
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

export async function postStories(title, category, content, token) {
  try {
    const res = await api.post(
      `/story`,
      {
        title,
        category,
        content,
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

export async function updateStories(storyId, title, content, token) {
  try {
    const res = await api.put(
      `/story/${storyId}`,
      {
        title,
        content,
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
