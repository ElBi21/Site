---
title: "🎯 How to (not) write a thesis: Part 1"
date: 2025-03-23
draft: true
---

If you graduated from university, chances are that you wrote your own thesis: it could've been over a topic that you enjoyed, or perhaps about that intership that you did back in the days. Either way, you **had to do it**. Now, I'm finally at the end of my third year, and this means that, if all goes well, I'll graduate too within the next solar year, and I'll have to write (and defend) **my own thesis** in order to get the well acclaimed _piece-of-paper-which-should-attest-that-you-are-smart_ (yes, we can digress whether that's the case or not, but we'll leave it at another time).

While for some people writing the thesis seems like an hassle, I have been weirdly looking forward to it. Might it be because of some egocentric complex? Perhaps. I have to do it anyway, so why not getting some enjoyment from it, right?

I also had the idea of documenting this process step by step: while I may not be a good writer, I am intrigued by the idea of having a sort of "log" that tells how I did... what I'll do.

## 1) Choosing the topic

In ACSAI, the thesis can be either made about a research project that the student carried out individually, or it can be a report about an external internship. Either way, there is a 3 months time span in which you must do all the work (so building the project & writing the report). I didn't really care to do it externally, and since the beginning of the course I wanted to do it internally with a professor. Now, being the course about AIs one would expect that I'd do something among those lines, right? Well... _not really_.

I am not that much intrigued by AIs, especially after three years of them (actually, just two, but that doesn't matter). I got interested very early in the field of **low-level CS**: understanding how a CPU works, working with raw resources, etc... (this is also the reason why I use now [EndeavourOS](https://endeavouros.com/) on a daily basis btw!). But the turning point came when I took a specific course, called "**Programmazione di Sistemi ~~Embedded e~~ Multicore**" (literally translated, "_Programming of ~~embedded and~~ multicore systems_". And the stripes are there because the professor "renamed" the course at the very beginning. What a guy).

During that course I learned C and some of the most used libraries for building parallel code: **MPI**, **PThreads**, **OpenMP** and **CUDA**. That was one of the most interesting courses I ever took during my three years of universities, and that's the reason why, after a while, I asked the professor to carry out the thesis project with him. And while the project did shift from what it was originally meant to be (the very first idea was to do a library of collectives between NVIDIA BlueField DPUs, but... we lacked the DPUs), I am quite content with the final idea. but what is that about?

Have you ever heard of [Cerebras](https://www.cerebras.ai/)? You know, that company that decided to take an entire silicon wafer and use it as a gargantuous "CPU"? Well, it's about them, or more specifically, about their Wafer Scale Engines (WSEs).

<!--{{< figure src="/img/cerebras.png" caption="A photo of the Cerebras WSE" >}}-->