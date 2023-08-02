<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        'productCategoryId',
        'suppliersId',
        'productBarCode',
        'productName',
        'productDescription',
        'productPrice',
        'productQuantity',
        'productCost',
    ];
}
