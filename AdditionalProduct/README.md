Плагин для дополнительных товаров Apishops
=========

Плагин дополнительных товаров позволяет:

  - Размещает на странице «Спасибо за заказ» список товаров, которые можно приобрести
  - Приобрести дополнительные товары нажатием одной кнопки


###Подключение
  

```sh
<link rel="stylesheet" href="http://img.apishops.org/SinglePageWebsites/custom/css/apishopsForm.css">
<script src="http://img.apishops.org/SinglePageWebsites/custom/js/apishopsAdditionalProductForm.js"></script>
<link href="http://img.apishops.org/SinglePageWebsites/custom/css/apishopsAdditionalProductForm.css" rel="stylesheet" type="text/css">

```

###Инициализация плагина к странице

Инициализация плагина в два этапа:
  - Создание контейнера в пределах <body> для размещения списка товаров
  - Инициализация компонента
  
Создание контейнера
```sh
<div class="additionalProducts"></div>
```

Инициализация компоненты
```sh
<script>
$(document).ready(function(){
$(".additionalProducts").apishopsAdditionalProductForm({
siteId: XXXX,
orderId: YYYY
});
});
</script>
```

##### Переменные для инициалзации компоненты

* XXXX — id сайта в системе ApiShops
* YYYY – id заказа в системе ApiShops (обычно берется из GET параметра "orderId" страницы, на которую редиректит пользователя после заказа)


Пример использования плагина
----
```sh
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Пример</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script> 
</head>
<body>

<div class="additionalProducts"></div>
<link rel="stylesheet" href="http://img.apishops.org/SinglePageWebsites/custom/css/apishopsForm.css">
<script src="http://img.apishops.org/SinglePageWebsites/custom/js/apishopsAdditionalProductForm.js"></script>
<link href="http://img.apishops.org/SinglePageWebsites/custom/css/apishopsAdditionalProductForm.css" rel="stylesheet" type="text/css">
<script>
$(document).ready(function(){
    $(".additionalProducts").apishopsAdditionalProductForm({
        siteId: 16836,
        orderId: 395092
    });
});
</script> 
</body>
</html>
```


Распространенные ошибки
=========
###Я всписал товары, которые должны отображаться на «странице благодарности», но эти товары не добавляются к заказу
В разделе «настройки проекта»(рис.1) в текстовое поле «Артикулы дополнительных товаров из раздела товаров на финишной» необходимо добавлять только wpId продуктов, которые должны присуствовать в разделе «Товары» (рис2.)

![Alt text](http://cl.ly/image/0K3u1h0p0u1h/download/screenshot%202014-06-24%20%D0%B2%2018.15.36.png)
#####рис.1

![Alt text](http://cl.ly/image/2w1G2F2b2G3P/download/screenshot%202014-06-24%20%D0%B2%2018.22.02.png)
#####рис.2

###При добавлении товара к заказу ничего не происходит

В 99% случаев это происходит из-за ошибок JS на странице. Проверьте свою страницу


----
© Apishops 