<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function index()
    {
        return Inertia::render('Landing', []);
    }

    public function product()
    {
        $tag = Tag::all();

        $product = Product::query();

        $product->with(['url']);

        if (request('filter')) {
            $product->orderBy('created_at', request('filter') == 'new' ? 'desc' : 'asc');
        } else {
            $product->orderBy('created_at', 'desc');
        }

        if (request('tag')) {
            $product->where('tag_id', request('tag'));
        }

        if (request('category')) {
            $product->where('kategori_id', request('category'));
        }

        return Inertia::render('Product', [
            'tag' => $tag,
            'data' => $product->get(),
        ]);
    }

    public function artikel()
    {
        return Inertia::render('Artikel', []);
    }

    public function store()
    {
        return Inertia::render('Store', []);
    }

    public function service()
    {
        return Inertia::render('Service', []);
    }

    public function login()
    {
        return Inertia::render('Login', []);
    }
}
