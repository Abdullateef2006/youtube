let menu = document.getElementById("bars")
let sidebar = document.querySelector(".sidebar")
let mainbody = document.querySelector(".mainbody")
let span = document.querySelectorAll("span")
let hr = document.querySelectorAll("hr")
menu.addEventListener("click", function () {
    sidebar.classList.toggle("SmallSideBar")
    mainbody.classList.toggle("largeContent")
    span.forEach(span => {
        if (span.style.display === "none") {
            span.style.display = "block" 
        }
        else {
            span.style.display = "none"
        }

    })
    hr.forEach(hrs => {
        // hrs.style.width = "40px"
        if (hrs.style.width === "40px") {
            hrs.style.width = "180px"
        }
        else {
            hrs.style.width = "40px"
        }
    })
    if (document.) {
        
    }
})
