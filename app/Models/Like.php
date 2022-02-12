<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;
    protected $fillable = [
        'book_id',
        'user_id',
    ];
    public function book()
    {
        $this->belongsTo('Book');
    }
}
