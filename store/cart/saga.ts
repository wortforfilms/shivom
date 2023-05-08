import { all, call, takeLatest,put } from "redux-saga/effects";

import * as actions from './types' 




function* notifyAdding(action:any)
{
  try {
    yield put({ type: "SHOW_TOAST", messageType:"Success", message:"Item Added"  });
    
  } catch (error) {
    yield put({ type: "SHOW_TOAST", messageType:"Error", message:"Error in Item Adding"  });
    
  }

}



function* notifyCartSaga(){
  yield takeLatest(actions.ADD_TO_CART, notifyAdding)
}


function* setDelivery(action:any)
{
  try {
    yield put({ type: "SET_DELIVERY_ADDRESS_SUCCESS", address: action?.address  });
    
  } catch (error) {
    yield put({ type: "SET_DELIVERY_ADDRESS_FAILURE", messageType:"Error", message:"Error in address selecting"  });
    
  }
}



function* setDeliveryAddressSaga(){
  yield takeLatest(actions.SET_DELIVERY_ADDRESS, setDelivery)
}


function* setUserAddresses(action:any)
{
  try {
    console.log(action,'---->')
    yield put({ type: "SET_USER_ADDRESSES_SUCCESS", addresses: action?.addresses  });
    
  } catch (error) {
    yield put({ type: "SET_USER_ADDRESSES_FAILURE", messageType:"Error", message:"Error in address adding"  });
    
  }

}



function* setUserAddressesSaga(){
  yield takeLatest(actions.SET_USER_ADDRESSES, setUserAddresses)
}


export function* cartSaga() {
  yield all([call(notifyCartSaga), call(setDeliveryAddressSaga), call(setUserAddressesSaga) ]);
}
