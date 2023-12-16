const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
   data.forEach(function(e){
        if(e.profession==="developer"){
            console.log(e);
        }
        
    });
  }
  
  // 2. Add Data
  function addData() {
    let r1= {name:prompt("Enter The Name"),
    age:parseInt(prompt("Enter The age")),
     profession:prompt("Enter the Profession")
  }
  data.push(r1);
  console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data.forEach(function(e,i){
        if(e.profession==="admin"){
            data.splice(i,1);
        }
    })
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let data2=[
        { name: "deba", age: 23, profession: "developer" },
        { name: "kaity", age: 30, profession: "admin" },
      ];
     data2.forEach(function(e){
        data.splice(data.length,0,e);
     })
      console.log(data);
  }
  
  // 5. Average Age
  function averageAge() {
    let sumAge=0;
    data.forEach(function(e){
     sumAge+=e.age;
    })
    console.log(sumAge/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let c=0;
    data.forEach(function(e){
       if(e.age>25){
        c++;
       }
    })
    if(c>0){
        console.log("person above 25 exits!");
    }
    else{
        console.log("person above 25 notexits!");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let l=[];
    data.forEach(function(e){
        if(!l.includes(e.profession)){
            l.push(e.profession);
        }
    });
    console.log("unique profession is:"+l);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort(function(a,b){
        return a.age-b.age;
    })
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
   data.forEach(function(e){
        if(e.name==="john"){
            e.profession="manager";
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let c1=0,c2=0;
    data.forEach(function(e){
        if(e.profession==="developer"){
            c1++;
        }
        else if(e.profession==="admin"){
            c2++;
        }
    })
    console.log("Developrs :"+c1);
    console.log("Admin :"+c2);
  }