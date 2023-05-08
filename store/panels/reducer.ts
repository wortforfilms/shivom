import {
  CLOSE_ACTION_PANEL,
  CLOSE_APPLICATION_PANEL,
  CLOSE_COUPON_PANEL,
  CLOSE_DETAIL_PANEL,
  CLOSE_EDIT_ADDRESS_PANEL,
  CLOSE_FORM_PANEL,
  CLOSE_HOURLY_BOOKING_PANEL,
  CLOSE_IMAGE_PANEL,
  CLOSE_INDIVIDUAL_BOOKING_PANEL,
  CLOSE_LEFT_LANDING,
  CLOSE_LOCALIZER_PANEL,
  CLOSE_OPENING_PANEL,
  CLOSE_PAY_PANEL,
  CLOSE_POST_COMMENT_PANEL,
  CLOSE_POST_CREATE_PANEL,
  CLOSE_POST_MENU_PANEL,
  CLOSE_POST_STAT_PANEL,
  CLOSE_PROJECT_BOOKING_PANEL,
  CLOSE_PROJECT_PANEL,
  CLOSE_RIGHT_PROFILE,
  HIDE_FOOTER,
  HIDE_HEADER,
  OPEN_ACTION_PANEL,
  OPEN_APPLICATION_PANEL,
  OPEN_COUPON_PANEL,
  OPEN_COUPON_PANEL_FAILURE,
  OPEN_COUPON_PANEL_SUCCESS,
  OPEN_DETAIL_PANEL,
  OPEN_EDIT_ADDRESS_PANEL,
  OPEN_FORM_PANEL,
  OPEN_HOURLY_BOOKING_PANEL,
  OPEN_IMAGE_PANEL,
  OPEN_INDIVIDUAL_BOOKING_PANEL,
  OPEN_LEFT_LANDING,
  OPEN_LOCALIZER_PANEL,
  OPEN_OPENING_PANEL,
  OPEN_PAY_PANEL,
  OPEN_POST_COMMENT_PANEL,
  OPEN_POST_CREATE_PANEL,
  OPEN_POST_MENU_PANEL,
  OPEN_POST_STAT_PANEL,
  OPEN_PROJECT_BOOKING_PANEL,
  OPEN_PROJECT_PANEL,
  OPEN_RIGHT_PROFILE,
  SET_FOOTER_CLOSE,
  SET_FOOTER_OPEN,
  SHOW_TOAST_MESSAGE,
  SHOW_TOAST_MESSAGE_FAILURE,
  SHOW_TOAST_MESSAGE_SUCCESS,
} from "./type";

export type PanelState = {
  left_landing: boolean;
  right_profile: boolean;
  footer_open: boolean;
  individual_booking: boolean;
  project_booking: boolean;
  opening_panel: boolean;
  opening: {};
  edit_address_panel: boolean;
  address: {};
  action_panel: boolean;
  messages: [];
  actions: [];
  pay_panel: boolean;
  project_panel: boolean;
  application_panel: boolean;
  post_stat_panel: boolean;
  post_stat: {};
  hourly_booking_panel: boolean;
  hourly_booking_item: {};
  active_opening: {};
  image_panel: boolean;
  form: {};
  form_panel: boolean;
  coupon_panel:boolean;
  current_image: string;
  hide_header: boolean;
  hide_footer: boolean;
  post_create_panel:boolean;
  post_menu_panel:boolean;
  post_menu_option:{},
  post_comment_panel:boolean;
  comments:[],
  parent_id:string,
  detail_panel: boolean;
  localizer_panel:boolean;
  object: {};
  message: string;
  error: string;
  loading: boolean;
  booking_item: {};
};

export const panelState: PanelState = {
  left_landing: false,
  right_profile: false,
  footer_open: false,
  individual_booking: false,
  project_booking: false,
  opening_panel: false,
  opening: {},
  edit_address_panel: false,
  address: {},
  action_panel: false,
  messages: [],
  actions: [],
  pay_panel: false,
  project_panel: false,
  application_panel: false,
  active_opening: {},
  post_stat_panel: false,
  post_stat: {},
  hourly_booking_panel: false,
  hourly_booking_item: {},
  image_panel: false,
  localizer_panel:false,
  post_create_panel:false,
  post_menu_panel:false,
  post_menu_option:{},
  post_comment_panel:false,
  comments:[],
  parent_id:'',
  form: {},
  form_panel: false,
  coupon_panel:false,
  current_image: "",
  detail_panel: false,
  hide_header: false,
  hide_footer: false,
  object: {},
  error: "",
  loading: false,
  message: "",
  booking_item: {},
};

