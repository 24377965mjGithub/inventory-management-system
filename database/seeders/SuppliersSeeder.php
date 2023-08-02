<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Suppliers;

class SuppliersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Suppliers::create([
            'suppliersName' => 'Supplier 1',
            'suppliersPhoneNumber' => '09978972884',
            'suppliersEmail' => 'supplier1@gmail.com'
        ]);
    }
}
