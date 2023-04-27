//ProgressBar.js
//Version 0.1.1
//Event - OnAwake
//Controls image and text labels that represent progress bar
//@input Component.Text labelTextComp
//@input Component.Text valueTextComp
//@input Component.Image progressBarImage

script.coef = 0.2;
script.precision = 2;

var so = script.getSceneObject();
var _value = 0.5;
var _label = "";

initialize();

Object.defineProperty(script, "value", {
    get: function() {
        return _value;
    },
    set: function(v) {
        _value = this.prevValue == undefined ? v : this.prevValue * (1 - this.coef) + v * this.coef;
        this.prevValue = _value;
        if (script.pass) {
            this.pass.percentage = _value;
        }
        if (script.valueTextComp) {
            this.valueTextComp.text = _value.toFixed(script.precision).toString();
        }
    }
});

Object.defineProperty(script, "label", {
    get: function() {
        return _label;
    },
    set: function(l) {
        _label = l;
        if (script.labelTextComp) {
            this.labelTextComp.text = _label;
        }
    }
});



function setAspect() {
    var st = so.getComponent("Component.ScreenTransform");
    if (!st) {
        print("Scene Object " + so.name + " Doesn't have Screen Transform Component");
        return;
    }
    var size = st.localPointToWorldPoint(new vec2(1, 1)).sub(st.localPointToWorldPoint(new vec2(-1, -1)));
    script.pass.aspect = new vec2(size.x, size.y);
}

// eslint-disable-next-line space-before-blocks
function initialize() {
    if (!script.labelTextComp) {
        print("Warning, Label Text Component input is not set on " + so.name);
    }
    if (!script.valueTextComp) {
        print("Warning, Value Text Component input is not set on " + so.name);
    }
    if (!script.progressBarImage) {
        print("Warning, Image Component input is not set on " + so.name);
    } else {
        script.progressBarImage.mainMaterial = script.progressBarImage.mainMaterial.clone();
        script.pass = script.progressBarImage.mainMaterial.mainPass;
        var delayedEvent = script.createEvent("DelayedCallbackEvent");
        delayedEvent.bind(setAspect);
        delayedEvent.reset(0.1);
    }
    script._prevValue = undefined;


}
//api
//script.value = 0.5
//script.label = "probability"
