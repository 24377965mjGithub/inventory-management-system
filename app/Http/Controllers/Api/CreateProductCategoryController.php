<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductCategory;

class CreateProductCategoryController extends Controller
{
    public function createProductCategory(Request $request) {
        $request->validate([
            'categoryName' => 'required|unique:product_categories',
            'categoryDescription' => 'required',
            'categoryPackaging' => 'required'
        ]);

        if (ProductCategory::create([
            'categoryName' => $request->categoryName,
            'categoryDescription' => $request->categoryName,
            'categoryPackaging' => $request->categoryPackaging,
        ])) {
            return "Product category added successfully";
        }
    }
}
