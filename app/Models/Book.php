<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_id', 'title', 'description',
        'author_id', 'language', 'pages',
        'number_of_copies', 'publication_year',
        'book_image', 'book_thumbnail'
    ];
}
