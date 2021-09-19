function openNav() {
    document.getElementById("sidebar").style.display = "block";
}
function closeNav() {
    document.getElementById("sidebar").style.display = "none";
}
function showNodal() {
    document.getElementById("modal-box").style.display = "block";
}

function closeModal() {
    document.getElementById("modal-box").style.display = "none";
}
function toggleLogoutBtn() {
    var x =  document.getElementById("logout-btn");
    if(x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function showProductInfo() {
    document.getElementsByClassName("desc-text-product-description")[0].style.display = "none";
    document.getElementsByClassName("desc-text-product-info")[0].style.display = "block";
    document.getElementsByClassName("info")[0].style.borderBottom = "4px solid #007bff";
    document.getElementsByClassName("desc")[0].style.borderBottom = "none";
}
function showProductDescription() {
    document.getElementsByClassName("desc-text-product-description")[0].style.display = "block";
    document.getElementsByClassName("desc-text-product-info")[0].style.display = "none";
    document.getElementsByClassName("desc")[0].style.borderBottom = "4px solid #007bff";
    document.getElementsByClassName("info")[0].style.borderBottom = "none";
}
