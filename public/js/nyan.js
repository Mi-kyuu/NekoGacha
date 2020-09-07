// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA8CkECfelRhPmF4aiAlVp6Y65BaK2BRi0",
    authDomain: "nya-nn.firebaseapp.com",
    databaseURL: "https://nya-nn.firebaseio.com",
    projectId: "nya-nn",
    storageBucket: "nya-nn.appspot.com",
    messagingSenderId: "476417094182",
    appId: "1:476417094182:web:644fc55fec788ed1e4ace7",
    measurementId: "G-FYPZTRY51X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const database = firebase.database();
    const ref = database.ref('test');

    var count = 0;

//Twitter Share
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
  }
  (document, 'script', 'twitter-wjs');

  ref.once('value').then(function (snapshot) {
    count = snapshot.val().count; //countを取得
    document.getElementById("counter").innerText = "全世界で" + count + "回押されました (=^･ω･^=)";
});



        var files = ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg", "008.jpg", "009.jpg", "010.jpg",
                    "011.jpg", "012.jpg", "013.jpg", "014.jpg", "015.jpg", "016.jpg", "017.jpg", "018.jpg", "019.jpg", "020.jpg",
                    "021.jpg", "022.jpg","023.jpg", "024.jpg", "025.jpg", "026.jpg", "027.jpg", "028.jpg", "029.jpg", "030.jpg"];

        var names = ["001.[N]白と茶色の猫", "002.[N]大あくびする猫", "003.[N]茶色のねこ", "004.[N]椅子でだらける猫", "005.[N]目を光らせる黒猫", 
                    "006.[N]見つめるねこ", "007.[N]威嚇する猫", "008.[N]作業を邪魔する猫", "009.[N]木登りする猫", "010.[N]こちらを見る三毛猫",
                    "011.[N]昼寝中のトラネコ", "012.[N]グレーの子猫", "013.[N]のぞき見る子猫", "014.[N]銀色のトラネコ", "015.[N]ベッド上のシャムネコ",
                    "016.[N]ねそべり子猫", "017.[N]猫に小判", "018.[N]見上げるボンベイ猫", "019.[N]芝生で寝転がるねこ", "020.[N]スヤァするトラネコ",
                    "021.[R]オッドアイの白猫", "022.[R]翠眼のねこ", "023.[R]王冠を被ったねこ", "024.[R]白い子猫", "025.[R]本棚にはまる猫",
                    "026.[UR]にゃーん", "027.[UR]手乗り子猫", "028.[UR]優しく照らされるねこ"];

        var flags = [0,0,0,0,0,0,0,0,0,0,
                    0,0,0,0,0,0,0,0,0,0,
                    0,0,0,0,0,0,0,0]
        
        var Ncount = 0;
        var Rcount = 0;
        var URcount = 0;
        var count = 0;

        var compf = 0;

        var gachaCount = 0;
        const pattern = names.length; //コンプ率計算に使う枚数
            


    function getResult() {

        ref.once('value').then(function (snapshot) {
            count = snapshot.val().count; //countを取得
            
            count = count + 1;
            
            document.getElementById("counter").innerText = "全世界で" + count + "回押されました (=^･ω･^=)";
            ref.set({
                
                count: count
            });
        });
        
        
        


        //上記は1未満(0.1や0.5や0.7など)の数に配列の要素数(6)をかけて、切り捨てを行う
        //配列の要素数を取得する為にプロパティのlength「レングス」を使用する
        rand = Math.floor(Math.random() * 100)+1; //1~100
        if (rand >= 99) {
            URcount ++;
            result = 26 + Math.floor(Math.random() * 3);
            document.getElementById('catname').style.background = '#cec93b';
            document.getElementById('catname').style.color = '#000000';
        } else if (rand >= 89) {
            Rcount ++;
            result = 21 + Math.floor(Math.random() * 5);
            document.getElementById('catname').style.background = '#b9bcc9';
            document.getElementById('catname').style.color = '#000000';
        } else {
            Ncount ++;
            result = 1 + Math.floor(Math.random() * 20);
            document.getElementById('catname').style.background = 'black';
            document.getElementById('catname').style.color = '#ffffff';
        }

        //var result = Math.floor(Math.random() * name.length); //0~19

        
        var no = "R"+(result);
        result --;
        
        flags[result] ++;
        gachaCount ++;

        count = 0;
        flags.forEach(function(index, array) {
           if (index >= 1){
               count++;
            }
          });

        

        imgsrc = "cats/"+files[result];
        name = names[result];
        document.getElementById('catimage').innerHTML = '<img src="' + imgsrc+ '">';
        document.getElementById('name').innerHTML = name;
        document.getElementById('status').innerHTML = gachaCount+"回 (N:"+Ncount+"/R:"+Rcount+"/UR:"+URcount+") コンプ率 : "+Math.floor(count/pattern*100)+"%";
        //document.getElementById(no).innerHTML = '<a href="' + imgsrc+ '"><img src="' + imgsrc+ '" height="100px"></a>';
        document.getElementById(no).innerHTML = '<img src="' + imgsrc+ '" height="99px">';

        document.getElementById('tweetbtn').innerHTML = '<h4>Tweet</h4><a class="link" href="https://twitter.com/share?url=https://nya-nn.web.app&related=Mi_kyuu&hashtags=ねこがちゃ,にゃーん&text=ねこがちゃ！ ' +gachaCount+ '回目のガチャで ”' + name+ '” が当たったよ！%0aコンプ率 : '+ Math.floor(count/pattern*100) +'％%20(N:' +Ncount+'/R:' +Rcount+ '/UR:'+URcount+') "rel="nofollow" target="_blank"></a>';

        if (count == pattern && compf == 0) {
            alert("おめでとうございます！ "+gachaCount+"回目でコンプリートしました！")
            compf = 1;
        }
    
    }