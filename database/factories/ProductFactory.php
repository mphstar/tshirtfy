<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->name,
            'harga' => $this->faker->numberBetween(10000, 100000),
            'stok' => $this->faker->numberBetween(1, 100),
            'deskripsi' => $this->faker->text,
            'overview' => $this->faker->text,
            'gambar' => '1719057780.png',
            'kategori_id' => $this->faker->numberBetween(1, 3),
            'tag_id' => $this->faker->numberBetween(1, 7)
        ];
    }
}
