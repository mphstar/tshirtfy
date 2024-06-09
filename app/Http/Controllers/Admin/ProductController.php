<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function create()
    {
        return Inertia::render('Admin/CreateProduct');
    }

    public function product()
    {

        $data = Product::query();

        $data->with(['tag', 'kategori']);

        if (request('search')) {
            $data->where('nama', 'like', '%' . request('search') . '%');
        }

        if (request('tag')) {
            $data->where('tag_id', request('tag'));
        }

        $data->orderBy('created_at', 'desc');

        $tag = Tag::all();

        return Inertia::render('Admin/Product', [
            'data' => $data->get(),
            'tag' => $tag,
            'tag_id' => request('tag'),
            'search' => request('search')
        ]);
    }
}
