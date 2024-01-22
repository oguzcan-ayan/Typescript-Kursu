const abcd = {
    name: 'Ahmet',
    age: 40,
    qwerty: "djsfkhfjshf"
};
const name = 'Ahmet';
const array = {
    0: "Hello",
    1: "jhdgsfhs",
    2: 5
};
const array2 = ['Ahmet', 50, "Mehmet"];
/* const obj = {
    getStudents() : string {
        return '';
    }
}
obj.getStudents(); */
/* const obj: IStudent = {
    name : 'Oğuzcan',
    surname : 'Ayan',
    class : 12,
    getStudentInformation() {
        return{
            name : this.name,
            surname : this.surname,
            class : this.class
            }
        }
}

console.log(obj); */
import { Students, Students2, Students3 /* , StudentClass */ } from "./class";
const students = new Students();
const students2 = new Students2("Oğuzcan", "Ayan", 23, "Hello, Programming", "Male", "Istanbul");
students2.writeName();
/* console.log(students.name); */
const students3 = new Students3("Ahmet", "Yazici", 40);
students3.writeName();
// const students4 = new StudentClass("Mehmet", "Tarakci", 60, 12);
