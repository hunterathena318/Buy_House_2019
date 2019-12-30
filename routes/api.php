<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//category-An
Route::get('category','API\\CategoryController@getCategory');
Route::get('category/{id}','API\\CategoryController@getCategoryById');
Route::post('category','API\\CategoryController@store');
Route::put('category/{id}','API\\CategoryController@update');
Route::delete('category/{id}','API\\CategoryController@delete');

Route::group([
    'middleware' => 'jwt.auth'
], function () {

});


//loginBy An 2019
Route::post('login','API\AuthController@login');
Route::post('register','API\AuthController@register');
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('user', 'API\AuthController@getUserInfo');
    Route::get('allUser', 'API\AuthController@getAllUser');
    Route::post('logout', 'API\AuthController@logout');
});

//Product House
Route::get('house','API\\HouseController@getHouse');
Route::get('house/{id}','API\\HouseController@getHouseById');
Route::post('house','API\\HouseController@store');
Route::put('house/{id}','API\\HouseController@update');
Route::delete('house/{id}','API\\HouseController@delete');
//cart
Route::get('cart','API\\CartController@getCart');
Route::get('cart/{id}','API\\CartController@getCartById');
Route::post('cart','API\\CartController@store');
Route::put('cart/{id}','API\\CartController@update');
Route::delete('cart/{id}','API\\CartController@delete');
