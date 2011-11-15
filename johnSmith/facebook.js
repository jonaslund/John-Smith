jQuery(function($) { 
  setInterval(function() {
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
  }, 350);    
});