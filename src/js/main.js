$(document).ready(() => {
    var data = getProjectData();
    populateUI(data.project);
});


/**
 * Get project data from json
 */
function getProjectData() {
    var res;
    //read data from project json 
    $.ajax({
        type: 'GET',
        headers: {'secret-key' : '$2b$10$eFY3T0usfqerBtFjNKtdi.9i2TIHlnHij/32392r0LhbxIudAtWly'},
        url: 'https://api.jsonbin.io/b/5ebef8bb8284f36af7bbc3d7/1',
        async: false,
        success: function(data) {
            console.log('done')
            res = data;
        }
    });

    console.log(res);
    return res;
}


function populateUI(project) {
    for(i = 0; i < project.length; i++) {
        console.log("p",project)
        // console.log(project.image_name, project.title, project.description, project.code_url)
        $('#PROJECTS')
        .append(
            `<div class="col-xs-12 col-sm-6 col-lg-3 col-xl-4 mb-4">
                <div class="card box-shadow" style="width: 100%;">
                    <img class="card-img-top" src="image/${project[i].image_name}.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title portfolio-title font-medium-bold">${project[i].title}</h5>
                        <p class="card-desc font-light">${project[i].description}</p>
                        <div class="row" id="PROJECT-BTN">
                            <div class="col-6">
                                <a href="${project[i].code_url}" class="btn">Code</a>
                            </div>
                            <div class="col-6">
                                <a href="${project[i].live_url}" class="btn">Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        );
    }
}