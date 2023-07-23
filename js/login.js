function getElement(selector) {
    return document.querySelector(selector)
}
var dskh = new DSKH()
function getinfoKH() {
    var account = getElement('#account-add').value;
    var email = getElement('#email-add').value;
    var phone = getElement('#phone-add').value;
    var pass = getElement('#pass-add').value;
    var khach = new Khach(account, email, phone, pass);
    return khach;
}
function getinfoKH1() {
    var account = getElement('#account-register').value;
    var email = getElement('#email-register').value;
    var phone = getElement('#phone-register').value;
    var pass = getElement('#pass-register').value;
    var khach = new Khach(account, email, phone, pass);
    return khach;
}
getElement('#btn-register-modaladd').onclick = function () {
    var khach = getinfoKH()
    dskh.arrKH.push(khach)
    renderdata()
    setLocalStorage()
}
getElement('#btn-register-modalreg').onclick = function () {
    var khach = getinfoKH1()
    dskh.arrKH.push(khach)
    renderdata()
    setLocalStorage()
}

// render danh sách
function renderdata(arrKH = dskh.arrKH) {
    var content = ''
    for (var i = 0; i < arrKH.length; i++) {
        var kh = arrKH[i]
        content += `<tr>
                        <td>${i + 1}</td>
                        <td>${kh.account}</td>
                        <td>${kh.email}</td>
                        <td>${kh.phone}</td>
                        <td>${kh.pass}</td>
                        <td>
                            <div class='d-flex justify-content-center align-items-center'>
                            <button class='btn button-edit' type="button" data-bs-toggle="modal"
                            data-bs-target="#myModal-add" onclick="updateData('${kh.account}')"><i class="fa-solid fa-pen"></i> Chỉnh sửa</button>
                            <button class='btn button-delete' onclick="deteleData('${kh.account}')"><i class="fa-solid fa-trash-can"></i>
                            Xóa</button>
                            </div>
                        </td>
                    </tr>`
    }
    getElement('#tableDanhSach').innerHTML = content
}
// lưu vào localStorage
function setLocalStorage() {
    var kh = JSON.stringify(dskh.arrKH)
    localStorage.setItem('dskh', kh)
}
// get data from localStorage
function getDataLocalStorage() {
    var data = localStorage.getItem('dskh');
    var parseData = JSON.parse(data);
    var arr = [];
    // b2:  duyệt mảng được lấy từ local
    for (var i = 0; i < parseData.length; i++) {
        var kh = parseData[i]
        var khach = new Khach(kh.account, kh.email, kh.phone, kh.pass)
        arr.push(khach)
    }
    dskh.arrKH = arr
    renderdata()
}
getDataLocalStorage()
// Xóa data dữ liệu
function deteleData(A) {
    dskh.xoaKH(A)
    renderdata()
    setLocalStorage()
}
// Edit data
function updateData(masoKH) {
    var index = dskh.timKH(masoKH)
    var kh = dskh.arrKH[index]
    getElement('#account-add').value = kh.account;
    getElement('#email-add').value = kh.email;
    getElement('#phone-add').value = kh.phone;
    getElement('#pass-add').value = kh.pass;
}
getElement('#btn-update').onclick = function () {
    var khach = getinfoKH()
    dskh.UpdateKH(khach)
    renderdata()
    setLocalStorage()
};

getElement('#txtSearch').addEventListener('keyup', function () {
    var valueSearch = getElement('#txtSearch').value.toLowerCase()
    var arrSearch = []
    for (var i = 0; i < dskh.arrKH.length; i++) {
        var tenKH = dskh.arrKH[i].account.toLowerCase()
        if (tenKH.indexOf(valueSearch) !== -1) {
            arrSearch.push(dskh.arrKH[i])
        }
    }
    renderdata(arrSearch)

});