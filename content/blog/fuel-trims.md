+++
author = "Sanjiv Raj R"
categories = [""]
date = "2018-05-08T11:10:11+00:00"
description = "In order to make the catalytic converter to function at its best, The engine control unit varies the AFR around the stoichiometric ratio with the help of short-term fuel trims and long term fuel trims. A proper knowledge of fuel trims can be very much helpful in the diagnosis of engine issues. This blog will take you through the understanding of fuel trims and how it can be useful in diagnosis."
draft = true
featured = "/img/2018/05/ACtron-OBD2-Scanner-One-of-the-Best-OBD2-Scanners.jpg"
featuredalt = ""
featuredpath = ""
linktitle = ""
tags = []
title = "Understanding Fuel Trims"
type = "post"

+++
Considering the strict emission norms into account there are so much things an engine control module must perform to Catalytic converters will work good and in a efficient manner only when the air fuel ratio oscillates from slightly rich to slightly lean with an average as stoichiometric. Before getting things in detail a basic knowledge in some these following stuffs are vital.

### Operating voltage of lambda sensors

Lambda sensors operate between 0.1 V and 0.9 V averaging 0.45 V at stoichiometric ratio in which the catalytic converters works fine. Oxygen sensors produce less voltage say near 0.1 or 0.2 V in the lean conditions and produces a voltage of 0.8 to 0.9 at rich conditions. From the voltage produced ECM gets to know the mixture information on Air fuel ratio.

### Open Loop and closed loop

The ECM operates the engine follows open loop fueling in the time of starting the engine till it reaches certain operating temperature and in the time of wide open throttle. Since the engine demands a rich air fuel ratio in these situations, its undesirable to use a closed loop fueling which is capable of providing only stoichiometric air fuel ratio. A open loop just follows the fueling tables which are prescribed in the Performance MAPs and does not calibrate fueling based on the output of lambda sensors.

Once the engine reaches its operating temperature the ECM switches to closed loop fueling strategy. In which the engine is forced to run in stoichiometric condition by using Short term fuel trims (STFT) and Long term fuel trims (LTFT) from the information gathered from lambda sensors.

Now its time to get to know about STFT and LTFT in detail and to have some knowledge on diagnosis from these fuel trims.

### SHORT TERM FUEL TRIM (STFT)

As the name indicates this is a short term calibration of fueling. Whenever the AFR goes out of stoichiometric ratio the fuel trim changes the values in percentage. If the AFR is lean than stoichiometric ratio then a positive percentage of fuel trim is provided so the injectors extend the period of opening to enrich the fuel. Likewise when the AFR is rich than stoichiometric a negative value is provided in order to lean out the mixture. This is a instantaneous change for change in the values of lambda sensor. A value of  +/- 5% is absolutely normal for the values of short term fuel trims.