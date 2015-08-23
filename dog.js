// ==UserScript==
// @name        SillyDuck Like dog
// @namespace   no
// @author      SillyDuck
// @description SillyDuck really likes dog
// @version     0.1
// @copyright   2015, SillyDuck
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_addStyle
// @run-at      document-body
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include     htt*://www.facebook.com/*
// @exclude     htt*://apps.facebook.com/*
// @exclude     htt*://www.facebook.com/checkpoint/*
// @exclude     htt*://*static*.facebook.com*
// @exclude     htt*://*channel*.facebook.com*
// @exclude     htt*://developers.facebook.com/*
// @exclude     htt*://upload.facebook.com/*
// @exclude     htt*://www.facebook.com/common/blank.html
// @exclude     htt*://*connect.facebook.com/*
// @exclude     htt*://*facebook.com/connect*
// @exclude     htt*://www.facebook.com/plugins/*
// @exclude     htt*://www.facebook.com/l.php*
// @exclude     htt*://www.facebook.com/ai.php*
// @exclude     htt*://www.facebook.com/extern/*
// @exclude     htt*://www.facebook.com/pagelet/*
// @exclude     htt*://api.facebook.com/static/*
// @exclude     htt*://www.facebook.com/contact_importer/*
// @exclude     htt*://www.facebook.com/ajax/*
// @exclude     htt*://www.facebook.com/advertising/*
// @exclude     htt*://www.facebook.com/ads/*
// @exclude     htt*://www.facebook.com/sharer/*
// @exclude     htt*://www.facebook.com/send/*
// @exclude     htt*://www.facebook.com/mobile/*
// @exclude     htt*://www.facebook.com/settings/*
// @exclude     htt*://www.facebook.com/dialog/*
// @exclude     htt*://www.facebook.com/plugins/*
// @exclude     htt*://www.facebook.com/bookmarks/*
// @exclude     htt*://www.facebook.com/messages/*
// @exclude     htt*://www.facebook.com/friends/*
// ==/UserScript==
$(document).ready(function() {
    likePosts();
    //alert("ready");
});


var go_top = 0;
function likePosts() {
    "use strict";
    console.log("likingPost");
    function likePostsClick() {
        
        console.log("liked " + allParent_text[0]);
        allParent_like[0].click();
        allParent_like[0].remove();
        allParent_like.splice(0,1);
        
        var all_a = allParent[0].querySelectorAll("a");
        for (var i = 0; i < all_a.length; i++) {
            if (all_a[i].getAttribute('aria-label') === "加一張貼圖" ){                
                all_a[i].click();
                var set_inter_1 = setInterval( function(){
                    var all_dog = document.querySelectorAll("._5r8h")
                    for (var k = 0; k < all_dog.length; k++) {
                        if ( all_dog[k].getAttribute('data-id') === "789355237820057" ){
                            console.log("doged " + allParent_text[0]);
                            all_dog[k].click();
                            all_dog[k].remove();
                            clearInterval(set_inter_1);
                        }
                    };
                } , 500 );
                
            }
        };
        allParent.splice(0,1);
        allParent_text.splice(0,1);
    }

    function likePostsMain() {
        console.log("likingPostMain");
        if (0 >= allParent.length) {
            //fbLikePro.mainEvent(elemID.likPosDiv);
            console.log("scrollDown"+go_top);
            window.scrollBy(0, 50000);
            go_top++;
            if(go_top >= 10){
                //console.log("scrolltoTOP");
                console.log("reload");
                location.reload();
                //window.scrollBy(0, -500000);
                //go_top = 0;
            }
            window.setTimeout(likePosts, (Math.random()+1)*30000);
            
        }
        else{      
            likePostsClick();
            window.setTimeout(likePostsMain, (Math.random()+1)*5000);    
        }
    }
    var allParent = [];
    var allParent_text = [];
    var allParent_like = [];

    var allh5 = document.querySelectorAll("h5");
    for (var i = 0; i < allh5.length; i++) {
        if (allh5[i] === null || allh5[i] === undefined) continue;
        if ( allh5[i].innerText.indexOf("成為朋友") > -1 ){
            var par = allh5[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            var all_a_of_h5 = par.querySelectorAll("a");
            for (var j = 0; j < all_a_of_h5.length; j++) {
                if ( all_a_of_h5[j].getAttribute('aria-label') === "覺得這很讚" ){
                    allParent.push(par);
                    allParent_text.push(allh5[i].innerText);
                    allParent_like.push(all_a_of_h5[j]);
                }
            };            
        }
    };
    var allh6 = document.querySelectorAll("h6");
    for (var i = 0; i < allh6.length; i++) {
        if (allh6[i] === null || allh6[i] === undefined) continue;
        if ( allh6[i].innerText.indexOf("成為朋友") > -1 ){
            var par = allh6[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            var all_a_of_h6 = par.querySelectorAll("a");
            for (var j = 0; j < all_a_of_h6.length; j++) {
                if ( all_a_of_h6[j].getAttribute('aria-label') === "覺得這很讚" ){
                    allParent.push(par);
                    allParent_text.push(allh6[i].innerText);
                    allParent_like.push(all_a_of_h6[j]);
                }
            };
        }
    };

    likePostsMain();
}
