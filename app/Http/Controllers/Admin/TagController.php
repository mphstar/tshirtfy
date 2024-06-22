<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagController extends Controller
{
    public function index()
    {

        $data = Tag::query();
        if (request('search')) {
            $data->where('nama', 'like', '%' . request('search') . '%');
        }

        $data->orderBy('created_at', 'desc');

        return Inertia::render('Admin/Tag', [
            'data' => $data->get(),
            'search' => request('search')
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/CreateTag');
    }

    public function edit($id)
    {
        $data = Tag::find($id);

        return Inertia::render('Admin/CreateTag', [
            'data' => $data
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required'
        ]);

        Tag::create($request->all());

        return Response()->json([
            'message' => 'Berhasil menambahkan data'
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'nama' => 'required'
        ]);

        $data = Tag::find($request->id);

        $data->update($request->all());

        return Response()->json([
            'message' => 'Berhasil mengubah data'
        ]);
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id' => 'required'
        ]);
        
        $data = Tag::find($request->id);

        $data->delete();

        return Response()->json([
            'message' => 'Berhasil menghapus data'
        ]);
    }
}
