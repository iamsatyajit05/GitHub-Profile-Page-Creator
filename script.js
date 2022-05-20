document.onreadystatechange = () => {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('mainBody').style.display = "none";
    } else if (state == 'complete') {
        setTimeout(() => {
            document.getElementById('interactive');
            document.getElementById('loader').style.display = "none";
            document.getElementById('mainBody').style.display = "block";
        }, 1000);
    }
}

let myName = document.getElementById("myName");
let idName = document.getElementById("idName");
let isName = false;
myName.parentElement.style.display = "none";

idName.addEventListener("keyup", changeName);

function changeName() {
    myName.innerText = idName.value;

    if (idName.value == 0) {
        myName.parentElement.style.display = "none";
        isName = false;
    }
    if (idName.value != 0) {
        myName.parentElement.style.display = "block";
        isName = true;
    }
}

let myImg = document.getElementById("myImg");
let idImg = document.getElementById("idImg");

idImg.addEventListener("keyup", changeImg);

function changeImg() {
    myImg.src = idImg.value;
}

let myAbout = document.getElementById("myAbout");
let idAbout = document.getElementById("idAbout");

idAbout.addEventListener("keyup", changeAbout);

function changeAbout() {
    myAbout.innerText = idAbout.value;
}

let headingList = document.getElementById("headingList");
headingList.style.display = "none";

let list1 = document.getElementById("list1");
let idList1 = document.getElementById("idList1");
list1.parentElement.style.display = "none";

let list2 = document.getElementById("list2");
let idList2 = document.getElementById("idList2");
list2.parentElement.style.display = "none";

let list3 = document.getElementById("list3");
let idList3 = document.getElementById("idList3");
list3.parentElement.style.display = "none";

let list4 = document.getElementById("list4");
let idList4 = document.getElementById("idList4");
list4.parentElement.style.display = "none";

let list5 = document.getElementById("list5");
let idList5 = document.getElementById("idList5");
list5.parentElement.style.display = "none";

let list6 = document.getElementById("list6");
let idList6 = document.getElementById("idList6");
list6.parentElement.style.display = "none";

let list7 = document.getElementById("list7");
let idList7 = document.getElementById("idList7");
let idList71 = document.getElementById("idList71");
list7.parentElement.style.display = "none";

let list8 = document.getElementById("list8");
let idList8 = document.getElementById("idList8");
let idList81 = document.getElementById("idList81");
list8.parentElement.style.display = "none";

let list9 = document.getElementById("list9");
let idList9 = document.getElementById("idList9");
list9.parentElement.style.display = "none";

let list10 = document.getElementById("list10");
let idList10 = document.getElementById("idList10");
list10.parentElement.style.display = "none";

const listArr = [idList1, idList2, idList3, idList4, idList5, idList6, idList7, idList8, idList9, idList10]

const myListArr = [list1, list2, list3, list4, list5, list6, list7, list8, list9, list10]

for (let i = 0; i < listArr.length; i++) {
    listArr[i].addEventListener("keyup", () => {
        if (i == 6 || i == 7)
            changeListWithLink(listArr[i], myListArr[i])

        else if (i == 8)
            changeHereWithLink(listArr[i], myListArr[i])

        else
            changeList(listArr[i], myListArr[i])
    });
}

function changeListWithLink(idList, nameList) {
    nameList.innerHTML = "<a href=\"\">" + idList.value + "</a>";

    nameList.parentElement.style.display = idList.value == 0 ? "none" : "block";

    headingList.style.display = showHeadingList() ? "block" : "none"
}

function changeHereWithLink(idList, nameList) {
    nameList.href = idList.value;

    nameList.parentElement.style.display = idList.value == 0 ? "none" : "block";

    headingList.style.display = showHeadingList() ? "block" : "none"
}

function changeList(idList, nameList) {
    nameList.innerText = idList.value;
    
    nameList.parentElement.style.display = idList.value == 0 ? "none" : "block";

    headingList.style.display = showHeadingList() ? "block" : "none"
}

function showHeadingList() {
    for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].value)
            return true;
    }
}

//SKILLS

let headingSkills = document.getElementById("headingSkills");
headingSkills.style.display = "none";

let idJava = document.getElementById("idJava");
let java = document.getElementById("java");
java.style.display = "none";

let idC = document.getElementById("idC");
let c = document.getElementById("c");
c.style.display = "none";

