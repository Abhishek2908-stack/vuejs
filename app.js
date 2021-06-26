Vue.component('greeting',{
  template:'<p>Here is the {{name}}.<button @click="changeName">Change Name</button></p>',
  data:function(){
    return{
      name:'Riyan'
    }
  },
  methods:{
    changeName:function(){
      this.name='Prayan'
    }
  }
});

new Vue({
    el: '#vue-app',
    data: {
        name: 'Abhishek',
        job:'Developer',
        website:"https://www.youtube.com",
        websiteTag:'<a href="https://www.youtube.com">Youtube</a>',
        age:25,
        age1:25,
        x:0,
        y:0,
        newage:'',
        newname:'',
        a:0,
        b:0,
        available:false,
        nearby:false,
        error:false,
        success:false,
        nameList:["Sam","Abhi","Raj","KK"],
        studentList:[{sName:'Riyan',sAge:25},
                 {sName:'Prayan',sAge:12},
                 {sName:'Ayaan',sAge:20}
      ],
      health:100,
      ended:false,
      output:'Foodie'
    },
    methods:{
      greet: function(){
        return 'Good Morning'
      },
      greet2: function(time){
        return 'Good ' + time +" "+ this.name
      },
      add:function(inc){
        //this.age1++;
        this.age1+=inc;
      },
      substract:function(dec) {
        //this.age1--;
        this.age1-=dec;
      },
      updateXY:function(event) {
          this.x=event.offsetX;
          this.y=event.offsetY;
      },
      click:function() {
        alert('You clicked me');
      },
      logName:function() {
        console.log("You entered your name");
      },
      logAge:function() {
        console.log("You entered your age");
      },
      /*addToA:function() {
        return this.a+this.age;
      },
      addToB:function() {
        return this.b+this.age;
      },*/
      punch:function() {
        this.health-=10;
        if(this.health<=0){
          this.ended=true;
        }
      },
      restart:function() {
        this.health=100;
        this.ended=false;
      },
      readRefs:function(){
        console.log(this.$refs.input.value);
        this.output=this.$refs.input.value;
        console.log(this.$refs.test.innerText);
      }
    },
    computed:{
      addToA:function() {
        console.log("addToA")
        return this.a+this.age;
      },
      addToB:function() {
        console.log("addToB")
        return this.b+this.age;
      },
      compClasses:function() {
        return {
          available:this.available,
          nearby:this.nearby
        };
      }
    }
});

var one= new Vue({
  el:'#vue-app-one',
  data:{
    title:'Vue One App'
  },
  methods:{

  },
  computed:{
    greet:function() {
      return 'Hello From one app'
    }
  }
});

var two= new Vue({
  el:'#vue-app-two',
  data:{
    title:'Vue Two App'
  },
  methods:{
    changeTitle:function(){
      one.title="Title Changed";
    }
  },
  computed:{
    greet:function() {
      return 'Hello From one Two'
    }
  }
});

two.title="Changed from outside";
