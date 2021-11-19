
const degreeClassification = (gradePointAverage, failCreditPercentage) => {
  if (gradePointAverage < 0 || gradePointAverage > 4) 
    return "Input không hợp lệ";
  if (failCreditPercentage < 0 || failCreditPercentage > 100) 
    return "Input không hợp lệ";

  if (failCreditPercentage < 10) {
    if (gradePointAverage >= 3.6 && gradePointAverage <= 4.0) 
      return "Bằng xuất sắc";
    else if (gradePointAverage >= 3.2 && gradePointAverage < 3.6) 
      return "Bằng giỏi";
    else if (gradePointAverage >= 2.5 && gradePointAverage < 3.2) 
      return "Bằng khá";
    else if (gradePointAverage >= 2.0 && gradePointAverage < 2.5) 
      return "Bằng trung bình";
    else 
      return "Không tốt nghiệp";
  } else {
    if (gradePointAverage >= 3.6 && gradePointAverage <= 4.0) 
      return "Bằng giỏi";
    else if (gradePointAverage >= 2.5 && gradePointAverage < 3.6) 
      return "Bằng khá";
    else if (gradePointAverage >= 2.0 && gradePointAverage < 2.5) 
      return "Bằng trung bình";
    else 
      return "Không tốt nghiệp";
  }
}

const basicDegreeClassification = (gradePointAverage) => {
  if (gradePointAverage < 0 || gradePointAverage > 4) 
    return "Input không hợp lệ";
  if (gradePointAverage >= 3.6 && gradePointAverage <= 4.0) 
    return "Bằng xuất sắc";
  if (gradePointAverage >= 3.2 && gradePointAverage < 3.6) 
    return "Bằng giỏi";
  if (gradePointAverage >= 2.5 && gradePointAverage < 3.2) 
    return "Bằng khá";
  if (gradePointAverage >= 2.0 && gradePointAverage < 2.5) 
    return "Bằng trung bình";
    return "Không tốt nghiệp";
}

var Degree = {
  degreeClassification,
  basicDegreeClassification
};
module.exports = Degree;