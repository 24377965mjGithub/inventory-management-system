<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products;

class GetAllProductsController extends Controller
{
    public function getProducts() {
        return response()->json(Products::all());
    }
}
