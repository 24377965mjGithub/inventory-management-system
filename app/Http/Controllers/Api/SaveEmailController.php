<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SaveEmailController extends Controller
{
    public function saveEmail(Request $request) {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users']
        ]);

        $id = Auth::id();

        if (User::where(['id' => $id])->update(['email' => $request->email])) {
            return "Email updated successfully";
        }
    }
}
