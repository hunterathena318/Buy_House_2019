<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Oder;

class OderController extends Controller
{
    //
    public function getCart()
    {
        return Oder::all();
    }
    public function getCartById(Request $req, $id )
    {
         $oder = Oder::where('id',$req->id)->first();
        return response()->json([
            'message' => $oder
        ]);
    }
    
    public function store(Request $req )
    {
        // $user = Auth::guard("api")->user();
        $oder = Oder::create($req->all());
        return response()->json($oder,201);
    }

    public function update(Request $req, $id)
    {
        $oder = Oder::where('id',$req->id)->first();
        if($oder) {
            if($req->cart_id) $cart->cart_id = $req->cart_id;
            $oder->save();
            return response()->json([
                'message' => $oder
            ],200);
        }
        return response()->json([
            'message' => ('not_found_order')
        ],404);

    }

    public function delete(Oder $oder)
    {
        $oder->delete();
        return respone()->json(null,204);
    }
}
