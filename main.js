window.addEventListener("DOMContentLoaded", function() {

    let files = [];

    let canvas = document.querySelector("#uploads");
    let context = canvas.getContext("2d");

    
    function drawImg(img) {
        let imgObj = new Image();

        imgObj.src = "img/" + img;


        //canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);

        let x = 0;
        let y = 0;

        imgObj.onload = function () {

            // console.log(imgObj.naturalWidth);
            // console.log(imgObj.naturalHeight);
            context.drawImage(imgObj, x, y, imgObj.naturalWidth, imgObj.naturalHeight);

        }
    }


    function handleUploads(e) {
        let newFile = e.target.files[0].name;


        //console.log(e.target.files[0]);

        makeArrImages(e.target, newFile);
    
    }

    function makeArrImages (input, newFile) {
        let type = input.getAttribute("data-value");

        switch (type) {
            case '1':
                files.unshift(newFile);
                break;
            case '2':
            default:
                files.push(newFile);
                break;     
        }

        for(let file of files) {
            drawImg(file);
        }

       

    }

    // Events bindings

    document.addEventListener("input", handleUploads, false);

});

