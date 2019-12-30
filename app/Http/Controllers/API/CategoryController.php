<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Category;
use App\User;
use App\House;

class CategoryController extends Controller
{
    //
    public function getCategory()
    {
        // $house = House::where('category_id')->all()
        return Category::all();
    }
    public function getCategoryById(Request $req, $id )
    {   
         $category = Category::where('id',$req->id)->first();
         $category->house();
        return response()->json([
            'data' => $category
        ]);
    }
    
    public function store(Request $req )
    {
        // $user = Auth::guard("api")->user();
        $category = Category::create($req->all());
        return response()->json($category,201);
    }

    public function update(Request $req, $id)
    {
        $category = Category::where('id',$req->id)->first();
        if($category) {
            if($req->name) $category->name = $req->name;
            $category->save();
            return response()->json([
                'data' => $category
            ],200);
        }
        return response()->json([
            'message' => ('not_found_category')
        ],404);

    }

    public function delete($id)
    {
         $category = Category::findOrFail($id);
        if($category)
        $category->delete(); 
        else
        return response()->json(error);
    return response()->json(null); 
    }
}
