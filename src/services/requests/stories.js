import api from "../api";

export async function getStories() {
  try {
    const res = await api.get(`/story`);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function postStories(title, category, content) {
  try {
    const res = await api.post(`/story`, {
      title,
      category,
      content
    });
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}
