function calculateGrade(marks) {
    let grade;

    switch (true) {
        case (marks >= 90 && marks <= 100):
            grade = 'A';
            break;
        case (marks >= 80 && marks < 90):
            grade = 'B';
            break;
        case (marks >= 70 && marks < 80):
            grade = 'C';
            break;
        case (marks >= 60 && marks < 70):
            grade = 'D';
            break;
        default:
            grade = 'Invalid marks';
            break;
    }

    return grade;
}


let marks = 80;
let grade = calculateGrade(marks);
console.log(`The grade for ${marks} marks is: ${grade}`);
