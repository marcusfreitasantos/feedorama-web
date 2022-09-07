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
