function Tab (node){
  Tab.prototype.init()
}

Tab.prototype = {
    constructor: Tab,
    init: function(){
    this.bind()
    },
    bind: function(){
      document.querySelectorAll('.tab-container')[0].onclick = function(){
        document.querySelectorAll('.tab-container')[0].classList.add('active')
        document.querySelectorAll('.tab-container')[1].classList.remove('active')
        document.querySelector('.div1').classList.add('active')
        document.querySelector('.div2').classList.remove('active')
      }
      document.querySelectorAll('.tab-container')[1].onclick = function(){
        document.querySelectorAll('.tab-container')[1].classList.add('active')
        document.querySelectorAll('.tab-container')[0].classList.remove('active')
        document.querySelector('.div1').classList.remove('active')
        document.querySelector('.div2').classList.add('active')
      }
    },

}

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);



