<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Пример</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script> 
</head>
<body>

<div class="additionalProducts"></div>

<link rel="stylesheet" href="http://img.apishops.org/SinglePageWebsites/custom/css/apishopsForm.css">
<script src="http://img.apishops.org/SinglePageWebsites/custom/js/apishopsAdditionalProductForm.utf8.js"></script>
<link href="http://img.apishops.org/SinglePageWebsites/custom/css/apishopsAdditionalProductForm.css" rel="stylesheet" type="text/css">
<script>
$(document).ready(function(){
    $(".additionalProducts").apishopsAdditionalProductForm({
        siteId: 16836,
        orderId: <?=$_GET['id']?>
    });
});
</script> 
</body>
</html>