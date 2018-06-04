+++
author = "SANJIV RAJ R"
categories = [""]
date = "2018-05-30T12:22:50+00:00"
description = "A perfect ignition and injection characteristics with regards to engine RPM and load alone is not sufficient in making a precise tune to the engine. In making the engine run efficiently in all operating conditions, its necessary to bring on some auxiliary maps on ignition and injection concerning different parameters. Having a proper tune on the primary tables such as fuel and ignition is necessary before entering to auxiliary maps."
draft = true
featured = "/img/2018/05/Bisimoto-porsche-AEM-engine-management.jpg"
featuredalt = ""
featuredpath = ""
linktitle = ""
tags = []
title = "7 Auxiliary maps for optimal tuning"
type = "post"

+++
### 1. Injection compensation for air temperature

### ![](/img/2018/06/1111.jpg)

The density of air decreases as there is an increase in temperature. So the fuel delivered must be less at higher intake temperatures and vice versa. Since at higher temperatures the air tends to move faster the compensation of injection must be less than half of the density correction. Compensation must be done for different load ranges namely Idle or Low load, Partial Load and High Load conditions. It's recommended using a slightly less or no reduction of fuel at higher load conditions since having a rich mixture can reduce the peak temperature in the combustion chamber.

### 2. Ignition correction for air temperature

![](/img/2018/06/2222.jpg)

Since the higher temperature of the air is likely to have more chance of producing knock its fine to sacrifice some torque by retarding the ignition timing at high intake air temperature. And it is not really necessary to advance the ignition timing at lower intake air temperatures.

### 3. Injection compensation for engine coolant temperature

![](/img/2018/06/3333.jpg)

When the engine is cold or at low engine coolant temperature, the fuel gets deposited on the inlet port so in order to overcome this its necessary to inject more fuel into the combustion chamber. During low engine temperatures, the three-way catalytic converter cannot operate efficiently and so it's vital to bring them to operating temperature very quickly. Normally most catalytic converters are effective only after the temperature rises above 250 degrees Celsius.

### 4. Ignition correction for engine coolant temperature

![](/img/2018/06/4444.jpg)

When the engine is very hot or at a very high engine coolant temperature, the tendency of knocking increases especially at higher loads. So its necessary to retard timing at higher water temperature. Peak exhaust temperature may also damage the exhaust components so it's very much essential to calibrate the engine by considering engine coolant temperature.

### 5. Injection timing depending on supply voltage

Mostly high impedance injectors are used by OEM as the current flow remain low so the driver circuit remains cool which increases durability. The driver current is normally a square wave with different pulse width commonly known as PWM signals. There is always a time delay between the actuation of driver current and the opening of injector nozzle which is known as the opening delay. Since due to some amount of inductance the injector is opened even after the driver current as stopped which is known as the closing delay. The difference between the opening delay and closed delay is known as the injector offset. This injector offset increases with the decrease in battery voltage. This offset may not seem to be a significant figure but it plays a vital role at low engine load and RPM..

### 6. Ignition Dwell time depending on Supply Voltage

The ignition dwell time is the amount of time spent to charge the coils before discharging at spark plugs. Having a high ignition dwell time within the design limits will produce a strong spark which is good for combustion. On downside having a too high dwell time may lead to the melting of the coil housing and having a very low dwell time leads to a weak spark which can lead to misfire conditions. The current in the coil is dependent on the supply voltage and time its actuated. It's important to calibrate ignition dwell time with regards to the supply voltage.

### 7. Acceleration Enrichment

The Volumetric efficiency mapping holds good for static and steady-state conditions. When there is a tip-in condition i.e During a sudden acceleration, The rider blips the throttle, the throttle valve opens immediately causing more air to enter into the manifolds crumbling away from the fuel film in port injection engines. This makes the engine to run lean momentarily which causes a loss of torque. A rider opening the throttle needs more torque so this loss in torque can be contradicting. So some Enrichment mappings are done by considering the TPS (Throttle position) rate and MAP ( Manifold Absolute Pressure) rate and adds excess fuel to compensate the lean AFR and so improving drivability. This process of adding additional fuel in the perfect instance where it is most needed is known as acceleration enrichment.

### CONCLUSION

The above mentioned auxiliary maps are important in consideration to improve vehicle drivability. Before calibrating these auxiliary maps its necessary to fine tune the engine's fuel maps and ignition maps.

**P.S** : The values in the tables are for underg