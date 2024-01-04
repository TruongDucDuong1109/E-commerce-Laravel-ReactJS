<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 
        'image', 
        'imagedetails',
        'description',
        'price',
        'discount',
        'priceafterdiscount',
    ];

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }
}
