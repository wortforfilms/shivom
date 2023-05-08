import { all, call } from 'redux-saga/effects'
import { authSaga } from './auth/saga'
import { cartSaga } from './cart/saga'
import { deviceSaga } from './device/saga'
import { languageSaga } from './language/saga'
import { localSaga } from './local/saga'
import { notificationsSaga } from './notification/saga'
import { profileSaga } from './profile/saga'
import { projectSaga } from './project/saga'
import { shopSaga } from './shop/saga'
import { subscriptionSaga } from './subscription/saga'
import { userBoardSaga } from './user_board/saga'
import { messagingSaga } from './messaging/saga'
import { openingsSaga } from './openings/saga'
import { _walletSaga } from './wallet/saga'
import { panelSaga } from './panels/saga'



function* rootSaga() {
  yield all([
    call(authSaga),
    call(deviceSaga),
    call(notificationsSaga),
    call(profileSaga),
    call(shopSaga),
    call(languageSaga),
    call(cartSaga),
      call(projectSaga),
        call(subscriptionSaga),
        call(localSaga),
        call(userBoardSaga),
        call(messagingSaga),
        call(openingsSaga),
        call(_walletSaga),
        call(panelSaga),
        // call(localizeSaga)
  ])
}

export default rootSaga