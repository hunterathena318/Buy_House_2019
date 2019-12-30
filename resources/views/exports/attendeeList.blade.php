<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Company</th>
        <th>Position</th>
        <th>Phone</th>
        <th>Status Joined</th>
        <th>Status CheckedIn</th>
    </tr>
    </thead>
    <tbody>
    @foreach($attendees  as $attendee)
        <tr>
            <td>{{$attendee->attendee_fullname}}</td>
            <td>{{$attendee->attendee_email}}</td>
            <td>{{$attendee->attendee_company}}</td>
            <td>{{$attendee->attendee_position}}</td>
            <td>{{$attendee->attendee_phone}}</td>
            <td>{{$attendee->confirmed_at ? $attendee->confirmed_at : 'Not Join'}}</td>
            <td>{{$attendee->checked_in_at ? $attendee->checked_in_at : 'Not Check-In'}}</td>
        </tr>
    @endforeach
    </tbody>
</table>
