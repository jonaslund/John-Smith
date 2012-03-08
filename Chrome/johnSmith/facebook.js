jQuery(function($) { 
  setInterval(function() {

    $(".friendSubtitle.fwb, #fbTimelineHeadline .name h2 a,  a.actorName, .UIImageBlock_Content.UIImageBlock_SMALL_Content .fcg .fwb a, .actorName a, .UIImageBlock_ICON_Content a, .passiveName, .headerTinymanName, .fbxWelcomeBoxName, .profileFriendsText a, .ego_title, .UIImageBlock_Content>div>a, .ellipsis, .profileName, span.name").each(function() { 
        $(this).text("John Smith");
    });


/*

.UIImageBlock_Content.UIImageBlock_SMALL_Content .fcg .fwb a,


       $("a.actorName, .actorName a, .UIImageBlock_ICON_Content a, .passiveName, .headerTinymanName, .fbxWelcomeBoxName, .profileFriendsText a, .ego_title, .UIImageBlock_Content>div>a, .ellipsis, .profileName, span.name").each(function() { 
        $(this).text("John Smith");
    });
*/
 
    $(".fbTimelineFacepile img, .friend.img, .profilePic, .profilePic img, .uiProfilePhoto, .profile-friends .img, .fbProfileBrowserList .img, .HovercardOverlay .img, .profile-picture .img, .fbxWelcomeBoxImg, .fbChatOrderedList .pic, .friendBrowserPhotoWrapper img").each(function() { 
        $(this).attr("src", "http://profile.ak.fbcdn.net/static-ak/rsrc.php/v1/yo/r/UlIqmHJn-SK.gif");
    });

    /*
    $(".profilePic, .uiProfilePhoto, .fbxWelcomeBoxImg").each(function() { 
        $(this).attr("src", "https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v1/yo/r/UlIqmHJn-SK.gif");
    });

   $(".fbProfileBrowserListItem, .fbChatOrderedList, .profile-friends, .profile-picture, .HovercardContent").each(function() { 
     $(this).find("img").not(".status").attr("src", "https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v1/yo/r/UlIqmHJn-SK.gif");
   });

    //Nested A
    $(".actorName, .UIImageBlock_Content, #MessagingReadParticipants, .fsl").each(function() { 
       $(this).find("a").not(".actorPic, .uiSelectorButton").text("John Smith");
    });

    //Direct 
    $(".passiveName, .profileName, .name, .titlebarText, .headerTinymanName, .authors, .blueName").each(function() { 
        $(this).text("John Smith");
    });
    */
  }, 350);    
});
