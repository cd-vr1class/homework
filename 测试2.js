var reportPtlogin = (function () {
    var gbIsPTReport = false,
    gnPTTimer = setTimeout(function () {
        reportPtlogin(-1);
    }, 5000);
    return function (_anRet) {
        clearTimeout(gnPTTimer);

        if (!gbIsPTReport) {
            gbIsPTReport = true;

            var _oImg = document.createElement("img"),
            _sUserName = document.getElementById("u") && encodeURIComponent(document.getElementById("u").value) || "",
            _sDomain = "https://rl.mail.qq.com" || "https://rl.mail.qq.com",
            _sStat = _sDomain + "/cgi-bin/getinvestigate" + _sUserName + "&r=" + Math.random();
            _sStat = _sStat.replace("#code#", ({ "1": 920, "0": 921, "-1": 922 })[_anRet]);
            _oImg.src = _sStat;
            _oImg.style.display = "none";
            document.body.appendChild(_oImg);
            _oImg = null;
        }
    }
})();