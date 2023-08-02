<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ChangePasswordController extends Controller
{
    public function changePassword(Request $request) {
        $request->validate([
            'newPassword' => ['string', 'min:8'],
            'oldPassword' => ['string', 'min:8']
        ]);

        $id = Auth::id();
        // get hashed  password
        $hashedPassword = User::where(['id' => $id])->value('password');

        if (Hash::check($request->oldPassword, $hashedPassword)) {
            if (User::where(['id' => $id])->update(['password' => Hash::make($request->newPassword)])) {
                return "Password changed  successfully.";
            } else {
                return "Something went wrong";
            }
        } else {
            return "Incorrect Password";
        }

    }
}
