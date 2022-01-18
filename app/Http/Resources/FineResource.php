<?php

namespace App\Http\Resources;

use App\Models\Loan;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class FineResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'loan_date' => Loan::find($this->loan_id)->loan_date,
            'user' => User::find($this->user_id)->name,
            'fine_date' => $this->fine_date,
            'fine_amount' => $this->fine_amount,
            'loan_id' => $this->loan_id
        ];
    }
}
