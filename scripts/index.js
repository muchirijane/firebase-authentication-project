//creating the html tempelate
const guideList = document.querySelector('.guides');

//set guides

const setupGuides = (data) =>{

  if(data.length){
    data.forEach(docs =>{
      const guide = docs.data();
      
        let html = `
          <li>
            <div class="collapsible-header grey lighten-4">${guide.title}</div>
            <div class="collapsible-body white">${guide.content}</div>
          </li>
        `;
      

      guideList.innerHTML += html;
    });
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