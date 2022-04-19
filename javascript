<script type='text/javascript'>
    var defaultMenuWidth = "200px"; //Breite des Menüs.

    var linkset = new Array();

    // Menüsets und die zugehörigen Links.

    linkset[0] = '<a href="#">Display</a>';
    linkset[0] += '<hr>' //Optionale Trennlinie
    linkset[0] += '<a href="#">Ersatz Display (Nachbau)</a>';
    linkset[0] += '<a href="#">Ersatz Display (Original)</a>';
    linkset[0] += '<a href="#">Reperatur-Service</a>';
    linkset[0] += '<br>';
    linkset[0] += '<a href="#">Akku</a>';
    linkset[0] += '<hr>';
    linkset[0] += '<a href="#">Original Akku´s</a>';
    linkset[0] += '<a href="#">Nachbau Akku´s</a>';
    linkset[0] += '<br>';
    linkset[0] += '<a href="#">Kamera</a>';
    linkset[0] += '<hr>';
    linkset[0] += '<a href="#">Front Kamera</a>';
    linkset[0] += '<a href="#">Hintere Kamera</a>';
    linkset[0] += '<br>';

    linkset[0] += '<a href="#">Mikrofone</a>';
    linkset[0] += '<br>';
    linkset[0] += '<a href="#">Tasten & Touch</a>';
    linkset[0] += '<a href="#"></a>';
    linkset[0] += '<a href="#"></a>';





    linkset[1] = '<a href="#">Apple</a>';
    linkset[1] += '<a href="#">Samsung</a>';
    linkset[1] += '<a href="#">Huawei</a>';
    linkset[1] += '<a href="#">Honor</a>';
    linkset[1] += '<a href="#">Xiaomi</a>';
    linkset[1] += '<a href="#">ZTE</a>';
    linkset[1] += '<a href="#">Oppo</a>';
    linkset[1] += '<a href="#">Nokia</a>';
    linkset[1] += '<a href="#">LG</a>';
    linkset[1] += '<a href="#">HTC</a>';

    linkset[2] = '<a href="#"></a>';
    linkset[2] += '<a href="#"></a>';
    linkset[2] += '<a href="#"></a>';
    linkset[2] += '<a href="#"></a>';

    linkset[3] = '<a href="#"></a>';
    linkset[3] += '<a href="#"></a>';
    linkset[3] += '<a href="#"></a>';
    linkset[3] += '<a href="#"></a>';

    linkset[4] = '<a href="#"></a>';
    linkset[4] += '<a href="#"></a>';
    linkset[4] += '<a href="#"></a>';
    linkset[4] += '<a href="#"></a>';

    // Ab hier nichts mehr ändern

    document.write('<style type="text/css">');
    document.write('#popitmenu{ position: absolute; top: -200px; background-color: grey; border:1px solid black; font: normal 16px Verdana; line-height: 20px; z-index: 200; display: none; }');
    document.write('#popitmenu a{ text-decoration: none; padding-left: 6px; color: black; display: block; }');
    document.write('#popitmenu a:hover{ background-color: #008baa; }');
    document.write('</style>');

    var ie5 = document.all && !window.opera;
    var ns6 = document.getElementById;

    if (ie5 || ns6)
        document.write('<div id="popitmenu" onmouseover="clearhidemenu();" onmouseout="dynamichide(event)"></div>');

    function iecompattest() {
        return (document.compatMode && document.compatMode.indexOf("CSS") != -1) ? document.documentElement : document.body;
    }

    function showmenu(e, which, optWidth) {
        if (!document.all && !document.getElementById)
            return;
        clearhidemenu();
        menuobj = ie5 ? document.all.popitmenu : document.getElementById("popitmenu");
        menuobj.innerHTML = which;
        menuobj.style.width = (typeof optWidth != "undefined") ? optWidth : defaultMenuWidth;
        menuobj.contentwidth = menuobj.offsetWidth;
        menuobj.contentheight = menuobj.offsetHeight;
        eventX = ie5 ? event.clientX : e.clientX;
        eventY = ie5 ? event.clientY : e.clientY;
        //Find out how close the mouse is to the corner of the window
        var rightedge = ie5 ? iecompattest().clientWidth - eventX : window.innerWidth - eventX;
        var bottomedge = ie5 ? iecompattest().clientHeight - eventY : window.innerHeight - eventY;
        //if the horizontal distance isn't enough to accomodate the width of the context menu
        if (rightedge < menuobj.contentwidth)
            menuobj.style.left = ie5 ? iecompattest().scrollLeft + eventX - menuobj.contentwidth + "px" : window.pageXOffset + eventX - menuobj.contentwidth + "px";
        else
            menuobj.style.left = ie5 ? iecompattest().scrollLeft + eventX + "px" : window.pageXOffset + eventX + "px";

        //same concept with the vertical position
        if (bottomedge < menuobj.contentheight)
            menuobj.style.top = ie5 ? iecompattest().scrollTop + eventY - menuobj.contentheight + "px" : window.pageYOffset + eventY - menuobj.contentheight + "px";
        else
            menuobj.style.top = ie5 ? iecompattest().scrollTop + event.clientY + "px" : window.pageYOffset + eventY + "px";
        menuobj.style.display = "block";
        return false;
    }

    function contains_ns6(a, b) {
        //Determines if 1 element in contained in another
        while (b.parentNode)
            if ((b = b.parentNode) == a)
                return true;
        return false;
    }

    function hidemenu() {
        if (window.menuobj)
            menuobj.style.display = "none";
    }

    function dynamichide(e) {
        if (ie5 && !menuobj.contains(e.toElement))
            hidemenu();
        else if (ns6 && e.currentTarget != e.relatedTarget && !contains_ns6(e.currentTarget, e.relatedTarget))
            hidemenu();
    }

    function delayhidemenu() {
        delayhide = setTimeout("hidemenu()", 500);
    }

    function clearhidemenu() {
        if (window.delayhide)
            clearTimeout(delayhide);
    }

    if (ie5 || ns6) document.onclick = hidemenu;

    //-->
</script>
<br />


<script type="text/javascript">
    function addEvent889(obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false)
        } else if (obj.attachEvent) {
            obj["e" + type + fn] = fn;
            obj[type + fn] = function() {
                obj["e" + type + fn](window.event)
            };
            obj.attachEvent("on" + type, obj[type + fn])
        }
    };
    addEvent889(window, 'load', SecondPast);
</script>







<div>
    <a href="#" onmouseover="showmenu(event,linkset[0])" onmouseout="delayhidemenu()">Unsere Produkte</a><br>
    <a href="#" onmouseover="showmenu(event,linkset[1], '180px')" onmouseout="delayhidemenu()">Marken</a><br>
    <a href="#" onmouseover="showmenu(event,linkset[2])" onmouseout="delayhidemenu()">Display Schutz</a><br>
    <a href="#" onmouseover="showmenu(event,linkset[3], '180px')" onmouseout="delayhidemenu()">Komplett Schutz</a><br>
    <a href="#" onmouseover="showmenu(event,linkset[4])" onmouseout="delayhidemenu()">Back Cover</a><br>
</div>