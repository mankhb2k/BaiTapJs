// Bài 1:
// Mô tả: Tạo một Object lưu thông tin của một chiếc xe (hãng, mẫu, năm sản xuất).
// Yêu cầu: In ra từng thuộc tính của xe bằng cách sử dụng dấu chấm (.) hoặc dấu ngoặc vuông ([]).

const car = {
    brand: "VinsFast",
    model: "Lux A2.0",
    Year: 2018
};

 //Bài 2:
// Mô tả: Tạo một Object lưu thông tin của một sản phẩm (tên, giá).
// Yêu cầu: Thêm thuộc tính "danh mục" và xóa thuộc tính "giá". In ra Object sau khi thay đổi.

const product = {name: "Iphone", price: 2000};

product.category = "Smart Phone"

// console.log(product);
// delete product.price;

//Bài 3:
// Mô tả: Tạo một Object lưu thông tin của một học sinh, bao gồm một Object con chứa điểm số (Toán, Văn).
// Yêu cầu: In ra điểm Toán của học sinh.
const StudenInfo = {
    name: "Triệu Văn Mạnh",
    age: 20,
    class: "Ecommerce",
    score: {
        Math: 9.0,
        Biology: 5.2,
        Physics: 8.4,
        History: 7.2,
        Literature: 6.3
    }
 };

//  console.log("Điểm toán bằng" + " " + StudenInfo.score.Math);
//  console.log("Điểm Ngữ Văn bằng" + " " + StudenInfo.score.Literature)

//Bài 4:
// Mô tả: Tạo một Object lưu thông tin của một cuốn sách (tựa đề, tác giả, giá).
// Yêu cầu: Sử dụng vòng lặp for...in để in ra tất cả các cặp key-value.
// for (let key in object) {dùng object[key] để lấy giá trị}
// template litrals (`Chuỗi văn bản với biến: ${biến}`) thay cho phép nốt chuỗi (+) 

const book = {
    namebook: "Dormon",
    author: "shakamoto",
    price: 2000
};

for (let value in book){
    // console.log(`${value}: ${book[value]}`) 
    // hoặc có thể viết console.log(value + ": " + book[value]);
};

