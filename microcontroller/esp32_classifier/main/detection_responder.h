/* Copyright 2019 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

// Provides an interface to take an action based on the output from the iphone/rfid
// classification model.

#ifndef TENSORFLOW_LITE_MICRO_EXAMPLES_ESP32_CLASSIFIER_DETECTION_RESPONDER_H_
#define TENSORFLOW_LITE_MICRO_EXAMPLES_ESP32_CLASSIFIER_DETECTION_RESPONDER_H_

#include "tensorflow/lite/c/common.h"

// Called every time the results of a rfid/iphone classification run are available. The
// `rfid_score` has the numerical confidence that the captured image contains
// an rfid card reader, and `iphone_score` has the numerical confidence that the image
// contains an iphone device. Typically if rfid_score >  iphone_score, the
// image is considered to contain an rfid card reader.  This threshold may be adjusted for
// particular applications.
void RespondToDetection(float rfid_score, float iphone_score);

#endif  // TENSORFLOW_LITE_MICRO_EXAMPLES_ESP32_CLASSIFIER_DETECTION_RESPONDER_H_
