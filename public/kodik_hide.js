function deleteCOOKIE()
{
    var cookies = document.cookie.split(/;/);
for (var i = 0, len = cookies.length; i < len; i++) {
	var cookie = cookies[i].split(/=/);
	document.cookie = cookie[0] + "=;max-age=-1";
}
}
 //window.onbeforeunload = function() {
 //   return "Данные не сохранены. Точно перейти?";
 // }; 
function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
/*  let time = setInterval(() => {
    if(getCookie('vxod') != "true")
    {
        window.location.href = '/autorezation';
        $("#Home_page").hide();
$("#create_page").hide();
    }
    else{
        $("#Home_page").show();
        $("#create_page").show();
    }
 }, 10); */
function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
function knopka()
{
    if($("#type1").value !="" && ($("#type2").value != ""))
    {
        setCookie("vxod","true");
        $("#Home_page").show();
        $("#create_page").show();
    }
}
if(getCookie('vxod') != "true")
{
  $("#Home_page").hide();
  $("#create_page").hide();
}
else
{
  $("#Home_page").show();
  $("#create_page").show();
}

$(".blogik3").addEventListener('submit', somefun);
function somefun()
{
  if($("#type1").value == "" && $("#type2").value)
  {
    alert("ВВЕДИТЕ ДАННЫЕ");
  }
}
//setCookie("username","Яна");
//let y = getCookie('username');
//console.log(y); 