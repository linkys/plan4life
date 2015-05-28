<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"/>
<!--    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap-theme.min.css">-->
    <link rel="stylesheet" href="css/main.css"/>
    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/main.js"></script>
</head>
<body>

    <div class="container">

        <div id="header">
            <ul class="nav nav-pills pull-right">
              <li class="active"><a href="#">Ideas</a></li>
              <li><a href="#">Hacks</a></li>
              <li><a href="#">Plans</a></li>
            </ul>
            <h3 class="text-muted">Plan4life</h3>
        </div>


        @include('layout.note')

        @yield('content')

        <div id="footer">
            <p>&copy; plan4life 2014</p>
            <p>Make your life more productive</p>
        </div>

    </div> <!-- /container -->

    <!-- js libraries -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <!-- js libraries -->
</body>
</html>
