jQuery.fn.apishopsForm=function(options) 
{
   var settings = 
	jQuery.extend({
		type: 'inline', /*inline,modal*/ 
		form: 'normal', /*normal, light, html*/
		placement:'.apishopsModalContent', /*контейнер внутри модального окна, где должна размещаться форма (для встроенных это место передается в качестве инициализируемого объекта)*/
		modal:'<div class="apishopsModal apishopsAnimation apishopsSideFall"><div class="apishopsModalWindow"><div class="apishopsModalClose"></div><div class="apishopsModalContent"></div><div class="apishopsModalClose2"><a href="#" class="underline">закрыть окно</a></div></div><div class="apishopsModalOverlay"></div></div>',
		modal__:'<div class="apishopsModal apishopsAnimation apishopsSideFall"><div class="apishopsModalWindow"><div class="apishopsModalClose"></div><div class="apishopsModalContent"></div><div class="apishopsModalClose2"><a href="#" class="underline">закрыть окно</a></div></div><div class="apishopsModalOverlay"></div></div>',
		inputs:{
		address:'[name=apishopsFormAddress]',
		count:'[name=apishopsFormCount]',
		delivery:'[name=apishopsFormDelivery]',
		email:'[name=apishopsFormEmail]',
		fio:'[name=apishopsFormFio]',
		payment:'[name=apishopsFormPayment]',
		phone:'[name=apishopsFormPhone]', 
		promocode:'[name=apishopsFormPromocode]',
		region:'[name=apishopsFormRegion]',
		cost:'[name=apishopsFormCost]',
		button:'.apishopsFormBuy'
		},
		inputs_:{
			address:'Поле адреса',
			count:'Поле количество значений',
			delivery:'Поле типа доставки',
			email:'Поле электронного адреса',
			fio:'Поле ФИО',
			payment:'Поле типа оплаты',
			phone:'Поле номера телефона',  
			region:'Поле региона',
			cost:'Поле стоимости заказа'			
		},
		optional_fields:['address'],
		siteId:10221,
		productId:632879,
		price:1017.41,
		priceRound:1017, 
		wpId:15743307,
		successUrl:'/finish.jsp?id=',
		form_template_normal:'    <form id=customForm class="apishopsForm">		<h1>Форма заказа</h1>		<small>Заполните пожалуйста поля</small>		<div class="apishopsFormGroup apishopsFormCount">			<label>Количество</label>			<select name="apishopsFormCount" pattern="^[1-9][0-9]*$">				<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>			</select>		</div>		<div class="apishopsFormGroup apishopsFormFio">			<label for="inputSuccess"> &nbsp;</label>			<input type="text" name="apishopsFormFio" placeholder="ФИО" pattern=".{3,}">		</div>		<div class="apishopsFormGroup apishopsFormMail">			<input type="text" name="apishopsFormEmail" placeholder="email@email.com" pattern=".*">		 </div>				<div class="apishopsFormGroup apishopsFormPhone">			<input type="text" name="apishopsFormPhone" placeholder="+7(___) ___ __ __" pattern=".{3,}">		</div>		<div class="apishopsFormGroup apishopsFormAddress">			<input type="text" name="apishopsFormAddress" placeholder="ул.Юннатов, д.1, кв.2" pattern=".{3,}">		 </div>				  		<div class="apishopsFormGroup apishopsFormCity">			<label>Выберите город доставки</label>			<select name="apishopsFormRegion" pattern="^[0-9][0-9]*$">			</select>		</div>		<div class="apishopsFormGroup apishopsFormDelivery apishopsAnimation apishopsSlide">			<label>Выберите способ доставки</label>			<select name="apishopsFormDelivery" pattern="^[0-9][0-9]*$">			</select>		</div>								<div class="apishopsFormGroup apishopsFormPayment apishopsAnimation apishopsSlide">			<label>Выберите способ оплаты</label>			<select name="apishopsFormPayment" pattern="^[0-9][0-9]*$">			</select>		</div>			<div class="apishopsFormGroup apishopsFormCost apishopsAnimation apishopsSlide apishopsLoading">			<label><span name="apishopsFormCost"></span></label>					</div>							<div class="apishopsFormGroup">			<a href="#" class="apishopsFormButton apishopsFormBuy underline" onclick="$(this).closest(\'form\').submit(); return false;">				<b>Заказать товар!</b>						</a>		</div> 			         </form>',
		form_template_light:'	<form class="apishopsForm apishopsFormInline">	  <h1>Обратный звонок</h1>	  <small>Заполните пожалуйста поля</small>      <div class="apishopsFormGroup">        <label>Количество</label>        <select name="apishopsFormCount">			<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>		</select>      </div>      <div class="apishopsFormGroup">         <label>Ваше имя</label>        <input type="text" name="apishopsFormFio" placeholder="ФИО" pattern=".{3,}">      </div>      <div class="apishopsFormGroup">        <label>Ваш телефон</label>        <input type="text"  name="apishopsFormPhone" placeholder="+7(___) ___ __ __" pattern=".{3,}">      </div>      <div class="apishopsFormGroup">        <label>Ваш адрес</label>        <input type="text"  name="apishopsFormAddress" placeholder="ул.Юннатов, д.1, кв.2" pattern=".{3,}">      </div>            <div class="apishopsFormGroup">        <label>&nbsp;</label>		<a href="#" onclick="$(this).closest(\'form\').submit(); return false;" class="apishopsFormButton apishopsFormBuy underline">			<b>Заказать товар!</b>					</a>      </div>          </form>'	
	}, options);
  
       	   	
   return init(this);
   
  
   function init(object){
   	
   		if(object.length==0)
   			alert('Ошибка формы:\n $("'+object.selector+'") к которому подключается форма  "$("'+object.selector+'").apishopsForm()" не найден. Проверьте, пожалуйста, код');

   		   	
   		settings.object=object;
   		
   		settings.type=(settings.type=='inline' && $(settings.object).is("input,button,a"))?'modal':settings.type;
   		
   		if(settings.type=='modal')
   			settings.placement=modalInit();
   		else
   			settings.placement=settings.object;
   			

   		
   		formCheck();		
   		formConstruct();
   		formBind();
   }
   
   function formConstruct(){
			if(settings.form=='normal'){
				settings.form=$(settings.form_template_normal).clone();	
				settings.form_type='normal';
			}
			else if(settings.form=='light'){				
				settings.form=$(settings.form_template_light).clone();	
				settings.form_type='light';	
			}
			else{ 
				settings.form=(settings.type=='inline')?$(settings.form):$(settings.form).clone().show();
			}	
			settings.placement.append(settings.form);							
   }
   
   function formCheck()
   {
   		if(settings.form!='normal' && settings.form!='light'){
   			$form=$(settings.form);
   			
   			var inputs_tmp={};
   			for(index in settings.inputs){
   				value=settings.inputs[index];
	  			$input=$(value,$form);
	  			if($input.length &&  typeof $input !='undefined')
	  				inputs_tmp[index]=$input; 
			};   		
				
			if(typeof inputs_tmp['fio']=='undefined'  || typeof inputs_tmp['phone']=='undefined'  || typeof inputs_tmp['address']=='undefined'  || typeof inputs_tmp['count']=='undefined' ){
				settings.form='light';
			}							
			else if((typeof inputs_tmp['region']!= 'undefined') && (typeof inputs_tmp['count']=='undefined' || typeof inputs_tmp['cost']=='undefined' || typeof inputs_tmp['region']=='undefined' || typeof inputs_tmp['delivery']=='undefined'  || typeof inputs_tmp['payment']=='undefined')){
				settings.form='normal'; 			
			}
			
			settings.form_type=(typeof inputs_tmp['region']== 'undefined')?'light':'normal';
   		}	
   }
   
   function formBind(){
   			var inputs_tmp={};
   			
   			for(index in settings.inputs){
   				value=settings.inputs[index];
	  			$input=$(value,settings.form);
	  			if($input.length &&  typeof $input !='undefined')
	  				inputs_tmp[index]=$input; 
			};
			
			settings.inputs=inputs_tmp;
			
			$.each(settings.inputs, function(index, value){
				if($(value).is('input[type=text]') && typeof $(value).attr('pattern')!='undefined' && $(value).attr('pattern')!='')			
				    $(value).bind({
						  change: function() {
						    	if(!new RegExp($(value).attr('pattern')).test($(value).val()))
					    			$(value).closest('.apishopsFormGroup').addClass('apishopsFormError');
						  },
						  keyup: function() {
						    	if(new RegExp($(value).attr('pattern')).test($(value).val()))
					    			$(value).closest('.apishopsFormGroup').removeClass('apishopsFormError');
						  }
					  });	
					  
				if($(value).is('select') && typeof $(value).attr('pattern')!='undefined' && $(value).attr('pattern')!='')			
				    $(value).bind({
						  change: function() {
						    	if(!new RegExp($(value).attr('pattern')).test($(value).val()))
					    			$(value).closest('.apishopsFormGroup').addClass('apishopsFormError');
					    		else
					    			$(value).closest('.apishopsFormGroup').removeClass('apishopsFormError');
						  }
					  });						  		    	
			});
							
			if(settings.form_type=='normal'){	
				params={
					object:settings.inputs['region'],
					price:settings.price,
					productId:settings.productId,
					wpId:settings.wpId,	
					siteId:settings.siteId,
					retrys:3
				};
				apishopsFormLoadRegions(params);
								
				settings.inputs['region'].bind('change', function(){
						params={
							object:settings.inputs['delivery'],
							regionId:$(this).val(),
							price:settings.price,
							productId:settings.productId,
							wpId:settings.wpId,	
							siteId:settings.siteId,
							retrys:3
						};					
					  settings.inputs['delivery'].closest('.apishopsFormGroup').addClass('in');   
					  apishopsFormLoadDeliveryTypes(params)  
				});
					
				settings.inputs['delivery'].bind('change', function(){
						params={
							object:settings.inputs['payment'],
							deliveryId:$(this).val(),
							regionId:settings.inputs['region'].val(),
							price:settings.price,
							productId:settings.productId,
							wpId:settings.wpId,	
							siteId:settings.siteId,
							retrys:3
						};					
					  settings.inputs['payment'].closest('.apishopsFormGroup').addClass('in');   
					  apishopsFormLoadPaymentTypes(params)  
				});
								
				settings.inputs['payment'].bind('change', function(){
						params={
							count:settings.inputs['count'].val(),
							object:settings.inputs['cost'],
							deliveryId:settings.inputs['delivery'].val(),
							regionId:settings.inputs['region'].val(),
							paymentId:$(this).val(),
							price:settings.price,
							priceRound:settings.priceRound,
							productId:settings.productId,
							wpId:settings.wpId,	
							siteId:settings.siteId,
							retrys:3
						};							
					  settings.inputs['cost'].closest('.apishopsFormGroup').addClass('in');   
					  apishopsFormLoadPrice(params)  
				});				
		
				$(settings.form).submit(function(event) {
					var error='';
					event.preventDefault();
					$.each(settings.inputs, function(index, value){
						if($(value) && typeof $(value) !='undefined' && typeof $(value).attr('pattern')!='undefined' && $(value).attr('pattern')!='' && settings.optional_fields.indexOf(index)<0)	{
								if(!new RegExp($(value).attr('pattern')).test($(value).val())){									
						    			$(value).closest('.apishopsFormGroup').addClass('apishopsFormError');
						    			error+=' - '+settings.inputs_[index]+'\n';
						    	}else{
						    		$(value).closest('.apishopsFormGroup').removeClass('apishopsFormError');
						    	}
						}			    	
					});			
					if(error!==''){
						alert('Пожалуйста, заполните следующие поля:\n'+error);
						return false;
					}else{	
							promocode=(typeof settings.inputs['promocode']!='undefined' && settings.inputs['promocode'].length)?settings.inputs['promocode'].val():'';			
							params={
								object:settings.inputs['button'],
								form:settings['form'],
								count:settings.inputs['count'].val(),						
								fio:settings.inputs['fio'].val(),
								email:settings.inputs['email'].val(),
								address:settings.inputs['address'].val(),
								deliveryId:settings.inputs['delivery'].val(),
								regionId:settings.inputs['region'].val(),
								paymentId:settings.inputs['payment'].val(),
								phone:settings.inputs['phone'].val(),
								promocode:promocode,
								price:settings.price,
								priceRound:settings.priceRound,
								productId:settings.productId,
								wpId:settings.wpId,	
								siteId:settings.siteId,
								successUrl:settings.successUrl,
								sourceRef:getCookie("sourceRef"),
								sourceParam:getCookie("sourceParam")
							};								
							apishopsFormSubmit(params);
					}
					event.preventDefault();				
				});		
			}else{ 
				$(settings.form).submit(function(event) {
					var error='';
					event.preventDefault();
					$.each(settings.inputs, function(index, value){
						if($(value) && typeof $(value) !='undefined' && typeof $(value).attr('pattern')!='undefined' && $(value).attr('pattern')!='' && settings.optional_fields.indexOf(index)<0)	{
								if(!new RegExp($(value).attr('pattern')).test($(value).val())){									
						    			$(value).closest('.apishopsFormGroup').addClass('apishopsFormError');
						    			error+=' - '+settings.inputs_[index]+'\n';
						    	}else{
						    		$(value).closest('.apishopsFormGroup').removeClass('apishopsFormError');
						    	}
						}			    	
					});			
					if(error!==''){
						alert('Пожалуйста, заполните следующие поля:\n'+error);
						return false;
					}else{
                			promocode=(typeof settings.inputs['promocode']!='undefined' && settings.inputs['promocode'].length)?settings.inputs['promocode'].val():'';			
							params={
								object:settings.inputs['button'],
								form:settings['form'],
								count:settings.inputs['count'].val(),						
								fio:settings.inputs['fio'].val(),
								address:settings.inputs['address'].val(),
								phone:settings.inputs['phone'].val(),
								promocode:promocode,
								successUrl:settings.successUrl,
								sourceRef:getCookie("sourceRef"),
								sourceParam:getCookie("sourceParam"),
								productId:settings.productId,
								wpId:settings.wpId,	
								siteId:settings.siteId
							};		
							apishopsFormSubmit(params);
					}
					event.preventDefault();				
				});					
			}			
			
			return true;
   }
   
	function getCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for (var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1, c.length);
	        }
	        if (c.indexOf(nameEQ) == 0) {
	            return c.substring(nameEQ.length, c.length);
	        }
	    }
	    return null;
	}
   
   function modalInit(){
			settings.modal=$(settings.placement,$(settings.modal)).length?$(settings.modal):$(settings.modal__);				
			
			$('body').append(settings.modal);
			
			$(settings.object).click(function(event) {
				event.preventDefault();
				modalShow();			
			});
			
			$('.apishopsModalClose',settings.modal).click(function(event) {
				event.preventDefault();
				modalHide();	
			});
			
			$('.apishopsModalClose2',settings.modal).click(function(event) {
				event.preventDefault();
				modalHide();	
			});
			
			$('.apishopsModalOverlay',settings.modal).click(function(event) {
				event.preventDefault();
				modalHide();	
			});	
				
			return $(settings.placement,settings.modal);								
	}
	
	function modalShow(){
			settings.modal.css('display','block');
			window.setTimeout( function(){
				settings.modal.addClass('in').children('.apishopsModalWindow').css('top',$(this).scrollTop()+100)
			},100); 				
	}
	
	function modalHide(){
			settings.modal.removeClass('in');				
			window.setTimeout( function(){
				settings.modal.css('display','none')
			},100); 		
	}
	
	function log(text) {
	  if (window.console) {
	     window.console.log(text);
	  }
	}	
	   
};


