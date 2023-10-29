$('.accordion').on('click', '.accordion-control', function(e){  //button get
      e.preventDefault();                                       //prevent link submits
    
                                                                                                            
      var selectedPanel =                                       
      $(this)                                                   // define and store a panel-
      .next('.accordion-panel');                                // thats been selected
      
      var panels  =                                             // define and store 
      $('.accordion-panel')                                     // panels not last selected
      .not(selectedPanel);                                       
                                                                

      if(selectedPanel.is(':visible')) {                        // if panel already open
        selectedPanel.slideToggle();                            // close it 
      }else{                                                    // if selected panel NOT open
        selectedPanel.slideToggle();                            // open it - 
        panels.filter(':visible').slideToggle();                // close other panels that are visible and not selected
        selectedPanel.css('border', '5px double black');        // give only a selected panel a border 
      }
  
         
  });

$('.tab-list').each(function(){                              //for every item in tab-list
                                                               // -- STORING ITEMS --
      var $this = $(this);                                       //clicked link 
      var $tab = $this.find('li.active');                        //active panel <-----
      var $link = $tab.find('a');                                //link within panel  \ <------
      var $panel = $($link.attr('href'));                        //href attribute within link  \

    $this.on('click', '.tab-control', function(e) {             //when a link of the tab control class clicked
      e.preventDefault();                                       //prevent submits
      var $link = $(this),                                      //store clicked link
      id = this.hash;                                           //get id name and store it

    if (id && !$link.is('.active')) {                          //if panel not active
        $panel.removeClass('active');                          //make previous panel inactive
        $tab.removeClass('active');                            //make previous tab inactive

        $panel = $(id).addClass('active');                     //Make new panel active
        $tab = $link.parent().addClass('active')               //Make new tab active

    }
    });
  });