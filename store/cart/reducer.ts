import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
  RESET_AFTER_INVOICE,
  RESET_AFTER_SIGNOUT,
  SET_DELIVERY_ADDRESS,
  SET_DELIVERY_ADDRESS_SUCCESS,
  SET_DELIVERY_ADDRESS_FAILURE,
  SET_USER_ADDRESSES,
  SET_USER_ADDRESSES_SUCCESS,
  SET_USER_ADDRESSES_FAILURE,
} from "./types";

export const cartState = {
  cartTotal: 0,
  delivery_address:"",
  user_addresses:[],
  loading: false,
  error: null,
  cartItems: [
    {
      product_id: "",
      quantity: 0,
      price: 0,
      title: "",
      images: "",
    },
  ],
};
export const cartReducer = (state = cartState, action:any) => {
  const nums = state.cartItems.map((i) => i.price * i.quantity);
  const _amount = nums.reduce((i, a) => i + a, 0);
  const cItem = state.cartItems.map((i) => {
    if (i.product_id === action.id) {
      return i;
    }
  });
  switch (action.type) {
    case ADD_TO_CART:
      // toastInfo({message:`Added ${action.title}`})

      return {
        // ...state,
        cartTotal: _amount,
        cartItems: [
          ...state.cartItems,
          {
            product_id: action.id,
            title: action.title,
            images: action.pr_type==="market"?action.images[1]:action.images,
            price: action.price,
            quantity: 1,
            pr_type: action.pr_type
          },
        ],
      };

    case REMOVE_FROM_CART:
      //  console.log("action id--==>to_remove",action.id)
      return {
        cartItems: [
          ...state.cartItems.filter((i) => i.product_id !== action.id),
        ],
        cartTotal: _amount,
      };

    case ADD_QUANTITY:
      // toastInfo({message:`Added ${action.id}`})

      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((product) =>
            product.product_id === action.id
              ? { ...product, quantity: product.quantity + 1 }
              : { ...product }
          ),
        ],
        cartTotal: _amount,
      };

    case REMOVE_QUANTITY:
      return {
        ...state,
        cartTotal: _amount,

        cartItems: [
          ...state.cartItems.map((product) =>
            product.product_id === action.id
              ? { ...product, quantity: product.quantity - 1 }
              : { ...product }
          ),
        ],
      };

    case RESET_AFTER_INVOICE:
      return {
        ...state,
        cartTotal: 0,

        cartItems: [
          {
            product_id: "",
            quantity: 0,
            price: 0,
            title: "",
            images: "",
          },
        ],
      };

    case RESET_AFTER_SIGNOUT:
      return {
        ...state,
        cartTotal: 0,

        cartItems: [
          {
            product_id: "",
            quantity: 0,
            price: 0,
            title: "",
            images: "",
          },
        ],
      };
    

      case SET_DELIVERY_ADDRESS:
        return {
          ...state,
          loading: true
        }
        case SET_DELIVERY_ADDRESS_SUCCESS:
          return {
            ...state,
            loading: false,
            delivery_address: action.address
          }
          case SET_DELIVERY_ADDRESS_FAILURE:
            return {
              ...state,
              loading:false,
              error: action.error
            }

            case SET_USER_ADDRESSES:
              return {
                ...state,
                loading: true
              }
              case SET_USER_ADDRESSES_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  user_addresses: action.addresses
                }
                case SET_USER_ADDRESSES_FAILURE:
                  return {
                    ...state,
                    loading:false,
                    error: action.error
                  }


    default:
      return state;
  }
};
