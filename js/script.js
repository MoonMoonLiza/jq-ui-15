//js


//jq
$(document).ready(function(){
  //draggable 
	$( "#draggable" ).draggable();
  $( "#drag" ).draggable();
  //accordion
  $( "#accordion" ).accordion({
    collapsible: true
  });
  //accordion
   var data = ["ActionScript",
                "AppleScript",
                "Asp",
                "BASIC",
                "C",
                "C++",
                "Clojure",
                "COBOL",
                "ColdFusion",
                "Erlang",
                "Fortran",
                "Groovy",
                "Haskell",
                "Java",
                "JavaScript",
                "Lisp",
                "Perl",
                "PHP",
                "Python",
                "Ruby",
                "Scala",
                "Scheme"];
    $( "#course_name" ).autocomplete({
      source: data
    });
    //datepicker
     $( "#datepicker" ).datepicker();
    //tabs
     $( "#tabs" ).tabs({
      event: "mouseover"
     });
     //tooltips
     var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
       }
     });
    $( "<button>" )
      .text( "Submit" )
      .button()
      .on( "click", function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );
      //dialog
      $( "#dialog" ).dialog();
      //animate
      var state = true;
      $( "#button" ).on( "click", function() {
      if ( state ) {
      $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
      });
      //checkboxradio
      $( "input" ).checkboxradio();
      $( "fieldset" ).controlgroup();

      //drag3
      $( "#drag3" ).draggable({ scroll: true });
      $( "#drag3_2" ).draggable({ scroll: true, scrollSensitivity: 100 });
      $( "drag3_3" ).draggable({ scroll: true, scrollSpeed: 100 });
   //toggl_2
       $( "#button" ).on( "click", function() {
       $( "#effect" ).toggleClass( "newClass", 1000 );
     });
   
      function callback() {
        setTimeout(function() {
          $( "#effect_2" ).removeClass( "newClass" );
        }, 1500 );
      }
   //sortable
       $( "#sortable" ).sortable();
       $( "#sortable" ).disableSelection();
   //sortable_2
        $( "#sortable_2" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable_2" ).disableSelection(); 
  //sortable_3
     $( "ul.droptrue" ).sortable({
      connectWith: "ul"
    });
 
    $( "ul.dropfalse" ).sortable({
      connectWith: "ul",
      dropOnEmpty: false
    });
 
    $( "#sortable1, #sortable2, #sortable3" ).disableSelection();  
  //menu
    $( "#menu" ).menu();  
})