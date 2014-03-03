function on_load()
{
    $('.mainMenuItem').click(function()
    {
        var currMMI = $(this);
        var currSML = getSubmenuListClass(currMMI);
        var currMLB = currMMI.find('.mainLineBox');
        var currMOLB = currMMI.find('.mainOpenLineBox');
        var topL = 0;

        if(currMMI.hasClass("clicked"))
        {
            currMMI.removeClass("clicked");
            if (currSML.length !== 0)
            {
                currSML.slideUp(300);
                currMLB.show();
                currMOLB.hide();
            }

            // move selectorArrow
            topL = currMMI.offset().top;
            $('#selector').animate({ top: topL}, 200);
        }
        else
        {
            $('.mainMenuItem').each(function()
            {
                var currMMI = $(this);

                if(currMMI.hasClass("clicked"))
                {
                    var currSML = getSubmenuListClass(currMMI);
                    var currMLB = currMMI.find('.mainLineBox');
                    var currMOLB = currMMI.find('.mainOpenLineBox');
                    currMMI.removeClass("clicked");
                    if (currSML.length !== 0)
                    {
                        currSML.slideUp(300);
                        currMOLB.hide();
                        currMLB.show();
                    }

                    $('.subMenuItem').each(function()
                    {
                        var currSMI = $(this);
                        var currSMT = currSMI.find('.subMenuText');

                        if(currSMI.hasClass("clicked"))
                        {
                            currSMI.removeClass("clicked");
                            hlTextToggle(false, currSMT);
                        }
                    });
                }
            });

            currMMI.addClass("clicked");
            if (currSML.length !== 0) {
                currMOLB.show();
                currMLB.hide();
                currSML.slideDown(300, function() {
                    // move selectorArrow
                    topL = currMMI.offset().top;
                    $('#selector').animate({ top: topL}, 200);
                });
            }
        }
    });

    $('.subMenuItem').click(function()
    {
        var currSMI = $(this);
        var currSMT = currSMI.find('.subMenuText');

        if(currSMI.hasClass("clicked"))
        {
            currSMI.removeClass("clicked");
            hlTextToggle(false, currSMT);
        }
        else
        {
            $('.subMenuItem').each(function()
            {
                var currSMI = $(this);
                var currSMT = currSMI.find('.subMenuText');

                if(currSMI.hasClass("clicked"))
                {
                    currSMI.removeClass("clicked");
                    hlTextToggle(false, currSMT);
                }
            });

            currSMI.addClass("clicked");
            hlTextToggle(true, currSMT);

            //move selectorArrow
            topL = currSMI.offset().top;
            $('#selector').animate({ top: topL}, 200);
        }
    });

    $('#logo').click(function()
    {
        selector = $('#selector');

        if(selector.hasClass('selectorLine'))
        {
            console.log("hasline");
            selector.addClass("selectorArrow");
            selector.removeClass("selectorLine");
        }
        else if(selector.hasClass('selectorArrow'))
        {
            console.log("nothasline");
            selector.removeClass("selectorArrow");
            selector.addClass("selectorLine");
        }
    });
}

function getSubmenuListClass(mainMenuItemClass)
{
    return $('.' + 'sub' + $(mainMenuItemClass).attr("class").split(/\s+/)[1]);
}

function hlTextToggle(highlight, textSpan)
{
    if(highlight)
    {
        //textSpan.html("~&nbsp;&nbsp;" + textSpan.html() + "&nbsp;&nbsp;~");
        textSpan.css("font-weight", "700");
    }
    else
    {
        //textSpan.html(textSpan.html().replace("&nbsp;&nbsp;~", "")
        //                            .replace("~&nbsp;&nbsp;", ""));
        textSpan.css("font-weight", "500");
    }
}


