<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CreateUserRoleController extends Controller
{
    public function createUserRole(Request $request) {
        $request->validate([
            'roleName' => 'required|unique:roles'
        ]);

        return response()->json($request);
    }
}
