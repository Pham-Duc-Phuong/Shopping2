function DSKH() {
    this.arrKH = []
    // Thêm khách hàng
    this.themKH = function () {
        dskh.arrKH.push(khach)
    }
    // Tìm khách hàng
    this.timKH = function (A) {
        for (var i = 0; i < this.arrKH.length; i++) {
            var kh = this.arrKH[i].account;
            if (kh === A) {
                return i
            }
        }return -1
    }
    // Xóa khách hàng
    this.xoaKH = function (A) {
        var index = this.timKH(A)
        if (index !== -1) {
            this.arrKH.splice(index, 1)
        }
    }
    // Cập nhật khách hàng
    this.UpdateKH = function (A) {
        var index = this.timKH(A.account)
        if (index !== -1) {
            this.arrKH[index] = A
        }
    }
    // Đăng nhập
}