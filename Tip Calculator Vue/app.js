

const app = Vue.createApp({
    data(){
        return{
            cost:0,
            percent:0,
            people:0,
            costs:0,
            tips:0,

        }
    },
    methods:{
        get_Cost(event){
            if (event.target.value <=0){
                    this.cost=0;
            }
            else{
                this.cost=event.target.value;
            }
            // this.cost=event.target.value;
        },
        get_Tips(events){
            if (events.target.value <=0){
                this.cost=0;
        }
        else{
            this.percent=events.target.value;
        }

            // this.percent=events.target.value
        },
        get_total_people(eventss){
            if (eventss.target.value <=0){
                this.cost=0;
        }
        else{
            this.people=eventss.target.value;
        }
            // this.people=eventss.target.value
        },
        bill(){
            console.log("works");
           this.costs=this.costs+(this.cost)/(this.people);
           this.tips=this.tips+((this.cost)*0.005*(this.percent));
           this.cost=0;
          
        }
        


    }
}).mount(".section");