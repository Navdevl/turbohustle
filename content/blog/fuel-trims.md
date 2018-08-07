+++
author = "Sanjiv Raj R"
categories = [""]
date = "2018-05-08T11:10:11+00:00"
description = "In order to make the catalytic converter to function at its best, The engine control unit varies the AFR around the stoichiometric ratio with the help of short-term fuel trims and long term fuel trims. A proper knowledge of fuel trims can be very much helpful in the diagnosis of engine issues. This blog will take you through the understanding of fuel trims and how it can be useful in diagnosis."
featured = "/img/2018/05/lll.jpg"
featuredalt = ""
featuredpath = ""
linktitle = ""
tags = []
title = "Understanding Fuel Trims"
type = "post"

+++
Considering the strict emission norms into account there are so many things an engine control module must perform to Catalytic converters will work good and in an efficient manner only when the air-fuel ratio oscillates from slightly rich to slightly lean with an average as stoichiometric. Before getting things in detail a basic knowledge in some these following pieces of stuff are vital.

### Operating voltage of lambda sensors

![](/img/2018/06/3.jpg)

Lambda sensors operate between 0.1 V and 0.9 V averaging 0.45 V at the stoichiometric ratio in which the catalytic converters work fine. Oxygen sensors produce less voltage say near 0.1 or 0.2 V in the lean conditions and produces a voltage of 0.8 to 0.9 at rich conditions. From the voltage produced ECM gets to know the mixture information on Air fuel ratio.

### Open Loop and closed loop

The ECM operates the engine follows open loop fueling in the time of starting the engine till it reaches certain operating temperature and in the time of wide open throttle. Since the engine demands a rich air-fuel ratio in these situations, it's undesirable to use a closed loop fueling which is capable of providing an only stoichiometric air-fuel ratio. An open loop just follows the fueling tables which are prescribed in the Performance MAPs and does not calibrate fueling based on the output of lambda sensors.

Once the engine reaches its operating temperature the ECM switches to closed loop fueling strategy. In which the engine is forced to run in stoichiometric condition by using Short term fuel trims (STFT) and Long-term fuel trims (LTFT) from the information gathered from lambda sensors.

Now its time to get to know about STFT and LTFT in detail and to have some knowledge on diagnosis from these fuel trims.

### SHORT TERM FUEL TRIM (STFT)

![](/img/2018/06/2.jpg)

As the name indicates this is a short-term calibration of fueling. Whenever the AFR goes out of stoichiometric ratio the fuel trim changes the values in percentage. If the AFR is lean than stoichiometric ratio then a positive percentage of fuel trim is provided so the injectors extend the period of opening to enrich the fuel. Likewise when the AFR is rich than stoichiometric a negative value is provided in order to lean out the mixture. This is an instantaneous change for the change in the values of lambda sensor. A value of  +/- 5% is absolutely normal for short term fuel trims.

### LONG TERM FUEL TRIM (LTFT)

![](/img/2018/06/1.jpg)

Long-term fuel trims are made in order to neutralize the STFT. As a change is made in the STFT and if this is continued for a certain amount of time the changes are made to LTFT so that the trim made in STFT goes to zero again. For example, consider STFT has a value of 3% for a certain amount of time then this value is changed to 3% in LTFT so there is no more need to change in STFT. Both STFT and LTFT has a certain limit after which there is no more room for additional calibration.

### DIAGNOSIS USING LTFT AND STFT

This blog will take us to the strategy involved in the diagnosis of engine problems with two common examples

#### 1. VACUUM LEAK DOWNSTREAM MAF SENSOR

![](/img/2018/05/vacuum leak.jpg)

If there is a vacuum leak downstream of the MAF sensor there is an excess of air entering the engine which is not metered. So a vacuum leak will make the engine run leaner. In order to compensate this lean condition, a positive fuel trim is made in STFT and is followed by LTFT. Since at idling the throttle valve is almost closed the vacuum leak plays a huge difference in air metering whereas in WOT conditions the effect of vacuum leak is not so great since the pressure in the intake manifold is almost atmospheric pressure. From this, we can speculate that there is a huge value of LTFT in idling and this number decreases and get close to zero as the throttle valve is opened.

#### 2. INSUFFICIENT FUEL SUPPLY

![](/img/2018/05/FUEL PUMP.jpg)

Assume that there is an improper fuel pump which could not meet the fuel requirements so there is a prevailing lean condition. So the lean condition is compensated with a positive fuel trim. When idling the effect of the fuel pump is not so great compared to partial and full load conditions. This means the fuel trim is minimum in the lower load ranges and increases with the increase in the load.