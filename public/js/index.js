$(".content-area .inner-tabs a").click(function() {
    $(".content-area .inner-tabs a").css("text-decoration", "none");
    $(this).css("text-decoration", "underline");
})
var a = document.querySelectorAll(".content-area .inner-tabs a");
var b = document.querySelectorAll(".content-area .cont");
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function() {
        console.log(i);
        for (var j = 0; j < b.length; j++) {
            if (i !== j) {
                b[j].style.display = "none"
                console.log(j);
            } else {
                b[i].style.display = "block"
                a[i].style.backgroundColor = "lighublue"
            }
        }
    })
}
$("form").on('submit', function(e) {
    e.preventDefault();
    var codeinp = $(".edit");
    console.log($(".edit").val());
    $.ajax({
        url: '/codearea/compile',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            code: codeinp.val()
        }),
        success: function(response) {
            if (response[1] === "green") {
                document.getElementById("default-clr").style.backgroundColor = "rgba(0,128,0,.2)";
                document.getElementById("default-clr").style.border = "1px solid rgba(0,128,0)";
                document.querySelector(".op-error p").innerText = response[0];
            } else if (response[1] === "red") {
                document.getElementById("default-clr").style.backgroundColor = "rgba(128,0,0,.2)";
                document.getElementById("default-clr").style.border = "1px solid rgba(128,0,0)";
                document.querySelector(".op-error p").innerText = response[0];
            }
        }
    })
})

var editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/python");
ace.edit(element, {
    mode: "ace/mode/python",
    selectionStyle: "text"
})

function Customof() {
    var st = document.querySelector(".lanselect").value;
    var fon = document.querySelector(".font").value;
    var theme = document.querySelector(".themeselect").value;
    console.log(theme);
    editor.setTheme("ace/theme/" + theme);
    editor.session.setMode("ace/mode/" + st);
    document.querySelector('#editor').style.fontSize = fon;

}

function GetVal() {
    var s = document.querySelector(".ace_content").innerText;
    console.log(document.querySelector(".edit").value = s);
}
