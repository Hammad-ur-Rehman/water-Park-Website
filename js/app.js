
    $(".col-sm-4").slice(0, 3).show
    $(".but").on("click", function () {

        $(".col-sm-4:hidden").slice(0, 3).slideDown
        if ($(".col-sm-4:hidden").length == 0) {
            $("but").fadeOut("slow")
        }
    })
