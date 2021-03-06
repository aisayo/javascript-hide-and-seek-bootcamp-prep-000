function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div.target')
}


// pulls out the most deeply nested child from div#grand-node. (
// Remember, you can iterate over elements and call querySelector()
// and querySelectorAll() on them. This is challenging to
// implement correctly, but not beyond your ability!)

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i<lis.length; i++){
    var parsed = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = (parsed + n);
    console.log(lis[i].innerHTML);
  }
}
//increaseRankBy(1);

function deepestChild(){
	//return document.querySelectorAll('div#grand-node');
	return document.querySelector('#grand-node div div div div');
}
