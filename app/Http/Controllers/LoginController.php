<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return Response()->json([
                "status" => "gagal",
                "message" => $validator->errors()->first(),
                null
            ], 400, [
                ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8']
            ]);
        }

        $data = [
            "email" => $request->email,
            "password" => $request->password
        ];


        if (Auth::attempt($data)) {

            return Response()->json([
                "status" => "berhasil",
                "message" => "Login Berhasil",
                null
            ], 200, [
                ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8']
            ]);
        }

        return Response()->json([
            "status" => "gagal",
            "message" => "Email atau Password Salah",
            null
        ], 400, [
            ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8']
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect('/login');
    }
}
