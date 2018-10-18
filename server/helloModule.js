//模块化


function Hello() {
    var name;
    this.setName = function(n) {
        name = n;
    }
    this.getName = function() {
        console.log('hello ' + name)
    }
}

function SayGoodBye() {
    
    console.log('say goodbyetest')
}

module.exports = {
    Hello,
    SayGoodBye
};