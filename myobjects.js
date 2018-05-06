console.log("List and location initialized")
class Calendar {
    constructor(){
        this.calendar = {};
    }
    //function adds multiple activty objects to the calendar date needed
    //takes the form data from html
    addToCalendar() {
        //date and activity objects
        var date = [parseInt(document.getElementById('day').value), parseInt(document.getElementById('mon').value)];
        var activity = [document.getElementById('workout').value, document.getElementById('intensity').value];
        //date made must be a string for key usage
        var keydate = JSON.stringify(date);
        console.log(date, activity);

        if (keydate in this.calendar) {
            this.calendar[keydate].push(activity);
        }
        else {
            this.calendar[keydate] = [activity];
        }

        console.log(JSON.stringify(this.calendar));

    }
//using integers day and month to get array of activities
    getActivities( day , mon){
        var madekey=JSON.stringify([day,mon]);
        return calendar[madekey];
    }
//will make an access by month function if needed
}

//CREATED BODYSTATE OBJECT-- need to figure out how to connect the body diagram to the calendar of activities
//and when to reset the body state and what formulas to follow for optimal knowledge of state
class Body {
    constructor(){
        var back , chest, arms, legs;

        this.back = this.chest = this.arms = this.legs = 0;
        //window.onload=this.bodyChangeView(0,0,0,0)
    }

    //takes form for activty to change body sate
    addToBody() {
        //form data for activty
        var workout=document.getElementById('workout').value;
        var ity=parseInt(document.getElementById('intensity').value)/20;
        //make various if else statements to modify body state based
        if(workout=="Run"){
            console.log(workout,ity);
            //back chest arm legs
            this.bodyUpdate(.1+ity,0,0,.1+ity);
        }
        else if(workout=="Swim"){
            console.log(workout,ity);
            this.bodyUpdate(.1+ity,.1,.1,.1+ity);
        }
        else if(workout=="Bike"){
            console.log(workout,ity);
            this.bodyUpdate(0,0,0,.1+ity);
        }
        else if(workout=="Chest"){
            console.log(workout,ity);
            this.bodyUpdate(0,.1+ity,0,0);
        }
        else if(workout=="Arms"){
            console.log(workout,ity);
            this.bodyUpdate(0,0,.1+ity,0);
        }
        else if(workout=="Back"){
            console.log(workout,ity);
            this.bodyUpdate(.1+ity,0,0,0);
        }
        else if(workout=="Leg"){
            console.log(workout,ity);
            this.bodyUpdate(0,0,0,.1+ity);
        }


    }



// modify the body state variables
    bodyUpdate(b, c, a, l) {


        this.back += b;
        this.chest += c;
        this.arms += a;
        this.legs += l;
        this.bodyChangeView(this.back,this.chest, this.arms, this.legs)
        console.log(this.back,this.chest,this.arms,this.legs);

    }

     bodyChangeView(b, c, a, l) {

        document.getElementById("rback").style.opacity =  parseFloat(b);
        document.getElementById("rchest").style.opacity =  parseFloat(c);
        document.getElementById("rarms").style.opacity = parseFloat(a);
        document.getElementById("rlegs").style.opacity =  parseFloat(l);

    }

//access body methods

}



//OBJECT THAT IS USED OUTSIDE
cal= new Calendar();
bod= new Body();