var apishopsJSONP={
	gates:[
	'http://gate1.apishops.org/single.page.ajax.php?callback=?',
	'http://template2.basing.ru/single.page.ajax.php?callback=?'],
	processes:[],
	checkInterval:0
}

//TODO ошибка при непоступившем ответе
//TODO xnr статусов ответов

function apishopsFormGetJSONP(jsonp, callBackFunction){

	clearInterval(apishopsJSONP.checkInterval);

	jsonp.processId=String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();

	apishopsJSONP.processes.push({jsonp:jsonp,callBackFunction:callBackFunction, processId:jsonp.processId, status:'run', retrys:0});	

	apishopsLog('New process #'+jsonp.processId);

	$.getJSON(apishopsJSONP.gates[0], jsonp, apishopsFormCallbackJSONP);
	
	apishopsJSONP.checkInterval=setInterval(function() {

			apishopsLog('Interval 5000 ms:')

			for(i in apishopsJSONP.processes){

				process=apishopsJSONP.processes[i];
				apishopsLog('Check process #'+process.processId+':');

			    if (process.status=='run' && process.retrys<apishopsJSONP.gates.length){
			        apishopsLog("   Query no "+process.retrys+"("+apishopsJSONP.gates[process.retrys]+") failed");
			        process.retrys++;
			        $.getJSON(apishopsJSONP.gates[process.retrys], process.jsonp, apishopsFormCallbackJSONP);
			        apishopsLog("   Sended query no "+process.retrys+"("+apishopsJSONP.gates[process.retrys]+")");
			    }else if(process.status=='run'){
			    	apishopsLog("   All retrys is failed "+process.retrys);
			    	apishopsJSONP.processes.splice(i,1);
			    }else if(process.status=='block'){
			    	apishopsLog("   Process is blocked.");
			    }

			    if(apishopsJSONP.processes.length==0){
			    	clearInterval(apishopsJSONP.checkInterval);
			    }
			}

	}, 10000);
}

