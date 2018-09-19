if(document.URL.indexOf("&")==-1) end=100;
else end=document.URL.indexOf("&");
var start=document.URL.substring(document.URL.indexOf("o=")+2,end);
 
for(var i=0;i<totalPage;i++){
    $.ajax({
        type: "POST", async: false,
        url: "/ushm/edu/contentsViewNextProcessSub",
        data: { "scheduleMemberProgressNo": start, "gapTime": 10000000, "currentPage": totalPage },
        success: function (data) {
            if (data.Success == true) {
                opener.BindProgressList();
                if (data.IsLastPage == true) {alert("이수완료");exit();}
            }
        }
    });
    ts1 = new Date().getTime() + 10000;
    do ts2 = new Date().getTime(); while (ts2<ts1);
}
