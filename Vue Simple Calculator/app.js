const app= Vue.createApp({
  data() { 
    return{
      addSelected:false,
      subSelected:false,
      mulSelected:false,
      divSelected:false,
      op:0,
      ops:0,
      crassi:0,

  }
},
methods:{
  setop(event){
    this.op+=event.target.value;
    console.log(this.op);
  },
  setukars(events){
    this.ops+=events.target.value;
    console.log(this.ops);
  },
  addSelect(){
     this.addSelected=true;
     this.subSelected=false;
     this.mulSelected=false;
     this.divSelected=false;
     this.crassi=parseInt(this.op)+parseInt(this.ops)
     
     
  },
  subSelect(){
    this.addSelected=false;
     this.subSelected=true;
     this.mulSelected=false;
     this.divSelected=false;   
     this.crassi=this.op-this.ops
  },
  mulSelect(){
    this.addSelected=false;
     this.subSelected=false;
     this.mulSelected=true;
     this.divSelected=false;
     this.crassi=this.op*this.ops
  },
  divSelect(){
    this.addSelected=false;
     this.subSelected=false;
     this.mulSelected=false;
     this.divSelected=true;
     this.crassi=this.op/this.ops
  },

}
});

app.mount('#wonk');

// const app=Vue.createApp({

// });

// app.mount('#wonk')