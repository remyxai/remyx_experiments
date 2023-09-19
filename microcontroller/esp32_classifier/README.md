# Image Classification on the ESP32 with Remyx AI

This example shows how you can use the Remyx AI engine to produce a small neural
network to differentiate between electronic devices from a camera feed.  It is designed to
run on systems with small amounts of memory such as microcontrollers and DSPs.

This particular example contains a classification model with the labels `iphone` and `rfid card reader`.
Use the [Remyx Engine](https://engine.remyx.ai) to create a new model and replace the `main/esp32_model_data.cc` file 
with the new converted model weights.

## Deploy to ESP32

The following instructions will help you build and deploy this sample
to [ESP32](https://www.espressif.com/en/products/hardware/esp32/overview)
devices using the [ESP IDF](https://github.com/espressif/esp-idf).

The sample has been tested on ESP-IDF version `release/v4.2` and `release/v4.4` with the following devices:
- [ESP32-CAM (AI Thinker)](https://www.amazon.com/Aideepen-ESP32-CAM-Bluetooth-ESP32-CAM-MB-Arduino/dp/B08P2578LV/ref=sr_1_6?keywords=esp32+cam+ai+thinker&qid=1695152771&sr=8-6)

### Install the ESP IDF

Follow the instructions of the
[ESP-IDF get started guide](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)
to setup the toolchain and the ESP-IDF itself.

The next steps assume that the
[IDF environment variables are set](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables) :

 * The `IDF_PATH` environment variable is set
 * `idf.py` and Xtensa-esp32 tools (e.g. `xtensa-esp32-elf-gcc`) are in `$PATH`

### Dependencies

This example requires an external component `esp32-camera` which is the submodule of the example.
If you have not cloned current repo with `--recursive` option, please use `git submodule update` to get it cloned.

### Building the example

Set the target to `esp32`

```
idf.py set-target esp32
```

Configure the correct camera with:
```
idf.py menuconfig
```
and choose AI Thinker option from `Application Configuration > Camera Configuration > Select Camera Pinout > ESP32-CAM by AI-Thinker`

then build the project with
```
idf.py build
```

### Load and run the example

To flash, run:
```
idf.py --port /dev/ttyUSB0 flash
```

Monitor the serial output:
```
idf.py --port /dev/ttyUSB0 monitor
```

Use `Ctrl+]` to exit.

The previous two commands can be combined:
```
idf.py --port /dev/ttyUSB0 flash monitor
```

You will see the inference results printed on the screen
