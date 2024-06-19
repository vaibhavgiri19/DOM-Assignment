let user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];
  let container=document.getElementById("container")

 user.forEach(obj => {

  let card =document.createElement("div")
  card.classList.add("card")

  let name1 =document.createElement("h2")
  name1.textContent= obj.name

  let username =document.createElement("p")
  username.textContent=` Username: ${obj.username}`

  let email =document.createElement("p")
  email.textContent=`Email: ${obj.email}`

  card.append(name1,username,email)
  container.append(card)



  
 });



 let form = document.getElementById("form")
 form.addEventListener("submit",function(event){
  event.preventDefault();

  let name = document.getElementById("name").value;
  let username1=document.getElementById("username").value;
  let email1 =document.getElementById("email").value;


  let newUser={
    id: user.length+1,
    name:name,
    username:username1,
    email:email1

  }
  user.push(newUser);

  let newCard=document.createElement("div")
  newCard.classList.add("card")

  let newName= document.createElement('h2')
  newName.textContent=newUser.name

  let newUserName= document.createElement('p')
  newUserName.textContent= ` Username: ${newUser.username}`

  let newEmail= document.createElement('p')
  newEmail.textContent= ` Email: ${newUser.email}`

  newCard.append(newName,newUserName,newEmail)

  container.append(newCard)

  form.reset();



 });











