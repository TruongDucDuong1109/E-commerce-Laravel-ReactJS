<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 't-shirt 1',
                'image' => 'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852113_1280.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 20,
                'discount' => 0,
                'priceafterdiscount' => 20,
                'size' => 'M',
                'color' => 'red',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 2',
                'image' => 'https://cdn.pixabay.com/photo/2020/06/05/15/21/yellow-5263498_640.jpg',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 50,
                'discount' => 0,
                'priceafterdiscount' => 50,
                'size' => 'M',
                'color' => 'yellow',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 3',
                'image' => 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_640.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 40,
                'discount' => 0,
                'priceafterdiscount' => 40,
                'size' => 'XL',
                'color' => 'white',
                'stock' => 999
            ],
            [
                'name' => 'hoddie 1',
                'image' => 'https://cdn.pixabay.com/photo/2016/03/27/18/49/man-1283576_1280.jpg',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 90,
                'discount' => 0,
                'priceafterdiscount' => 90,
                'size' => 'L',
                'color' => 'green',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 5',
                'image' => 'https://cdn.pixabay.com/photo/2020/12/18/03/27/clothing-5841103_640.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 13,
                'discount' => 0,
                'priceafterdiscount' => 13,
                'size' => 'S',
                'color' => 'black',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 6',
                'image' => 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_640.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 40,
                'discount' => 0,
                'priceafterdiscount' => 40,
                'size' => 'XL',
                'color' => 'white',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 7',
                'image' => 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_640.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 40,
                'discount' => 0,
                'priceafterdiscount' => 40,
                'size' => 'XL',
                'color' => 'white',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 8',
                'image' => 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_640.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 40,
                'discount' => 0,
                'priceafterdiscount' => 40,
                'size' => 'XL',
                'color' => 'white',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 9',
                'image' => 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_640.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 40,
                'discount' => 0,
                'priceafterdiscount' => 40,
                'size' => 'XL',
                'color' => 'white',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 10',
                'image' => 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_640.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 40,
                'discount' => 0,
                'priceafterdiscount' => 40,
                'size' => 'XL',
                'color' => 'white',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 11',
                'image' => 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_640.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 40,
                'discount' => 0,
                'priceafterdiscount' => 40,
                'size' => 'XL',
                'color' => 'white',
                'stock' => 999
            ],
            [
                'name' => 't-shirt 12',
                'image' => 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_640.png',
                'imagedetails' => null,
                'description' => 'lorem ipsum',
                'price' => 40,
                'discount' => 0,
                'priceafterdiscount' => 40,
                'size' => 'XL',
                'color' => 'white',
                'stock' => 999
            ],
        ];
        Product::insert($products);
    }
}
