var jDPrice=function(){clearPriceIcon();$("#price9").attr("class","btn-red");$("#mask").show()};var jDPriceSelect=function(a){$("#mask").hide();if(a==1){var b=$("#customPrice").val();if(!checkPrice(b)){return}changePrice(9)}else{}};var checkPrice=function(b){var a=[];if(!((/^(\d+)(\.\d+)?$/).test(b))){alert("\u60a8\u8f93\u5165\u7684\u91d1\u989d\u4e0d\u6b63\u786e");return false}if(b.indexOf(".")!=-1){a=b.split(".");if(a[0]==0&&a[1]==0){alert("\u91d1\u989d\u8d85\u51fa\u9650\u5236");return false}if(a[0]>=500&&a[1]>0){alert("\u8d85\u51fa\u5355\u6b21\u5145\u503c\u4e0a\u9650\uff1a500");return false}}else{if(b<=0){alert("\u91d1\u989d\u8d85\u51fa\u9650\u5236");return false}if(b>500){alert("\u8d85\u51fa\u5355\u6b21\u5145\u503c\u4e0a\u9650\uff1a500");return false}}return true};function openContacts(a){if(a){switch(a){case"apple":window.location.href="objc:callContacts";break;case"android":JdAndroid.callContacts();break;case"wp":window.external.notify("GetPhoneNum");default:window.location.href="objc:callContacts";break}}}function contactsCallBack(a){a=a.trim();$("#mobile").val(a);getPhone()}function changeTel(a){$("#tellist li").click(function(){$(this).remove()});var b=$("#mobile").val();$("#tellist").prepend("<li><a href='javascript:void(0);' onclick='changeTel("+b+")'>"+b+"</a></li>");$("#mobile").val(a);$("#tellist").hide();getPhone()}function showTelList(){$("#price_err_null").hide();if($("#tellist").is(":hidden")){$("#tellist").show()}else{$("#tellist").hide()}}var spiner=createSpinner();var checkMobile=function(){return/^(1)\d{10}$/.test($("#mobile").val())};var fixMobile=function(){var a=$("#mobile").val();if($("#mobile").val().match("-")){a=a.replace(/-/g,"");$("#mobile").val(a)}if($("#mobile").val().match(",")){a=a.replace(/,/g,"");$("#mobile").val(a)}};var getPhone=function(){$("#tellist").hide();$("#price_err_null").hide();fixMobile();$("#area").val("x");$("#provider").val("x");$("#addr").text("");$("#price_info").hide();if(!checkMobile()){$("#mobile_err_info").show();$("#info_type").show();$("#jdPrice").val("");$("#facePrice").val("");clearPriceIcon();return}else{$("#mobile_err_info").hide()}jQuery.get("/chongzhi/searchPhone.json?",{mobile:$("#mobile").val(),sid:$("#sid").val()},function(a){$("#area").val(a.area==null?"x":a.area);$("#provider").val(a.provider==null?"x":a.provider);$("#mobile_err_info").hide();$("#addr").text(a.address);if(a.provider=="3"){$("#price9").show()}else{$("#price9").hide()}if($("#facePrice").val().length!=0){getSkuIdPrice()}},"json")};var getSkuIdPrice=function(){$("#price_err_info").hide();$("#jdPrice").val("");if(!checkMobile()){$("#mobile_err_info").show();$("#info_type").show();$("#facePrice").val("");clearPriceIcon();return true}if($("#area").val()=="x"||$("#provider").val()=="x"){$("#info_type").hide();$("#price_info").text("\u65e0\u6cd5\u83b7\u53d6\u4ef7\u683c");$("#addr").text("\u672a\u77e5\u5730\u533a\u548c\u8fd0\u8425\u5546");return true}$("#price_info").show();$("#price_info").text("\u6b63\u5728\u52aa\u529b\u83b7\u53d6\u4e2d...");jQuery.get("/chongzhi/searchSkuIdPrice.json?",{mobile:$("#mobile").val(),area:$("#area").val(),isp:$("#provider").val(),facePrice:$("#facePrice").val(),sid:$("#sid").val(),type:$("#type").val()},function(a){if(a!=null){if(a.success=="T"){$("#price_info").text(a.jdPrice+"\u5143");$("#jdPrice").val(a.jdPrice)}else{$("#price_info").text("\u65e0\u6cd5\u83b7\u53d6\u4ef7\u683c");$("#jdPrice").val("")}$("#addr").text(a.address)}else{$("#price_info").text("\u65e0\u6cd5\u83b7\u53d6\u4ef7\u683c");$("#jdPrice").val("")}$("#info_type").hide()},"json")};var changeArea=function(){$("#area").show();$("#provider").show()};var editAddress=function(){$("#addr").text($("#area").find("option:selected").text()+$("#provider").find("option:selected").text());getSkuIdPrice()};function changePrice(f){if(!checkMobile()){$("#price_info").hide();return}else{$("#price_info").show()}$("#price_info").text("\u6b63\u5728\u52aa\u529b\u83b7\u53d6\u4e2d...");$("#price_err_null").hide();$("#type").val("1");clearPriceIcon();saveUserOp(f);switch(f){case 1:$("#price1").attr("class","btn-red");$("#facePrice").val("30.00");if($("#area").val()=="x"&&$("#provider").val()=="x"){getPhone()}else{getSkuIdPrice()}break;case 2:$("#price2").attr("class","btn-red");$("#facePrice").val("50.00");if($("#area").val()=="x"&&$("#provider").val()=="x"){getPhone()}else{getSkuIdPrice()}break;case 3:$("#price3").attr("class","btn-red");$("#facePrice").val("100.00");if($("#area").val()=="x"&&$("#provider").val()=="x"){getPhone()}else{getSkuIdPrice()}break;case 4:$("#price4").attr("class","btn-red");$("#facePrice").val("200.00");if($("#area").val()=="x"&&$("#provider").val()=="x"){getPhone()}else{getSkuIdPrice()}break;case 5:$("#price5").attr("class","btn-red");$("#facePrice").val("300.00");if($("#area").val()=="x"&&$("#provider").val()=="x"){getPhone()}else{getSkuIdPrice()}break;case 6:$("#price6").attr("class","btn-red");$("#facePrice").val("500.00");if($("#area").val()=="x"&&$("#provider").val()=="x"){getPhone()}else{getSkuIdPrice()}break;case 7:$("#price7").attr("class","btn-red");$("#facePrice").val("10.00");if($("#area").val()=="x"&&$("#provider").val()=="x"){getPhone()}else{getSkuIdPrice()}break;case 8:$("#price8").attr("class","btn-red");$("#facePrice").val("20.00");if($("#area").val()=="x"&&$("#provider").val()=="x"){getPhone()}else{getSkuIdPrice()}break;case 9:$("#price9").attr("class","btn-red");var d=$("#customPrice").val();if(!((/^(\d+)(\.\d+)?$/).test(d))){alert("\u60a8\u8f93\u5165\u7684\u91d1\u989d\u4e0d\u6b63\u786e");break}var a;if(d.indexOf(".")!=-1){var c=d.split(".");var e=c[0];var b=c[1];if(b.length>2){b=b.substr(0,2)}else{if(b.length==1){b=b+"0"}}a=e+"."+b}else{a=d+".00"}if(checkMobile()){$("#price9").html(a+"\u5143");$("#facePrice").val(a);$("#customPrice").val(a)}$("#type").val("2");if($("#area").val()=="x"&&$("#provider").val()=="x"){getPhone()}else{getSkuIdPrice()}break;default:$("#facePrice").val("0.00");clearPriceIcon()}}function clearPriceIcon(){$("#price1").attr("class","btn-grey");$("#price2").attr("class","btn-grey");$("#price3").attr("class","btn-grey");$("#price4").attr("class","btn-grey");$("#price5").attr("class","btn-grey");$("#price6").attr("class","btn-grey");$("#price7").attr("class","btn-grey");$("#price8").attr("class","btn-grey");$("#price9").attr("class","btn-grey");$("#facePrice").val("");$("#jdPrice").val("")}function showChongZhiSpiner(a){$("#info_type").hide();$("#address_type").show();$("#price_info").hide();$("#chongzhi_wait").show();a.spin($("#chongzhi_wait")[0])}function hideChongZhiSpiner(a){$("#price_info").show();$("#chongzhi_wait").hide();a.stop()}function saveUserOp(a){if(testLocalStorage()){window.localStorage.setItem("chongzhiOp",a)}}function getUserOp(){var a;if(testLocalStorage()){a=window.localStorage.getItem("chongzhiOp")}if(isNotBlank(a)){return a}else{return 2}};