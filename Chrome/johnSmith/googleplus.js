  function johnSmithIt() {
    jQuery(".Hf, .c-i-Cc-Dr, .eQ, .uo, .JywKwb, .proflink, .fn, .kb, .tD, .uD, .c-W-yq").each(function() { 
        jQuery(this).text("John Smith");
    });

    jQuery(".Fn, .c-Ob-jy, .c-i-Cc-Dk, .fQ, .B-J-pc-ja, .g-PyX6, .CVZgrc, .dk, .KM, .c-W-nr, .c-W-tq").not(".B-J-pc-ja-C .B-J-pc-ja").each(function() { 
        jQuery(this).attr("src", "//ssl.gstatic.com/s2/profiles/images/silhouette96.png");
    });

    jQuery(".EDHwZd, .vg").each(function() { 
       jQuery(this).find("a:last").text("John Smith");
    });

    jQuery(".Tv").each(function() {
       jQuery(this).text("John Smith did something");
    });

    jQuery(".fe").each(function() { 
       jQuery(this).text("John Smith hung out with John Smith");
    });

    jQuery(".TS").css({"backgroundImage": "url(//ssl.gstatic.com/s2/profiles/images/silhouette96.png)"}).attr("personkey", "John Smith");
  }
  
  jQuery(function($) { 
    setInterval(function() {
      $(".Hf, .c-i-Cc-Dr, .eQ, .uo, .JywKwb, .proflink, .fn, .kb, .tD, .uD, .c-W-yq").each(function() { 
          $(this).text("John Smith");
      });

      $(".Fn, .c-Ob-jy, .c-i-Cc-Dk, .fQ, .B-J-pc-ja, .g-PyX6, .CVZgrc, .dk, .KM, .c-W-nr, .c-W-tq").not(".B-J-pc-ja-C .B-J-pc-ja").each(function() { 
          $(this).attr("src", "//ssl.gstatic.com/s2/profiles/images/silhouette96.png");
      });

      $(".EDHwZd, .vg").each(function() { 
         $(this).find("a:last").text("John Smith");
      });

      $(".Tv").each(function() {
         $(this).text("John Smith did something");
      });

      $(".fe").each(function() { 
         $(this).text("John Smith hung out with John Smith");
      });
      
      $(".TS").css({"backgroundImage": "url(//ssl.gstatic.com/s2/profiles/images/silhouette96.png)"}).attr("personkey", "John Smith");
      
    }, 350);
        
    johnSmithIt();
  });