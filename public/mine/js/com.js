//左侧样式
$(function(){
    $('#user').on('click',function(e){              
        $('.left-list-hid').hide();          
        })
     $('#shop').on('click',function(e){               
        $('.left-list-hid').hide();         
        })
    $('#sort').on('click',function (e) {      
        $('.left-list-hid').slideToggle()             
    })
    })
//头部移动
$(function () {
     $('.icon_menu').on('click',function(){    
         $('.left').toggleClass('hideM');
         $('.top').toggleClass('hideP');
         $('.txt').toggleClass('hideP');
     })
 })  
  //进度条
 $(function(){
    // 禁用小圆环
    NProgress.configure({ showSpinner: false });
    // ajaxStart 所有的 ajax 开始调用
    $(document).ajaxStart(function() {
    NProgress.start();
    });
    // ajaxStop 所有的 ajax 结束调用
    $(document).ajaxStop(function() {
    // 模拟网络延迟
    setTimeout(function() {
        NProgress.done();
    }, 500)
    });
});
//登录拦截
$(function () {
    // 在一进入页面进行登录状态获取
// 如果后端响应头中设置了 Content-Type: application/json
// jquery 会自动识别, 将返回数据类型, 当成json字符串解析成对象
if ( location.href.indexOf("login.html") === -1 ) {
$.ajax({
url: "/employee/checkRootLogin",
type: "get",
success: function( info ) {
  console.log( info )
  if ( info.success ) {
  }
  if ( info.error === 400 ) {
    // 进行拦截, 拦截到登录页
    location.href = "login.html";
  }
}
})
}
})
//模态框退出按钮的方法
$(function(){
    $('.button-exit').on('click',function () {
        // console.log(1);
        $.ajax({
            type: "get",
            url: "/employee/employeeLogout",
            dataType: "json",
            success: function (info) {
                // console.log(info)
                if (info.success) {
                    location.href = "login.html"
                }
            }
        });          
    })
})