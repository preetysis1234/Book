var main = {
    init : function() {
        var _this = this;
        $('#btn-save').on('click', function () {
            _this.save();
        });

        $('#btn-update').on('click', function(){
            _this.update();
        });
    },
    save : function () {
        var data = {
                title: $('#title').val(),
                author : $('#author').val(),
                content : $('#content').val()
        };
    $.ajax({
            type:'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function(){ //성공
            alert('글이 등록되었습니다.');
            window.location.href = '/';
        }).fail(function(request, status,error){    //실패
           alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+
           "error:"+error);
        });
    },
    update : function(){
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type : 'PUT',
            url : '/api/v1/posts/'+id,
            dataType : 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function(){
            alert('글이 수정되었습니다.');
            window.location.href='/';
        }).fail(function(error) {
            alert(JSON.stringify(error));
            });
    }
};
main.init();    //이게 실행이 됐기때문에 위쪽 function이 동작하는 것이다.