// array.unshift() thêm một phần tử mới vào đầu mảng
// array.shift() xóa phần tử ở đầu mảng
// array.push() thêm một phần tử mới vào cuối mảng
// array.pop() xóa phần tử cuối mảng 
// array1.concat(array2, array3) ghép nối các mảng
// const newArray = [...array] copy dữ liệu
// array.splice(index, count, "element1", "element2") index: xác định vị trí được thêm, count: xác định phần tử bị loại bỏ
// array.slice(index) xóa phần tử được chỉ định

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

