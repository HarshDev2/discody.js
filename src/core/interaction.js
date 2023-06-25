export default class Interaction {
    deferReply(options){
        this.deffered = true;
        console.log("deffered", options);
    }
    reply(message, options){
        if(this.deffered) throw Error("An deffered interaction can't be replied, use editReply instead.")
        console.log(message, options);
    }
    editReply(message){
        console.log(message);
    }
}