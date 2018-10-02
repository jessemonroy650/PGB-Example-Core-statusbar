var statusbarPlugin = {
    version : '1.0.0',

    //
    properties2HTML : function (outputElementId) {
        var statusbarStuff = "";

        statusbarStuff = "<p class=r /><b>StatusBar.isVisible:</b> " + StatusBar.isVisible;

        document.getElementById(outputElementId).innerHTML = statusbarStuff;
    },
    //
    hide : function () {
        StatusBar.hide();

        return StatusBar.isVisible;
    }
}
