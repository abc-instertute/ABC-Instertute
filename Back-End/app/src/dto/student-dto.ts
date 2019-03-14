export class StudentDto{
    constructor(
        public sid:string,
        public fname:string,
        public lname:string,
        public bday:string,
        public address:string,
        public phone:string,
        public email:string,
        public password:string
    ){}
}
