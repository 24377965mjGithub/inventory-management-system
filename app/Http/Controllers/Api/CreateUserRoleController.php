<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class CreateUserRoleController extends Controller
{
    public function createUserRole(Request $request) {
        $request->validate([
            'roleName' => 'required|unique:roles'
        ]);

        if (Role::create([
            'roleName' => $request->roleName
        ])) {
            return "User role added successfully";
        }
    }
}
