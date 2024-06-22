<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Kategori;
use App\Models\Product;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
            'id' => 1,
            'name' => 'Test User',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('12345678'),
        ]);

        Kategori::create([
            'id' => 1,
            'nama' => 'Men'
        ]);
        Kategori::create([
            'id' => 2,
            'nama' => 'Woman'
        ]);
        Kategori::create([
            'id' => 3,
            'nama' => 'Unisex'
        ]);

        Tag::create([
            'id' => 1,
            'nama' => 'T-Shirt'
        ]);

        Tag::create([
            'id' => 2,
            'nama' => 'Sweater'
        ]);

        Tag::create([
            'id' => 3,
            'nama' => 'Polo'
        ]);

        Tag::create([
            'id' => 4,
            'nama' => 'Jacket'
        ]);

        Tag::create([
            'id' => 5,
            'nama' => 'Hoodie'
        ]);

        Tag::create([
            'id' => 6,
            'nama' => 'Shoes'
        ]);

        Tag::create([
            'id' => 7,
            'nama' => 'Slippers'
        ]);

        Product::factory(100)->create();
    }
}
