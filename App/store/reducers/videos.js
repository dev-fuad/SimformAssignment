import { SET_LOADING, GET_VIDEOS, GET_MORE_VIDEOS } from '../types';

const InitialState = {
  videos: [],
  cache: [],
  isLoading: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        videos: action.payload,
        cache: action.payload,
        isLoading: false,
      };
    case GET_MORE_VIDEOS:
      return {
        ...state,
        videos: [...state.videos, ...state.cache],
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
