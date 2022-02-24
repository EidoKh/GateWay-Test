<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'name',
        'date_from',
        'date_to',
        'stars',
        'room_type',
        'nights',
        'bb',
        'hb',
        'fb',
        'price',
        'notes',
    ];
}
