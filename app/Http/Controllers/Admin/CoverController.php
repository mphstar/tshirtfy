<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\CoverLanding;

class CoverController extends Controller
{
    public function cover()
    {
        $data = CoverLanding::orderBy('created_at', 'desc')->get();
        return Inertia::render('Admin/Cover', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/CreateCover');
    }

    public function store(Request $request)
    {
        $request->validate([
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ]);


        $imageName = time() . '.' . $request->gambar->extension();

        $request->gambar->move(public_path('cover'), $imageName);

        // exclude url
        $data = new CoverLanding;
        $data->gambar = $imageName;
        $data->save();


        return response()->json([
            'message' => 'Berhasil menambahkan data',
        ]);
    }

    public function edit($id)
    {
        $data = CoverLanding::where('id', $id)->first();
        
        return Inertia::render('Admin/CreateCover', [
            'data' => $data,
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required',
        ]);

        $data = CoverLanding::find($request->id);

        if ($request->file('gambar')) {
            $request->validate([
                'gambar' => 'image|mimes:jpeg,png,jpg,gif,svg|max:4096'
            ]);

            $imageName = time() . '.' . $request->gambar->extension();

            $request->gambar->move(public_path('cover'), $imageName);

            $data->gambar = $imageName;
        }

        $data->save();

        return response()->json([
            'message' => 'Berhasil mengubah data',
        ]);
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id' => 'required'
        ]);

        $data = CoverLanding::find($request->id);

        $data->delete();

        return response()->json([
            'message' => 'Berhasil menghapus data'
        ]);
    }
}
