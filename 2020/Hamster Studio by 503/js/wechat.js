$('.scroll-top').click(function() {
            $('html,body').animate({
                scrollTop: '0px'
            }, 800);
        });

        $('.online dl').on("mouseover", function() {
            $(this).find("dt").show();
            $(this).siblings().find("dt").hide();
        });

        $('.online dl').on("mouseleave", function() {
            $(this).find("dt").hide();
        });
        $('.online dl').find('.remove').on("click", function() {
            $(this).parents("dt").hide();
        });
        $(window).scroll(function() {
            if ($(document).scrollTop() <= 100) {
                $('.online .scroll-top').hide();
            } else {
                $('.online .scroll-top').show();
            }
        });
        //ajax提交表单

        function subform(obj) {
            var url = '/?form/2/';
            var tel = $(obj).find("#tel").val();
            var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!reg.test(tel)) {
                alert('电话号码错误！');
                return false;
            }
            console.log(tel);

            // $.ajax({
            //     type: 'POST',
            //     url: url,
            //     dataType: 'json',
            //     data: {
            //         tel: tel
            //     },
            //     success: function(response, status) {
            //         if (response.code) {
            //             alert("您的来电已收到，我们会尽快联系您！");
            //             $(obj)[0].reset();
            //         } else {
            //             alert(response.data);
            //         }
            //     },
            //     error: function(xhr, status, error) {
            //         alert('返回数据异常！');
            //     }
            // });
            return false;
        }