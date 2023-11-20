let $table = $('<table/>'); // generate a table

$('body').append($table); // add the table to the page


$('table').append('<thead/>'); // adding table parts(table head, table body, tbl class)
$('table').append('<tbody/>');
$('table').addClass('tbl');


let $headingRow = $('<tr/>').addClass('headingRow'); //store and add 'Headingrow' class to new tr

$('thead').append($headingRow); // add table headers to table head
$headingRow.append($('<td/>').text('first name'));
$headingRow.append($('<td/>').text('last name'));
$headingRow.append($('<td/>').text('date of birth'));
$headingRow.append($('<td/>').text('major'));
$headingRow.append($('<td/>').text('sex'));

$('h1').after('<input/>'); // add input after h1
$('input').attr('id', 'search'); //add id and search attributes to input

$('table').after('<button id="A-M">A - M  (0)</button>') //making filter buttons
$('table').after('<button id="N-Z">N - Z (0)</button>')
$('table').after('<button id="revert">clear filters</button')



// AJAX DATA GET
$.ajax({      
    type: "get",
    url: "chars.json",
    error: function(){
        $('.tbl').empty().append('<h1> Content can not be retrieved</h1>'); //error message if data get fails
    },
    success: function(response){
        //POPULATING TABLE WITH DATA


        let AtoM = 0; //initializing last name button counter vars
        let NtoZ = 0;

        $.each(response, function(index, value){ // for each set of data
            
            let $row = $('<tr/>').addClass('row'); //make a new row
            
            $row.append($('<td class="name"></td>').text(value.fname)); // insert data into row
            $row.append($('<td></td>').text(value.lname));
            $row.append($('<td></td>').text(value.doB));
            $row.append($('<td></td>').text(value.major));
            $row.append($('<td></td>').text(value.sex.toUpperCase()));
    
            $('tbody').append($row); // add the row to the table body

            let lnameFL = value.lname.charAt(0).toUpperCase(); // store var for getting first letter of last name
            if (lnameFL >= 'A' && lnameFL <= 'M') { //last names within A-M range counter 
                AtoM++;
            }
       else if (lnameFL >= 'N' && lnameFL <= 'Z') { //last names within N-Z range counter
                NtoZ++;
       }

        });

        $('#A-M').text(`A-M (${AtoM})`); //dynamic button name to auto update amount of names within a range
        $('#N-Z').text(`N-Z (${NtoZ})`);

        let fname = $('.name') // storing first names for search
        let $search = $('#search');
        
        let cache = []; //initializing array for cache

        fname.each(function(){ //push every first name into a cache
            cache.push({
                element: this,
                text: this.textContent.trim().toLowerCase()
            });
        });
        console.log(cache); //testing cache
        // search function
        function searchName(){
            let query = this.value.trim().toLowerCase(); // storing name values
            cache.forEach(function(fname){ // for each first name in cache
                let index=0; // initialize index var
                if(query){ // if the query is populated
                    index = fname.text.indexOf(query); //index = text of query var
                }
                fname.element.style.background = index === -1 ? 'white' : 'green'; //if not in search -white background- if in search 'green background-
                fname.element.style.color = index === -1 ? 'black' : 'white'; // black text if not | white if yes
                if($(search).val() == ""){ //keep it black text on white bg if search is empty
                    fname.element.style.color = 'black';
                    fname.element.style.background = 'white';
                }

            });

        }
       if('oninput' in $search[0]){ //checking oninput browser supp
           $search.on('input', searchName); //call searchName functions if input
        }else{
            $search.on('input', searchName);
        }




        // FILTER BUTTONS

        $('#A-M').on('click', function(){ // A-M button
            
           
                $('tbody tr').each(function(){ // for every table row
                        let fL = $(this).find('td:nth-child(2)').text().trim().charAt(0).toUpperCase(); //get the first letter of content under 2nd table header
                
                    if(!(fL >= 'A' && fL <= 'M' )) { //if the first letter is not betweem A-M
                    
                     $(this).hide(); // hide it 
                    }else{
                        $(this).show(); // if between A-M show it 
                       
                    }
                    

                
                })
                });
                $('#N-Z').on('click', function(){ // N-Z button
                    
                   
                        $('tbody tr').each(function(){ //for every table row
                                let fL = $(this).find('td:nth-child(2)').text().trim().charAt(0).toUpperCase(); //get first letter of rows under the 2nd table header 
                        
                            if(!(fL >= 'N' && fL <= 'Z' )) { //if the first letter is NOT within the range of N-Z
                            
                             $(this).hide(); // hide it 
                            }else{
                                $(this).show(); //show anything N-Z
                               
                            }
                            
        
                        
                        })
            
                    });
                $('#revert').on('click', function () { // filter clear button
                        $('tbody tr').each(function() { // for every row
                            $(this).show();             //show rows
                        })
                });    

    }
})