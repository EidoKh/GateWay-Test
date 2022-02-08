<?php

namespace App\Http\Resources;

use App\Models\Book;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthorResource extends JsonResource
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
            'name' => $this->author_name,
            'about' => $this->author_about,
            'image' => $this->author_image,
            'thumbnail' => $this->author_thumbnail,
            'slug' => $this->slug,
            'number_of_books' => Book::where('author_id', $this->id)->count()
        ];
    }
}
