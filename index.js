//Q1: Find Grades.......................................//...........................
// Your school has the following grading system based upon the marks (M) obtained by a student: 
//  If M≤10, the grade will be E. 
//  If 11≥M≤20, the grade will be D. 
//  If 21≥M≤30, the grade will be C. 
//  If 31≥M≤40, the grade will be B. 
//  If 41≥M≤50, the grade will be A. 
// Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement. 
// Note: You have to complete findGrades function. No need to take any input.
let M = 13;
let grade;
    switch (true) {
        case (M >= 0 && M <= 10):
            grade='E';
            break;
        case (M >= 11 && M <= 20):
            grade='D';
            break;
        case (M >= 21 && M <= 30):
            grade='C';
            break; 
        case (M >= 31 && M <= 40):
            grade='B';
            break;
        case (M >= 41 && M <= 50):
            grade='A';
            break;
        default:
            grade =  'Invalid Marks ';
    }
  console.log("Your Grade is:", grade);
  // Example usage
  //let M = 12;
  // Then the output will be D;


  //Q2: Get Value.........................................//.....................................
  //You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
// table corresponding to an input character and return it. 
// | P or p - PrepBytes | 
// | Z or z - Zenith |  
// | E or e - Expert Coder |  
// | D or d - Data Structure | 
// Note: You have to complete getValue function. No need to take any input.
  let value = prompt("Enter the Character:");
  let C;
    switch (value) {
        case 'P':
        case 'p':
            C = 'PrepBytes';
            break;
        case 'Z':
        case 'z':
            C = 'Zenith';
            break;
        case 'E':
        case 'e':
            C = 'Expert Coder';
            break;
        case 'D':
        case 'd':
            C = 'Data Structure';
            break;
        default:
            C = 'Invalid Character';
    }
   console.log("Your value is", C);
   
// Example Usage
//console.log(E); // Output: Expert Coder


//Q3: Find the maximum out of three numbers...........................//.......................
//Take three numbers and print the largest number among them if all of three are same print −1−1. 
//Note: You have to complete Max_out_of_three. No need to take any input. 
//Constraints 
//1≤A, B, C≤10000
function Max_out_of_three(A , B , C) {
    if(A === B && B === C){
    return(-1);
}
   else{
    return Math.max(A, B, C);            
   }
}
console.log(Max_out_of_three(2, 5, 4)); // 5
console.log(Max_out_of_three(7, 7, 7)); //-1


// Q4. Second Smallest .............................//.......................................
// You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided 
// integers. 
// Note: You have to complete findSndSmallest function. No need to take any input. 
// Input Format 
// The first and the only line of the input contains three space-separated integers X, Y, and Z, denoting the integers among which you 
// have to find the second smallest element.
const findSndSmallest = (X, Y, Z) => {
         if((X < Y && X > Z) || (X > Y && X < Z)){
         return X;
    }    else if((Y < X && Y > Z) || (Y > X && Y < Z)){
         return Y;
    }    else{
         return Z;
    }
}
console.log (findSndSmallest(2, 7, 9 ));
console.log(findSndSmallest(9, 8, 11));
console.log(findSndSmallest(7, 10, 8));


// Q5. Check whether the triangle is Acute or Obtuse 
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse. 
// Note: You have to complete Triangle_Check. No need to take any input 
// Input Format 
// The input contains three numbers A, B and C which denotes the angles of a triangle. 
// Output Format 
// Return the required result. 
// Constraints 
// 0≤A, B, C≤180 

const Triangle_Check =(A, B, C) => {
      if (A > 90 || B > 90 || C > 90){
        return 'Obtuse';
      }
      else {
        return 'Acute';
      }
}
console.log(Triangle_Check(60, 40, 50));
console.log(Triangle_Check(91, 80, 70));




