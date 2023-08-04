<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CustomerType;

class CreateCustomerTypeController extends Controller
{
    public function createCustomerType(Request $request) {
        $request->validate([
            'customersType' => 'unique:customer_types|required'
        ]);

        if (CustomerType::create([
            'customersType' => $request->customersType
        ])) {
            return "Customer type added successfully";
        }
    }
}
