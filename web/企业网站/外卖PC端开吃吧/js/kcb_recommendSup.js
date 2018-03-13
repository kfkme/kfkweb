$(function () {

    //alert("1");
    //一进大学页就把推荐餐厅编号cookie去掉
    if ($.cookie("recommendSup") != null && $.cookie("recommendSup") != "") {
        $.cookie("recommendSup", null, { path: "/", expires: -1 });
    }

    
    var miniFavorable = $('#mini_favorable'),
				recommendRestaurant = $('#recommend_restaurant'),
				shade = $('#shade'),
				popup = $('#popup');


    $('.zhankai,#mini_favorable').click(function () {
        miniFavorable.slideUp(100);
        recommendRestaurant.slideDown(150);

        var clip = null;
        clip = new ZeroClipboard.Client();
        clip.setHandCursor(true);
        clip.setCSSEffects(false);
        clip.addEventListener('mousedown', function () {
            clip.setText($("#RecommendVoucher").text());
        });
        clip.addEventListener('complete', function (client, text) {
            //debugstr("Copied text to clipboard: " + text );
            alert("该地址已经复制，你可以使用Ctrl+V 粘贴。");
        });
        clip.glue('btncopy');
        //  });

    });
    $('.close_recommend').click(function () {
        recommendRestaurant.slideUp(300);
        miniFavorable.slideDown(100);
    });
    //当点击上面的餐厅的时候，判断和下面的推荐餐厅是否存在，存在就记录Cookie表示是推荐餐厅
    if ($("#mini_favorable").length > 0) {
        var supID = 0;
        $("#SupplierListBody .si_block").click(function () {
            supID = $(this).attr("id");            //点击餐厅空白区域
            setSupIDCookie(supID);
        });
        $(".si_block .si_name a").click(function () {
            supID = $(this).parent().parent().parent().attr("id");   //点击餐厅名称       
            setSupIDCookie(supID);
        });
        $(".si_block .si_logo a").click(function () {
            supID = $(this).parent().parent().attr("id"); //点击餐厅LOGO      
            setSupIDCookie(supID);
        });
    }
    function setSupIDCookie(supID) {
        var tag = 0; //当tag为1的时候，说明点击的餐厅是推荐餐厅。则记录coolkie否则清掉cookie
        $(".restaurant_item").each(function () {
            if (supID == $(this).attr("supID")) {
                $.cookie("recommendSup", supID, { path: "/", expires: 1 });
                tag = 1;
            }
        });
        if (tag == 0) {
            $.cookie("recommendSup", null, { path: "/", expires: -1 });
        }
    };

    //以下代码是从页面加载的餐厅信息的活动图表拿到推荐餐厅的显示面板处，省去连库
    var RecommendSupList;
    var SupList;
    RecommendSupList = $(".restaurant_list_right");
    SupList = $("#onlineSup .sup_list_body .si_block");
    for (var i = 0; i < RecommendSupList.length; i++) {
        var $sup = $(RecommendSupList[i]);
        var supID = $sup.find(".restaurant_name").children("a").attr("supid");
        SupList.each(function () {
            if ($(this).attr("id") == supID) {
                var htmlstr = $(this).find(".si_info").find("p.rest").text();
                if (htmlstr == '' || htmlstr == null) {
                    $sup.find(".star").addClass($($(this).find(".star")[0]).attr('class'));
                    $sup.prev(".restaurant_list_left").find(".deliver_time").html($(this).children(".si_info").find(".si_com").find('span').text());
                    $sup.find(".si_ac").html($(this).children(".si_info").find(".si_ac").html());
                } else {
                    $sup.find("p.star").hide();
                    $sup.prev(".restaurant_list_left").find(".deliver_time").html("");
                    $sup.append('<span class="rest"></span><p class="rest">' + $(this).find("p.rest").text() + '</p>');
                }
            }
        });
    }

    function ShowMessage(message) {
        $.XYTipsWindow({ ___title: "开吃吧提示", ___drag: "___boxTitle", ___width: "300px", ___height: "100px", ___content: 'text:<p style="color:#555;text-align: center;margin-top:40px;font-size:16px;font-weight:bold;">' + message + "！</p>", ___showbg: true, ___time: 1800 })
    }
    //通过推荐餐厅入口进入餐厅，把购物车清空        
    $(".restaurant_name a").live("click", function () {
        $.cookie("recommendSup", $(this).attr("supid"), { path: "/", expires: 1 });
        $.cookie("KcbCarInfo", null, { path: "/", expires: -1 });
    });
    //通过推荐餐厅入口进入餐厅，把购物车清空
    $(".restaurant_item").click(function () {
        $.cookie("KcbCarInfo", null, { path: "/", expires: -1 });
        $.cookie("recommendSup", $(this).attr("supid"), { path: "/", expires: 1 });

        window.open($(this).find(".restaurant_name a").attr("href"), '_blank'); 

    });
});