function apishopsFormCallbackJSONP(result){
	var processId=result.parameters.processId;
	apishopsLog('Got process #'+processId+' result:');
	for(i in apishopsJSONP.processes){
		if(apishopsJSONP.processes[i].processId==processId){
			apishopsJSONP.processes[i].status='block';
			apishopsLog('	Exec callback function');
			apishopsJSONP.processes[i].callBackFunction(result);
			apishopsLog('	Remove process from queue');
			apishopsJSONP.processes.splice(i,1);
		}
	}	
    if(apishopsJSONP.processes.length==0){
    	clearInterval(apishopsJSONP.checkInterval);
    }	
}


var apishopsParcelParamaters={};


function apishopsFormLoadParcelParameters(params){
	
	apishopsFormGetJSONP( 
    	{
    		action: "getWSPDeliveryInfo",
    		count:params['count'], 
    		siteId: params['siteId'], 
    		productId: params['productId'], 
    		wpId: params['wpId'],
    		price:params['price'],
    		priceRound:params['priceRoumd'],
    		paymentId:params['paymentId'],
    		deliveryId:params['deliveryId'],
    		region:params['regionId'],
    		objectId:params['objectId'],
    		jsonp: 'dataType',
    		retrys:params['retrys'],
    		callBackFunctionName:params['callBackFunctionName']
    	},	
		function(result){
			 
			var objectId=result.parameters.objectId; 
			var wpId=result.parameters.wpId;
			var siteId=result.parameters.siteId;
			var regionId=result.parameters.region;
			var productId=result.parameters.productId;
			var price=result.parameters.price;
			var retrys=result.parameters.retrys;
			var callBackFunctionName=result.parameters.callBackFunctionName;
						       
        	if(typeof apishopsParcelParamaters[siteId]=='undefined')
            	apishopsParcelParamaters[siteId]={};

        	if(typeof apishopsParcelParamaters[siteId][wpId]=='undefined')
            	apishopsParcelParamaters[siteId][wpId]={};            	

        	if(typeof apishopsParcelParamaters[siteId][wpId][regionId]=='undefined')
            	apishopsParcelParamaters[siteId][wpId][regionId]={};  

        	if(typeof apishopsParcelParamaters[siteId][wpId][regionId][productId]=='undefined')
            	apishopsParcelParamaters[siteId][wpId][regionId][productId]={};  

        	if(typeof apishopsParcelParamaters[siteId][wpId][regionId][productId][price]=='undefined')
            	apishopsParcelParamaters[siteId][wpId][regionId][productId][price]={}; 

        	if(typeof apishopsParcelParamaters[siteId][wpId][regionId][productId][price]['deliveries']=='undefined')
            	apishopsParcelParamaters[siteId][wpId][regionId][productId][price]['deliveries']={}; 
            	
        	if(typeof apishopsParcelParamaters[siteId][wpId][regionId][productId][price]['payments']=='undefined')
            	apishopsParcelParamaters[siteId][wpId][regionId][productId][price]['payments']={}; 
            	
			if(typeof apishopsParcelParamaters[siteId][wpId][regionId][productId][price]['info']=='undefined')
            	apishopsParcelParamaters[siteId][wpId][regionId][productId][price]['info']={}; 
            		
            $.each(result.data.deliveries, function () { 	
                apishopsParcelParamaters[siteId][wpId][regionId][productId][price]['deliveries'][this.value]=this.name;   	                	
            });
            
            $.each(result.data.payments, function () {                
				apishopsParcelParamaters[siteId][wpId][regionId][productId][price]['payments'][this.value]=this.name;                
            });
            
            apishopsParcelParamaters[siteId][wpId][regionId][productId][price]['info'] = result.data.info;
            
            result.parameters['object']=$('#'+result.parameters.objectId)
            result.parameters['regionId']=result.parameters.region;
            
            if(callBackFunctionName=='apishopsFormLoadDeliveryTypes')
            	apishopsFormLoadDeliveryTypes(result.parameters);
            else if(callBackFunctionName=='apishopsFormLoadPaymentTypes')
            	apishopsFormLoadPaymentTypes(result.parameters);
            else if(callBackFunctionName=='apishopsFormLoadPrice')
            	apishopsFormLoadPrice(result.parameters);            	            	
         }
	);//.fail(function() {alert("Ошибка получения списка параметров заказа")});;	
}




