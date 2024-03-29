/*
*compare (a, b)
*if a > b ret 1
*if b > a ret -1
*if a===b ret 0 */

function getMax(arr){
  let max = arr[0];
  let i = 1;

  while (i < arr.length){
    if( compare(arr[i], max)===1){
      max = arr[i];
      }
      i++;
    }
    return max;
  }



export function getAlbumWithMostOfGenres(albums) {
  let mostOfGenres = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres.length > mostOfGenres.genres.length) {
      mostOfGenres = albums[i];
    }
  }
  console.log("Most of genres", mostOfGenres.title);
}

export function getAlbumWithTeMostOfSale(albums) {
  let mostOfSale = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].sale > mostOfSale.sale) {
      mostOfSale = albums[i];
    }
  }
  console.log("Most of sale", mostOfSale.title);
}

export function getAlbumWithFewestGenres(albums) {
  let minOfGenres = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres.length < minOfGenres.genres.length) {
      minOfGenres = albums[i];
    }
  }
  console.log("Fewes genres", minOfGenres.title);
}

 function search(arr, equals){

 }

function getByKeyValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i];
    }
  }
}

export function getAlbumWithYearOf(albums, byYear) {
  const album = getByKeyValue(albums, 'year', byYear);
  console.log('By Year', album.title);
}

export function getAlbumWithArtist(albums, artist) {
  const album = getByKeyValue(albums, 'artist', artist);
  console.log('By Artist', album.title);
}

export function getAlbumByGenre(albums, byGenre) {
  let found = false;
  for (let i = 0; i < albums.length; i++) {
    for (let j = 0; j < albums[i].genres.length; j++) {
      if (albums[i].genres[j] === byGenre) {
        console.log("By genre", albums[i].title);
        found = true;
        break;
      }
    }

    if (found === true) {
      break;
    }
  }
}

//callbacks
function foo(fn) {
fn();
}

function bar() {

}

fn = bar;
foo(bar);
