<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Oder extends Model
{
    //
    protected $table = 'oders';
    protected $fillable = ['cart_id','create_at','status'];
    public function carts()
    {
        return $this->hasMany('App\Carts');
    }
}
