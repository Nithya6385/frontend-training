class Users{
  constructor(fname,place){
    this.name=fname;
    this.place=place;
  }
  add(){
    return this.name;
  }
}
let user_class_obj= new Users("Nithya","Erachakulam");
console.log(user_class_obj.add());


class Users{
  constructor(fname,place){
    this.name=fname;
    this.place=place;
  }
  getName(){
    return this.name;
  }
  getPlace(){
    return this.place;
  }
  getNameAndPlace(){
    return this.getName()+" "+this.getPlace();
  }
}
let users_class_obj= new Users("nithya","Erachakulam");
console.log(users_class_obj.getNameAndPlace());


let date= new Date();
console.log(date);
