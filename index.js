const prompt = require('prompt-sync')();
const Degree = require('./degreeClassification');

while (true) {
  const gradePointAverage = parseFloat(prompt("Nhập điểm trung bình tích lũy: "));

  if (isNaN(gradePointAverage)) {
    console.log("GPA phải là một số thực!!!");
    continue;
  }

  const failCreditPercentage = parseInt(prompt("Nhập phần trăm tín chỉ học lại: "));

  if (isNaN(failCreditPercentage)) {
    console.log("Phần trăm tín chỉ học lại phải là một số nguyên!!!");
    continue;
  }

  console.log(`Kết quả tốt nghiệp của bạn là: ${Degree.degreeClassification(gradePointAverage, failCreditPercentage)}`);
  
  const willContinue = prompt("Tiếp tục? (yes): ");
  if(willContinue !== "yes") break;
}