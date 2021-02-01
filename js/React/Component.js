import {type_check_v2} from "./Helpers.js";

export default class Component {


    _state = {};
    _prevState = {};
    _dom;
    _router;
    _rendered;
    _parent;


    constructor() {
        this._state = null;
        this._prevState = null;
    };

    get state() {
        return this._state;
    };
    get prevState() {
        return this._prevState;
    };
    get dom() {
        return this._dom;
    };
    get router() {
        return this._router;
    };
    get rendered() {
        return this._rendered;
    };
    get parent() {
       ; return this._parent;
    }

    set state(val) {
        this._state = val;
    };
    set prevState(val) {
        this._prevState = val;
    };
    set dom(val) {
        this._dom = val;
    };
    set router(val) {
        this._router = val;
    };
    set rendered(val) {
        this._rendered = val;
    };
    set parent(val) {
        this._parent = val;
    };

    receiveData(val) {
        if (Object.type_check(val, this.propTypes)) {
            this.state = val;
        } else {
            throw new PropsInvalid(this.constructor.name)
        }
    }

    setState(prms) {
        this.prevState = this.state;
        this.state = {...prms};

        if (this.shouldUpdate()) {
            this.rendered = this.display()
            this.dom.updateDom(this)
        }
    }

    shouldUpdate() {
        return !type_check_v2(this.state, {"value": this.prevState})
    }
}
