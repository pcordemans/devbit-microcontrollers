---
title: Timers
---

# Timers

Every microcontroller has timer peripherals. Timers are used to generate precision timing events, which do not involve the processor. In order to achieve this, interrupts are used.

## Basic Timer

Timers are hardware peripherals in a microcontroller which increment an internal value at a given input signal.

Timers have three functions:

1. Use the timer as an internal clock to time an activity, such as delaying or a time-triggered event. Pulse-Width Modulation (PWM) control is such an application.
1. Capture the activity of an external signal, i.e. how long does it take for a given signal to change under certain conditions. 
1. Counting the activity of an external signal, e.g. how many pulses can be counted in a given time-frame.

### Components of a timer

In essence, timers consist of a count register, prescaler and match register.

* The count register represents the internal value of the timer, which is incremented or sometimes decremented.
* The prescaler is a divider before the count register. A prescaler combined with the count register, increases the range of the timer. For instance, given a 16-bit count register, values up to 2^16 can be represented. Adding a 16-bit prescaler increases the range of the timer to 2^32.
* The match register sets the threshold value of the timer. When the count register reaches the match value, an event is generated.

:::warning
The processor can update the match value asynchronously from the timer, even when the timer is running. In order to avoid any glitches, a shadow register is used to store the value until the actual match register can be safely updated with a new value.
:::

![Timer basic block schema](./assets/timer.png)

:::tip
Some timers do not have a match register. Rather, they decrement the count register and upon reaching the value 0, an event is generated.
:::

## Interrupts