function apishopsFormLoadRegions(params){
		
	$object=$(params['object']);
	$object.closest('.apishopsFormGroup').addClass('apishopsLoading');
	
	if(typeof $object.attr('id')=='undefined')
		$object.attr('id','apishopsId'+String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now())


	apishopsFormGetJSONP(
    	{
    		action: "getWSPRegions", 
    		siteId: params['siteId'], 
    		productId: params['productId'], 
    		wpId: params['wpId'],
    		objectId:$object.attr('id'),
    		jsonp: 'dataType'
    	},	
		function(result){
				
	      	$object=$('#'+result.parameters.objectId);
	      	
	      	$object.append($('<option value="-1">Выберите регион доставки</option>'));
	      		        	
            var topRegions = [53, 421, 92, 0];
            $.each(result.data, function () {
                if ($.inArray(this.id, topRegions) != -1){
                    $object.append($('<option value="' + this.id + '">' + this.name + '</option>'));
                }
            });
            
            $object.append('<optgroup label="----------------">');
            
            $.each(result.data, function () {
                if ($.inArray(this.id, topRegions) == -1){
                    $object.append($('<option value="' + this.id + '">' + this.name + '</option>'));
                }
            });
            
            $object.append('</optgroup>');
            
            $object.closest('.apishopsFormGroup').removeClass('apishopsLoading');
		}
	);//.fail(function() {alert("Ошибка получения списка регионов")});
}



