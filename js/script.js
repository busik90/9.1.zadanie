function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
    result = a * h / 2;
  }
  else {
    console.log('Nieprawidłowe dane.')
  }
  return result;
}

var triangleArea1 = getTriangleArea(10, 15),
    triangleArea2 = getTriangleArea(2, 5),
    triangleArea3 = getTriangleArea(20, 40);

console.log('Pole trójkąta 1 to: ' + triangleArea1);
console.log('Pole trójkąta 2 to: ' + triangleArea2);
console.log('Pole trójkąta 3 to: ' + triangleArea3);