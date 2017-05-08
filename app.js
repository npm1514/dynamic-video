var loadVideo = function(){
      var name = "Nick";
      document.getElementById('vid1').append(name);

      var pname = "Wakeman Fitness Double Sided Yoga Mat";
      document.getElementById('vid3pname').append(pname);

      var pimage = document.getElementById('pimage');
      pimage.src = "https://ak1.ostkcdn.com/images/products/12305977/P19140716.jpg";
      pimage.style.opacity = "0.6";

      var plist = [{
        img: "https://ak1.ostkcdn.com/images/products/84/165/P16148395.jpg",
        a: "https://www.overstock.com/Clothing-Shoes/Womens-Skechers-Reggae-Zig-Sway-Navy/8933955/product.html?recset=5efeebeb-8a78-4df1-ac5a-9d68a39687e2&refccid=H662HWTL5O5242KLNEIRUJLIHE&recalg=42&recidx=4"
      },{
        img: "https://ak1.ostkcdn.com/images/products/7955010/P15327219.jpg",
        a: "https://www.overstock.com/Bedding-Bath/Alta-Anti-pill-Fleece-Blanket/7955010/product.html?recset=f8bfba05-de9e-4045-b632-b2a4fd0b164a&refccid=5MLI53A2OQKJ2N2ILJN4OXVLAE&recalg=42&recidx=13"
      },{
        img: "https://ak1.ostkcdn.com/images/products/3864805/P11915420.jpg",
        a: "https://www.overstock.com/Home-Garden/Hammered-Copper-4-piece-Canister-Set/3864805/product.html?refccid=FWCRCAMFLCAYL42POAT73QEIGE&searchidx=0"
      }];

      for(var i = 0; i < 3; i++){
        var a = document.getElementById('pdisplay').getElementsByTagName('a')[i];
        a.href = plist[i].a;
        a.getElementsByTagName('img')[0].src = plist[i].img;
      }

      var video = document.createElement('video');
      video.src = 'https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/536/7/177682110/578093168.mp4?token=1494027291-0xcd7fdf39e40735649a69b3fecc2253cbbd06139c';
      video.id = "intro-video";
      video.autoplay = true;
      video.loop = false;
      video.controls = true;
    	document.getElementById('videocontainer').append(video);
    	var videl = document.querySelectorAll('#intro-video')[0];
    	videl.load();

      var textCheck = function(){
        var ct = video.currentTime;
        if(ct < 3){
          document.getElementById('vid1').style.display = "block";
          document.getElementById('vid2').style.display = "none";
          document.getElementById('vid3').style.display = "none";
          document.getElementById('vid4').style.display = "none";
          document.getElementById('vid5').style.display = "none";
          document.getElementById('pdisplay').style.display = "none";
          pimage.style.display = "none";
        } else if(ct < 6) {
          document.getElementById('vid1').style.display = "none";
          document.getElementById('vid2').style.display = "block";
          document.getElementById('vid3').style.display = "none";
          document.getElementById('vid4').style.display = "none";
          document.getElementById('vid5').style.display = "none";
          document.getElementById('vid6').style.display = "none";
          document.getElementById('pdisplay').style.display = "none";
          pimage.style.display = "none";
        } else if(ct < 12) {
          document.getElementById('vid1').style.display = "none";
          document.getElementById('vid2').style.display = "none";
          document.getElementById('vid3').style.display = "block";
          document.getElementById('vid4').style.display = "none";
          document.getElementById('vid5').style.display = "none";
          document.getElementById('vid6').style.display = "none";
          document.getElementById('pdisplay').style.display = "none";
          pimage.style.display = "block"
        } else if(ct < 17) {
          document.getElementById('vid1').style.display = "none";
          document.getElementById('vid2').style.display = "none";
          document.getElementById('vid3').style.display = "none";
          document.getElementById('vid4').style.display = "block";
          document.getElementById('vid5').style.display = "none";
          document.getElementById('vid6').style.display = "none";
          document.getElementById('pdisplay').style.display = "none";
          pimage.style.display = "none";
        } else if(ct < 22){
          document.getElementById('vid1').style.display = "none";
          document.getElementById('vid2').style.display = "none";
          document.getElementById('vid3').style.display = "none";
          document.getElementById('vid4').style.display = "none";
          document.getElementById('vid5').style.display = "block";
          document.getElementById('vid6').style.display = "none";
          document.getElementById('pdisplay').style.display = "none";
          pimage.style.display = "none";
        } else {
          document.getElementById('vid1').style.display = "none";
          document.getElementById('vid2').style.display = "none";
          document.getElementById('vid3').style.display = "none";
          document.getElementById('vid4').style.display = "none";
          document.getElementById('vid5').style.display = "none";
          document.getElementById('vid6').style.display = "block";
          document.getElementById('pdisplay').style.display = "flex";
          pimage.style.display = "none";
        }
      }
      setInterval(textCheck,500);
}
loadVideo();
