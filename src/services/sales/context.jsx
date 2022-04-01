import { createContext, useContext, useState } from "react";
import * as api from "./api";

const DEFAULT_STATE = {
  blogs: [],

  fetch: {
    currentPage: 1,
    loading: false,
    error: null,
  },
};

/// Helper function for crea
const createTransition = (transitions = {}) => {
  return async (action, state, update) => {
    const handler = transitions[action.name];

    if (handler) await handler(action, state, update);
  };
};

// Define transitions
const onTransition = createTransition({
  "blog:load": async (_action, state, update) => {
    try {
      // Enter a loading state
      update((prevState) => ({
        ...prevState,
        fetch: { ...prevState.fetch, loading: true },
      }));

      // Fetch new data
      const blogs = await api.getAllBlogPost(state);

      // Update state
      update((prevState) => ({
        ...prevState,
        blogs: [...prevState.blogs, ...blogs],
        fetch: {
          currentPage: prevState.fetch.currentPage + 1,
          loading: false,
          error: null,
        },
      }));
    } catch (error) {
      // Update state with error
      update((prevState) => ({
        ...prevState,
        fetch: { ...prevState.fetch, loading: false, error: error.message },
      }));
    }
  },
  "blog:init_load": async (action, _state, update) => {
    console.log(action);
    // Update blogs with initial blogs
    update((prevState) => ({ ...prevState, blogs: action.data }));
  },
});

const context = createContext(DEFAULT_STATE); // Context
export const BlogProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_STATE);

  /* Listen for transition */
  const command = (name = "", data) => {
    if (name) onTransition({ name, data }, state, setState);
  };

  return (
    <context.Provider value={{ state, command }}>{children}</context.Provider>
  );
};

export const useBlog = () => useContext(context);
