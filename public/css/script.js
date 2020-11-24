/*jQuery*/
$(
    function(){
        /*we will write inside it*/
        console.log('jQuery');
        /*mouseover function change the color of menu*/
        $('#menu li a').on('mouseover',function(){
            $(this).css("opacity","0.5")
        })
        /*mouseout function restore color again */
        $('#menu li a').on('mouseout',function(){
            $(this).css("opacity","1")
        })
        /*slide toggle function slide the side bar*/
        /*can be use in mouseover, mouseout and click */
        $("#side h3").on('click',function(){
            
            $(this).next().slideToggle();    
        })
        
    }
)

$(
    function(){
    $('#container table a').on('click',function(){
       /*console.log('cover click')*/
        
        var coverHTML = "";
        var imgHTML  ="";
        var imgSrc = $(this).attr('href');
        console.log(imgSrc);
        imgHTML ='<img src="'+imgSrc+'" alt="">'
        coverHTML='<div id="cover"><p>'+imgHTML+'</p></div>'
        
        $('body').append(coverHTML);
        return false;
        
    })
    
    $(document).on('click','#cover',function(){
        console.log('cover')
        $('#cover').remove();
    
    })
    
    }
)