<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class GetCurrentUserController extends Controller
{
    public function getCurrentUser() {
        $id = Auth::id();
        $currentUser = User::where(['id' => $id])->first();
        return response()->json($currentUser);
    }
}
