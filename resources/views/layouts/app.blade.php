<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Mevent test">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>MunifyEvent</title>

    <!--favicon  icon-->
    <link rel="icon" type="image/png" href="{!! asset('frontend/images/icons/favicon.ico')!!}"/>

    <!-- Bootstrap core CSS -->
    <link href="{!! asset('frontend/vendor/bootstrap/css/bootstrap.min.css')!!}" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="{!! asset('frontend/vendor/fontawesome-free/css/all.min.css')!!}" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

    <!-- Plugin CSS -->
    <link href="{!! asset('frontend/vendor/magnific-popup/magnific-popup.css')!!}" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="{!! asset('frontend/css/creative.min.css')!!}" rel="stylesheet">

</head>
<body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="\">munifyevent</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-light" href="\">Home</a>
                </li>
                @if (Route::has('login'))
                    @auth
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>Welcome {{ Auth::user()->name }} <span class="caret"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                            </form>
                        </div>
                    </li>
                    @else
                    <li class="nav-item">
                        <a class="nav-link text-light js-scroll-trigger" href="{{ route('login') }}">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light js-scroll-trigger" href="{{ route('register') }}">Register
                        </a>
                    </li>
                    @endauth
                @endif
            </ul>
        </div>
    </div>
    </nav>
    <!--Main content-->
    <section id="content">
        @yield('content')
    </section>
@include('layouts.landingpage.footer')