function apishopsFormLoadDeliveryTypes(params){

	if(params['retrys']<0){
		alert('Ошибка получения параметров доставки');
		return false;
	}
		
	$object=$(params['object']);
	$object.closest('.apishopsFormGroup').addClass('apishopsLoading');

	if(typeof $object.attr('id') == 'undefined')
		$object.attr('id','apishopsId'+String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now());
				
		
	try{
		$object.empty();
		$object.append($('<option value="-1">Выберите тип доставки</option>'));
		
		$.each(apishopsParcelParamaters[params['siteId']][params['wpId']][params['regionId']][params['productId']][params['price']]['info'].items, function () {
		    var min = null;
		    var max = null;
		    $.each(this.payments, function () {

                var bonus_ = 0;
                if (params['regionId'] == '0'){
                    bonus_ = 50;
                } else if (params['regionId'] != '53' && params['regionId'] != '421' && params['regionId'] != '824') {
                    if (this.paymentId == '0'){
                        bonus_ = 100;
                    }
                }
                var _sum = this.sum + bonus_;

		        if (min == null || _sum < min) {
		            min = _sum;
		        }
		        if (max == null || _sum > max) {
		            max = _sum;
		        }
		    });
		    if (min == max){
		        $object.append($('<option value="' + this.deliveryId + '">' + apishopsParcelParamaters[params['siteId']][params['wpId']][params['regionId']][params['productId']][params['price']]['deliveries'][this.deliveryId] + ' (' + Math.round(min*100)/100 + ' руб)' + '</option>'));
		    } else {
		        $object.append($('<option value="' + this.deliveryId + '">' + apishopsParcelParamaters[params['siteId']][params['wpId']][params['regionId']][params['productId']][params['price']]['deliveries'][this.deliveryId] + ' (' + Math.round(min*100)/100 + ' - ' + Math.round(max*100)/100 + ' руб)' + '</option>'));
		    }
		});
		
		$object.closest('.apishopsFormGroup').removeClass('apishopsLoading');
	}
	catch(err){
		params['retrys']=params['retrys']-1;
		params['objectId']=$object.attr('id');
		params['callBackFunctionName']='apishopsFormLoadDeliveryTypes';
		apishopsFormLoadParcelParameters(params);	
	}

}




