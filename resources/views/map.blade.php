<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Track Your Vehicle | Map</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>

<body>
<div class="map-background">
    <div id="map" car-amount="{{ $amount }}"></div>
</div>

<script src="{{asset('js/app.js')}}"></script>

</body>
</html>

