<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\ProductStoreRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage; //php artisan storage:link = php artisan storage:link = http://127.0.0.1:8000/storage/1.jpg

class ProductController extends Controller
{
    public function index()
    {
        // All Product
        $products = Product::all();

        // Return Json Response
        return response()->json([
            'products' => $products
        ], 200);
    }

    public function store(ProductStoreRequest $request)
    {
        try {
            $imagePaths = [];
            $imageDetailsPaths = [];

            // Save main image
            $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
            $imagePaths[] = $imageName;
            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            // Save additional images
            $imageDetails = $request->file('imagedetails');
            foreach ($imageDetails as $imageDetail) {
                $imageNameDetail = Str::random(32) . '.' . $imageDetail->getClientOriginalExtension();
                $imageDetailsPaths[] = $imageNameDetail;
                Storage::disk('public')->put($imageNameDetail, file_get_contents($imageDetail));
            }

            // Create Product with image paths and imagedetails paths
            $product = Product::create([
                'name' => $request->name,
                'image' => $imageName,
                'imagedetails' => $imageDetailsPaths,
                'description' => $request->description,
                'price' => $request->price,
                'discount' => $request->discount,
                'size' => $request->size,
                'color' => $request->color,
                'stock' => $request->stock,
                'priceafterdiscount' => $request->price - ($request->price * $request->discount / 100),
            ]);

            // Return Json Response
            return response()->json([
                'message' => "Product successfully created."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }



    public function show($id)
    {
        // Product Detail 
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'message' => 'Product Not Found.'
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'product' => $product
        ], 200);
    }

    public function update(ProductStoreRequest $request, $id)
    {
        try {
            // Find product
            $product = Product::find($id);
            if (!$product) {
                return response()->json([
                    'message' => 'Product Not Found.'
                ], 404);
            }

            // Update main fields
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            $product->discount = $request->discount;
            $product->size = $request->size;
            $product->color = $request->color;
            $product->stock = $request->stock;
            $product->priceafterdiscount = $request->price - ($request->price * $request->discount / 100);

            // Handle main image update
            if ($request->hasFile('image')) {
                $storage = Storage::disk('public');
                // Delete old main image
                if ($storage->exists($product->image)) {
                    $storage->delete($product->image);
                }
                // Save new main image
                $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
                $product->image = $imageName;
                $storage->put($imageName, file_get_contents($request->image));
            }

            // Handle imagedetails update
            if ($request->hasFile('imagedetails')) {
                $newImageDetailsPaths = [];
                foreach ($request->file('imagedetails') as $newImageDetail) {
                    $imageNameDetail = Str::random(32) . '.' . $newImageDetail->getClientOriginalExtension();
                    $newImageDetailsPaths[] = $imageNameDetail;
                    Storage::disk('public')->put($imageNameDetail, file_get_contents($newImageDetail));
                }

                // Compare old and new imagedetails, delete old ones not in the new list
                foreach ($product->imagedetails as $oldImageDetail) {
                    if (!in_array($oldImageDetail, $newImageDetailsPaths)) {
                        if (Storage::disk('public')->exists($oldImageDetail)) {
                            Storage::disk('public')->delete($oldImageDetail);
                        }
                    }
                }

                // Update imagedetails of the product
                $product->imagedetails = $newImageDetailsPaths;
            }

            // Save the product
            $product->save();

            // Return Json Response
            return response()->json([
                'message' => 'Product successfully updated.'
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => 'Something went really wrong!'
            ], 500);
        }
    }



    public function destroy($id)
    {
        // Detail 
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'message' => 'Product Not Found.'
            ], 404);
        }

        // Public storage
        $storage = Storage::disk('public');

        // Iamge delete
        if ($storage->exists($product->image))
            $storage->delete($product->image);

        // Delete Product
        $product->delete();

        // Return Json Response
        return response()->json([
            'message' => "Product successfully deleted."
        ], 200);
    }
}
