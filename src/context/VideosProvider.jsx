import React, { createContext, useContext, useReducer } from "react";
import { videosReducer } from "../reducer";
import { videos } from "../data";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const initialState = {
    videos,
    likedVideos: [],
    watchLaterVideos: [],
    playlist: [],
    history: [],
    searchedKeyword: "",
  };

  const [state, dispatch] = useReducer(videosReducer, initialState);

  return (
    <VideosContext.Provider value={{ data: state, videosDispatch: dispatch }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);
