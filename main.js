window.addEventListener("DOMContentLoaded", function() {

    let files = [];

    let canvas = document.querySelector("#uploads");
    let context = canvas.getContext("2d");

    

    


    function handleUploads(e) {

        let newFile = e.target.files[0].name;

        files.push(newFile);

        let imgObj = new Image();

        imgObj.src = "img/" + newFile;

        canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);

        let x = 0;
        let y = 0;

        imgObj.onload = function () {
            context.drawImage(imgObj, x, y);
        }
    
        console.log(files);
    
    }

    // Events bindings

    document.addEventListener("change", handleUploads, false);

});

