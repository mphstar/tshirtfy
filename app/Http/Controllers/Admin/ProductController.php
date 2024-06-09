<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
        return Inertia::render('Admin/Product');
    }

}
