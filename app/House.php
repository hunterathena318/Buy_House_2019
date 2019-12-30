<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    //
    protected $table = 'house';
    protected $fillable = ['name','price','description','status','cart_id','category_id'];
    public function category()
    {
        return $this->belongsTo('App\Category');
    }
    public function cart() 
    {
        return $this->belongsTo('App\Cart');
    }
}
