import {
  CREATE_SHOP,
  CREATE_SHOP_FAILURE,
  CREATE_SHOP_SUCCESS,
  UPDATE_SHOP,
  UPDATE_SHOP_FAILURE,
  UPDATE_SHOP_SUCCESS,
} from "./type";

export type ProfileState = {
  shop: {

  };
  loading: boolean;
  error: object;
};

export const shopState: ProfileState = {
  shop: {

  },
  loading: false,
  error: {},
};

export const shopReducer = (state = shopState, action:any) => {
  switch (action.type) {
    case CREATE_SHOP:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.shop,
      };
    case CREATE_SHOP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_SHOP:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.shop,
      };
    case UPDATE_SHOP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
