console.log('scripts')

var imageWidth  = 400
var imageHeight = 200

var onReady = function() {
  var tasksDiv= $("#tasks")
  
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    success: function( result ) {
      var data = result.slice(1, 50)
  
      for (i=0; i< data.length; i++){
        var item = data[i]
        var title = item.title
        var completed = item.completed
        var completedClass = 'not-completed'


        if (completed) { // if completed == true
          completedClass = 'completed'
        }

        var renderTitle = '<li class="list-group-item '+ completedClass +'">'+title+'</li>'
        tasksDiv.append(renderTitle)
      }
    }
  })  
  
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/photos",
    success: function( result ) {
      console.log(result)
      var data = result.slice(1, 50) 
  
      var imageDiv = $("#images")
      for (i=0;i < data.length; i++) {

        var item= data[i]
        var title = item.title
        var link= item.url  
        var renderLink = "<a class='btn btn-primary' href='"+link+"'>view image</a>"
        var image = item.thumbnailUrl
        var body = item.body
        var renderTitle = '<h5>'+title+'</h5>'
        var renderImage = '<img class="card-img-top" src="' + image + '"/>'
        var renderBody = '<div class="card-body">'+renderTitle+renderLink+'</div>'
        var render = '<div class="col-lg-2 col-md-4 col-sm-6 col-xs-12"><div class="card mb-4 shadow-sm">'+renderImage+renderBody+'</div></div>'
        imageDiv.append(render)
      }
    }
  })
  
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    success: function( result ) {
      var data = result.slice(1, 50) // [{}]
      
      //      <div class="card" style="width: 18rem;">
      //        <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
      //        <div class="card-body">
      //          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //        </div>
      //      </div>
      
      
      var postsDiv = $('#posts')
      
      // https://picsum.photos/200/300?image=0

      for (i=0; i < data.length; i++) {
        var item  = data[i]
        var title = item.title 
        var body  = item.body
        var id    = item.id
        var link  = item.link
        
        var imageUrl    = 'https://picsum.photos/'+ imageWidth +'/' + imageHeight + '?image=' + id
        var renderText  = '<p class="card-text">'+body+'</p>'
        var renderImage = '<img class="card-img-top" src="' + imageUrl + '"/>'
        var renderTitle = '<h5>'+title+'</h5>'
        var renderBody  = '<div class="card-body">'+renderTitle+renderText+'</div>'
        var render      = '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"><div class="card mb-4 shadow-sm">'+renderImage+renderBody+'</div></div>'
        
        postsDiv.append(render)
      }
    }
  });
}

$('document').ready(onReady)