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
    const res = await api.get(`/story?storyId=${storyId}`, {
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

export async function postStories(
  title,
  category,
  content,
  date_for_search,
  token
) {
  try {
    const res = await api.post(
      `/story`,
      {
        title,
        category,
        content,
        date_for_search,
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

export async function updateStories(
  storyId,
  title,
  content,
  date_for_search,
  token
) {
  try {
    const res = await api.put(
      `/story/${storyId}`,
      {
        title,
        content,
        date_for_search,
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

export async function importStories(token, multipart) {
  try {
    const res = await api.post(
      `/upload/story`,

      { data: multipart },

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

export async function importStories2(formData) {
  const res = fetch("https://api.cloudinary.com/v1_1/demo/image/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
    });

  return res;
}
