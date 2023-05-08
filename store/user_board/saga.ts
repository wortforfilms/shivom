import { all, call, put, takeLatest } from "redux-saga/effects";

import * as actions from './type'



function*  feedRental_bookings(action:any){
    try {
        const{rental_bookings}=action
        yield put({ type: "SET_USER_RENTAL_BOOKINGS_SUCCESS", rental_bookings });
        
    } catch (error) {
    yield put({ type: "SET_USER_RENTAL_BOOKINGS_FAILURE", error });
        
    }

}

function* set_user_rental_bookings(){
    yield takeLatest(actions.SET_USER_RENTAL_BOOKINGS, feedRental_bookings)
}

function*  feedService_bookings(action:any){
    try {
        const{service_bookings}=action
        yield put({ type: "SET_USER_SERVICE_BOOKINGS_SUCCESS", service_bookings });
        
    } catch (error) {
    yield put({ type: "SET_USER_SERVICE_BOOKINGS_FAILURE", error });
        
    }

}

function* set_user_service_bookings(){
    yield takeLatest(actions.SET_USER_SERVICE_BOOKINGS, feedService_bookings)
}



function*  feedItem_sales(action:any){
    try {
        const{item_sales}=action
        yield put({ type: "SET_USER_ITEM_SALES_SUCCESS", item_sales });
        
    } catch (error) {
    yield put({ type: "SET_USER_ITEM_SALES_FAILURE", error });
        
    }

}

function* set_user_item_sales(){
    yield takeLatest(actions.SET_USER_ITEM_SALES, feedItem_sales)
}

function*  feedRentals(action:any){
    try {
        const{rentals}=action
        yield put({ type: "SET_USER_RENTALS_SUCCESS", rentals });
        
    } catch (error) {
    yield put({ type: "SET_USER_RENTALS_FAILURE", error });
        
    }

}

function* set_user_rentals(){
    yield takeLatest(actions.SET_USER_RENTALS, feedRentals)
}


function*  feedPurchases(action:any){
    try {
        const{purchases}=action
        yield put({ type: "SET_USER_PURCHASES_SUCCESS", purchases });
        
    } catch (error) {
    yield put({ type: "SET_USER_PURCHASES_FAILURE", error });
        
    }

}

function* set_user_purchases(){
    yield takeLatest(actions.SET_USER_PURCHASES, feedPurchases)
}

function*  feedHirings(action:any){
    try {
        const{hirings}=action
        yield put({ type: "SET_USER_HIRINGS_SUCCESS", hirings });
        
    } catch (error) {
    yield put({ type: "SET_USER_HIRINGS_FAILURE", error });
        
    }

}

function* set_user_hirings(){
    yield takeLatest(actions.SET_USER_HIRINGS, feedHirings)
}


function*  feedProjects(action:any){
    try {
        const{projects}=action
        yield put({ type: "SET_USER_STORIES_SUCCESS", projects });
        
    } catch (error) {
    yield put({ type: "SET_USER_STORIES_FAILURE", error });
        
    }

}

function* set_user_projects(){
    yield takeLatest(actions.SET_USER_STORIES, feedProjects)
}

function*  feedStories(action:any){
    try {
        const{stories}=action
        yield put({ type: "SET_USER_STORIES_SUCCESS", stories });
        
    } catch (error) {
    yield put({ type: "SET_USER_STORIES_FAILURE", error });
        
    }

}

function* set_user_stories(){
    yield takeLatest(actions.SET_USER_STORIES, feedStories)
}

function*  feedApplications(action:any){
    try {
        const{applications}=action
        yield put({ type: "SET_USER_APPLICATIONS_SUCCESS", applications });
        
    } catch (error) {
    yield put({ type: "SET_USER_APPLICATIONS_FAILURE", error });
        
    }

}

function* set_user_applications(){
    yield takeLatest(actions.SET_USER_APPLICATIONS, feedApplications)
}


function*  feedHodOpenings(action:any){
    try {
        const{hod_openings}=action
        yield put({ type: "SET_USER_HOD_OPENINGS_SUCCESS", hod_openings });
        
    } catch (error) {
    yield put({ type: "SET_USER_HOD_OPENINGS_FAILURE", error });
        
    }

}

function* set_user_hod_openings(){
    yield takeLatest(actions.SET_USER_HOD_OPENINGS, feedHodOpenings)
}


function*  feedCrewOpenings(action:any){
    try {
        const{crew_openings}=action
        yield put({ type: "SET_USER_CREW_OPENINGS_SUCCESS", crew_openings });
        
    } catch (error) {
    yield put({ type: "SET_USER_CREW_OPENINGS_FAILURE", error });
        
    }

}

function* set_user_crew_openings(){
    yield takeLatest(actions.SET_USER_CREW_OPENINGS, feedCrewOpenings)
}


function*  feedCastOpenings(action:any){
    try {
        const{cast_openings}=action
        yield put({ type: "SET_USER_CAST_OPENINGS_SUCCESS", cast_openings });
        
    } catch (error) {
    yield put({ type: "SET_USER_CAST_OPENINGS_FAILURE", error });
        
    }

}

function* set_user_cast_openings(){
    yield takeLatest(actions.SET_USER_CAST_OPENINGS, feedCastOpenings)
}




function*  feedCoins(action:any){
    try {
        const{tlp_coins}=action
        yield put({ type: "SET_USER_TLP_COINS_SUCCESS", tlp_coins });
        
    } catch (error) {
    yield put({ type: "SET_USER_TLP_COINS_FAILURE", error });
        
    }

}
function* set_user_tlp_coins(){
    yield takeLatest(actions.SET_USER_TLP_COINS, feedCoins)
}


export function* userBoardSaga(){
    yield all([
        call(set_user_tlp_coins),
        call(set_user_cast_openings),
        call(set_user_crew_openings),
        call(set_user_hod_openings),
        call(set_user_applications),
        call(set_user_projects),
        call(set_user_hirings),
        call(set_user_purchases),
        call(set_user_rentals),
        call(set_user_item_sales),
        call(set_user_service_bookings),
        call(set_user_rental_bookings)
    ])
}