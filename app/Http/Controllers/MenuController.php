<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;


class MenuController extends Controller
{
// app/Http/Controllers/MenuController.php
public function index()
{
    $menuItems = [
        ['label' => 'Home', 'link' => '/'],
        ['label' => 'About', 'link' => '/about'],
        ['label' => 'Services', 'link' => '/services'],
        // Add more menu items as needed
    ];

    return response()->json($menuItems);
}
}
