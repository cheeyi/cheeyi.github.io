---
title: "Recent Android Dev Learnings"
pubDate: 2019-05-18T19:21:00+08:00
categories: notes
description: "Key learnings from working on a large-scale Android project: Kotlin coroutines, sealed classes, MVVM architecture, Dagger 2, and Retrofit."
---

I've had the privilege recently to work on a client project that was very much like my past experience of working at Expedia—tons of engineers, an actual QA process, sprint-based development schedules and the works. I'm a self-learned Android developer early 2017 who came from the iOS development world, so this is my first experience working on such a big and established production codebase. Here are some of the key learnings I got out of this project.

## Kotlin

I love Swift, so it goes without saying that I absolutely love Kotlin as well, and this client's Android codebase is almost 100% Kotlin which excited me the moment I heard about it. However, unlike Swift, there were a lot of inner workings of the Kotlin programming language that I wasn't familiar with. Sure I know how to write Kotlin code that compiles—anyone can, really, if you know how to write Java you can write Kotlin code that works kinda like Java—but I never thought of my Kotlin code as being _idiomatic_ Kotlin until a few days into the project. A quick summary of some new Kotlin things I learned:

### Sealed classes

I think of sealed classes as enum classes on steroids. You can have a few different "types" or "children" (subclasses, really) of a sealed class that can each carry different amounts of information with them, unlike members of an enum class which may only be backed by values of a single type.

### Coroutines

Kotlin coroutines went stable not very long ago, and is something I've always wanted to try and learn. My initial attempt at learning coroutines before this project kicked off didn't go so well, I was quickly overwhelmed by the official Kotlin documentation that already assumes some understanding of what coroutines fundamentally are, because well I had no idea of the problem coroutines are trying to solve.

The second time around I was more prepared, also because I've looked at a few usages in the client's codebase to give me a vague understanding that coroutines are basically like writing callback-based code but without having to implement callbacks. It allows us to reason with code in a slightly more sane manner, because you aren't always trying to follow callbacks around the source file, and it opened up a world of possibility for me that I would've thought possible. It did require a different perspective of looking at things, especially how one understands and reasons with concurrency and asynchronicity. Once I did that, everything started to click from there on and I went on to learn more advanced concepts like `Channel` and `Flow`.

In case anyone wants to learn more about how Kotlin coroutines work specifically in the context of Android development, here's a pretty good [**video from Google I/O 2019**](https://youtu.be/BOHK_w09pVA) that I recommend.

## App Architecture

We at Punch Through started using the Google-recommended MVVM architecture and things like `LiveData` to bind data between `Activity` and `ViewModel` objects, so it was a welcome sight that this client is also fully invested in this architectural pattern. What truly blew my mind however, is how they were able to cleanly split their app up into 7–8 modules, with each module being solely responsible for their own things and most modules don't have dependencies from other modules—they're self-sustainable—aside from the `app` module which requires all the other modules to build.

I've always been a [**Dagger 2**](https://google.github.io/dagger/android.html) holdout because the iOS dev community as a whole is allergic to third party dependencies in general, but the way Dagger 2 sped up development for this project really opened me up to using Dagger 2 for dependency injection, especially when you need a dependency 4 or 5 calling classes away and don't want to deal with passing the object 4 or 5 calls down. Also, imagine a singleton that you keep having to use a `getInstance(Context)` on to get a handle on it; with Dagger 2 you can get away with annotating the provider with `@Singleton` and you never have to manage making a Kotlin `object` or a Java singleton ever again, as long as you always use `@Inject` to get a hold of that singleton class you want.

## Retrofit

This was my first time using the [**Retrofit**](http://square.github.io/retrofit/) networking library and boy does it make network calls a breeze. Combined with the [**Moshi converter**](https://github.com/square/retrofit/tree/master/retrofit-converters/moshi), you can generate interfaces for your API calls and Retrofit and Moshi will generate all the code you need in order to actually perform the network calls.

## Build Flavors

There are two variants of the app that originate from the same code base, and rather than using `SharedPreferences` checks to differentiate between the two, the code base used build flavors to split code execution branches as well as separate layout XMLs and other source files that only need to exist for one variant and not the other. Simply brilliant.

## Conclusion

As developers we have to be willing to keep learning in order to grow, both professionally and personally. My reluctance to pick up coroutines when it first became stable proved that I was initially resistant to that new tech, and this is something I'll strive to improve going forward. I look forward to a lifetime of learning and self-improvement.
