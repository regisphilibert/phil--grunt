$( document ).ready(function() {
 
    $('body').addClass('js-ok')

});



//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/string/rot13 [rev. #1]
String.prototype.rot13 = function(){
    return this.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
};
//Retreive the rot13 encoded data-attr for user and domain, decode them and merge them into a beautiful botproof email adress.
var emailRots = document.querySelectorAll('[data-rot-email]');
Array.prototype.forEach.call(emailRots, function(el, i){
    var email = el.getAttribute('data-rot-email').rot13();
    el.setAttribute('href', 'mailto:' + email)
    if(el.innerHTML.indexOf("@") >= 0){
        el.innerHTML = email
    }
});

function getDaysInMonth(month, year) {
     var date = new Date(year, month, 1);
     var days = [];
     while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
     }
     return days;
}

console.log(getDaysInMonth(3, 2017))