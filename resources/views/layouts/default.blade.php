<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    @yield('head')
    <!-- <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHUJz7haunPQO8rj13C7Ux97eYTpsBI9k 	 ">
    </script> -->
    <script>
      var url_api = "{{ env("APP_URL") }}";
      var GOOGLE_APP_ID = "{{ env("GOOGLE_APP_ID") }}";
      var _scktprt = "{{ env("WS_PORT",8880) }}";
      var app_version = "{{ env("APP_VERSION") }}";
      var flash_token = null;
      var flash_success = null;
      var flash_error = null;
      var flash_warning= null;
      var flash_info = null;
      var MIN_WIDTH_FEATUREIMG = "{{ env("MIN_WIDTH_FEATUREIMG") }}";
      var MIN_HEIGHT_FEATUREIMG = "{{ env("MIN_HEIGHT_FEATUREIMG") }}";
      var POLL_DISABLED = "{{ env("POLL_DISABLED") }}";
      var SURVEY_DISABLED = "{{ env("SURVEY_DISABLED") }}";
      var CHATBOT_DISABLED = "{{ env("CHATBOT_DISABLED", true) }}";
      var CHATBOT_SERVER_URL = "{{ env("CHATBOT_SERVER_URL") }}";
      @if(Session::has('token'))
      var flash_token = "{{session('token')}}"
      @endif
      @if(Session::has('success'))
      var flash_success = "{{session('success')}}"
      @endif
      @if(Session::has('error'))
      var flash_error = "{{session('error')}}"
      @endif
      @if(Session::has('warning'))
      var flash_warning = "{{session('warning')}}"
      @endif
      @if(Session::has('info'))
      var flash_info = "{{session('info')}}"
      @endif
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <title>Vip - @yield('title')</title>
    <!--Facebook-->
    <meta property="og:title" content="@yield('ogTitle')" >
    <meta property="og:image" content="@yield('ogImage')" >
    <meta name="og:description" content="@yield('ogDescription')">
      <!-- iOS -->
    <meta property="al:ios:url" content="@yield('urlShare')" />
    <meta property="al:ios:app_name" content="com.papagroup.mplify-mobile" />
    <meta property="al:ios:app_store_id" content="1441381296" />
    
      <!-- Android -->
    <meta property="al:android:package" content="papagroup.meventmobile" />
    <meta property="al:android:url" content="@yield('urlShare')" />
    <meta property="al:android:app_name" content="mplify Events" />
    <!--End Facebook-->
    <!--Twitter-->
    <meta name="twitter:title" content="@yield('twitTitle')" >
    <meta name="twitter:image"content="@yield('twitImage')" >
    <meta name="twitter:description"content="@yield('twitDescription')" >
    <!--End Twitter-->
    
  </head>
  <body id="page-top">
    @stack('style')
    @yield('navbar')
    <div class="main-content">
      @yield('content')
    </div>
    @stack('script')
  </body>
</html>
