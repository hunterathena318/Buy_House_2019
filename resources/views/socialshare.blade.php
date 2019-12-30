@extends('layouts.default')
@section('head')
@section('title','Your Event')

@section('ogTitle',"$info[1]")
@section('ogImage',"$info[0]$info[2]")
@section('ogDescription',"$info[3]")

@section('twitTitle',"$info[1]")
@section('twitImage',"$info[0]$info[2]")
@section('twitDescription',"$info[3]")
@section('urlShare',"$info[4]")

@endsection

@push('style')
  <link href="{!! asset('css/app.css') !!}?ver={{ env('APP_VERSION') }}" rel="stylesheet">
@endpush
@section('content')
    <!--Main content-->
    <div id="socialshare"></div>
@endsection
@push('script')
  <script src="{!! asset('js/appsocial.js') !!}?ver={{ env('APP_VERSION') }}"></script>
@endpush
