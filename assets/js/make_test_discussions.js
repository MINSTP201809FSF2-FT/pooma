

var discussion = `
<div class="discussion-component container bordered margin-top-20px">
              <div class="row">
                  <div class="col-md-1">
                      <div class="row">
                          <button class="btn btn-success">up</button>
                      </div>               
                      <div class="row">
                          <p>#votes</p>
                      </div>
                      <div class="row">
                          <button class="btn btn-danger">down</button>
                      </div>  
                  </div>
      
                  <div class="col-md-3">
                      <img class="img-fluid" src="https://coincodex.com/en/resources/images//admin/news/ripple-powered-money-1/ripple-mobile.jpg:resizeboxcropjpg?700x400">
                  </div>
                  
                  <div class="col-md-5">
                      <div class="row">Post title</div>
                      <div class="row">article link</div>
                      <div class="row">
                          <div class="col-md-4">r/sub</div>
                          <div class="col-md-8">posted by /u/</div>
                      </div>
                      <div class="row">
                          <div class="col-md-1">1</div>
                          <div class="col-md-1">2</div>
                          <div class="col-md-1">3</div>
                          <div class="col-md-1">4</div>
                          <div class="col-md-1">5</div>
                          <div class="col-md-1">6</div>
                          <div class="col-md-2">7</div>
                          <div class="col-md-4">8</div>
                      </div>
                  </div>
                  
                  <div class="col-md-3">
                      <div class="row">
                          <p>Top Comment</p>
                      </div>
                      <div class="row">
                          <p>Comment text</p>
                      </div>
                      <div class="row" margin="auto">
                          <button class="btn btn-success">up</button>
                      </div>               
                      <div class="row" margin="auto">
                          <p>#votes</p>
                      </div>
                      <div class="row" margin="auto">
                          <button class="btn btn-danger">down</button>
                      </div>
      
                  </div>
      
      
      
          </div>

`

window.onload = function() {
    var discussion_element = document.getElementById('discussion-content')
    console.log(discussion_element)
    for (var i=0; i<10; i++) {
        discussion_element.innerHTML += discussion;
    }
}
