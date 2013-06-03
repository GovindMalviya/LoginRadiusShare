$("li").click(function(){

var $this = this;
 chrome.tabs.getSelected(null, function(tab) {    
    var taburl = tab.url;
    var url = "http://share.loginradius.com/share/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx?ProviderID=" + $($this).data("provider") + "&Url="+taburl+"&couttype=url";

                if ($($this).data("provider") == 'print') {
                    var action_url = "javascript:window.print();";
					chrome.tabs.update(tab.id, {url: action_url});
                } else {
					window.open(url, 'lrpopupchildwindow', 'menubar=1,resizable=1,width=530,height=530');
					return false;
                }
  });   
               
});    

$(".lrshare_headingtitleinput").keyup(function(){
	search(this.value);
});

function search (val) {
    var lists = document.getElementsByTagName('li');
        for (i = 0; i < lists.length; i++) {
            if ((lists[i].innerText || lists[i].textContent).toLowerCase().indexOf(val.toLowerCase()) != -1) {
                lists[i].style.display = 'block';
            } else {
                lists[i].style.display = 'none';
            }
    }
}