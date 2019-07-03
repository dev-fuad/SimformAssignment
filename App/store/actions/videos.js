import { GET_VIDEOS, GET_MORE_VIDEOS, SET_LOADING } from '../types';

const getVideoAction = payload => ({
  type: GET_VIDEOS,
  payload,
});

const getMoreAction = () => ({
  type: GET_MORE_VIDEOS,
});

const setLoadingAction = payload => ({
  type: SET_LOADING,
  payload,
});

export const getVideos = () => async dispatch => {
  const url = '';
  dispatch(setLoadingAction(true));
  try {
    const result = await fetch(url).then(res => res.json());
    if (result && result.videos && Array.isArray(result.videos)) {
      dispatch(getVideoAction(result));
    } else {
      dispatch(setLoadingAction(false));
    }
  } catch (error) {
    console.log('API Error: ', error);
    dispatch(setLoadingAction(false));
  }
};

export const getMoreVideos = () => dispatch => {
  dispatch(getMoreAction());
};
