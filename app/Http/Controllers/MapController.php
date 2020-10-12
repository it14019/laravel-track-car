<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class MapController extends Controller
{
    public function show(Request $request): View
    {
        $amount = $request->get('car-amount');
        return view('map', ['amount' => $amount]);
    }
}
