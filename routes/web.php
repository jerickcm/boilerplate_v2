<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/maintenance', function () {
    return Inertia::render('Maintenance');
})->name('maintainance');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});