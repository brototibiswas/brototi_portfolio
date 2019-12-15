$(document).ready(() => {
    $(".portfolio-content").hide();

    $(".portfolio-cover").click((e) => {
        $(".portfolio-content").slideUp();
        let id = e.currentTarget.id;
        let targetDiv = $("#div_"+id);
        targetDiv.slideDown(500);
    })
})