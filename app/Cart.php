<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    //
    protected $table = 'carts';
    protected $fillable = ['total_price','user_id','create_at','total_price'];
    public function houses()
    {
        return $this->hasMany('App\House');
    }
    public function oder()
    {
        return $this->belongsTo('App\Oder');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
