var request = new XMLHttpRequest()
request.open('GET', './json/data.js')
request.onload = function(){
    var data = JSON.parseI(this.response)
    if(request.status>=200 && request.status<=400){
        
    }
}