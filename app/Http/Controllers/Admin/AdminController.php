<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $tag = Tag::with('product')->get();
        

        return Inertia::render('Admin/Home', [
            'tag' => $tag
        ]);
    }
}
