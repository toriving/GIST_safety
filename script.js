if(document.URL.indexOf("&")==-1) end=100;
else end=document.URL.indexOf("&");
var start=document.URL.substring(document.URL.indexOf("o=")+2,end);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(){
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
   console.log("page " + i + " complete.");
   await sleep(10000);
}
}

demo();
