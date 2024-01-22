export interface IStudent {
    name: string;
    surname: string;
    class: number;
    getStudentInformation(): {
        name: IStudent['name'];
        surname: IStudent['surname'];
        class: IStudent['class'];
    };
}
