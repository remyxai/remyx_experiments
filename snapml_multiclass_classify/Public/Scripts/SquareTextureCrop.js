// SquareTextureCrop.js
// Allows to configure screen crop texture to crop different parts of the screen 
// Event: On Awake
// Version 1.1.0

// @input Asset.Texture cropTexture {"hint" : "Screen Crop Texture Asset to modify"}
// @input int type = 0 {"widget" : "combobox", "values" : [{"label": "Screen Center", "value" : "0"}, {"label": "User Tap", "value" : "1"}]}
// @input float sizeMultiplier = 1.0

var cropProvider;
var aspect = 1; //aspect of device camera texture 
var size = new vec2(2, 2); // default screen transform size [-1; 1]
var center = new vec2(0, 0);

function checkInputs() {
    if (!script.cropTexture) {
        print("Warning, Screen Crop Texture is not set, create new screen crop texture in the resources panel");
        return false;
    }
    if (!script.cropTexture.control.isOfType("Provider.RectCropTextureProvider")) {
        print("Warning, please set Screen Crop Texture");
        return false;
    }
    return true;
}


function onStart() {
    cropProvider = script.cropTexture.control;
    aspect = cropProvider.inputTexture.control.getAspect();
    updateSize();
}

function updateSize() {
    if (script.squareCropType == 1) {
        size.x = size.y / aspect;
    } else {
        size.y = size.x * aspect;
    }
    if (aspect > 1) {
        size = size.uniformScale(1 / aspect);
    }
    //set crop rect size and center
    size.x *= script.sizeMultiplier;
    size.y *= script.sizeMultiplier;
    cropProvider.cropRect.setSize(size);
}

function updateCenter() {
    cropProvider.cropRect.setCenter(center);
}

function onTouchStart(eventData) {
    center = eventData.getTouchPosition();
    center.x = center.x * 2 - 1;
    center.y = 1 - center.y * 2;
    // clamp to screen bounds
    if (center.x + size.x / 2 > 1) {
        center.x = 1 - size.x / 2;
    } else if (center.x - size.x / 2 < -1) {
        center.x = -1 + size.x / 2;
    }
    if (center.y + size.y / 2 > 1) {
        center.y = 1 - size.y / 2;
    } else if (center.y - size.y / 2 < -1) {
        center.y = -1 + size.y / 2;
    }
    updateCenter();
}

if (checkInputs()) {
    script.createEvent("OnStartEvent").bind(onStart);
    if (script.type == 1) {
        script.createEvent("TouchStartEvent").bind(onTouchStart);
    }
}
