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

    public function product($id)
    {

        $data = Product::query();

        $data->with(['tag', 'kategori']);

        $data->where('kategori_id', $id);

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
            'kategori_id' => $id,
            'tag' => $tag,
            'tag_id' => request('tag'),
            'search' => request('search')
        ]);
    }

    public function store(Request $request)
    {

        $request->validate([
            'nama' => 'required',
            'harga' => 'required|integer',
            'kategori_id' => 'required',
            'tag_id' => 'required',
            'deskripsi' => 'required',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        Product::create($request->all());

        return redirect()->route('admin.product', ['id' => $request->kategori_id]);
    }
}
