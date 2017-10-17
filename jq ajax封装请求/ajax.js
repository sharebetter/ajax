 function ajax(mJson){
    $.ajax({
    url: mJson.url,    //请求的url地址
    dataType: mJson.dataType,   //返回格式为json
    async: true, //请求是否异步，默认为异步，这也是ajax重要特性
    data: mJson.data,    //参数值
    type: mJson.type,   //请求方式
    beforeSend: function() {
        var a=localStorage.getItem('key');
        console.log(a);
    },
    success: function(req) {
        if(req.status=='1'){        
           $('#div').html("登录成功");  
           console.log("aaa");
           localStorage.setItem('key', req.stoken);
           $(location).attr('href', 'index.html');    
         
        }else{
           console.log("bbb")
            
           $('#div').html("登录失败");      
        }

    },
    complete: function() {

    },
    error: function() {
        console.log("登录异常");                
    }
    })
}