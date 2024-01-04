<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Cart;

class CartController extends Controller
{
    public function index()
    {
        $cartitems = Cart::where('customer_id', 2)->get();
        return response()->json([
            'status' => 401,
            'cart' => $cartitems
        ], 200);
    }

    public function store(Request $request)
    {
        $product_id = $request->id;
        $quantity = $request->quantity;

        $productCheck = Product::where('id', $product_id)->first();

        if ($productCheck) {
            if (Cart::where('product_id', $product_id)->exists()) {
                return response()->json([
                    'message' => $productCheck . 'Already add to cart'
                ], 409);
            } else {
                $cartitem = new Cart();
                $cartitem->customer_id = 2;
                $cartitem->product_id = $product_id;
                $cartitem->quantity = $quantity;
                $cartitem->save();
                return response()->json([
                    'message' => 'Product Added to Cart'
                ], 201);
            }
        } else {
            return response()->json([
                'message' => 'Product Not Found'
            ], 404);
        }
    }
    public function destroy($id)
    {
        $cartitem = Cart::where('id', $id)->first();
        if ($cartitem) {
            $cartitem->delete();
            return response()->json([
                'message' => 'Product Removed from Cart'
            ], 200);
        } else {
            return response()->json([
                'message' => 'Product Not Found'
            ], 404);
        }
    }
}
