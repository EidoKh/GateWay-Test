<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AuthorResource;
use App\Http\Resources\BookResource;
use App\Http\Resources\EmptyResource;
use App\Models\Author;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class AuthorController extends Controller
{
    public static function getSlug($slug)
    {
        $index = 1;
        $new_slug = $slug;
        if (Author::where('slug', $slug)->count()) {
            while (Author::where('slug', $new_slug)->count()) {
                $new_slug = $slug . '-' . $index;
                $index++;
            }
        }
        return $new_slug;
    }
    public function getDetails($slug)
    {
        $author = Author::where('slug', $slug)->first();
        return new AuthorResource($author);
    }
    public function authorBooks($author_id)
    {
        return BookResource::collection(Book::where('author_id', $author_id)->get());
    }

    public function getAll(Request $request)
    {
        return AuthorResource::collection(
            Author::where('author_name', 'LIKE', '%' . $request->search . '%')
                ->get()
        );
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AuthorResource::collection(Author::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('image')) {
            Log::info($request->all());
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/authors_images'), $imageName);
        } else {
            $imageName = 'default.jpg';
        }
        $author = new Author();
        $author->author_name = $request->author_name;
        $author->author_about = $request->about_author;
        $author->author_image = $imageName;
        $author->slug = self::getSlug(Str::slug($request->author_name, '-'));
        $author->save();
        return response()->noContent();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Author $author)
    {
        return new EmptyResource($author);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Author $author)
    {
        $path = public_path() . '/images/authors_images/';
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            //code for remove old image
            $file_old = $path . $request->author_image;
            unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/authors_images/'), $imageName);
        } else {
            $imageName = $request->author_image;
        }
        $author->update([
            'author_name' => $request->author_name,
            'author_about' => $request->author_about,
            'slug' => self::getSlug(Str::slug($request->author_name, '-')),
            'author_image' => $imageName
        ]);

        return new EmptyResource($author);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Author $author)
    {
        $author->delete();
        return response()->noContent();
    }
}
