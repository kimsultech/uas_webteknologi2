<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lagu;

class LaguController extends Controller
{
    function index() {
        $lagus = Lagu::latest()->get();

        return inertia('Lagu/Index', [
            'lagus' => $lagus
        ]);
    }

    function show($id) {
        if ($id == -1) {
            $lagu = Lagu::first();
        } else {
            $lagu = Lagu::where('id', $id)->first();
        }

        return inertia('Lagu/Show', [
            'lagu' => $lagu
        ]);
    }

    public function create()
    {
        return inertia('Lagu/Create');
    }

    public function store(Request $request)
    {
        \Validator::make($request->all(), [
            'title' => ['required'],
            'subtitle' => ['required'],
            'description' => ['required'],
            'cover' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ])->validate();

        $input = $request->all();
        
        $image_path = $request->file('cover')->store('cover', ['disk' => 'publik']);

        Lagu::insert([
            'title' => $input['title'],
            'subtitle' => $input['subtitle'],
            'description' => $input['description'],
            'cover' => $image_path,
        ]);
    
        return redirect()->route('lagu.index')->with('success', 'Lagu Disimpan!');
    }

    function edit($id) {
        $lagu = Lagu::where('id', $id)->first();

        return inertia('Lagu/Edit', [
            'lagu' => $lagu
        ]);
    }

    public function update(Request $request)
    {
        \Validator::make($request->all(), [
            'title' => ['required'],
            'subtitle' => ['required'],
            'description' => ['required'],
            'cover' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ])->validate();

        $input = $request->all();
        
        $image_path = $request->file('cover')->store('cover', ['disk' => 'publik']);

        Lagu::where('id', $input['id'])->update([
            'title' => $input['title'],
            'subtitle' => $input['subtitle'],
            'description' => $input['description'],
            'cover' => $image_path,
        ]);
    
        return redirect()->route('lagu.index')->with('success', 'Lagu Diubah!');
    }

    function destroy($id) {
        Lagu::where('id', $id)->delete();

        return redirect()->route('lagu.index')->with('success', 'Lagu Dihapus!');
    }
}
