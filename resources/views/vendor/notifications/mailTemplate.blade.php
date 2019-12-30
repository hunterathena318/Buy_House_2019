<div style="background-color:#F6F6F6;">
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
        <style>
            @media only screen and (max-width: 600px) {
                .inner-body {
                    width: 100% !important;
                }

                .footer {
                    width: 100% !important;
                }
            }

            @media only screen and (max-width: 500px) {
                .button {
                    width: 100% !important;
                }
            }
            }
        </style>

        <div class="wrapper" style="
                                    max-width: 500px;
                                    margin: auto;
                                    "cellpadding="0" cellspacing="0">
            <div class="content-logo"  cellpadding="0" cellspacing="0" style="  padding-top: 48px;
                                                                                text-align: center;
                                                                                padding-bottom: 46px;">
                <a href="#" style="text-decoration: none;
                display: inline-flex;
                text-align: center;
                align-items: center;
                justify-content: center;">
                    <img src="{!! asset('/images/logo_mail.png')!!}" >
                    <span
                        style="font-size: 30px;
                        color:#3490dc;
                        margin: auto 0;" >
                            <strong font-weight: bold;>mplify</strong> Events</span>
                </a>
            </div>
            <div class="content-background" style="padding-left: 32px;
                                                background-color: #fff;
                                                padding-right: 32px;
                                                padding-top: 40px;
                                                padding-bottom: 40px;"
                                                >
            <div class="header-main">
                @isset($mailTitle)
                    <div class="title-main"
                        style="text-align: center;
                        font-size:20px; padding-bottom:10px;
                        border-bottom: 1px solid #B4B4B4;
                        font-weight:bold;">
                            <p>
                            <span>{{ $mailTitle ?? '' }}<span>
                            @isset ($eventName)
                            <span> - {{ $eventName }}<span>
                            @endisset
                            </p>
                    </div>
                @endisset
            </div>
            <div class="content-main" style="margin: 40px 0px">
                @isset($contentMore)
                    @if($contentMore == "congratulation")
                        <p>Congratulations!</p>
                    @else
                        <p>Dear
                            <span
                                style="font-weight:bold;">
                                    {{ $name ?? '' }}
                            </span>
                        </p>
                    @endif
                @endisset
                @isset($contentMore)
                    @if($contentMore == "Invitation")
                        <p><span style="font-weight:bold;"> {{ $organizerName ?? '' }}  </span> is using mplify Events to invite you to <span style="font-weight:bold;"> {{ $eventName ?? '' }} </span> as following details:</p>
                    @elseif ( $contentMore == "eventConfirmation" )
                        <p>Greatings from mplify Events.
                        This email is to confirm you have successfully registered {{ $eventName ?? '' }} by {{ $organizerName ?? '' }} as following details:
                        </p>
                    @elseif ( $contentMore == "resetPassword" )
                        <p>
                        You have requested to reset your password to access to mplify Events. Please click on the below button to complete the process.
                        </p>
                    @elseif ( $contentMore == "congratulation" )
                        <p>Your password has been changed successfully.</p>
                        <p>If you did not change your password, please protect your account immediately.</p>
                    @elseif ( $contentMore == "checkedInEvent")
                        <p> You have been checked-in the event : {{ $eventName ?? '' }}</p>
                    @endif
                @endisset
                @isset($textTitle)
                    <p>Dear {{ $textTitle ?? '' }} </p>
                @endisset
                <p>
                  @isset($root_url)
                      @php
                          $APP_URL = $root_url
                      @endphp
                  @endisset
                  @isset($eventImage)
                      @php
                      $url = explode("/",$eventImage)
                      @endphp
                      @if($url[1] == "storage")
                        <img src={{$APP_URL.$eventImage}} width="450px" height="200"/>
                      @else
                        <img src={{$eventImage}} width="450px" height="200"/>
                      @endif
                  @endisset
                </p>
                <p>
                    @isset($checkTime)
                        @if($checkTime == "ok")
                        <span><img src="{!! asset('/images/timestart.png')!!}"></span> {{ $startTime ?? '' }} - {{ $endTime ?? '' }}
                        @endif
                    @endisset
                </p>
                <p>
                    @isset($checkTime)
                        @if($checkTime == "ok")
                            <span><img src="{!! asset('/images/place.png')!!}"></span> {{ $venue ?? '' }}
                        @endif
                    @endisset
                </p>
                <p>
                    @isset($entryCode)
                        <span>Entry code: </span> {{ $entryCode }}
                    @endisset
                </p>
                @isset($contentMore)
                    @if($contentMore == "Invitation")
                        <p>To confirm your participation, please register on mpify Events mobile app</p>
                    @elseif($contentMore == "eventConfirmation")
                        <p> Keep your event updated on app.</p>
                    @endif
                @endisset
                @isset($textBody)
                    @if(gettype($textBody) == "string")
                            <p> {{ $textBody }} </p>
                    @else
                        @foreach($textBody as $body)
                            <p> {{ $body }} </p>    
                        @endforeach
                    @endif
                @endisset
                @isset($nameButton)
                      <div class="button-submit" style="text-align: center;">
                          <p>
                              <a href="{{ $linkEvent ?? '' }}"
                                  style="font-family: Calibri,Helvetica,sans-serif;
                                      box-sizing: border-box;
                                      border-radius: 3px;
                                      color: #fff;
                                      display: inline-block;
                                      text-decoration: none;
                                      background-color: #3097d1;
                                      border-top: 10px solid #3097d1;
                                      border-right: 18px solid #3097d1;
                                      border-bottom: 10px solid #3097d1;
                                      border-left: 18px solid #3097d1;
                                      border-radius: 30px;
                                      box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2);
                                      margin: 10px 0px
                                      ">
                                          {{ $nameButton ?? '' }}
                              </a>
                          </p>
                      </div>
                @endisset
                @isset($contentMore)
                    @if($contentMore == "Invitation")
                        <p>If it brought to  you the first event on mplify Events app, here is a quick info to help you get familiar with us:</p>
                        <ul>
                            <li>
                                You are posted with live agenda and all the changes from the event.
                            </li>
                            <li>
                                You are connected to the event's community
                            </li>
                            <li>
                                You can interact with the organizer and all others prior, during and after the event.
                            </li>
                            <li>
                                You can explore all other interesting events posted on the app.
                            </li>
                        </ul>
                    @elseif ( $contentMore == "resetPassword")
                        <p> If you have troubles with the "Reset password" button, copy the below URL and paste in your web browser.</p>
                        <a style="text-align: center; display: block;" href="{{ $linkReset ?? '' }}">www.linkhere</a>
                    @elseif ( $contentMore == "congratulation")
                        <p> Thank you for using our application!</p>
                    @elseif ( $contentMore == "checkedInEvent")
                        <p> Wish you a great time when joining the event</p>
                    @endif
                    @endisset
                    @isset($textEndMail)
                        <p>{{ $textEndMail ?? '' }} </p>
                    @endisset

                    <p>Best Regards,</p>
                    <p>mplify Events Supporting Team</p>
                    </div>
            </div>
            <div class="footer" align="center" width="570" cellpadding="0" cellspacing="0" style="
                                max-width: 500px;
                                margin: auto;
                                padding-top:32px;
                                padding-bottom:30px;">
            <tr>
                <td colspan="2" class="content-cell" align="center" style="padding-bottom:30px;">
                    <a href="{!! asset('/')!!}">
                        View web version
                    </a>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="content-cell" align="center" style="font-size:15px">
                        Download attendee mobile app on
                </td>
            </tr>
            <tr>
                <td align="right" style="padding-right:20px;">
                        <img src="{!! asset('images/qrcode_prod.png')!!}" width="100" >
                </td>
                <td align="center" style="display: inline-grid;">
                        <a href="https://play.google.com/store/apps/details?id=papagroup.meventmobile" style="padding-top: 10px;padding-bottom: 10px;" >
                            <img src="{!! asset('images/googlePlay@2x.png')!!}" width="103" >
                        </a>
                        <a href="https://itunes.apple.com/vn/app/mplify-events/id1441381296?mt=8" >
                            <img src="{!! asset('images/appStore@2x.png')!!}" width="103";>
                        </a>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="content-cell" align="center">
                    <a href="{!! asset('/privacy-policy')!!}">
                        Privacy policy
                    </a>
                    &nbsp;
                    <span style="font-size: 15px"> | </span>
                    &nbsp;
                    <a href="{!! asset('/terms-of-service')!!}">
                        Term of use
                    </a>
                    &nbsp;
                    <span style="font-size: 15px"> | </span>
                    &nbsp;
                    <a href="{!! asset('/contact-us')!!}">
                        Contact us
                    </a>
                    &nbsp;
                    <span style="font-size: 15px"> | </span>
                    &nbsp;
                    <a href="{!! asset('/')!!}">
                        FAQ
                    </a>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="content-cell" align="center">
                    © 2019 mplify Events
                </td>
            </tr>
        </div>
        </div>
    </body>
    </html>

</div>
