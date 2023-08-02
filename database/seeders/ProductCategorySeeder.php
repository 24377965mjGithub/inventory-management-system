<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProductCategory;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProductCategory::create([
            'categoryName' => 'box',
            'categoryDescription' => 'lorem ipsum dolor',
            'categoryPackaging' => 'wholesale'
        ]);
    }
}