function apishopsFormLoadPaymentTypes(params){

	if(params['retrys']<0){
		alert('Ошибка получения параметров оплаты');
		return false;
	}
		
	$object=$(params['object']);
	$object.closest('.apishopsFormGroup').addClass('apishopsLoading');
	
	if(typeof $object.attr('id') == 'undefined')
		$object.attr('id','apishopsId'+String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now());
		

	try{
        $object.empty();
        $.each(apishopsParcelParamaters[params['siteId']][params['wpId']][params['regionId']][params['productId']][params['price']]['info'].items, function () {
            if (this.deliveryId == params['deliveryId']) {
                $.each(this.payments, function () {
                    var bonus_ = 0;
                    if (params['regionId'] == '0'){
                        bonus_ = 50;
                    } else if (params['regionId'] != '53' && params['regionId'] != '421' && params['regionId'] != '824') {
                        if (this.paymentId == '0'){
                            bonus_ = 100;
                        }
                    }
                    $object.append($('<option value="' + this.paymentId + '" alt="' + this.sum + '" baseSum="' + this.baseSum + '" addKgSum="' + this.addKgSum + '">' + apishopsParcelParamaters[params['siteId']][params['wpId']][params['regionId']][params['productId']][params['price']]['payments'][this.paymentId] + ' (доставка ' + Math.round((this.sum+bonus_)*100)/100 + ' руб)' + '</option>'));
                });
            }
        });
        $object.closest('.apishopsFormGroup').removeClass('apishopsLoading');
	}
	catch(err){
		params['retrys']=params['retrys']-1;
		params['objectId']=$object.attr('id');
		params['callBackFunctionName']='apishopsFormLoadPaymentTypes';		
		apishopsFormLoadParcelParameters(params);	
	}

}



