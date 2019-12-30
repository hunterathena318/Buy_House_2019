@yield('footer')
        <div class="footer" align="center" width="570" cellpadding="0" cellspacing="0" style="
                                max-width: 500px;
                                margin: auto;">
            <tr>
                <td colspan="2" class="content-cell" align="center">
                    <a href="{!! asset('/')!!}">
                        View web version       
                    </a>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="content-cell" align="center" style="font-size:15px">  
                        Download attendee mobile app on (by QR code or click on the icon)
                </td>
            </tr>
            <tr>
                <td align="center" style="padding-right: 20px;padding-left:150px; width: 100px;">
                        <IMG src="{!! asset('images/qrcode_prod.png')!!}" width="100" > 
                </td>
                <td align="center" style="display: inline-grid;">
                        <a href="https://play.google.com/store/apps/details?id=papagroup.meventmobile" style="padding-top: 5px;padding-bottom: 10px;" >
                            <IMG src="{!! asset('images/googlePlay@2x.png')!!}" width="100" height="40" >   
                        </a>
                        <a href="https://itunes.apple.com/vn/app/mplify-events/id1441381296?mt=8" >
                            <IMG src="{!! asset('images/appStore@2x.png')!!}" width="100" height="40";>   
                        </a>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="content-cell" align="center">
                    <a href="{!! asset('/')!!}">
                        Privacy policy       
                    </a>
                    &nbsp;
                    <span style="font-size: 15px"> | </span>
                    &nbsp;
                    <a href="{!! asset('/')!!}">
                        Term of use
                    </a>
                    &nbsp;
                    <span style="font-size: 15px"> | </span>
                    &nbsp;
                    <a href="{!! asset('/')!!}">
                        Contact us
                    </a>
                </td>              
            </tr>
            <tr>
                <td colspan="2" class="content-cell" align="center">
                    © 2019 mplify Events
                </td>
            </tr>
        </div>