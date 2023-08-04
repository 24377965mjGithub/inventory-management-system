<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GetCurrentUserController; // user controller
use App\Http\Controllers\Api\ChangeDetailsController;
use App\Http\Controllers\Api\GetRoles;
use App\Http\Controllers\Api\SavePhoneNUmberController;
use App\Http\Controllers\Api\SaveEmailController;
use App\Http\Controllers\Api\ChangePasswordController;
use App\Http\Controllers\Api\GetAllProductsController;
use App\Http\Controllers\Api\CreateProductCategoryController;
use App\Http\Controllers\Api\CreateSupplierController;
use App\Http\Controllers\Api\CreateCustomerTypeController;
use App\Http\Controllers\Api\CreateUserRoleController;

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
Route::middleware('auth:sanctum')->get('/products', [GetAllProductsController::class, 'getProducts']);

Route::middleware('auth:sanctum')->post('/createuserrole', [CreateUserRoleController::class, 'createUserRole']);
Route::middleware('auth:sanctum')->post('/editname', [ChangeDetailsController::class, 'changeName']);
Route::middleware('auth:sanctum')->post('/createsupplier', [CreateSupplierController::class, 'createSupplier']);
Route::middleware('auth:sanctum')->post('/createcustomertype', [CreateCustomerTypeController::class, 'createCustomerType']);
Route::middleware('auth:sanctum')->post('/createproductcategory', [CreateProductCategoryController::class, 'createProductCategory']);
Route::middleware('auth:sanctum')->post('/savephonenumber', [SavePhoneNUmberController::class, 'savePhoneNumber']);
Route::middleware('auth:sanctum')->post('/saveemail', [SaveEmailController::class, 'saveEmail']);
Route::middleware('auth:sanctum')->post('/changepassword', [ChangePasswordController::class, 'changePassword']);

Route::get('/getroleslist', [GetRoles::class, 'getRolesLists']);
