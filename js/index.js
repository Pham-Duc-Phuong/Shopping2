// Axios
// var promise = axios({
//     url: 'https://64b702a5df0839c97e165b2b.mockapi.io/product',
//     method: 'GET',
// })


// console.log("promise: ", promise);

// Tạo hàm get product list
function getProductList() {
    var promise = axios({
        url: 'https://64b702a5df0839c97e165b2b.mockapi.io/product',
        method: 'GET',
    })

    promise
        // Xử lý thành công
        .then(function (result) {
            console.log('result: ', result.data);
            var htmlContent = ''
            for (var i = 0; i < result.data.length; i++) {
                var prd = result.data[i]
                htmlContent += `
            <tr>
                <td>${i + 1}</td>
                <td>${prd.name}</td>
                <td>
                    <image src=${prd.image} style='max-width: 50px; object-fit: contain; object-position: center'/>
                </td>
                <td class='fw-bold'>${prd.price}$</td>
                <td><div style='max-width: 300px'>${prd.description}</td>
                <td>${prd.type}</td>
                <td>    
                    <button 
                        class ='btn button-edit' 
                        data-bs-toggle="modal" 
                        data-bs-target="#myModal"
                        onclick="updateProduct(${prd.id})"
                     ><i class="fa-solid fa-pen"></i>
                        Chỉnh sửa
                    </button>
                    <button 
                        class ='btn button-delete' 
                        onclick="deleteProduct(${prd.id})"
                    ><i class="fa-solid fa-trash-can"></i>
                        Xóa
                    </button>
                </td>
            </tr>
            `
            }
            document.getElementById('tbody').innerHTML = htmlContent
        })
        // Xử lý thất bại
        .catch(function (err) {
            console.log("err: ", err);
        })
}
getProductList()

// Hàm getElement
function getElement(selector) {
    return document.querySelector(selector)
}


// Lấy thông tin từ user
function layThongTinSP() {
    var name = getElement('#name').value
    var image = getElement('#image').value
    var desc = getElement('#desc').value
    var price = getElement('#price').value
    var type = getElement('#type').value


    // Tạo đối tượng product từ lớp đối tượng Product
    var product = new Product(name, image, desc, price, type)

    console.log("product: ", product);

    // Trả về đối tượng product
    return product
}

// Thêm sản phẩm
getElement('#btnSave').onclick = function () {
    // Lấy thông tin product
    var product = layThongTinSP()

    // Call API tạo product
    var promise = axios({
        url: 'https://64b702a5df0839c97e165b2b.mockapi.io/product',
        method: 'POST',
        data: product,
    })

    // Tạo thành công
    promise.then(function () {
        // alert('Tạo sản phẩm thành công')

        // dom tới btn close để đóng modal
        getElement('.btn.btn-secondary').click()

        // get lại danh sách product sau khi tạo thành công 
        getProductList()

        // return về promise.Reject hoặc throw Error => nhảy xuống catch
    })

    // Tạo thất bại
    promise.catch(function () {
        alert('Tạo sản phẩm thất bại')
    })
}

// Delete product
function deleteProduct(idProduct) {
    var promise = axios({
        url: `https://64b702a5df0839c97e165b2b.mockapi.io/product/${idProduct}`,
        method: 'DELETE',
    })
    promise
        // Xóa thành công
        .then(function () {
            getProductList()
        })
        // Xóa thất bại
        .catch(function () {
            alert('Xóa sản phẩm thất bại')
        })
} // Nhớ lên chỉnh button delete dòng 43 trở đi

var idProductUpdate = ''

// Update product
function updateProduct(idProduct) {
    var promise = axios({
        url: `https://64b702a5df0839c97e165b2b.mockapi.io/product/${idProduct}`,
        method: 'GET'
    })

    promise.then(function (result) {
        var prd = result.data
        // console.log("result: ", result);
        idProductUpdate = prd.id

        // dom và show UI
        getElement('#name').value = prd.name
        getElement('#image').value = prd.image
        getElement('#desc').value = prd.description
        getElement('#price').value = prd.price
        getElement('#type').value = prd.type

    })
}

// btn update product
getElement('#btnEdit').onclick = function () {
    // Lấy thông tin sau edit
    var productEdit = layThongTinSP()
    // console.log("productEdit: ", productEdit);

    var promise = axios({
        url: `https://64b702a5df0839c97e165b2b.mockapi.io/product/${idProductUpdate}`,
        method: 'PUT',
        data: productEdit,
    })
    promise.then(function () {
        getProductList()
    })
};




