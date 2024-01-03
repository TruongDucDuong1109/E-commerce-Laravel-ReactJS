<?php
 
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->json('imagedetails')->nullable();
            $table->text('description');
            $table->float('price')->nullable();
            $table->float('discount')->nullable();
            $table->float('priceafterdiscount')->nullable();
            $table->string('size')->nullable();
            $table->string('color')->nullable();
            $table->integer('stock')->nullable();
            $table->timestamps();
        });
    }
 
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};