let idCpp = document.getElementById("idCpp");
let cpp = document.getElementById("cpp");
cpp.style.display = "none";

let idCsharp = document.getElementById("idCsharp");
let csharp = document.getElementById("csharp");
csharp.style.display = "none";

let idPython = document.getElementById("idPython");
let python = document.getElementById("python");
python.style.display = "none";

let idJs = document.getElementById("idJs");
let js = document.getElementById("js");
js.style.display = "none";

let idTs = document.getElementById("idTs");
let ts = document.getElementById("ts");
ts.style.display = "none";

let idSwift = document.getElementById("idSwift");
let swift = document.getElementById("swift");
swift.style.display = "none";

let idGo = document.getElementById("idGo");
let go = document.getElementById("go");
go.style.display = "none";

let idPhp = document.getElementById("idPhp");
let php = document.getElementById("php");
php.style.display = "none";

let idAndroid = document.getElementById("idAndroid");
let android = document.getElementById("android");
android.style.display = "none";

let idFlutter = document.getElementById("idFlutter");
let flutter = document.getElementById("flutter");
flutter.style.display = "none";

let idKotlin = document.getElementById("idKotlin");
let kotlin = document.getElementById("kotlin");
kotlin.style.display = "none";

let idReactnative = document.getElementById("idReactnative");
let reactnative = document.getElementById("reactnative");
reactnative.style.display = "none";

let idDart = document.getElementById("idDart");
let dart = document.getElementById("dart");
dart.style.display = "none";

let idHtml = document.getElementById("idHtml");
let html = document.getElementById("html");
html.style.display = "none";

let idCss = document.getElementById("idCss");
let css = document.getElementById("css");
css.style.display = "none";

let idBootstrap = document.getElementById("idBootstrap");
let bootstrap = document.getElementById("bootstrap");
bootstrap.style.display = "none";

let idReact = document.getElementById("idReact");
let react = document.getElementById("react");
react.style.display = "none";

let idTailwind = document.getElementById("idTailwind");
let tailwind = document.getElementById("tailwind");
tailwind.style.display = "none";

let idVuejs = document.getElementById("idVuejs");
let vuejs = document.getElementById("vuejs");
vuejs.style.display = "none";

let idAngular = document.getElementById("idAngular");
let angular = document.getElementById("angular");
angular.style.display = "none";

let idMaterialui = document.getElementById("idMaterialui");
let materialui = document.getElementById("materialui");
materialui.style.display = "none";

let idBulma = document.getElementById("idBulma");
let bulma = document.getElementById("bulma");
bulma.style.display = "none";

let idSvelte = document.getElementById("idSvelte");
let svelte = document.getElementById("svelte");
svelte.style.display = "none";

let idNodejs = document.getElementById("idNodejs");
let nodejs = document.getElementById("nodejs");
nodejs.style.display = "none";

let idExpress = document.getElementById("idExpress");
let express = document.getElementById("express");
express.style.display = "none";

let idNginx = document.getElementById("idNginx");
let nginx = document.getElementById("nginx");
nginx.style.display = "none";

let idDjango = document.getElementById("idDjango");
let django = document.getElementById("django");
django.style.display = "none";

let idFlask = document.getElementById("idFlask");
let flask = document.getElementById("flask");
flask.style.display = "none";

let idUnity = document.getElementById("idUnity");
let unity = document.getElementById("unity");
unity.style.display = "none";

let idUnreal = document.getElementById("idUnreal");
let unreal = document.getElementById("unreal");
unreal.style.display = "none";

let idGit = document.getElementById("idGit");
let git = document.getElementById("git");
git.style.display = "none";

let idArduino = document.getElementById("idArduino");
let arduino = document.getElementById("arduino");
arduino.style.display = "none";

let idLinux = document.getElementById("idLinux");
let linux = document.getElementById("linux");
linux.style.display = "none";

const skillArr = [idJava, idC, idCpp, idCsharp, idPython, idJs, idTs, idSwift, idGo, idPhp, idAndroid, idFlutter, idKotlin, idReactnative, idDart, idHtml, idCss, idBootstrap, idReact, idTailwind, idVuejs, idAngular, idMaterialui, idBulma, idSvelte, idNodejs, idExpress, idDjango, idFlask, idUnity, idUnreal, idGit, idArduino, idLinux]

