@extends('layouts.default')
@section('head')
  @include('layouts.dashboard.header')
@endsection
@section('title', 'Dashboard')
@section('navbar')
  @include('layouts.dashboard.navbar')
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <div id="eheader"></div>
                </div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div id="app"></div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('footer')
  @include('layouts.dashboard.footer')
@endsection
@push('script')
  <!-- Use mix() of laravel -->
  <script src="{!! asset('js/app.js') !!}"></script>
@endpush
