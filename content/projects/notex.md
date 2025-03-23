---
title: NoTeX
description: 📜 A custom LaTeX template for taking notes 
layout: "project"
---

{{< katex >}}

<div class="project-info-container">
    <button class="project-gh-link" onclick="location.href='https://github.com/ElBi21/NoTeX'">
        <img src="/icons/github-white.svg" width="30%" style="margin-top: 0px;">
        <p class="project-gh-par">Check the project on GitHub</p>
    </button>
    <div class="project-tools-container">
        <p style="margin: 0 8px 10px 8px; font-weight: 400; font-size: normal;">The tools used in this project</p>
        <div class="project-tools">
            {{< proj-tool tool="latex" percent="100" >}}
        </div>
    </div>
</div>

## What is NoTeX?

**NoTeX** is a \\( \LaTeX \\) template that I made for my university notes. It started as an enormous collection of files (which often led to some errors), but now it shrank down to a more usable class. It's minimalistic, but still tries to be pleasing to the eye. You can here see some examples of how NoTeX looks on some real notes:

<div class="scroll_gallery">
    {{< gallery-item image="notex-preview-title.png" >}}
    {{< gallery-item image="notex-preview-toc.png" >}}
    {{< gallery-item image="notex-preview-middle-1.png" >}}
    {{< gallery-item image="notex-preview-middle-2.png" >}}
    {{< gallery-item image="notex-preview-middle-3.png" >}}
    {{< gallery-item image="notex-preview-middle-4.png" >}}
    {{< gallery-item image="notex-preview-middle-5.png" >}}
    {{< gallery-item image="notex-preview-middle-6.png" >}}
</div>

## Why does this project exist?

I wasn't satisfied with what other writing softwares could offer me for making my university notes look both good and fruible. I wanted something that was easy to use and that wouldn't require me ages to style, but more importantly that wouldn't get messed up in the future by some major software update. Moreover, I didn't want to pay for any software: I like the philosophy of FOSS, so I wanted to keep it freely available to everyone that has a computer. 

\\( \LaTeX \\) represented, at that time, the best option for me, and it still is today. What you saw in the slideshow before is not just some random screenshots, prepared for presenting the project: those screenshots are taken directly from my notes. So if they do look good to you, then I will call it a success