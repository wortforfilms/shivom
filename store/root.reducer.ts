import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { callReducer } from "./call/reducer";
import { cartReducer } from "./cart/reducer";
import { deviceReducer } from "./device/reducer";
import { languageReducer } from "./language/reducer";
import { localReducer } from "./local/reducer";
import { notificationReducer } from "./notification/reducer";
import { panelReducer } from "./panels/reducer";
import { profileReducer } from "./profile/reducer";
import { projectReducer } from "./project/reducer";
import { shopReducer } from "./shop/reducer";
import { subscriptionReducer } from "./subscription/reducer";
import { userBoardReducer } from "./user_board/reducer";
import { messagingReducer } from "./messaging/reducer";
import { openingsReducer } from "./openings/reducer";
import { _walletReducer } from "./wallet/reducer";
import games from '../components/games/slice'
import calender from "@/lib/calender/slice";
// import localize from '@/factory/stuct/localize/slice'
// import thoughts from '@/factory/stuct/thoughts/slice'
// import timeline from '@/factory/stuct/timeline/slice/timeSlice'
// import labels from '@/factory/label/slice'
// import orders from '@/factory/order/slice'
// import content from '@/factory/film/slice'
// import event from '@/factory/events/slice'
// import calender from '@/factory/events/calender/slice'
// import countrymap from '@/factory/machine/map/countrypins/slice'


// non passive event for other then india
// active event for india
// defination of time in moon macrosystem
// various micro systems for iot using micros
// distribution : in country ips 
// bound in business and transaction
// income of state via entertainment
// target 10% on revenue form municipality
// resource hire job 
// artist <>¯˘≤≥<>≤≥¯˘¿?/÷
// 
// reducer // 


const rootReducer = combineReducers({
  auth: authReducer,
  panel: panelReducer,
  device: deviceReducer,
  notifications: notificationReducer,
  cart: cartReducer,
  profile: profileReducer,
  exchange: callReducer,
  shop: shopReducer,
  language: languageReducer,
  project: projectReducer,
  subscription: subscriptionReducer,
  local: localReducer,
  userboard: userBoardReducer,
  messaging: messagingReducer,
  openings:openingsReducer,
  wallet:_walletReducer,
  games,
  // localize,
  // thoughts,
  // timeline,
  // labels,
  // orders,
  // content,
  // event,
  // countrymap,
  calender

})

export type RootState = ReturnType<typeof rootReducer>;


export default rootReducer;