<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Like;

class Book extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_id', 'title', 'description',
        'author_id', 'language', 'pages',
        'number_of_copies', 'publication_year',
        'book_image', 'book_thumbnail', 'slug', 'price'
    ];
    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
