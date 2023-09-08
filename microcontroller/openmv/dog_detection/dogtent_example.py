import sensor, image, time, tf

# Initialize and configure the sensor
sensor.reset()
sensor.set_pixformat(sensor.GRAYSCALE) # or RGB565, depending on your model
sensor.set_framesize(sensor.QVGA)
sensor.skip_frames(time=2000)

# Load the TFLite model
net = tf.load('model.tflite', load_to_fb=True)  # Change the path

# Create a clock object to track the FPS
clock = time.clock()

while True:
    clock.tick()

    # Capture image
    img = sensor.snapshot()

    # Run the TFLite classifier (adjust the input/output tensor as needed)
    obj = net.classify(img, min_scale=1.0, scale_mul=0.5, x_overlap=0.0, y_overlap=0.0)
    # Note: The classify() method's arguments can vary depending on the model,
    # refer to the OpenMV documentation for details.

    # Get classification results
    if obj:
        prediction = obj[0].output()  # This will be a list if you have multiple output nodes in your neural network
        label = prediction.index(max(prediction))
        confidence = max(prediction)
        label = 'Dog' if label else 'Tent Interior'

        # Draw a box around the object and label it
        img.draw_rectangle(obj[0].rect())
        img.draw_string(obj[0].x()+8, obj[0].y()-3, str(label) + ' ' + '{:.2f}'.format(confidence), scale=2.0, mono_space = False)

    print("FPS:", clock.fps())
