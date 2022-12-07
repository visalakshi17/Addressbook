/*function del(index) {
    console.log("del");
    $("#person" + index).remove();
    persons.splice(index, 1);
    $("#details").hide();
    console.log(persons);
}*/
    function personDetails(item) {
        let index = $(item.children[0]).html();
        console.log(index);
        $("form").hide();
        $("#nameSection").val($(item.children[1]).html());
        $("#nameSection").prop("disabled", true);
        $("#mailSection").val("Email: " + $(item.children[2]).html());
        console.log($(item.children[2]).html());
        $("#mailSection").prop("disabled", true);
        $("#mobilSection").val("Mobile: " + $(item.children[3]).html());
        $("#mobilSection").prop("disabled", true);
        console.log($(item.children[4]).html());
        $("#landlineSection").val("Landline: " + $(item.children[4]).html());
        $("#landlineSection").prop("disabled", true);
        $("#addresSection").val("Address: " + $(item.children[5]).html());
        $("#addresSection").prop("disabled", true);
        $("#details").show();
        $("#dltImg").click(function (item) {
            console.log($(item));
            $("#person" + index).remove();
            persons.splice(index, 1);
            $("#details").hide();
            console.log(persons);
        });
        $("#editImg").click(function edit() {
            $("#nameSection").prop("disabled", false);
            $("#nameSection").change(function nameEdited() {
                newName = $("#nameSection").val();
                persons[index].name = newName;
                var list = $("#chk");
                let personsList = "";
                c = 0;
                $.each(persons, function (index, person) {
                    personsList += `<div class='person' id=${"person" + c} <a href="#person" onclick="personDetails(this)">
                <div class="id" style="display:none">${person.id}</div>
                <div class="name">${person.name}</div>
                <div class="mail">${person.mail}</div>
                <div class="phNo">${person.mobile}</div>
                <div class="landlineText" style="display:none">${person.landline}</div>
                <div class="address" style="display:none">${person.Address}</div>
            </div>`
                    c += 1;
                });
                $("#chk").html("<div class='list-container'>" + personsList + "</div>")
            });
            $("#mailSection").prop("disabled", false);
            $("#mailSection").change(function mailEdited() {
                newMail = $("#mailSection").val();
                persons[index].mail = newMail;
                var list = $("#chk");
                let personsList = "";
                c = 0;
                $.each(persons, function (index, person) {
                    personsList += `<div class='person' id=${"person" + c} <a href="#person" onclick="personDetails(this)">
                <div class="id" style="display:none">${person.id}</div>
                <div class="name">${person.name}</div>
                <div class="mail">${person.mail}</div>
                <div class="phNo">${person.mobile}</div>
                <div class="landlineText" style="display:none">${person.landline}</div>
                <div class="address" style="display:none">${person.Address}</div>
            </div>`
                    c += 1;
                });
                $("#chk").html("<div class='list-container'>" + personsList + "</div>");
            })
            $("#mobilSection").prop("disabled", false);
            $("mobilSection").change(function mobileEdited() {
                newMobile = $("#mobilSection").val();
                persons[index].mobile = newMobile;
                var list = $("#chk");
                let personsList = "";
                c = 0;
                $.each(persons, function (index, person) {
                    personsList += `<div class='person' id=${"person" + c} <a href="#person" onclick="personDetails(this)">
                    <div class="id" style="display:none">${person.id}</div>
                    <div class="name">${person.name}</div>
                    <div class="mail">${person.mail}</div>
                    <div class="phNo">${person.mobile}</div>
                    <div class="landlineText" style="display:none">${person.landline}</div>
                    <div class="address" style="display:none">${person.Address}</div>
                </div>`
                    c += 1;
                });
                $("#chk").html("<div class='list-container'>" + personsList + "</div>");
            })
            $("#landlineSection").prop("disabled", false);
            $("#landlineSection").change(function landlineEdited() {
                newLandline = $("#landlineSection").val();
                persons[index].landline = newLandline;
            })
            $("#addresSection").prop("disabled", false);
            $("#addresSection").change(function addressEdited() {
                newAddress = $("#addresSection").val();
                persons[index].Address = newAddress;
            })
            console.log(persons);
        })
    }

    c = 0;
    let persons = [{ id: 0, name: "Chandermani Arora", mail: "chandermani@technovert.com", mobile: "+91 92929292922", landline: "040 30 1231211", Address: "123 nowhere Some street Madhapur,Hyderabad 500033" },
    { id: 1, name: "Sashi Pagadala", mail: "sashipadigala@technovert.com", mobile: "+91 92929292922", landline: "040 30 1231211", Address: "123 nowhere Some street Madhapur,Hyderabad 500033" },
    { id: 2, name: "Praveen Battula", mail: "praveenbattula@technovert.com", mobile: "+91 92929292922", landline: "040 30 1231211", Address: "123 nowhere Some street Madhapur,Hyderabad 500033" },
    { id: 3, name: "Vijay Yalamanchili", mail: "vijayyalamanculi@technovert.com", mobile: "+91 92929292922", landline: "040 30 1231211", Address: "123 nowhere Some street Madhapur,Hyderabad 500033" }]
    let personsList = "";
    $.each(persons, function (index, person) {
        personsList += `<div class='person' id=${"person" + c} <a href="#person" onclick="personDetails(this)">
        <div class="id" style="display:none">${person.id}</div>
        <div class="name">${person.name}</div>
        <div class="mail">${person.mail}</div>
        <div class="phNo">${person.mobile}</div>
        <div class="landlineText" style="display:none">${person.landline}</div>
        <div class="address" style="display:none">${person.Address}</div>
    </div>`
        c += 1;
    });
    $("#chk").html("<div class='list-container'>" + personsList + "</div>");

    $("#add").click(function show() {
        $("#details").hide();
        $("#form").trigger("reset")
        $("#form").show();
    })
    $("#home").click(function home() {
        $("#form").hide();
        $("#details").hide();
    })
    $("#addButton").click(function add() {
        var newPerson = {};
        newPerson["id"] = persons.length;
        newPerson["name"] = $("#nameLabel").val();
        let name = newPerson["name"];
        if (name == "") {
            $("#nameError").text("* Name is required");
            $("#nameError").css("color", "red");
            return false;
        }
        else {
            $("#nameError").text("");
        }
        newPerson["mail"] = $("#email").val();
        let mail = newPerson["mail"];
        if (mail == "") {
            $("#mailError").css("color", "red");
            $("#mailError").text("* Email is required");
            return false;
        }
        else {
            if (IsEmail(mail)) {
                $("#mailError").text("");
            }
            else {
                $("#mailError").css("color", "red");
                $("#mailError").text("Enter valid mail");
                return false;
            }
        }
        newPerson["mobile"] = $("#mobile").val();
        let phno = newPerson["mobile"];
        if (phno == "") {
            $("#phnoError").css("color", "red");
            $("#phnoError").text("* Mobile number is required");
            return false;
        }
        else {
            $("#phnoError").text("");
        }
        newPerson["landline"]=$("#landlineText").val();
        let landline = $("#landlineText").val();
        if (landline == "") {
            $("#landlineError").css("color", "red");
            $("#landlineError").text("* Landline number is required");
            return false;
        }
        else {
            $("#landlineError").text("");
        }
        newPerson["Address"]=$("#address").val();
        let address = $("#address").val();
        if (address == "") {
            $("#addressError").css("color", "red");
            $("#addressError").text("* Address is required");
            return false;
        }
        else {
            $("#addressError").text("");
        }
        function IsEmail(email) {
            var regex =
                /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            }
            else {
                return true;
            }
        }
        persons.push(newPerson);
        var list = $("#chk");
        let len = persons.length
        let personsList = "";
        c = 0;
        $.each(persons, function (index, person) {
            personsList += `<div class='person' id=${"person" + c} <a href="#person" onclick="personDetails(this)">
            <div class="id" style="display:none">${person.id}</div>
            <div class="name">${person.name}</div>
            <div class="mail">${person.mail}</div>
            <div class="phNo">${person.mobile}</div>
            <div class="landlineText" style="display:none">${person.landline}</div>
            <div class="address" style="display:none">${person.Address}</div>
        </div>`
            c += 1;
        });
        personsList = "<div class='list-container'>" + personsList + "</div>";
        list.html(personsList);
        console.log(persons);
        $("#form").trigger("reset");
        $("#form").hide();
    })
