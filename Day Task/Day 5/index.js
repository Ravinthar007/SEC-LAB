let details={
    name: "js",
    totalmark: 100,
    subject:{
        java: 90,
        dbms: 50
    },
    sum:function(){
        let total= this.subject.java+this.subject.dbms;
        console.log(total);
    }
}
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.java);
console.log(details.sum())

let person={
    job: "SoftwareTester",
    salary: 25000
}
const {job,salary}=person
console.log(job+" "+salary);

let arr=new Array(1,2,"three");
console.log(arr[2]);

let arr2=["js",true];

const{name,b1,b2}=arr2;
console.log(name);
let students={
    {name: "john",grade;"A"}
    {name: "Joe", grade; "B"}
    {name: "Suvitha", grade; "A"}

}

let graduatestudents=students.filter(students=)
