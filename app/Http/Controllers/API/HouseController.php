<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\House;

class HouseController extends Controller
{
    //
    public function getHouse()
    {
        return House::all();
    }
    public function getHouseById( Request $request, $id )
    {
        $house = House::where('id', $request->id)->first();
        return response()->json([
            'data' => $house
        ]);
    }
    public function store(Request $request )
    {
        $house = House::create($request->all());
        return response()->json($house,201);
    }

    public function update(Request $request, $id)
    {
        $house = House::where('id', $request->id)->first();
        if($house){
            if($request->name) $house->name = $request->name;
            if($request->price) $house->price = $request->price;
            if($request->desciption) $house->description = $request->description;
            if($request->status) $house->status = $request->status;
            if($request->cart_id) $house->cart_id = $request->cart_id;
           // $house->update($req->except('id'));
            $house->save();
            return response()->json([
                'data'=>$house
            ],200);
        }
        return response()->json([
            'message'=> 'Not found house'
        ],404);
    }

    public function delete(House $house)
    {
        $house->delete();
        return respone()->json(null,204);
    }
}
