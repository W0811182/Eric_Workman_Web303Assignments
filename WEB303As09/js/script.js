let $table = $('<table/>'); // generate a table

$('body').append($table); // add the table to the page


$('table').append('<thead/>'); // adding table parts(table head, table body, tbl class)
$('table').append('<tbody/>');
$('table').addClass('sortable');


let $headingRow = $('<tr/>').addClass('headingRow'); //store and add 'Headingrow' class to new tr

$('thead').append($headingRow); // add table headers to table head
$headingRow.append($('<th/>').html('<a data-sort="name">First Name</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Last Name</a>'));
$headingRow.append($('<th/>').html('<a data-sort="date">Date of Birth</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Major</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Sex</a>'));



// AJAX DATA GET
$.ajax({      
    type: "get",
    url: "chars.json",
    error: function(){
        $('.sortable').empty().append('<h1> Content can not be retrieved</h1>'); //error message if data get fails
    },
    success: function(response){
        //POPULATING TABLE WITH DATA

        $.each(response, function(index, value){ // for each set of data
            
            let $row = $('<tr/>').addClass('row'); //make a new row
            
            $row.append($('<td class="name"></td>').text(value.fname)); // insert data into row
            $row.append($('<td></td>').text(value.lname));
            $row.append($('<td></td>').text(value.doB));
            $row.append($('<td></td>').text(value.major));
            $row.append($('<td></td>').text(value.sex.toUpperCase()));
    
            $('tbody').append($row); // add the row to the table body
        });

        

        var compare = {
            name: function(a,b){
                a = a.replace(/^the /i, '');
                b =  b.replace(/^the /i, '');
        
                if (a < b){
                    return -1;
                } else {
                    return a>b ? 1 : 0;
                }
            },
            date: function(a,b){
                a = new Date(a);
                b = new Date(b);
        
                return a - b;
            }
        };
        
            $('.sortable').each(function(){
                var $table = $(this);
                var $tbody = $table.find('tbody');
                var $controls = $table.find('a');
                var rows = $tbody.find('tr').toArray();
                const oCopy = [...rows]; // copying default list state to recall when all classes are removed

                $controls.on('click',function(){
                    var $header = $(this);
                    var order = $header.data('sort');
                    var column;
                    //If selected item has ascending or descending class, reverse contents
                    if ($header.is('.ascending')){
                        $header.toggleClass('ascending descending');
                       
                        $tbody.append(rows.reverse());
                    } else if($header.is('.descending')){
                        $header.removeClass('descending ascending');

                        $tbody.append(oCopy);
                    } else {
                        $header.addClass('ascending');
                        //Remove asc or desc from all other headers
                        $header.siblings().removeClass('ascending descending');
                        if (compare.hasOwnProperty(order)){
                            column = $controls.index(this);
        
                         rows.sort(function(a,b){
                                a = $(a).find('td').eq(column).text();
                                b = $(b).find('td').eq(column).text();
                                console.log('a: ',a,'   b: ', b)
                                return  compare[order](a,b);
                                
                                
                            });
                            $tbody.append(rows);
                        }
                    }
        
                if($header.is('.ascending, .descending')) {
                    $controls.not($header).removeClass('ascending descending');
                }
                });
            });
        let fname = $('.name');
        let cache = []; //initializing array for cache

        fname.each(function(){ //push every first name into a cache
            cache.push({
                element: this,
                text: this.textContent.trim().toLowerCase()
            });
        });
        console.log(cache); //testing cache
        
    }  
    
});


    
    

