

var url ="https://my.api.mockaroo.com/pooma_discussions.json?key=d4a860d0"

window.onload = function() {
    var discussion_element = document.getElementById('discussion-content')

    $.ajax(url, {
        dataType: 'jsonp',
        contentType: 'application/json',
        success: function(discussion_datas) {
            for (var i=0; i<discussion_datas.length; i++) {
                var discussion_data = discussion_datas[i]
            
                var discussion = `
        <div class="discussion-component container bordered margin-top-20px">
                      <div class="row">
                          <div class="col-md-1">
                              <div class="row">
                                  <button class="btn btn-success">up</button>
                              </div>               
                              <div class="row">
                                  <p>${discussion_data.upvotes}</p>
                              </div>
                              <div class="row">
                                  <button class="btn btn-danger">down</button>
                              </div>  
                          </div>
              
                          <div class="col-md-3 ">
                              <img class="img-fluid mt-1 mb-1 rounded" src="${discussion_data.img_link}">
                          </div>
                          
                          <div class="col-md-5">
                              <div class="row">
                                <a href=''>${discussion_data.title}</a>
                              </div>
                              <div class="row">article link</div>
                              <div class="row">
                                  <div class="col-md-4">r/${discussion_data.sub}</div>
                                  <div class="col-md-8">posted by ${discussion_data.username}</div>
                              </div>
                              
                          </div>
                          
                          
              
              
              
              
                  </div>
        
        `

        discussion_element.innerHTML += discussion;
        }
    }
    });


/*
{
  "id": 100,
  "username": "bnice2r",
  "title": "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod",
  "content": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "upvotes": 52,
  "comments": 1475
}*/

        
    
}
