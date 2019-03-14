export class StudentAssigmentDto {
    constructor(
        public aid:string,
        public systemDate:string,
        public sid:string,
        public sname:string,
        public cid:string,
        public file_upload:string
    ){}
}
