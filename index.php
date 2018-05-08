<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Caydia Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet">
        <link rel="stylesheet" href="build/style.css">
    </head>
    <body>
        <div class="container">
            <div class="sidebar">

            </div>
            <div class="product-grid">
                <?php for ($i = 0; $i < 12; $i++): ?>
                    <?php include('partials/product.php'); ?>
                <?php endfor; ?>
            </div>

        </div>

        <script id="__bs_script__">//<![CDATA[
            document.write("<script async src='http://HOST:3002/browser-sync/browser-sync-client.js?v=2.24.4'><\/script>".replace("HOST", location.hostname));
        //]]></script>
    </body>
</html>
