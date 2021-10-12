
import Compiler from "./compiler"
const compiler = new Compiler();
export default class Vue{
    constructor(options) {
        this.$options = options
        const data = Object.prototype.toString.call(options.data) === "[object Function]" ? options.data() : options.data
        if (Object.prototype.toString.call(data) ==="[object Object]") {
           this.$data=data
        } else {
            throw new Error("data must is a Function or object")
         }
        this.$methods = options.methods ?? {};
        //init el  
        this._initRootElement(options);
        this._initData(this, options.data ?? {});
        this._initMethods(this, this.$methods);
        
        //compiler template
        Vue._compiler=compiler.init(this.$el,this)
        
       
        
    }
     static _compiler
    _initRootElement(options) { //挂载el
        if (typeof options.el == "string") {
            this.$el = document.querySelector(options.el)
             return
        } else if(options.el instanceof HTMLElement ) {
            this.$el = options.el
             return
        }
        
        throw new Error("请添加根元素")
    }
    //初始化data
    _initData(vm, data) {
        Object.keys(data).forEach(key => {
            if (Object.prototype.toString.call(data[key])=="[object Object]") {
                this._initData(data[key],data[key])
            } 
               Object.defineProperty(vm,key,{
                get() {
                    return data[key]
                },
                set(newValue,oldValue) {
                    if(data[key]===newValue){
                       return oldValue
                    }else{
                        data[key] = newValue;
                        return newValue;
                    }
                },
                enumerable:true,
                configurable:true
            }) 
            
            
        })
        
    }
    // 初始化methods
    _initMethods(vm,methods) {
        Object.keys(methods).forEach(key => {
            Object.defineProperty(vm, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return methods[key];
                }
            })
        })


    }


}