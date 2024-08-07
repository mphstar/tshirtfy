<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ImageAdditionalProduct;
use App\Models\Kategori;
use App\Models\Product;
use App\Models\ProductUrl;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function create()
    {
        $tag = Tag::all();
        $category = Kategori::all();

        return Inertia::render('Admin/CreateProduct', [
            "kategori_id" => request('category'),
            'tag' => $tag,
            'category' => $category
        ]);
    }

    public function product($id)
    {

        $data = Product::query();

        $data->with(['tag', 'kategori', 'additional_image', 'url']);

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
            'kategori_id' => 'required',
            'tag_id' => 'required',
            'harga' => 'required',
            'stok' => 'required|numeric',
            'deskripsi' => 'required',
            'overview' => 'required',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
            'url' => 'required'
        ]);


        $url = json_decode($request->url);
        $imageName = time() . '.' . $request->gambar->extension();

        $request->gambar->move(public_path('images'), $imageName);

        // exclude url
        $data = new Product;
        $data->nama = $request->nama;
        $data->kategori_id = $request->kategori_id;
        $data->tag_id = $request->tag_id;
        $data->harga = $request->harga;
        $data->stok = $request->stok;
        $data->deskripsi = $request->deskripsi;
        $data->overview = $request->overview;
        $data->gambar = $imageName;
        $data->save();


        if ($request->has('additional_image')) {
            ImageAdditionalProduct::where('product_id', $data->id)->delete();
            foreach ($request->additional_image as $key => $value) {
                $imageName = time() . $key . '.' . $value->extension();
                $value->move(public_path('images'), $imageName);

                $dataImage = new ImageAdditionalProduct;
                $dataImage->product_id = $data->id;
                $dataImage->gambar = $imageName;
                $dataImage->save();
            }
        }

        if ($request->has('isDeleteAdditional')) {
            if ($request->isDeleteAdditional == "true") {
                ImageAdditionalProduct::where('product_id', $data->id)->delete();
            }
        }



        foreach ($url as $key => $value) {
            $dataUrl = new ProductUrl();
            $dataUrl->product_id = $data->id;
            $dataUrl->name = $value->nama;
            $dataUrl->url = $value->url;
            $dataUrl->save();
        }

        return response()->json([
            'message' => 'Berhasil menambahkan data',
            'category' => $request->kategori_id
        ]);
    }

    public function edit($id)
    {
        $data = Product::with(['url', 'additional_image'])->where('id', $id)->first();

        $tag = Tag::all();
        $category = Kategori::all();


        return Inertia::render('Admin/CreateProduct', [
            'data' => $data,
            "kategori_id" => request('category'),
            'tag' => $tag,
            'category' => $category
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'nama' => 'required',
            'kategori_id' => 'required',
            'tag_id' => 'required',
            'harga' => 'required',
            'stok' => 'required|numeric',
            'deskripsi' => 'required',
            'overview' => 'required',
            'url' => 'required'
        ]);

        $data = Product::find($request->id);

        $data->nama = $request->nama;
        $data->kategori_id = $request->kategori_id;
        $data->tag_id = $request->tag_id;
        $data->harga = $request->harga;
        $data->stok = $request->stok;
        $data->deskripsi = $request->deskripsi;
        $data->overview = $request->overview;
        if ($request->file('gambar')) {
            $request->validate([
                'gambar' => 'image|mimes:jpeg,png,jpg,gif,svg|max:4096'
            ]);

            $imageName = time() . '.' . $request->gambar->extension();

            $request->gambar->move(public_path('images'), $imageName);

            $data->gambar = $imageName;
        }

        $data->save();

        if ($request->has('additional_image')) {
            ImageAdditionalProduct::where('product_id', $data->id)->delete();
            foreach ($request->additional_image as $key => $value) {
                $imageName = time() . $key . '.' . $value->extension();
                $value->move(public_path('images'), $imageName);

                $dataImage = new ImageAdditionalProduct;
                $dataImage->product_id = $data->id;
                $dataImage->gambar = $imageName;
                $dataImage->save();
            }
        }

        if ($request->has('isDeleteAdditional')) {
            if ($request->isDeleteAdditional == "true") {
                ImageAdditionalProduct::where('product_id', $data->id)->delete();
            }
        }

        $url = json_decode($request->url);

        ProductUrl::where('product_id', $data->id)->delete();

        foreach ($url as $key => $value) {
            $dataUrl = new ProductUrl();
            $dataUrl->product_id = $data->id;
            $dataUrl->name = $value->nama;
            $dataUrl->url = $value->url;
            $dataUrl->save();
        }


        return response()->json([
            'message' => 'Berhasil mengubah data',
            'category' => $request->kategori_id
        ]);
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id' => 'required'
        ]);

        $data = Product::find($request->id);

        $data->delete();

        return response()->json([
            'message' => 'Berhasil menghapus data'
        ]);
    }
}
