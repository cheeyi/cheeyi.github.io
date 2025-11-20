---
title: "A Note On Data Endianness — iOS Edition"
pubDate: 2018-06-18T20:33:00+08:00
categories: notes
description: "Understanding Big Endian vs Little Endian and dealing with byte order in iOS development."
---

Seeing as my work often involves writing/parsing raw outgoing/incoming bytes between mobile apps and Bluetooth firmware, one would think I'd be well-versed in data endianness by now. Well, today I got bitten in the butt by using the wrong endianness when parsing incoming data from a BLE firmware, and since this isn't the first time (nor will it likely be the last), I figured I should write this down just so I'd remember it in the future. Of course, my understanding can be very much flawed, please feel free to hit me up on **[Twitter](https://twitter.com/cheeyi)** and correct me!

## Big vs. Little Endian

If we think of a very simplified mapping of memory as going from 0x01 to 0xFF, and if we have a 3-byte data of `0x123456` to store from memory 0x01 to 0x03:

- A Big Endian system would store the bytes as `[0x12, 0x34, 0x56]`. This is the format I personally find intuitive to understand.
- A Little Endian system would store the bytes as `[0x56, 0x34, 0x12]`.

## Dealing with endianness on iOS

On iOS, the OS itself is Little Endian, but that has little to do with how the Data (or NSData) class structures bytes. In my experience, Data is simply a sequence of bytes read from left to right, so `0x123456` is simply `[0x12, 0x34, 0x56]`, and it is up to the developer to swap the byte endianness is needed. Here's where the **[Core Foundation byte-order utility functions](https://developer.apple.com/documentation/corefoundation/byte_order_utilities)** come in.

Say we want to send a value of `0x123456` to a firmware that expects the value in Little Endian, I personally first declare the array of Data in the most human-readable way possible, i.e. in Big Endian, before sending it out to the firmware:

```swift
let data: [UInt8] = [0x12, 0x34, 0x56]
firmwareHandle.send(bytes: CFSwapInt32(data))
```

This post is very much iOS specific, but I'll try to put together a short post on Android byte parsing and my ways of dealing with data endianness there as well.
