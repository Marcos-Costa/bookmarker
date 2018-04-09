//Listen for a submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  /*
    // Local storage examples

    localStorage.setItem('key','value');
    localStorage.getItem('key');
    localStorage.removeItem('key')
  */

  //  Check if there isn't any bookmark created yet
  if (localStorage.getItem('bookmarks') === null) {
    //  Initialize the array of bookmarks
    var bookmarks = [];

    //  Adds the first bookmark
    bookmarks.push(bookmark);

    //  Adds it to local local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  } else {
    //  Get the array of bookmarks
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //  Adds the new site to array
    bookmarks.push(bookmark);

    //  Re-set the local storage bookmark
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  //Prevent form from submiting
  e.preventDefault();
}

function fetchBookmarks(){

  //  Get all bookmarks
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  //  Get the DOM object that is going to output the fetch result
  var bookmarksResult = document.getElementById('bookmarksResults');

  //  Loop through all bookmarks and output them
  for(var i = 0; i < bookmarks.length; i++){

    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResult.innerHTML += '<div class="well">'+'<h3>'+name+'<a class="btn btn-default" target="__blank" href="'+url+'">Visitar</a>'+'</h3>';
  }


}
