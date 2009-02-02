/*
Popupwindow plugin for jQuery.
by: Tony Petruzzi
homepage: http://rip747.wordpress.com
plugin download: http://rip747.wordpress.com/2007/03/02/the-return-of-popupwindow-jquery-plugin/

************************************************************************************

NOTE: the index.html file included in this package gives example on how
to us the plugin and the different options available.

************************************************************************************
  
Takes a link and will create a popupwindow based on the href of the link. You can
over ride the default setting by passing your own settings or profile name in the
REL attribute of the link.
   
To use just include the plugin in the HEAD section of the page AFTER calling jQuery.
After that, use jQuery to find the links you want and pass any parameters you want

04/04/2007:

1) added profiles so you don't have to pass the settings for each link anymore.
2) remove resize as a setting and add the correct setting resizable
3) removed example text from this file and made an index.htm files to house example.
4) add example of using profiles to the new examples page.
5) example pulls the latest jquery library from jquery.com.

05/14/2007

1) removed trailing comma in settings that was causing IE to bottom out with an error.

01/21/2008

1) added new setting "createnew" which when set to false will make all popups open in the same window
2) fixed a major bug where "settings" wasn't vared.

02/13/2008

1) added location and menubar settings as suggested by Matthew

02/20/2008

1) fixed bug: commas were missing in front of menubar and height attribute


*/

jQuery.fn.popupwindow = function(p)
{

	var profiles = p || {};

	return this.each(function(index){
		var settings, parameters, mysettings, b, a;
		
		// for overrideing the default settings
		mysettings = (jQuery(this).attr("rel") || "").split(",");

		
		settings = {
			height:600, // sets the height in pixels of the window.
			width:600, // sets the width in pixels of the window.
			toolbar:0, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
			scrollbars:0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
			status:0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
			resizable:1, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
			left:0, // left position when the window appears.
			top:0, // top position when the window appears.
			center:0, // should we center the window? {1 (YES) or 0 (NO)}. overrides top and left
			createnew:1, // should we create a new window for each occurance {1 (YES) or 0 (NO)}.
			location:0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
			menubar:0 // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
		};

		// if mysettings length is 1 and not a value pair then assume it is a profile declaration
		// and see if the profile settings exists

		if(mysettings.length == 1 && mysettings[0].split(":").length == 1)
		{
			a = mysettings[0];
			// see if a profile has been defined
			if(typeof profiles[a] != "undefined")
			{
				settings = jQuery.extend(settings, profiles[a]);
			}
		}
		else
		{
			// overrides the settings with parameter passed in using the rel tag.
			for(var i=0; i < mysettings.length; i++)
			{
				b = mysettings[i].split(":");
				if(typeof settings[b[0]] != "undefined" && b.length == 2)
				{
					settings[b[0]] = b[1];
				}
			}
		}

		// center the window
		if (settings.center == 1)
		{
			settings.top = (screen.height-(settings.height + 110))/2;
			settings.left = (screen.width-settings.width)/2;
		}
		
		parameters = "location=" + settings.location + ",menubar=" + settings.menubar + ",height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars  + ",status=" + settings.status + ",resizable=" + settings.resizable + ",left=" + settings.left  + ",screenX=" + settings.left + ",top=" + settings.top  + ",screenY=" + settings.top;
		
		jQuery(this).bind("click", function(){
			var name = settings.createnew ? "PopUpWindow" + index : "PopUpWindow";
			window.open(this.href, name, parameters).focus();
			return false;
		});
	});

};