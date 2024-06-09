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
            'harga' => $this->faker->randomNumber(2),
            'deskripsi' => $this->faker->text,
            'gambar' => 'https://picsum.photos/200/300',
            'url' => $this->faker->url,
            'kategori_id' => $this->faker->numberBetween(1, 3),
            'tag_id' => $this->faker->numberBetween(1, 7)


        ];
    }
}
