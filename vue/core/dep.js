export default class Dep{
    constructor() {
        this.subs=[]
    }
    static target=null 
    addSub(watcher) {
        if (watcher && watcher.update) {
            this.subs.push(watcher)
        }
      
    }
    noitfy(){
        this.subs.forEach(watcher => {
            watcher.update()
        })
    } 
}