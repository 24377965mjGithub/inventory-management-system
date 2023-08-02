<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ChangeDetailsController extends Controller
{
    public function changeName(Request $request) {
        $id = Auth::id();
        $request->validate([
            'firstname' => 'required',
            'middlename'=> 'required',
            'lastname'=> 'required'
        ]);

        if (User::where(['id' => $id])->update([
            'firstname' => $request->firstname,
            'middlename' => $request->middlename,
            'lastname' => $request->lastname
        ])) {
            return 'Name updated successfully.';
        }
    }
}
