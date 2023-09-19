
#
# Main component of TF Micro project 'esp32_classifier'.
#

idf_component_register(
    SRCS
        "detection_responder.cc"
        "image_provider.cc"
        "main.cc"
        "main_functions.cc"
        "model_settings.cc"
        "esp32_model_data.cc"
        "app_camera_esp.c"
        # "esp_lcd.c"
        "esp_cli.c"

    PRIV_REQUIRES console spi_flash
    INCLUDE_DIRS "")
