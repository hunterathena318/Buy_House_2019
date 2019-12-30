<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Cart;

class CartController extends Controller
{
    //by An
    public function getCart()
    {
        return Cart::all();
    }
    public function getCartById(Request $req, $id )
    {
         $cart = Cart::where('id',$req->id)->first();
        return response()->json([
            'data' => $cart
        ]);
    }
    
    public function store(Request $req )
    {
        // $user = Auth::guard("api")->user();
        $cart = Cart::create($req->all());
        return response()->json($cart,201);
    }

    public function update(Request $req, $id)
    {
        $cart = Cart::where('id',$req->id)->first();
        if($cart) {
            if($req->name) $cart->house_id = $req->house_id;
            if($req->name) $cart->user_id = $req->user_id;
            
            $cart->save();
            return response()->json([
                'data' => $cart
            ],200);
        }
        return response()->json([
            'message' => ('not_found_category')
        ],404);

    }

    public function delete(Category $category)
    {
        $category->delete();
        return respone()->json(null,204);
    }
}
