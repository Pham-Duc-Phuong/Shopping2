function getElement(selector) {
    return document.querySelector(selector)
}
getDataLocalStorageLogin()
//lưu vào local Storage
function setLocalStorageLogin (){
    var tenDangNhap = JSON.stringify(getElement("#input-login-modal").value);
    localStorage.setItem('tenDangNhap',tenDangNhap)
}
//lấy dữ liệu từ localStorage
function getDataLocalStorageLogin(){
    var data = localStorage.getItem('tenDangNhap');
    var parseData = JSON.parse(data);
    getElement('#login-right-btn').innerHTML = 'Xin chào' + ' ' + parseData + ' ' + '|' + ' ' + '<button id="logout" onClick="window.location.href=window.location.href">Đăng Xuất</button>';
}
getElement('#btn-login-modal').onclick = function (){
    setLocalStorageLogin ();
    window.location.reload();
}

getElement('#logout').onclick = function (){
    var content = ''
    content = ` 
    <button id="btn-register" class="button-register" type="button" data-bs-toggle="modal" data-bs-target="#myModal-register">Đăng Ký</button>|<button id="btn-login" class="button-login" type="button" data-bs-toggle="modal" data-bs-target="#myModal-login">Đăng Nhập</button>|<a href="./customer.html"><button><i class="fa-solid fa-user"></i> Manager</button></a>`
    getElement('#login-right-btn').innerHTML = content
}