const Degree = require('../degreeClassification');

// Equivalence Class Testing
const equivalenceClassTestCases = [
  { gradePointAverage: 3.75, failCreditPercentage: 6, expectedOutput: "Bằng xuất sắc" },
  { gradePointAverage: 3.44, failCreditPercentage: 7, expectedOutput: "Bằng giỏi" },
  { gradePointAverage: 2.67, failCreditPercentage: 4, expectedOutput: "Bằng khá" },
  { gradePointAverage: 2.34, failCreditPercentage: 9, expectedOutput: "Bằng trung bình" },
  { gradePointAverage: 1.73, failCreditPercentage: 3, expectedOutput: "Không tốt nghiệp" },
  { gradePointAverage: -1.24, failCreditPercentage: 2, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 4.41, failCreditPercentage: 1, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 3.67, failCreditPercentage: 11, expectedOutput: "Bằng giỏi" },
  { gradePointAverage: 3.25, failCreditPercentage: 20, expectedOutput: "Bằng khá" },
  { gradePointAverage: 3.03, failCreditPercentage: 57, expectedOutput: "Bằng khá" },
  { gradePointAverage: 2.43, failCreditPercentage: 67, expectedOutput: "Bằng trung bình" },
  { gradePointAverage: 1.54, failCreditPercentage: 89, expectedOutput: "Không tốt nghiệp" },
  { gradePointAverage: -2.43, failCreditPercentage: 90, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 4.55, failCreditPercentage: 91, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 3.66, failCreditPercentage: -10, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 3.46, failCreditPercentage: -11, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 2.68, failCreditPercentage: -12, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 2.24, failCreditPercentage: -13, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 1.64, failCreditPercentage: -14, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: -2.24, failCreditPercentage: -15, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 5.41, failCreditPercentage: -16, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 3.96, failCreditPercentage: 110, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 3.56, failCreditPercentage: 121, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 2.99, failCreditPercentage: 134, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 2.11, failCreditPercentage: 154, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 1.91, failCreditPercentage: 163, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: -1.24, failCreditPercentage: 171, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 5.31, failCreditPercentage: 200, expectedOutput: "Input không hợp lệ" }
];

equivalenceClassTestCases.forEach(testCase => {
  it(`GPA: ${testCase.gradePointAverage} - Fail credit percent: ${testCase.failCreditPercentage} - Degree: ${testCase.expectedOutput}`, () => {
    expect(Degree.degreeClassification(testCase.gradePointAverage, testCase.failCreditPercentage))
    .toBe(testCase.expectedOutput);
  });
});

// Decision Table Testing
const decisionTableTestCases = [
  { gradePointAverage: -1.45, failCreditPercentage: -1, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 4.54, failCreditPercentage: -13, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 1.34, failCreditPercentage: -17, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 2.12, failCreditPercentage: -20, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 2.56, failCreditPercentage: -2, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 3.21, failCreditPercentage: -8, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 3.67, failCreditPercentage: -5, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: -2.32, failCreditPercentage: 112, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 4.12, failCreditPercentage: 102, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 1.45, failCreditPercentage: 153, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 2.22, failCreditPercentage: 146, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 2.67, failCreditPercentage: 134, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 3.35, failCreditPercentage: 156, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 3.68, failCreditPercentage: 171, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: -3.42, failCreditPercentage: 2, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 4.52, failCreditPercentage: 5, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 1.65, failCreditPercentage: 3, expectedOutput: "Không tốt nghiệp" },
  { gradePointAverage: 2.45, failCreditPercentage: 1, expectedOutput: "Bằng trung bình" },
  { gradePointAverage: 2.96, failCreditPercentage: 8, expectedOutput: "Bằng khá" },
  { gradePointAverage: 3.56, failCreditPercentage: 7, expectedOutput: "Bằng giỏi" },
  { gradePointAverage: 3.99, failCreditPercentage: 9, expectedOutput: "Bằng xuất sắc" },
  { gradePointAverage: -3.45, failCreditPercentage: 11, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 5.24, failCreditPercentage: 25, expectedOutput: "Input không hợp lệ" },
  { gradePointAverage: 0.34, failCreditPercentage: 43, expectedOutput: "Không tốt nghiệp" },
  { gradePointAverage: 2.0, failCreditPercentage: 29, expectedOutput: "Bằng trung bình" },
  { gradePointAverage: 2.75, failCreditPercentage: 28, expectedOutput: "Bằng khá" },
  { gradePointAverage: 3.54, failCreditPercentage: 50, expectedOutput: "Bằng khá" },
  { gradePointAverage: 3.89, failCreditPercentage: 68, expectedOutput: "Bằng giỏi" }
];

decisionTableTestCases.forEach(testCase => {
  it(`GPA: ${testCase.gradePointAverage} - Fail credit percent: ${testCase.failCreditPercentage} - Degree: ${testCase.expectedOutput}`, () => {
    expect(Degree.degreeClassification(testCase.gradePointAverage, testCase.failCreditPercentage))
      .toBe(testCase.expectedOutput);
  });
});