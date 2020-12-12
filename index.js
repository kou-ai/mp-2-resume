const Forms = document.querySelectorAll('.form1');
const LogoutMenu = document.querySelectorAll('.logged-out');
const aboutList = document.querySelector('.showcase-right');
const workList = document.querySelector('.workou');
const schoolList = document.querySelector('.kou1');
const orgList = document.querySelector('.koul');
const contactList = document.querySelector('.kountacts');

const setupUI = (user) => {
  if (user) {
    Forms.forEach(item => item.style.display = 'block');
    LogoutMenu.forEach(item => item.style.display = 'none');

  } else {
    Forms.forEach(item => item.style.display = 'none');
    LogoutMenu.forEach(item => item.style.display = 'block');
  }
}

function renderAbout(doc) {
  let diver = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
  let a = document.createElement('a');

  diver.setAttribute('data-id', doc.id);
  h1.textContent = doc.data().aboutme;
  p.textContent = doc.data().info;
  a.textContent = 'x';

  diver.className = "container-about";
  h1.className = "main-intro";
  p.style = "text-align: justify";
  a.style = "color:  #ff4f00";
  a.classNmae = "close-design-about";

  diver.appendChild(h1);
  diver.appendChild(p);
  diver.appendChild(a);

  aboutList.appendChild(diver);

  //delete
  a.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');

    db.collection("about").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");

    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })

}

function renderWork(doc) {
  let diver = document.createElement('div');
  let a = document.createElement('a');
  let img = document.createElement('img');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let cross = document.createElement('a');

  diver.setAttribute('data-id', doc.id);
  img.setAttribute("src", doc.data().img);
  span2.textContent = doc.data().Name;
  cross.textContent = 'x';

  diver.className = "col-md-6 col-lg-3 item zoom-on-hover";
  a.className = "lightbox";
  span1.className = "description";
  img.className = "img-fluid image";
  span2.className = "description-heading";
  cross.className = "close-design";
  cross.style = "color:  #ff4f00"


  diver.appendChild(a);
  a.appendChild(img);
  a.appendChild(span1);
  span1.appendChild(span2);
  span1.appendChild(cross);

  workList.appendChild(diver);

  //delete
  cross.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');

    db.collection("works").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");

    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })

};

function renderSchools(doc) {
  let diver = document.createElement('div');
  let cont1 = document.createElement('div');
  let cont2 = document.createElement('div');
  let cont3 = document.createElement('div');
  let img = document.createElement('img');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let cross = document.createElement('a');

  diver.setAttribute('data-id', doc.id);
  img.setAttribute('src', doc.data().img);
  h2.textContent = doc.data().school;
  p.textContent = doc.data().level;
  p2.textContent = doc.data().years;
  cross.textContent = 'x';

  diver.className = "col-md-3";
  cont1.className = "card card-body bg-light card-school";
  cont2.className = "container";
  cont3.className = "container";
  cont3.style = "margin-top: 1rem"
  img.className = "img-school";
  h2.className = "header-school"
  h2.style = "font-size: 17px";
  p.style = "margin-bottom: 0";
  cross.style = "color:  #ff4f00";

  img.style = "width:80px";

  diver.appendChild(cont1);
  diver.appendChild(cross);
  cont1.appendChild(cont2);
  cont2.appendChild(img);
  cont1.appendChild(cont3);
  cont3.appendChild(h2);
  cont3.appendChild(p);
  cont3.appendChild(p2);


  schoolList.appendChild(diver);

  //delete
  cross.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');

    db.collection("schools").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");

    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })

}


function renderOrgs(doc) {
  let li = document.createElement('li');
  let div = document.createElement('div');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  let a = document.createElement('a');

  li.setAttribute('data-id', doc.id);
  img.setAttribute('src', doc.data().img)


  li.className = "orgmans";
  div.className = "container";
  h3.textContent = doc.data().name;
  p.textContent = doc.data().description;
  a.textContent = 'x';
  a.className = "cross-close";
  img.className = "org-img";
  img.style = "width: 80px";
  h3.style = 'margin-top: 1rem';
  p.style = "text-align: center";
  a.style = "color:  #ff4f00";

  li.appendChild(div);
  div.appendChild(a)
  div.appendChild(img);
  li.appendChild(h3);
  li.appendChild(p);

  orgList.appendChild(li);

  a.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.parentElement.getAttribute('data-id');

    db.collection("organizations").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");

    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })
}




function renderContact(doc) {
  let diver = document.createElement('div');
  let a = document.createElement('a');
  let button = document.createElement('button');
  let i = document.createElement('i');
  let diving = document.createElement('div');
  let cross = document.createElement('a');

  diver.setAttribute('data-id', doc.id);
  diver.className = "col-md-3";
  diver.style = "margin-bottom: 1rem";
  cross.style = "color :  #ff4f00"
  button.className = "card-social";

  cross.textContent = 'x';
  a.href = doc.data().link;
  a.setAttribute('target', '_blank');
  i.className = doc.data().img;

  diver.appendChild(a);
  diver.appendChild(diving);
  diving.appendChild(cross);
  a.appendChild(button)
  button.appendChild(i);


  contactList.appendChild(diver);

  cross.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.parentElement.getAttribute('data-id');

    db.collection("contacts").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");

    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })
}