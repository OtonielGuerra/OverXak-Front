export class StudyNetwork{
    constructor(public name: String, 
        public dateStart: Date,
        public dateFinish: Date,
        public observations: Array<any>,
        public courses: Array<any>){

    }
}