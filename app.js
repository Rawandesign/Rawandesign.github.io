var study = new Vue({
  el: "#header-vip",
  data: {
    heading: "ڕەوەند دیزاینەڕ", 
    hh: "uii"
  }
});

var study = new Vue({
  el: "#fixtemplatesdemo",
  data: { 
    viptext: "VIP",
    h1text: "باشترین دیزاینەکان", 
    ptext: "vip بکرە بۆ ئەوەی دیزاینەکانت بە باشترین کوالێتی بەدەست بهێنیت بەبێ هیچ کێشەیەک."
  }
});

var study = new Vue({
  el: "#mainvip",
  data: {
    maintitle1: "سەبارەت",
    aboutext1: "من وەک ڕەوەند دیزاینەڕ دەزانم کە دروستکردنی وێبسایت تێکەڵەیەکە لە نایابیەکی تەکنیکی و لێک تێگەیشتنی تەواو و",
    aboutext2: "من هەمووکات باشترین هەوڵیداوە بۆ دابینکردنی باشترینیان. ئێمە دەزانین هەموو کڕیارێک بێ",
    aboutext3: "وێنەیە بۆیە هەمووکات پلانەکانمان گونجاون لە ڕووی نرخ و کاتەوە بۆ کڕیارەکانمان.",
    aboutext4: "زیاتر لە ٤ ساڵ ئەزموونی گەشەپێدانمان لە بوارەکەماندا هەیە،",
    aboutext5: "هەروەها دڵنیایی دەدەین لە چاودێری کردنی کارەکانمان و پێشکەشکردنی پشتگیری کارەکانمان.",
    /*----------------------------------------*/
    maintitle2: "تواناکانمان", 
    uiuxdesign: "Ui / Ux design",
    webdesign: "Web design",
    webdev: "Web Developing",
    serveradministration: "Server Administration",
    seo: "SEO",
    webcode: "Web Code",
    maintitle4: "کارەکانمان",
    rawandblog: "RawandBlog",
    animehaus: "3D and Animation Haus",
    earth: "3D Earth",
    colorclicker: "Color Clicker",
    balldddd: "3D Ball Animation",
    contactus: "نامە بنێرە لە رێگەی", 
    email: "ئیمەیڵ",
    emailtext: "info.rawandweb@gmail.com",
    facebook: "فەیسبووک",
    facebooktext: "لێرەوە"
  }
}); 

 // Anime
 var text="ماڵپەڕێک بۆ جوانکردنی وێبسایتەکەت بە باشترین شێوە";
 
 var t=document.getElementById("texth4");
 
 var i=0;
 
 var len=text.length;
 
 function show(){
   if(i%2==0) {
     t.innerHTML+=text.charAt(i);
     t.style.color="";
 }
 
 else{
   t.innerHTML+=text.charAt(i);
   t.style.color="";
 }
 
 hide(i);
 i++;
 }
 
 var x=setInterval(show,100);
 
 function hide(t){
   if(len==t)
   clearInterval(x);
 }


swal({
  title: "INFO",
  text: "بەخێرهاتی بۆ ماڵپەڕی ڕەوەنــد دیزایـنەـر",
  icon: "success",
  buttons: false,
});
