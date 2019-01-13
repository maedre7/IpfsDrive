import { SET_IMAGES, REMOVE_IMAGE } from "../actions/actionTypes";

const initialState = {
  images: []
};

export default(state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.images
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter(image => {
          return image.key !== action.key;
        })
      };
    default:
      return state;
  }
};
