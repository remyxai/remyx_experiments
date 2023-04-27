//ExampleScript.js
//Example script to use with the Multi Class Classification

script.printValues = function(values, labels) {
    for (var i = 0; i < values.length; i++) {
        print("Label:" + labels[i] + ", prob:" + values[i]);
    }
};
