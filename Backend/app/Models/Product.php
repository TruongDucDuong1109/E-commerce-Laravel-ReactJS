<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
 
class Product extends Model
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
    protected $casts = [
        'imagedetails' => 'array',
    ];
}