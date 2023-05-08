import {
  CREATE_ANSWER,
  CREATE_ANSWER_FAILURE,
  CREATE_ANSWER_SUCCESS,
  CREATE_OFFER,
  CREATE_OFFER_FAILURE,
  CREATE_OFFER_SUCCESS,
  END_CALL,
  END_CALL_FAILURE,
  END_CALL_SUCCESS,
  REJECT_OFFER,
  REJECT_OFFER_FAILURE,
  REJECT_OFFER_SUCCESS,
  START_CALL,
  START_CALL_FAILURE,
  START_CALL_SUCCESS,
} from "./type";

export type callState = {
  caller: string;
  callee: string;
  offer: {
    sdp: string;
    type: string;
  };
  answer: {
    sdp: string;
    type: string;
  };
  status: string;
  duration: string;
  loading: boolean;
  error: object;
};

export const CallState: callState = {
  caller: "String",
  callee: "String",
  offer: {
    sdp: "String",
    type: "String",
  },
  answer: {
    sdp: "String",
    type: "String",
  },
  status: "String",
  duration: "String",
  loading: false,
  error: {},
};

export const callReducer = (state = CallState, action:any) => {
  switch (action.type) {
    case CREATE_ANSWER:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ANSWER_SUCCESS:
      return {
        ...state,
        answer: action.answer,
        status:"answering",
        loading: false,
      };
    case CREATE_ANSWER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

      case CREATE_OFFER:
        return {
          ...state,
          loading: true,
        };
      case CREATE_OFFER_SUCCESS:
        return {
          ...state,
          caller: action.caller,
          callee: action.callee,
          offer: action.offer,
          status: "calling",
          loading: false,
        };
      case CREATE_OFFER_FAILURE:
        return {
          ...state,
          error: action.error,
          loading: false,
        };
        case REJECT_OFFER:
          return {
            ...state,
            loading: true,
          };
        case REJECT_OFFER_SUCCESS:
          return {
            ...state,
            offer: {sdp:"",type:""},
            status: "rejected",
            loading: false,
          };
        case REJECT_OFFER_FAILURE:
          return {
            ...state,
            error: action.error,
            loading: false,
          };

          case START_CALL:
            return {
              ...state,
              loading: true,
            };
          case START_CALL_SUCCESS:
            return {
              ...state,
              status: "in call",
              
              loading: false,
            };
          case START_CALL_FAILURE:
            return {
              ...state,
              error: action.error,
              loading: false,
            };
            case END_CALL:
              return {
                ...state,
                loading: true,
              };
            case END_CALL_SUCCESS:
              return {
                ...state,
                status: "end call",
                loading: false,
              };
            case END_CALL_FAILURE:
              return {
                ...state,
                error: action.error,
                loading: false,
              };
              default:
                return {
                  ...state
                }
  }
};
