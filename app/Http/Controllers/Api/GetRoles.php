<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class GetRoles extends Controller
{
    public function getRolesLists() {
        return Role::all();
    }
}
