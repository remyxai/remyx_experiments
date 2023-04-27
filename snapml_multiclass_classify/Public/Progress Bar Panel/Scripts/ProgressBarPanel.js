// ProgressBarPanel.js
// Version 0.1.0
// Creates required amount of progress bars and allows to scroll the panel
// @input Asset.ObjectPrefab progressBarPrefab
// @input int count = 5

var progressBars = [];
var so = script.getSceneObject();

function setCount(k) {
    for (var i = 0; i < k; i++) {
        var pb = script.progressBarPrefab.instantiate(so);
        progressBars.push(pb.getComponent("Component.ScriptComponent"));
    }
}


function setValues(values, labels) {
    if (values.length > progressBars.length) {
        print("Warning, not enough progress bars, please set increase [Count] input on " + script.getSceneObject().name);
    }
    for (var i = 0; i < Math.min(progressBars.length, values.length); i++) {
        progressBars[i].value = values[i];
        progressBars[i].label = labels[i];
    }
}

function initialize() {
    setCount(script.count);
}

initialize();

script.setCount = setCount;
script.setValues = setValues;