import nodeType from "../../constants/nodeType";
export default class Compiler {
    $el = null;
    $vm = null;
    init(el,vm) {
        this.$el = el;
        this.$vm = vm;
        this._render(this.$el)
        return this
    }
    _render(el) {
        const childNodes = el.childNodes;
        childNodes.forEach(domNode => {
            switch (domNode.nodeType) {
                case nodeType.TEXT_NODE:
                    this.complieText(domNode);
                    break;
                case nodeType.ELEMENT_NODE:
                    this.complieElement(domNode);
                    break;
                default:
                    throw new Error("unknown type's  node")
            }
           
        })
    }
    complieText(element) {
        
    }
    complieElement(element) {
        
    }
}