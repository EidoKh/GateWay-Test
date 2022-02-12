<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\EmptyResource;
use App\Http\Resources\SingleBookResource;
use App\Models\Book;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class BookController extends Controller
{
    public static function getSlug($slug)
    {
        $index = 1;
        $new_slug = $slug;
        if (Book::where('slug', $slug)->count()) {
            while (Book::where('slug', $new_slug)->count()) {
                $new_slug = $slug . '-' . $index;
                $index++;
            }
        }
        return $new_slug;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BookResource::collection(Book::all());
    }
    public function getAll(Request $request)
    {
        if ($request->has('lang') && $request->lang != "")
            return BookResource::collection(
                Book::where('title', 'LIKE', '%' . $request->search . '%')
                    ->where('language', $request->lang)->get()
            );
        return BookResource::collection(
            Book::where('title', 'LIKE', '%' . $request->search . '%')->get()
        );
    }
    public function getDetails($slug)
    {
        $book[] = Book::where('slug', $slug)->first();
        // return $t;
        return BookResource::collection($book);
    }
    public function mostLiked()
    {
        return BookResource::collection(Book::withCount('likes')->orderByDesc('likes_count')->limit(7)->get());
    }
    public function newBooks()
    {
        return BookResource::collection(Book::latest()->get());
    }
    public function categoryBooks($category_id)
    {
        return BookResource::collection(Book::where('category_id', $category_id)->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            $image->move(public_path('/images/books_images'), $imageName);
        } else {
            $imageName = 'default.jpg';
        }
        $book = new Book();
        $book->title = $request->title;
        $book->description = $request->description;
        $book->category_id = $request->category_id;
        $book->author_id = $request->author_id;
        $book->language = $request->language;
        $book->pages = $request->pages;
        $book->number_of_copies = $request->number_of_copies;
        $book->publication_year = $request->publication_year;
        $book->price = $request->price;
        $book->book_image = $imageName;

        $book->slug = self::getSlug(Str::slug($request->title, '-'));
        $book->save();
        return response()->noContent();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        return new CategoryResource($book);
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
    public function update(Request $request, Book $book)
    {
        Log::info($request->all());
        $path = public_path() . '/images/books_images/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->book_image;
            unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/books_images/'), $imageName);
        } else {
            $imageName = $request->book_image;
        }
        $book->update([
            'book_image' => $imageName,
            "title" => $request->title,
            "description" => $request->description,
            "category_id" => $request->category_id,
            "author_id" => $request->author_id,
            "language" => $request->language,
            "pages" => $request->pages,
            "number_of_copies" => $request->number_of_copies,
            "publication_year" => $request->publication_year,
            "price" => $request->price,
            'slug' => self::getSlug(
                Str::slug($request->title, '-')
            )
        ]);

        return new EmptyResource($book);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        $book->delete();

        return response()->noContent();
    }
}
