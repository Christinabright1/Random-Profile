# Random-Profile

document.getElementById("button").addEventListener("click", displayrandomUser);

function displayrandomUser(e){
  let xhr= new XMLHttpRequest();
  xhr.open("GET","https://randomuser.me/api/?page=3&results=10&seed=abc%27", true);
  xhr.onload= function(){
    if(this.status === 200){
     
          let users= JSON.parse(this.responseText);
          //let usersinarrayofObject= users.results;
         let arrayofObject = users.results;
           console.log(arrayofObject);

    function random(){
    return Math.floor(Math.random()*arrayofObject.length);
    }


     function getrandomUsers(){
       let randomuser = arrayofObject[random()];
       let output="";
       output +=`
                   <div>
                   ${ randomuser["name"]["title"]}
                   ${ randomuser["name"]["first"]}
                   ${ randomuser["name"]["last"]}
                   </div>

                   <p>Registered Date ${randomuser["registered"]["date"]}</p>
                   <p>Date of birth: ${randomuser["dob"]["date"]}</p>

                   <p>Nationality ${ randomuser["nat"]}</p>
                   
                   <p>Gender ${ randomuser["gender"]}</p>
                   <div>
                   ${ randomuser["location"]["street"]["number"]}
                   ${ randomuser["location"]["street"]["name"]}
                   <br>
                   ${randomuser["location"]["postcode"]}
                   <br>
                   ${randomuser["location"]["city"]}
                   <br>
                   ${randomuser["location"]["state"]}
                   </div>
                   <div>
                   Email: ${randomuser["email"]}
                      <br><br>
                   <p>Phone ${randomuser["phone"]}</p>
                   <p>Cell  ${randomuser["cell"]}</p>
                   </div>
                 
       `;
       return output;
     }
   
  document.getElementById("userProfil").innerHTML= getrandomUsers();

    }
  }
  xhr.send();
  e.preventDefault();
}
