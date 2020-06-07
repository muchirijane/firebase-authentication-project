//creating the html tempelate
const guideList = document.querySelector('.guides');
const loggedinLinks = document.querySelectorAll('.logged-in');
const loggedoutLinks = document.querySelectorAll('.logged-out');

const setupUI = (user) =>{
  if(user){
    loggedinLinks.forEach(item => item.style.display = 'block');
    loggedoutLinks.forEach(item => item.style.display = 'none');
  }else{
    loggedinLinks.forEach(item => item.style.display = 'none');
    loggedoutLinks.forEach(item => item.style.display = 'block');
  }
}

//set guides

const setupGuides = (data) =>{

  if(data.length){
    data.forEach(docs =>{
      const guide = docs.data();
      
        let html = `
          <li>
            <div class="collapsible-header  blue-grey lighten-4">${guide.title}</div>
            <div class="collapsible-body white">${guide.content}</div>
          </li>
        `;
    });
    guideList.innerHTML += html;
  }else{
    guideList.innerHTML = '<h5 class ="center-align">Login to view guides</h5>';
  }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});