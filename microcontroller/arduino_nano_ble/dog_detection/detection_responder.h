
// Provides an interface to take an action based on the output from the dog
// detection model.

#ifndef TENSORFLOW_LITE_MICRO_DROOP_DETECTION_DETECTION_RESPONDER_H_
#define TENSORFLOW_LITE_MICRO_DROOP_DETECTION_DETECTION_RESPONDER_H_

#include "tensorflow/lite/c/common.h"
#include "tensorflow/lite/micro/micro_error_reporter.h"

// Called every time the results of a dog detection run are available. The
// `dog_score` has the numerical confidence that the captured image contains
// a dog, and `no_dog_score` has the numerical confidence that the image
// does not contain a dog. Typically if dog_score > no dog score, the
// image is considered to contain a dog.  This threshold may be adjusted for
// particular applications.
void RespondToDetection(tflite::ErrorReporter* error_reporter,
                        int8_t dog_score, int8_t no_dog_score);

#endif  // TENSORFLOW_LITE_MICRO_DROOP_DETECTION_DETECTION_RESPONDER_H_
