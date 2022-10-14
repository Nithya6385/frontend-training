let newsSelect = JSON.parse(localStorage.getItem("newspaper"));
const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const url = urlParams.get('id');
        
        let newsContainer = document.getElementById("newslist")


        for(let i =0; i < newsSelect.length; i++){
            if(url == newsSelect[i].id){
               let menu = newsSelect[i].newsMenu;
               let ele = "";
              for(let i = 0; i < menu.length; i++){
                ele += `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
    
    
                  <div class="col-md-8">
                    <div class="card-body">
                    <img src="${menu[i].img}" class="card-img-top" alt=""/>
                      <h5 class="card-title">${menu[i].foodName}</h5>
                      <p class="card-text">${menu[i].price}</p>
                      <p class="card-text">${menu[i].type}</p>
                      <p class="card-text"><small class="text-muted">${menu[i].desc}</small></p>
                    </div>
                  </div>
                  <div class="col-md-4">

                  </div>
                </div>
              </div>`

              menuContainer.innerHTML = ele;
              }
            }
        }