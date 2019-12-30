<table>
    <thead>
    <tr>
        <th>ID</th>
        <th>Question</th>
        <th>Type</th>
        <th>Username</th>
        <th>Email</th>
        <th>Answer</th>
        <th>Create at</th>
    </tr>
    </thead>
    <tbody>
    @foreach($questions as $question)
        @foreach($question->answers  as $answer)
            <tr>
                <th>{{$question->id}}</th>
                <td>{{$question->title}}</td>
                <td>{{$question->type}}</td>
                <td>{{$answer->user->name}}</td>
                <td>{{$answer->user->email}}</td>
                @if(isset($answer->question_option->body))
                    <td>{{$answer->question_option->body}}</td>
                @else
                    <td>{{$answer->other_answer}}</td>
                @endif
                <td>{{$answer->created_at}}</td>
            </tr>
        @endforeach
    @endforeach
    </tbody>
</table>
