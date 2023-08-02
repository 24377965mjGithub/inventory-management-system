<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SavePhoneNUmberController extends Controller
{
    public function savePhoneNumber(Request $request) {
        $request->validate([
            'phonenumber' => ['required', 'string', 'max:13', 'unique:users']
        ]);
        $id = Auth::id();
        
        if (User::where(['id' => $id])->update([
            'phonenumber' => $request->phonenumber
        ])) {
            return 'Phone Number updated successfully.';
        }
    }
}
