

function jsonGet()
{
    $.getJSON("team.json", function (data) {


    $.each(data.members, function (index, obj)
        {

            $("#team").append("<h2>Name: " + obj.name +"</h2>" + "<h5>Position: " + obj.position +"</h5>" + "<p>bio: " + obj.bio + "</p>");
            $("#team").append("<br /> <br />");


        });
        

    });
 
}

function ajaxGet()
{
    $.ajax
        ({

        url: "team.json",
        type: "GET",
        dataType: "JSON",

            beforeSend: function (loading)
                    {
                        $("#team").text("Loading...");
                    },


            success: function (data)
                    {
                        $("#team").empty();
                        $.each(data.members, function(index, obj)
                         { 
                            $("#team").append("<h2>Name: " + obj.name +"</h2>" + "<h5>Position: " + obj.position +"</h5>" + "<p>bio: " + obj.bio + "</p>");
                            $("#team").append("<br /> <br />");

                        });

                        
            },


            error: function (jqxhr, Status, error)
                    {
                        console.error(Status, error);
                        $("#team").text("The request could not be made :(");
                    }
        });
}





$(document).ready(function () {

    jsonGet();

});