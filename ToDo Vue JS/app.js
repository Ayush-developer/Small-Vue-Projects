const app = Vue.createApp({
    data(){
        return{
            inputs:'',
            datas:[],
        };
    },
    methods:{
        takeinputs(dates){
            this.inputs = dates.target.value;


        },
         adddatas(){
             this.datas.push(this.inputs)
         },
         removed(idx){
            this.datas.splice(idx, 1);
         }
        

    }

}).mount(".mids");