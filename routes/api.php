<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GetCurrentUserController; // user controller
use App\Http\Controllers\Api\ChangeDetailsController;
use App\Http\Controllers\Api\GetRoles;
use App\Http\Controllers\Api\SavePhoneNUmberController;
use App\Http\Controllers\Api\SaveEmailController;
use App\Http\Controllers\Api\ChangePasswordController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/currentuser', [GetCurrentUserController::class, 'getCurrentUser']);
Route::middleware('auth:sanctum')->post('/editname', [ChangeDetailsController::class, 'changeName']);
Route::middleware('auth:sanctum')->post('/savephonenumber', [SavePhoneNUmberController::class, 'savePhoneNumber']);
Route::middleware('auth:sanctum')->post('/saveemail', [SaveEmailController::class, 'saveEmail']);
Route::middleware('auth:sanctum')->post('/changepassword', [ChangePasswordController::class, 'changePassword']);

Route::get('/getroleslist', [GetRoles::class, 'getRolesLists']);
