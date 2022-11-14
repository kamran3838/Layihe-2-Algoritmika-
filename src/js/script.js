class Message{
    arr=[];
    constructor(name,text){
       this.name=name;
       text=this.text
    }
        toString(){
            return str=this.name+this.text+this.date;
        }
        
    }
    class Messenger extends Message{
        show_history(){
            let now = this.date;
          this.arr.forEach((item)=>{
            console.log(`${item.date.getHours()}:${item.date.getMinutes()}:${item.name}:${item.texter}}`)
          })
        }
        send(author, text){
           this.arr.push({name:author,texter:text,date:new Date()})
        }
    }
    let messenger = new Messenger()
    messenger.send('Adil', 'ilk mesaj')
    messenger.send('Məryəm', 'İkinci mesaj')
    messenger.show_history()





