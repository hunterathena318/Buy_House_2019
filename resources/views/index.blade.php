@extends('layouts.default')
@section('head')
  @include('layouts.landingpage.header')
@endsection
@section('title','Product')
@push('style')
  <link href="{!! asset('css/app.css') !!}?ver={{ env('APP_VERSION') }}" rel="stylesheet">
@endpush
@section('content')
    <!--Main content-->
    <div id="root"></div>
@endsection
@push('script')
  <script src="{!! asset('js/app.js') !!}?ver={{ env('APP_VERSION') }}"></script>
@endpush
