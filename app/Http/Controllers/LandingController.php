<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Product', []);
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