const myskillArr = [java, c, cpp, csharp, python, js, ts, swift, go, php, android, flutter, kotlin, reactnative, dart, html, css, bootstrap, react, tailwind, vuejs, angular, materialui, bulma, svelte, nodejs, express, django, flask, unity, unreal, git, arduino, linux]

for (let i = 0; i < skillArr.length; i++) {
    skillArr[i].addEventListener("click", () => {
        showSkill(skillArr[i], myskillArr[i])
    });
}

function showSkill(idSkill, imgSkill) {
    if (idSkill.checked)
        imgSkill.style.display = "inline";

    else
        imgSkill.style.display = "none";

        headingSkills.style.display = showHeadingSkill() ? "block" : "none"
}

function showHeadingSkill() {
    for (let i = 0; i < skillArr.length; i++) {
        if (skillArr[i].checked)
            return true;
    }
}

// SOCIALS

let headingSocials = document.getElementById("headingSocials");
headingSocials.style.display = "none";

let myLinkedin = document.getElementById("myLinkedin");
let idLinkedin = document.getElementById("idLinkedin");
myLinkedin.style.display = "none";

idLinkedin.addEventListener("keyup", changeLinkedin);

function changeLinkedin() {
    myLinkedin.href = "https://linkedin.com/in/" + idLinkedin.value;

    showSocials(idLinkedin, myLinkedin);
}

let myTwitter = document.getElementById("myTwitter");
let idTwitter = document.getElementById("idTwitter");
myTwitter.style.display = "none";

idTwitter.addEventListener("keyup", changeTwitter);

function changeTwitter() {
    myTwitter.href = "https://twitter.com/" + idTwitter.value;

    showSocials(idTwitter, myTwitter);
}

let myDiscord = document.getElementById("myDiscord");
let idDiscord = document.getElementById("idDiscord");
myDiscord.style.display = "none";

idDiscord.addEventListener("keyup", changeDiscord);

function changeDiscord() {
    myDiscord.href = "https://twitter.com/" + idDiscord.value;
    showSocials(idDiscord, myDiscord);
}

let myStackoverflow = document.getElementById("myStackoverflow");
let idStackoverflow = document.getElementById("idStackoverflow");
myStackoverflow.style.display = "none";

idStackoverflow.addEventListener("keyup", changeSOF);

function changeSOF() {
    myStackoverflow.href = "https://twitter.com/" + idStackoverflow.value;
    showSocials(idStackoverflow, myStackoverflow);
}

let myFacebook = document.getElementById("myFacebook");
let idFacebook = document.getElementById("idFacebook");
myFacebook.style.display = "none";

idFacebook.addEventListener("keyup", changeFacebook);

function changeFacebook() {
    myFacebook.href = "https://www.facebook.com/" + idFacebook.value;
    showSocials(idFacebook, myFacebook);
}

let myInstgram = document.getElementById("myInstgram");
let idInstagram = document.getElementById("idInstagram");
myInstgram.style.display = "none";

idInstagram.addEventListener("keyup", changeInstagram);

function changeInstagram() {
    myInstgram.href = "https://www.instagram.com/" + idInstagram.value;
    showSocials(idInstagram, myInstgram);
}

let myYoutube = document.getElementById("myYoutube");
let idYoutube = document.getElementById("idYoutube");
myYoutube.style.display = "none";

idYoutube.addEventListener("keyup", changeYoutube);

function changeYoutube() {
    myYoutube.href = "https://www.youtube.com/c/" + idYoutube.value;
    showSocials(idYoutube, myYoutube);
}

let myReddit = document.getElementById("myReddit");
let idReddit = document.getElementById("idReddit");
myReddit.style.display = "none";

idReddit.addEventListener("keyup", changeReddit);

function changeReddit() {
    myReddit.href = "https://www.reddit.com/user/" + idReddit.value;
    showSocials(idReddit, myReddit);
}

let myKaggle = document.getElementById("myKaggle");
let idKaggle = document.getElementById("idKaggle");
myKaggle.style.display = "none";

idKaggle.addEventListener("keyup", changeKaggle);

function changeKaggle() {
    myKaggle.href = "https://www.kaggle.com/" + idKaggle.value;
    showSocials(idKaggle, myKaggle);
}

let myMedium = document.getElementById("myMedium");
let idMedium = document.getElementById("idMedium");
myMedium.style.display = "none";

idMedium.addEventListener("keyup", changeMedium);

function changeMedium() {
    myMedium.href = "https://medium.com/@" + idMedium.value;
    showSocials(idMedium, myMedium);
}