export const panelReducer = (state = panelState, action: any) => {
  switch (action.type) {
    case OPEN_LEFT_LANDING:
      return {
        ...state,
        left_landing: true,
      };

    case CLOSE_LEFT_LANDING:
      return {
        ...state,
        left_landing: false,
      };

    case OPEN_RIGHT_PROFILE:
      return {
        ...state,
        right_profile: true,
      };
    case CLOSE_RIGHT_PROFILE:
      return {
        ...state,
        right_profile: false,
      };
    case SET_FOOTER_OPEN:
      return {
        ...state,
        footer_open: true,
      };
    case SET_FOOTER_CLOSE:
      return {
        ...state,
        footer_open: false,
      };
    case CLOSE_RIGHT_PROFILE:
      return {
        ...state,
        right_profile: false,
      };
    case OPEN_INDIVIDUAL_BOOKING_PANEL:
      return {
        ...state,
        individual_booking: true,
        booking_item: action.booking_item,
      };
    case CLOSE_INDIVIDUAL_BOOKING_PANEL:
      return {
        ...state,
        individual_booking: false,
        booking_item: null,
      };

    case OPEN_ACTION_PANEL:
      return {
        ...state,
        action_panel: true,
        messages: action.messages,
        actions: action.actions,
      };
    case CLOSE_ACTION_PANEL:
      return {
        ...state,
        action_panel: false,
        messages: null,
        actions: null,
      };

    case OPEN_PAY_PANEL:
      return {
        ...state,
        pay_panel: true,
        messages: action.messages,
        actions: action.actions,
      };
    case CLOSE_PAY_PANEL:
      return {
        ...state,
        pay_panel: false,
        messages: null,
        actions: null,
      };

    case OPEN_PROJECT_BOOKING_PANEL:
      return {
        ...state,
        project_booking: true,
        booking_item: action.booking_item,
      };
    case CLOSE_PROJECT_BOOKING_PANEL:
      return {
        ...state,
        project_booking: false,
        booking_item: null,
      };

    case SHOW_TOAST_MESSAGE:
      return {
        ...state,
        loading: true,
        message: action.message,
        color: action.color,
      };
    case SHOW_TOAST_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.message,
        color: action.color,
      };
    case SHOW_TOAST_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case OPEN_OPENING_PANEL:
      return {
        ...state,
        loading: false,
        opening_panel: true,
        opening: action.opening,
      };
    case CLOSE_OPENING_PANEL:
      return {
        ...state,
        loading: false,
        opening_panel: false,
        opening: null,
      };
    case OPEN_EDIT_ADDRESS_PANEL:
      return {
        ...state,
        loading: false,
        edit_address_panel: true,
        address: action.address,
      };
    case CLOSE_EDIT_ADDRESS_PANEL:
      return {
        ...state,
        loading: false,
        edit_address_panel: false,
        address: null,
      };
    case OPEN_IMAGE_PANEL:
      return {
        ...state,
        loading: false,
        image_panel: true,
        current_image: action.image,
      };
    case CLOSE_IMAGE_PANEL:
      return {
        ...state,
        loading: false,
        image_panel: false,
        current_image: null,
      };

    case HIDE_HEADER:
      return {
        ...state,
        hide_header: action.hide,
      };
    case HIDE_FOOTER:
      return {
        ...state,
        hide_footer: action.hide,
      };

    case OPEN_DETAIL_PANEL:
      return {
        ...state,
        loading: false,
        detail_panel: true,
        object: action.object,
      };
    case CLOSE_DETAIL_PANEL:
      return {
        ...state,
        loading: false,
        detail_panel: false,
        object: null,
      };

    case OPEN_PROJECT_PANEL:
      return {
        ...state,
        loading: false,
        project_panel: true,
      };
    case CLOSE_PROJECT_PANEL:
      return {
        ...state,
        loading: false,
        project_panel: false,
      };
    case OPEN_APPLICATION_PANEL:
      return {
        ...state,
        loading: false,
        application_panel: true,
        active_opening: action.active_opening,
      };
    case CLOSE_APPLICATION_PANEL:
      return {
        ...state,
        loading: false,
        application_panel: false,
        active_opening: null,
      };
    case OPEN_POST_STAT_PANEL:
      return {
        ...state,
        loading: false,
        post_stat_panel: true,
        post_stat: action.post_stat,
      };
    case CLOSE_POST_STAT_PANEL:
      return {
        ...state,
        loading: false,
        post_stat_panel: false,
        post_stat: null,
      };
    case OPEN_HOURLY_BOOKING_PANEL:
      return {
        ...state,
        loading: false,
        hourly_booking_panel: true,
        hourly_booking_item: action.hourly_booking_item,
      };
    case CLOSE_HOURLY_BOOKING_PANEL:
      return {
        ...state,
        loading: false,
        hourly_booking_panel: false,
        hourly_booking_item: null,
      };
    case OPEN_FORM_PANEL:
      return {
        ...state,
        loading: false,
        form_panel: true,
        form: action.form,
      };
    case CLOSE_FORM_PANEL:
      return {
        ...state,
        loading: false,
        form_panel: false,
        form: null,
      };
      case OPEN_COUPON_PANEL:
        return {
          ...state,
          loading: true,


        };
        case OPEN_COUPON_PANEL_SUCCESS:
          return {
            ...state,
            loading: false,
            coupon_panel: true,
  
          };
          case OPEN_COUPON_PANEL_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.error,
    
            };
      case CLOSE_COUPON_PANEL:
        return {
          ...state,
          loading: false,
          coupon_panel: false,

        };
        case OPEN_LOCALIZER_PANEL:
          return {
            ...state,
            loading: false,
            localizer_panel: true,
            form: action.form,
          };
        case CLOSE_LOCALIZER_PANEL:
          return {
            ...state,
            loading: false,
            localizer_panel: false,
          };

          case OPEN_POST_CREATE_PANEL:
            return {
              ...state,
              loading: false,
              post_create_panel: true,
            };
          case CLOSE_POST_CREATE_PANEL:
            return {
              ...state,
              loading: false,
              post_create_panel: false,
            };

            case OPEN_POST_COMMENT_PANEL:
              return {
                ...state,
                loading: false,
                post_comment_panel: true,
                comments:action.comments,
                parent_id:action.parent_id
              };
            case CLOSE_POST_COMMENT_PANEL:
              return {
                ...state,
                loading: false,
                post_comment_panel: false,
              };



            case OPEN_POST_MENU_PANEL:
              return {
                ...state,
                loading: false,
                post_menu_panel: true,
                post_menu_option: action.option
              };
            case CLOSE_POST_MENU_PANEL:
              return {
                ...state,
                loading: false,
                post_menu_panel: false,
                post_menu_option: null

              };
    default:
      return state;
  }
};
