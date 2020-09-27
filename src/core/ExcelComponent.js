import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {

    constructor($root, options = {}){
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []
        this.prepare()
    }

    // set our component to init
    prepare() {}

    // return template of component
    toHTML() {
        return '';
    }

    // Push events to listeners 
    $emit(event, ...args){
        this.emitter.emit(event, ...args)
    }


    // subscribe on event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // init component
    // add DOM listeners
    init(){
        this.initDOMListeners()
    }

    // Delete component
    // clear up listeners
    destroy(){
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}