let myDribble = document.getElementById("myDribble");
let idDribble = document.getElementById("idDribble");
myDribble.style.display = "none";

idDribble.addEventListener("keyup", changeDribble);

function changeDribble() {
    myDribble.href = "https://dribbble.com/" + idDribble.value;
    showSocials(idDribble, myDribble);
}

let myBehance = document.getElementById("myBehance");
let idBehance = document.getElementById("idBehance");
myBehance.style.display = "none";

idBehance.addEventListener("keyup", changeBehance);

function changeBehance() {
    myBehance.href = "https://www.behance.net/" + idBehance.value;
    showSocials(idBehance, myBehance);
}

let myCodepen = document.getElementById("myCodepen");
let idCodepen = document.getElementById("idCodepen");
myCodepen.style.display = "none";

idCodepen.addEventListener("keyup", changeCodepen);

function changeCodepen() {
    myCodepen.href = "https://codepen.io/" + idCodepen.value;
    showSocials(idCodepen, myCodepen);
}

let myGFG = document.getElementById("myGFG");
let idGFG = document.getElementById("idGFG");
myGFG.style.display = "none";

idGFG.addEventListener("keyup", changeGFG);

function changeGFG() {
    myGFG.href = "https://auth.geeksforgeeks.org/user/" + idGFG.value + "/profile";
    showSocials(idGFG, myGFG);
}

let myHackerrank = document.getElementById("myHackerrank");
let idHackerrank = document.getElementById("idHackerrank");
myHackerrank.style.display = "none";

idHackerrank.addEventListener("keyup", changeHackerrank);

function changeHackerrank() {
    myHackerrank.href = "https://www.hackerrank.com/" + idHackerrank.value;
    showSocials(idHackerrank, myHackerrank);
}

let myLeetcode = document.getElementById("myLeetcode");
let idLeetcode = document.getElementById("idLeetcode");
myLeetcode.style.display = "none";

idLeetcode.addEventListener("keyup", changeLeetcode);

function changeLeetcode() {
    myLeetcode.href = "https://leetcode.com/" + idLeetcode.value;
    showSocials(idLeetcode, myLeetcode);
}

let myCodechef = document.getElementById("myCodechef");
let idCodechef = document.getElementById("idCodechef");
myCodechef.style.display = "none";

idCodechef.addEventListener("keyup", changeCodechef);

function changeCodechef() {
    myCodechef.href = "https://discuss.codechef.com/u/" + idCodechef.value + "/summary";
    showSocials(idCodechef, myCodechef);
}

let myCodeforces = document.getElementById("myCodeforces");
let idCodeforces = document.getElementById("idCodeforces");
myCodeforces.style.display = "none";

idCodeforces.addEventListener("keyup", changeCodeforces);

function changeCodeforces() {
    myCodeforces.href = "https://codeforces.com/profile/" + idCodeforces.value;
    showSocials(idCodeforces, myCodeforces);
}


const socailArr = [idLinkedin, idTwitter, idDiscord, idStackoverflow, idFacebook, idInstagram, idYoutube, idReddit, idKaggle, idMedium, idDribble, idBehance, idCodepen, idGFG, idHackerrank, idLeetcode, idCodechef, idCodeforces]

const mysocailArr = [myLinkedin, myTwitter, myDiscord, myStackoverflow, myFacebook, myInstgram, myYoutube, myReddit, myKaggle, myMedium, myDribble, myBehance, myCodepen, myGFG, myHackerrank, myLeetcode, myCodechef, myCodeforces]

function showSocials(idSocial, imgSocial) {
    if (idSocial.value == 0)
        imgSocial.style.display = "none";

    if (idSocial.value != 0)
        imgSocial.style.display = "inline";

        headingSocials.style.display = showHeadingSocial() ? "block" :  "none"
}

function showHeadingSocial() {
    for (let i = 0; i < socailArr.length; i++) {
        if (socailArr[i].value.length > 0)
            return true;
    }
}

//GITHUB SPECIAl

let userName = document.getElementById("userName");

let headingBadges = document.getElementById("headingBadges");
headingBadges.style.display = "none";

let idArcCon = document.getElementById("idArcCon");
let arcContribute = document.getElementById("arcContribute");
arcContribute.style.display = "none";

let idDev = document.getElementById("idDev");
let devBadge = document.getElementById("devBadge");
devBadge.style.display = "none";

