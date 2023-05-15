document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("pier");

    for (var i = 1; i <= 100; i++) {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input" + i);
        input.setAttribute("name", "input" + i);
        input.setAttribute("style", "margin: 10px; box-shadow: 5px 5px lightblue;");
        input.setAttribute("placeholder", "Element numer " + i);

        var columnNumber = Math.sqrt( i / 20);
        var columnId = "column" + columnNumber;
        var column = document.getElementById(columnId);

        if (!column) {
            column = document.createElement("div");
            column.setAttribute("class", "column");
            column.setAttribute("id", columnId);
            form.appendChild(column);
        }

        column.appendChild(input);
    }
});