function apishopsFormLoadPrice(params){


	if(params['retrys']<0){
		alert('Ошибка получения параметров цены');
		return false;
	}
		
	$object=$(params['object']);
	$object.closest('.apishopsFormGroup').addClass('apishopsLoading');
	
	if(typeof $object.attr('id') == 'undefined')
		$object.attr('id','apishopsId'+String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now());
		

	try{
		
		var count=1;
		var weight=apishopsParcelParamaters[params['siteId']][params['wpId']][params['regionId']][params['productId']][params['price']]['info'].weight;
		var paySum=0;
        var baseSum=0;
        var addKgSum=0;

        $.each(apishopsParcelParamaters[params['siteId']][params['wpId']][params['regionId']][params['productId']][params['price']]['info'].items, function () {
            if (this.deliveryId == params['deliveryId']) {
                $.each(this.payments, function () { 
                	if(params['paymentId']==this.paymentId){                
	                    paySum=this.sum;
	                    baseSum=this.baseSum;
	                    addKgSum=this.addKgSum;
                    }
                });
            }
        });
        
        if(paySum>0){
	        if(weight==null)
	        {
	        	$object.html(params['priceRound'] * params['count'] + Math.round(paySum*100)/100 + " р.");
	        }else{
	            var addKgCount = 0;
	            var firstKg = false;
	            var mass = parseFloat(weight) * count;
	            while (mass > 0){
	                mass -= 1;
	                if (!firstKg){
	                    firstKg = true;
	                } else {
	                    addKgCount++;
	                }
	            }
                var bonus_ = 0;
                var region = params['regionId'];
                if (region == '0'){
                    bonus_ = 50;
                } else if (region != '53' && region != '421' && region != '824') {
                    if (params['paymentId'] == '0'){
                        bonus_ = 100;
                    }
                }
	            $object.html((params['priceRound'] * params['count'] + Math.round((baseSum + addKgCount*addKgSum)*100)/100 + bonus_) + " р.")
	        }
	    } else {
	    	alert('Параметры не выбраны');
	    }
		$object.closest('.apishopsFormGroup').removeClass('apishopsLoading');
	}
	catch(err){
		params['retrys']=params['retrys']-1;
		params['objectId']=$object.attr('id');
		params['callBackFunctionName']='apishopsFormLoadPaymentTypes';			
		apishopsFormLoadPrice(params);	
	}

}



