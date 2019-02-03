var slidpos = 1;

function changeslid(sp) {
    var s;
    var slid = document.getElementsByClassName("slidspic");
    var indicator = document.getElementsByClassName("ind")
    if (sp > slid.length) { slidpos = 1 };
    if (sp < 1) { slidpos = slid.length };
    for (s = 0; s < slid.length; s++) {
        slid[s].style.display = "none";
        indicator[s].style.backgroundColor = "white";
    }
    slid[slidpos - 1].style.display = "block";
    indicator[slidpos - 1].style.backgroundColor = "black";
    setTimeout(changeslid,3000);
}
function change(n) {
    changeslid(slidpos += n);
}
if (document.getElementsByClassName("slidspic").length > 0) {
    changeslid(slidpos);
}