let idStar = document.getElementById("idStar");
let starBadge = document.getElementById("starBadge");
starBadge.style.display = "none";

let idPro = document.getElementById("idPro");
let proBadge = document.getElementById("proBadge");
proBadge.style.display = "none";

let idSponsor = document.getElementById("idSponsor");
let sponsorBadge = document.getElementById("sponsorBadge");
sponsorBadge.style.display = "none";

let headingStatus = document.getElementById("headingStatus");
headingStatus.style.display = "none";

let idProView = document.getElementById("idProView");
let profileView = document.getElementById("profileView");
profileView.parentElement.style.display = "none";

let idSteak = document.getElementById("idSteak");
let streakStatus = document.getElementById("streakStatus");
streakStatus.parentElement.style.display = "none";

let idMetrics = document.getElementById("idMetrics");
let matrcis = document.getElementById("matrcis");
matrcis.parentElement.style.display = "none";

let idAtivity = document.getElementById("idAtivity");
let activityGraph = document.getElementById("activityGraph");
activityGraph.parentElement.style.display = "none";

let idStatustics = document.getElementById("idStatustics");
let statistics = document.getElementById("statistics");
statistics.parentElement.style.display = "none";

let idMostUsedLang = document.getElementById("idMostUsedLang");
let mostUsedLang = document.getElementById("mostUsedLang");
mostUsedLang.parentElement.style.display = "none";

let headingTrophy = document.getElementById("headingTrophy");
headingTrophy.style.display = "none";

let idTrophies = document.getElementById("idTrophies");
let trophies = document.getElementById("trophies");
trophies.parentElement.style.display = "none";

const githubArr = [idArcCon, idStar, idPro, idDev, idSponsor, idAtivity, idStatustics, idMostUsedLang, idMetrics, idSteak, idProView, idTrophies]

const mygithubArr = [arcContribute, starBadge, proBadge, devBadge, sponsorBadge, activityGraph, statistics, mostUsedLang, matrcis, streakStatus, profileView, trophies]

userName.addEventListener("focusin", removeUsername);

function removeUsername() {
    profileView.src = "https://visitcount.itsvg.in/api?id=";
    streakStatus.src = "https://github-readme-streak-stats.herokuapp.com/?user=";
    matrcis.src = "https://metrics.lecoq.io/";
    activityGraph.src = "https://activity-graph.herokuapp.com/graph?username=";
    statistics.src = "https://github-readme-stats.vercel.app/api?username=";
    mostUsedLang.src = "https://github-readme-stats.vercel.app/api/top-langs/?username=";
    trophies.src = "https://github-profile-trophy.vercel.app/?username=";
}

disableGithubAddOns();

userName.addEventListener("focusout", changeLinkGithubAddOns);

function changeLinkGithubAddOns() {
    profileView.src = profileView.src + userName.value + "&label=Profile%20Views&color=12&icon=5&pretty=true";
    streakStatus.src = streakStatus.src + userName.value;
    matrcis.src = matrcis.src + userName.value;
    activityGraph.src = activityGraph.src + userName.value;
    statistics.src = statistics.src + userName.value + "&show_icons=true";
    mostUsedLang.src = mostUsedLang.src + userName.value + "&layout=compact";
    trophies.src = trophies.src + userName.value;

    if (userName.value == 0) {
        for (let i = 0; i < 5; i++) {
            mygithubArr[i].style.display = "none";
        }
        for (let i = 5; i < githubArr.length; i++) {
            mygithubArr[i].parentElement.style.display = "none";
        }
    }

    disableGithubAddOns();
}

function disableGithubAddOns() {
    if (userName.value == 0) {
        for (let i = 0; i < githubArr.length; i++) {
            githubArr[i].checked = false;
            githubArr[i].disabled = true;
        }
    }

    else {
        for (let i = 0; i < githubArr.length; i++) {
            githubArr[i].disabled = false;
        }
    }
}

for (let i = 0; i < 5; i++) {
    githubArr[i].addEventListener("click", () => {
        showGithubBadge(githubArr[i], mygithubArr[i])
    });
}

function showGithubBadge(idAddOns, imgAddOns) {
    if (userName.value != 0) {
        if (idAddOns.checked)
            imgAddOns.style.display = "inline";

        else
            imgAddOns.style.display = "none";

        headingBadges.style.display = showHeadingBadge() ? "block" :  "none"
    }
}

