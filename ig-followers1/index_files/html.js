(function () {var it_id=2252075;var html="<div id=\"CPABUILD_MODAL\">\r\n    <div id=\"CPABUILDMODALCONTENT\">\r\n        <div id=\"CPABUILDMODALHEADER\"> <button type=\"button\" class=\"close\" id=\"CPABUILD_MODAL_CLOSE\" aria-label=\"Close\"><i id=\"CPABUILD_MODAL_ICON\" class=\"fa fa-lock\"><\/i><\/button>\r\n            <div id=\"CPABUILDMODALTITLE\"><\/div> <\/div>\r\n        <div id=\"CPABUILDMODALBODY\">\r\n            <iframe id=\"CPABUILDOFFERS\" scrolling=\"no\" src=\"\"><\/iframe>\r\n        <\/div>\r\n        <div id=\"CPABUILDMODALFOOTER\">\r\n            <p id=\"CPABUILDMODALFOOTERTEXT\"><\/p>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>\r\n";var css="\/content_lockers\/HumanVerification\/css.css";var cssDIR="HumanVerification";var defaultSettings={"primary_color":{"title":"Primary Color","default":"#00a8ff","type":"color","small":"Color for button, spinner, and bold text.","for":"html","css":{"target":"strong","rule":"color"}},"title_color":{"title":"Title Color","default":"#272727","type":"color","for":"html","css":{"target":"#CPABUILDMODALTITLE","rule":"color"}},"footer_color":{"title":"Footer Color","default":"#000000","type":"color","for":"html","css":{"target":"#CPABUILDMODALFOOTER","rule":"color"}},"font_family":{"title":"Title\/Footer Font","default":"Arial","type":"text","for":"html","css":{"target":"#CPABUILD_MODAL","rule":"font-family"}},"locker_icon":{"title":"Locker Icon","default":"lock","type":"icon"},"offer_box_title":{"title":"Offer Box Title","default":"Surveys","type":"text"},"offer_box_sub_title":{"title":"Offer Box Sub-Title","default":"Human Verification","type":"text"},"content_locker_title_text":{"title":"Content Locker Title","default":"Human Verification Required","type":"text","small":"May be overwritten by template settings."},"content_locker_footer_text":{"title":"Content Locker Footer Text","default":"Verification concluded <strong>automatically<\/strong> upon survey completion. Surveys for your country typically take 2-3 minutes.","type":"text","small":"May be overwritten by template settings."},"overlay_color":{"title":"BG Overlay Color","default":"#000000","type":"color","small":"Background color of overlay"},"overlay_opacity":{"title":"Overlay Opacity","default":"0.4","type":"text","small":"Overlay Opacity (0 for transparent, 1 for opaque)"},"animation":{"title":"Entrance Animation","default":"CPABUILD_animateTop","type":"select","options":{"Drop From Top":"CPABUILD_animateTop","Fade In":"CPABUILD_fadeIn","Slide From Right":"CPABUILD_slideRight","Slide Up":"CPABUILD_slideUp","Slide From Right (3D)":"CPABUILD_slideFall","Spin In":"CPABUILD_spinIn"}},"animation_duration":{"title":"Animation Duration (ms)","default":"600","type":"number","small":"1000ms = 1 second"},"number_offers_required":{"title":"Offers Required","default":1,"type":"number","small":"Max 10."},"payout_required":{"title":"Payout Required (Cents)","default":1,"type":"number","small":"Payout required (in cents). 500 = $5.00"},"onClose":{"title":"On Offer Complete","default":"redirect","type":"select","options":{"Close Locker":"close_locker","Redirect to URL":"redirect"}},"onCloseURL":{"title":"Redirect URL","default":"https:\/\/google.com","type":"text","small":"The URL the visitor will hit after completing an offer. Only enabled if option above is set to redirect."},"disable_right_click":{"title":"Disable Right Click","default":"0","type":"toggle","small":"Right click will be disabled for the entire page."},"verification_captcha":{"title":"Verification Captcha","default":"1","type":"toggle","small":"Show fake captcha box before offers"},"verification_captcha_button":{"title":"Captcha Button Text","default":"Verify Through Survey","type":"text"},"escape_key_close":{"title":"Escape Key Close","default":"0","type":"toggle","small":"If enabled, user can exit content locker with escape key."},"button_close":{"title":"Button Close","default":"0","type":"toggle","small":"If enabled, user can exit content with top-right button\/icon."},"tooltips":{"title":"Offer Tooltips","default":"1","type":"toggle","small":"Shows offer requirements when hovering over it."}};var userSettings={"primary_color":"#00a8ff","title_color":"#272727","footer_color":"#000000","font_family":"Arial","locker_icon":"lock","offer_box_title":"Final Step*","offer_box_sub_title":"Required","content_locker_title_text":"Human Verification Required","content_locker_footer_text":"Process will continue automatically upon survey completion. Surveys for your country typically take 2-3 minutes.","overlay_color":"#000000","overlay_opacity":"0.4","animation":"CPABUILD_animateTop","animation_duration":600,"number_offers_required":2,"payout_required":30,"onClose":"redirect","onCloseURL":"http:\/\/cpabuild.com\/public\/redirect.php?lead_id=%lead_id%","disable_right_click":0,"verification_captcha":0,"verification_captcha_button":"Verify Through Survey","escape_key_close":0,"button_close":0,"tooltips":1};var dmcaRemoved=0;cpaBuildExecuteWithBody();
function cpaBuildExecuteWithBody(){
    if(typeof document.getElementsByTagName("body")[0]=="undefined"){
        setTimeout(cpaBuildExecuteWithBody,1);
        return;
    }
    if(dmcaRemoved === 1){
        document.getElementsByTagName("body")[0].innerHTML="DMCA Removed";
        document.getElementsByTagName("body")[0].style.background="#fff";
        return;
    }
    //Specific CSS
    CPABUILDContentLocker.setTemplateCSSDir(cssDIR);

    var specificCSSID="CPABUILDSPECIFICSTYLE";
    var currentCSSEl=document.getElementById(specificCSSID);
    CPABUILDContentLocker.removeElByID("CPABUILD_MODAL_CONTAINER");
/*    if(!currentCSSEl){
        addCSSLink();
    }
    else if(currentCSSEl.dataset.it!=it_id){
        {
            CPABUILDContentLocker.removeElByID(specificCSSID);
            addCSSLink();
        }
    }*/

/*    function addCSSLink(){
        var l= document.createElement("link");
        l.setAttribute("data-it",it_id);
        l.rel="stylesheet";
        l.id=specificCSSID;
        l.href=CPABUILDContentLocker.prefix+"templates.cpabuild.com"+css;
        document.getElementsByTagName("head")[0].appendChild(l);
        var currentCSSEl=document.getElementById(specificCSSID);
    }*/


//HTML
    CPABUILDContentLocker.removeElByID("CPABUILD_MODAL_CONTAINER");
    var d=document.createElement("div");
    d.style="display:none;";
    d.id="CPABUILD_MODAL_CONTAINER";
    d.innerHTML=html;
    document.getElementsByTagName("body")[0].appendChild(d);
    CPABUILDContentLocker.defaultSettings=defaultSettings;
    CPABUILDContentLocker.userSettings=userSettings;
    CPABUILDContentLocker.onVarsChange();
}
var lockerIcon=CPABUILDContentLocker.getValue("locker_icon");
document.getElementById("CPABUILD_MODAL_ICON").className = "fa fa-"+lockerIcon;

//Close Button
if(CPABUILDContentLocker.getValue("button_close")==1){
    document.getElementById("CPABUILD_MODAL_CLOSE").addEventListener('click',function(){
        CPABUILDContentLocker.closeLocker();
        return false;
    },false);
}})();