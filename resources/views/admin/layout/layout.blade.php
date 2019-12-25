<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('admin.layout.head')
    @include('admin.layout.seo')
</head>

<body class="app">
    <div id="loader">
        <div class="spinner"></div>
    </div>

    <script>
        window.addEventListener('load', function load() {
            const loader = document.getElementById('loader');
            setTimeout(function() {
                loader.classList.add('fadeOut');
            }, 300);
        });
    </script>
    <div>
        @include ('admin.layout.sidebar')
        <div class="page-container">
            @include('admin.layout.header')
            <main class="main-content bgc-grey-100">
                <div id="mainContent">
                    @yield('content')
                </div>
            </main>
            @include('admin.layout.footer')
        </div>

    </div>
    @include('admin.layout.script')
</body>

</html>