
export const OPEN_COUPON_PANEL="OPEN_COUPON_PANEL"
export const CLOSE_COUPON_PANEL="CLOSE_COUPON_PANEL"



export const open_coupon_panel=(coupon:any)=>{
  return{
    type: OPEN_COUPON_PANEL,
    coupon
 
  }
}

export const close_coupon_panel=()=>{
  return{
    type: CLOSE_COUPON_PANEL
  }
}


    case OPEN_COUPON_PANEL:
      return {
        ...state,
        loading: false,
        coupon_panel: true,
        coupon: action.coupon,
      };
    case CLOSE_COUPON_PANEL:
      return {
        ...state,
        loading: false,
        coupon_panel: false,
        coupon: null,
      };