
let a = parseFloat(prompt("Nhập giá trị của a:"));
let b = parseFloat(prompt("Nhập giá trị của b:"));
let c = parseFloat(prompt("Nhập giá trị của c:"));
let biggest = a;
if (b > biggest) {
    biggest = b;
}
if (c > biggest) {
    biggest = c;
}
document.write("Giá trị lớn nhất trong ba số là: " + biggest);
