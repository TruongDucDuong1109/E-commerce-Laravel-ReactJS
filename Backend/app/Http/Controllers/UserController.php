<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(User::get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
    
        // Return a JSON response with the newly created user
        return response()->json(['message' => 'Tạo thành công', 'user' => $user], 201);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'requied|string|max:255',
            'email' => 'requied|string|email|max:255|unique:users',
            'password' => 'requied|string|min:8|confirmed',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'validator_error' => $validator->messages()
            ]);
        }
        else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $token = $user->createToken($user->email.'_Token')->plainTextToken;
            return response()->json([
                'status' => 200,
                'username' => $user->name,
                'token' => $token,
                'message' => 'Register successfully'
            ]);
        }
    }
    
}
