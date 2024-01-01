<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductStoreRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Session;
class CartController extends Controller
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
    public function addToCart (ProductStoreRequest $request){
        try {
            $productId = $request->input('product_id');
            $quantity = $request->input('quantity', 1); // Default quantity is 1

            // Find the product
            $product = Product::find($productId);

            if (!$product) {
                return response()->json(['message' => 'Product not found.'], 404);
            }

            // Add the product to the cart
            $cart = Session::get('cart', []);
            
            // Check if the product is already in the cart
            if (isset($cart[$productId])) {
                // Update quantity if the product is already in the cart
                $cart[$productId]['quantity'] += $quantity;
            } else {
                // Add new product to the cart
                $cart[$productId] = [
                    'name' => $product->name,
                    'price' => $product->price,
                    'quantity' => $quantity,
                ];
            }

            // Update the session with the modified cart
            Session::put('cart', $cart);

            return response()->json(['message' => 'Product added to cart successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Something went wrong.'], 500);
        }

    } 
}
