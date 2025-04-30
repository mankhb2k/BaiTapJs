// array.shift() | array.unshift()  xóa, thêm phần tử ở đầu mảng
// array.pop() | array.push() xóa, thêm cuối mảng
// array1.concat(array2, array3) ghép nối các mảng
// const newArray = [...array] copy dữ liệu
// array.splice(index, count, "element1", "element2") index: xác định vị trí được thêm, count: xác định phần tử bị loại bỏ
// array.slice(index) xóa phần tử được chỉ định

/* Array Search:
   array.includes() tìm kiếm phần tử trong mảng, trả về boolen
*/
/* Array Interation:
   forEach()
   every() : giá trị kiểu boolen
   some()
   find()
   filter()
   map(): tạo ra một mảng mới bằng cách thực hiện một hàm trên mỗi phần tử của mảng.
   reduce() : 
*/

// Bai 1:
// Mô tả: Tạo một mảng chứa 5 loại trái cây yêu thích.
// Yêu cầu: In ra phần tử đầu tiên, phần tử cuối cùng và độ dài của mảng.

const fruit = ["Apple", "Mango", "Cucuber", "Orange", "Waterlemon", "Peach", "Pear", "Papaya"]
// console.log(fruit[0])
// console.log(fruit[fruit.length-1])
// console.log(fruit.length)

// Bai 2:
// Mô tả: Tạo một mảng chứa tên 4 thành phố.
// Yêu cầu: Thêm một thành phố mới vào cuối mảng và xóa thành phố đầu tiên. In ra mảng sau khi thay đổi.

const citys = ["Hoa Binh", "Ha Noi", "Sai Gon", "Hue"]

citys.push("Hai Phong")
citys.shift()
// console.log(citys)

// Bai 3:
// Mô tả: Tạo một mảng chứa 5 số nguyên.
// Yêu cầu: Sử dụng vòng lặp for để in ra từng phần tử của mảng.

const number = [1, 5, 56, 23, 47]


// Bai 4:
// Mô tả: Tạo một mảng chứa tên các học sinh.
// Yêu cầu: Viết hàm kiểm tra xem một học sinh cụ thể có trong mảng hay không, trả về true hoặc false.

const student = ["Manh", "Thanh", "Hieu", "Thai"]

function nameStuden(student, name) {
    return student.includes(name)
};

// console.log(nameStuden(student, "Thanh"))

// Bai 5:
// Mô tả: Tạo một mảng chứa các số nguyên.
// Yêu cầu: Viết hàm tính tổng tất cả các số trong mảng.

const intnumber = [2, 34, 53, 24, 6, 8, 65, 43, 39]

function sumtotal(intnumber) {
    return intnumber.reduce((sum, num) => sum + num, 0)
};

// console.log(sumtotal(intnumber))

// Bai 6:
// Mô tả: Tạo một mảng chứa các điểm số.
// Yêu cầu: Viết hàm tăng tất cả các điểm số trong mảng lên 1 đơn vị (tối đa 10). Trả về mảng mới.

const scoremedium = [3.1, 5.5, 10, 12, 8.0, 6.1]

function newscore(scoremedium) {
    return scoremedium.map(score => Math.min(score + 1, 10))
};

// console.log(newscore(scoremedium))

// Bai 7:
// Mô tả: Tạo một mảng chứa tên các môn học.
// Yêu cầu: Tạo một bản sao của mảng và thêm một môn học mới vào bản sao. In ra cả hai mảng.

const subject = ["Math", "Geographic", "History", "Physic"];

const newSubject = [...subject];
newSubject.push("Literature")

// console.log(subject)
// console.log(newSubject)

// Bai 8:
// Mô tả: Viết một hàm nhận vào một mảng bất kỳ.
// Yêu cầu: Kiểm tra xem mảng có rỗng hay không, trả về true nếu rỗng, false nếu không.

function isEmptyArray(arr) {
    return arr.length === 0;
}
// console.log(isEmptyArray([])); // true
// console.log(isEmptyArray([1, 2, 3])); // false

//Bai 9:
// Mô tả: Tạo hai mảng chứa các số nguyên.
// Yêu cầu: Viết hàm gộp hai mảng thành một mảng mới và in ra.

const int1 = [12, 34, 72, 3, 7, 83]
const int2 = [31, 5, 9, 55]

function newInt(int1, int2) {
    return [...int1, ...int2]
};

// console.log(newInt(int1, int2))

//Bai 10:
// Mô tả: Tạo một mảng chứa các số nguyên.
// Yêu cầu: Viết hàm trả về mảng mới chỉ chứa các số chẵn.

const intchan = [12, 1, 3, 43, 55, 82, 39, 46]

function arrchan(intchan) {
    return intchan.filter(num => num % 2 === 0)
};

// console.log(arrchan(intchan))