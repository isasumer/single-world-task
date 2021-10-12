import axios from "axios";

export const getJokes = (category) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    dispatch({
      type: `${category}`,
      payload: res?.data,
    });
  } catch (e) {
    dispatch({
      type: "GET_ERROR",
      payload: console.log(e),
    });
  }
};
