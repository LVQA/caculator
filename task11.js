(function () {

    let el = function (element) {
        if (element.charAt(0) === "#") {// Xét xem nếu đầu vào là ID
            return document.querySelector(element);// đúng -> trả về 1 element đơn
        }
        else {
            return document.querySelectorAll(element); // sai -> trả về 1 mảng element
        }
    };
    //Các biến
    let man_hinh = el("#man_hinh"),//nơi hiển thị kết quả, số.
        // bieu_thuc = el("#bieu_thuc"),//nơi hiển thi biểu thức
        equals = el("#equals"),// phím bằng
        nums = el(".num"),// các phím số
        ops = el(".ops"),// danh sách các phép tính
        the_num = "",//số hiện tại
        old_num = "",//số đầu tiên
        result_num,//kết quả
        operator;//phép tính
    // khi: phím số được nhấn. Lấy số hiện tại
    let set_num = function () {
        if (result_num) { //Nếu là kết quả đặt lại số
            the_num = this.getAttribute("data-num");
            result_num = "";
        }
        else {// Nếu không là kết quả thêm các số vào sau
            the_num += this.getAttribute("data-num")
        }
        man_hinh.innerHTML = the_num;
    };
    // Khi: phép tính đc kích hoạt. chuyển số hiện tại thành số đầu tiên rồi lưu lại phép tính
    let move_num = function () {
        old_num = the_num;
        the_num = "";
        operator = this.getAttribute("data-ops");
        equals.setAttribute("data-results", "");
    };
    // khi: nút AC được nhấn xóa tất cả mọi thứ
    let clear_all = function () {
        old_num = "";
        the_num = "";
        man_hinh.innerHTML = "0";
        equals.setAttribute("data-result", result_num);
    };

    el("#all_clear").onclick = clear_all;
    for (let i = 0; i <= nums.length; i++) {
        nums[i].onclick = set_num;
    }
    for (let i = 0; i <= ops.length; i++) {
        ops[i].onclick = move_num;
    }

}());

