$(document).ready(() => {
    $(".portfolio-cover").click((e) => {
        $(".portfolio-content").hide()
        let id = e.currentTarget.id;
        let targetDiv = $("#div_"+id);
        targetDiv.show();
    })
})