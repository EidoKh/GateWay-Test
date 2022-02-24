<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'date',
        'case_code',
        'client_name',
        'phone',
        'adults',
        'children',
        'infants',
        'city',
        'agent_id',
        'notes', 'statues'
    ];
}