function showHeadingBadge() {
    for (let i = 0; i < 5; i++) {
        if (githubArr[i].checked)
            return true;
    }
}

for (let i = 5; i < githubArr.length - 1; i++) {
    githubArr[i].addEventListener("click", () => {
        showGithubAddOns(githubArr[i], mygithubArr[i])
    });
}

function showGithubAddOns(idAddOns, imgAddOns) {
    if (userName.value != 0) {
        if (idAddOns.checked)
            imgAddOns.parentElement.style.display = "inline";

        else
            imgAddOns.parentElement.style.display = "none";

        headingStatus.style.display = showHeadingAddons() ? "block" :  "none"
    }
}

function showHeadingAddons() {
    for (let i = 5; i < githubArr.length - 1; i++) {
        if (githubArr[i].checked)
            return true;
    }
}

idTrophies.addEventListener("click", () => {
    if (userName.value != 0) {
        if (idTrophies.checked) {
            headingTrophy.style.display = "block";
            trophies.parentElement.style.display = "inline";
        }

        else {
            headingTrophy.style.display = "none";
            trophies.parentElement.style.display = "none";
        }
    }
});

let btnGeneratReadmeFile = document.getElementById("generatReadmeFile");
btnGeneratReadmeFile.addEventListener("click", generatReadmeFile);

let codeArea = document.getElementById("codeArea");

function generatReadmeFile() {

    codeArea.innerText = "";
    if (isName)
        codeArea.innerText = "# " + myName.parentElement.innerText;

    if (idImg.value)
        codeArea.append("\n\n<img width=\"100%\" src=\"" + myImg.src + "\" alt=\"my banner\">")

    if ((idAbout.value).length > 0)
        codeArea.append("\n\n" + myAbout.innerText);

    codeArea.append("\n\n## 💫 Liitle Bit More About Me");
    for (let i = 0; i < 10; i++) {
        if ((listArr[i].value).length > 0) {
            if (i == 6) {
                codeArea.append("\n<p>I regularly write articles on <a href=\"" + idList71.value + "\">" + myListArr[i].innerText + "</a></p>");
            }
            else if (i == 7) {
                codeArea.append("\n<p>All of my projects are available at <a href=\"" + idList81.value + "\">" + myListArr[i].innerText + "</a></p>");
            }
            else if (i == 8) {
                codeArea.append("\n<p>Know about my experiences <a href=\"" + idList9.value + "\">here</a></p>");
            }
            else
                codeArea.append("\n<p>" + myListArr[i].parentElement.innerText + "</p>");
        }
    }

    codeArea.append("\n\n## 💻 Skills");

    codeArea.append("\n<p>");
    for (let j = 0; j < skillArr.length; j++) {
        if (skillArr[j].checked)
            codeArea.append("\n<img src=\"" + myskillArr[j].src + "\" style=\"margin-bottom: 4px;\" height=\"30px\">");
    }
    codeArea.append("\n</p>");

    codeArea.append("\n\n## 👥 Connect With Me");
    codeArea.append("\n<p>");
    for (let i = 0; i < 18; i++) {
        if ((socailArr[i].value).length > 0)
            codeArea.append("\n<a href=\"" + mysocailArr[i] + "\"><img src=\"" + mysocailArr[i].lastElementChild.src + "\" style=\"margin-bottom: 4px;\" height=\"30px\"></a>");
    }
    codeArea.append("\n</p>");

    codeArea.append("\n\n## 🌟 Github Badges");
    codeArea.append("\n<p>");
    for (let i = 0; i < 5; i++) {
        if (githubArr[i].checked) 
            codeArea.append("\n<img src=\"" + mygithubArr[i].src + "\" height=\"24px\">");
    }
    codeArea.append("\n</p>");

    codeArea.append("\n\n## 🏆 GitHub Trophies");
    codeArea.append("\n\n<p><img src=\"" + trophies.src + "\">\n</p>");

    codeArea.append("\n\n## 📊 Github Status");
    for (let i = 5; i < githubArr.length - 1; i++) {
        if (githubArr[i].checked)
            codeArea.append("\n\n" + "<p><img src=\"" + mygithubArr[i].src + "\"><p>");
    }
}

let copyReadmeFile = document.getElementById("copyReadmeFile")

function copyToClipBoard(text) {
    navigator.clipboard.writeText(text)
}

copyReadmeFile.addEventListener('click', () => {
    copyToClipBoard(codeArea.value);
});