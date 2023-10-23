/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

class ContentItem 
{

        //props
        id = 0;
        name;
        descrip;
        genre;
    

        constructor(id,name,descrip,genre) {
            this.id = id;
            this.genre = genre;
            this.name = name;
            this.descrip = descrip;
        }
        
       
            updateContentItem(id,name,descrip,genre) {
                if((this.id = id) && (name != null) && (descrip != null) && (genre != null))
                {
                    this.name = name;
                    this.descrip = descrip;
                    this.genre = genre;
                }
                
            }   

            get getid(){
                return this.id;
        
            
            }
        
            // setter
            set setid(title){
                
               
                this.id = title + this.id;
                
            }


                toString()
                {
                    $("#content-item-list").append("<div id=content-item"+this.id+"</div><div style='text-align: center; margin-top: 12px; padding: 20px; background-color: grey; width: 400px; border: solid red 2px;' class='content-wrapper'><h2>"+this.name+"</h2><br><p>"+this.descrip+"</p><br><div>"+this.genre+"</div></div>");
                    
                }
                

}

    let array = 
    [
        new ContentItem(0,"Harry Potter", "Wizard movie", "Fantasy"),
        new ContentItem(1, "John Wick", "Guns movie" , "Action"),
        new ContentItem(2, "The Nun", "scary movie", "Horror"),
        new ContentItem(3, "Finding Nemo", "Fish Movie", "Adventure"),
        new ContentItem(4, "Treasure Island", "Pirate movie", "Adventure")
    ];

    for(let i in array)
    {
        array[i].toString();
        this.id++;
    }
});


