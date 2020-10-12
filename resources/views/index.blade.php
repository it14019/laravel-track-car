<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Track Your Car | Home</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>

<body>

<div class="background">
    <div class="form-container">
        <h1 class="title">Track Your Vehicle!</h1>
        <form method="post" action="{{route('map')}}">
            @csrf
            <label class="input-label" for="car-amount">Vehicle amount:</label>
            <input id="car-amount" name="car-amount" type="number" min="1" max="8">
            <button type="submit">OK</button>
        </form>
    </div>
</div>

<script src="{{asset('js/app.js')}}"></script>

</body>
</html>
