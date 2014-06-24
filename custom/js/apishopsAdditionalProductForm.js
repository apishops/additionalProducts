(function ($) {

    $.fn.apishopsAdditionalProductForm = function (options) {

        function ApiShopsAdditionalProductForm(el, options) {
            this.el = el;
            this.$el = $(this.el);
            this.$modal = null;
            this.$modalContent = null;
            this.options = {
                modal: '<div class="apishopsModal apishopsAnimation apishopsSideFall"><div class="apishopsModalWindow"><div class="apishopsModalClose"></div><div class="apishopsModalContent"></div><div class="apishopsModalClose2"><a href="#">закрыть окно</a></div></div><div class="apishopsModalOverlay"></div></div>',
                placement: '.apishopsModalContent',
                siteId: 349,
                orderId: 15743307,
                title: 'Спецпредложение только для Вас, нашего покупателя! Добавьте эти товары с супер-скидками к заказу сейчас!',
                productLoader: '<img src="http://apishops.com/Images/indicator.gif"/> Загружаем товары...',
                productAdd: '<img src="http://apishops.com/Images/indicator.gif"/> Добавляем товар к заказу...',
                addProductLabel: 'Добавить к заказу',
                addProductLabelOk: 'Товар добавлен к заказу'
            };
            this.setOptions(options);
            this.initModal();
            this.init();
        }

        ApiShopsAdditionalProductForm.prototype = {
            setOptions: function (options) {
                $.extend(this.options, options);
            },

            initModal: function(){
                this.$modal = $(this.options.modal);
                $('body').append(this.$modal);
                this.$modalContent = $(this.options.placement, this.$modal);
                var $modal = this.$modal;

                $('.apishopsModalClose',this.$modal).click(function(event) {
                    event.preventDefault();
                    modalHide($modal);
                });

                $('.apishopsModalClose2',this.$modal).click(function(event) {
                    event.preventDefault();
                    modalHide($modal);
                });

                $('.apishopsModalOverlay',this.$modal).click(function(event) {
                    event.preventDefault();
                    modalHide($modal);
                });
            },

            init: function () {
                var $el = this.$el;
                var $modal = this.$modal;
                var $modalContent = this.$modalContent;
                var options = this.options;
                $el.html("<h1>" + options.title + "</h1>");
                var $div = $("<div>" + options.productLoader + "</div>");
                $el.append($div);
                $.getJSON("/single.page.ajax", {action: "getAdditionalProducts", siteId: options.siteId, orderId: options.orderId},
                    function(data){
                        $div.empty();
                        var $table = $("<table class='addptable'/>");
                        $div.append($table);
                        $.each(data.items, function(){
                            var img = this.img;
                            var $tr = $("<tr/>");
                            var $td = $("<td/>");
                            if (this.img != null) {
                                var $a = $("<a href='#'><img src='" + img + "'/></a>");

                                $a.bind("click", function(event){
                                    $modalContent.html("<div class='addptablemodal'><img class='addptablemodalImg' src='" + img + "'/></div>");
                                    event.preventDefault();
                                    modalShow($modal);
                                });

                                $td.append($a);
                            }
                            $tr.append($td);
                            $td = $("<td/>");
                            var $name;
                            if (this.description != null) {
                                var description = this.description;
                                $name = $("<a href='#'>" + this.name + "</a>");
                                $name.bind("click", function(event){
                                    $modalContent.html("<div class='addptablemodal'>" + description + "</div>");
                                    event.preventDefault();
                                    modalShow($modal);
                                });
                            } else {
                                $name = $("<span>" + this.name + "</span>");
                            }
                            $td.append($name);
                            $tr.append($td);
                            $td = $("<td>" + this.price + " руб</td>");
                            $tr.append($td);
                            var $tdbuy = $("<td id='addpbuy" + this.productId + "'/>");
                            $a = $("<a class='apishopsFormButton apishopsFormBuy apishopsFormBuySmall' href='#'><b>" + options.addProductLabel + "</b></a>");
                            var productId = this.productId;
                            var wpId = this.wpId;
                            $a.bind("click", function(event){
                                event.preventDefault();
                                $tdbuy.html("<span style='padding-left: 15px;'>" + options.productAdd + "</span>");
                                $.getJSON("/single.page.ajax", {action: "addProductToOrder", siteId: options.siteId, orderId: options.orderId, productId: productId, wpId: wpId, count: 1},
                                    function(data){
                                        $("#addpbuy" + data.productId).html("<span style='padding-left: 15px;'>" + options.addProductLabelOk + "</span>");
                                    });
                                return false;
                            });
                            $tdbuy.append($a);
                            $tr.append($tdbuy);
                            $table.append($tr);
                        });
                    });
            }
        };

        function modalShow($modal){
            $modal.css('display','block');
            window.setTimeout( function(){
                $modal.addClass('in').children('.apishopsModalWindow').css('top',$(this).scrollTop()+100)
            },100);
        }

        function modalHide($modal){
            $modal.removeClass('in');
            window.setTimeout( function(){
                $modal.css('display','none')
            },100);
        }


        return this.each(function () {
            var apishopsAdditionalProductForm = new ApiShopsAdditionalProductForm(this, options);
            $(this).data('apishopsAdditionalProductForm', apishopsAdditionalProductForm);
            return apishopsAdditionalProductForm;
        });
    };
}(jQuery));