function apishopsFormSubmit(params){
		
	$object=$(params['object']);
	$object.closest('.apishopsFormGroup').addClass('apishopsLoading');
	$form=$(params['form']);
	$form.addClass('apishopsFormLoading').append('<div class="apishopsFormLoadingText">Отправка..</div>');

	if(!(typeof params['regionId']=='undefined' || typeof params['paymentId']=='undefined' || typeof params['deliveryId']=='undefined')){
		$jsonp={
                action: "submitOrder",
                objectId: $object.attr('id'),
                formId: $form.attr('id'),
                siteId: params.siteId,
                productId: params.productId, 
                wpId: params.wpId, 
                region: params.regionId,
                delivery: params.deliveryId, 
                payment: params.paymentId, 
                count: params.count,
                fio: params.fio, 
                phone: params.phone,
                promocode: params.promocode, 
                email: params.email, 
                address: params.address, 
                sourceParam: params.sourceParam, 
                sourceRef: params.sourceRef,
                clientTimeZone: clientTimeZone,
                successUrl: params.successUrl		
		};
	}else{
		$jsonp={
                action: "callingBack",
                objectId: $object.attr('id'),
                formId: $form.attr('id'),
                siteId: params.siteId,
                productId: params.productId, 
                wpId: params.wpId, 
                count: params.count,
                fio: params.fio, 
                phone: params.phone, 
                promocode: params.promocode, 
                address: params.address, 
                sourceParam: params.sourceParam, 
                sourceRef: params.sourceRef,
                clientTimeZone: clientTimeZone,
                successUrl: params.successUrl		
		};		
	}	

	if(typeof $object.attr('id')=='undefined')
		$object.attr('id','apishopsId'+String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now())

    var objDate = new Date();
    var clientTimeZone = -objDate.getTimezoneOffset()/60;
		
	apishopsFormGetJSONP($jsonp,function(result){
				$object=$('#'+result.parameters.objectId);
				$object.closest('.apishopsFormGroup').removeClass('apishopsLoading');
				$form=$('#'+result.parameters.formId);
				$form.removeClass('apishopsFormLoading').find(".apishopsFormLoadingText").remove()

                if (result.data.error != null) {
                    alert("Возникла ошибка при оформлении заказа.\n Пожалуйста, повторите попытку через несколько минут");
                } else {
                   if(typeof result.parameters.isReserve == 'undefined' || result.parameters.isReserve==0)
                   		document.location.href = result.parameters.successUrl + result.data.id+((result.data.double ==true)?'&double=true':'');
                   else
                   		document.location.href = '/finish.html?id=' + result.data.id+((result.data.double ==true)?'&double=true':'');
                }
		});
}










function apishopsLog(text) {
  console.log(text)
  //if (window.console) {
  //   window.console.log(text);
  //}
}	


function ObjToSource(o){
    if (!o) return 'null';
    if (typeof(o) == "object") {
        if (!ObjToSource.check) ObjToSource.check = new Array();
        for (var i=0, k=ObjToSource.check.length ; i<k ; ++i) {
            if (ObjToSource.check[i] == o) {return '{}';}
        }
        ObjToSource.check.push(o);
    }
    var k="",na=typeof(o.length)=="undefined"?1:0,str="";
    for(var p in o){
        if (na) k = "'"+p+ "':";
        if (typeof o[p] == "string") str += k + "'" + o[p]+"',";
        else if (typeof o[p] == "object") str += k + ObjToSource(o[p])+",";
        else str += k + o[p] + ",";
    }
    if (typeof(o) == "object") ObjToSource.check.pop();
    if (na) return "{"+str.slice(0,-1)+"}";
    else return "["+str.slice(0,-1)+"]";
}