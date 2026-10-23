---
title: "AccessStream"
date: 2026-05-10
description: "A live sign-language layer for sports streams, built so Deaf and hard-of-hearing fans can follow the action as it happens."
repo: "https://github.com/Hemanth2423/CalHacks26"
---

## Problem

Live sports are built around shared emotion. For Deaf and hard-of-hearing fans, captions can arrive late and miss the pace and feeling of live commentary. A separate broadcast is not a practical answer. The experience needs to work where people already watch.

## Core idea

AccessStream adds a sign-language layer directly over a live video stream. The viewer keeps the same broadcast and gets a movable signing overlay that stays out of the play.

## Solution and architecture

The system captures audio from a live browser tab or stream and sends it to Deepgram for speech-to-text. Claude then turns each completed thought into sign-language glosses. A WLASL lookup checks that a matching ASL clip exists before it is played.

A FastAPI and WebSocket service sends each clip to the browser overlay in real time. The overlay can be moved or resized by the viewer. The product design makes room for ASL, BSL, French, Chinese, and Japanese sign languages. The working live clip pipeline currently supports ASL.

## Experiment and results

The demo used a live YouTube sports stream and showed the full flow from commentary to signing overlay. In the test setup, transcription took under two seconds and the language step took under three seconds. Cached clips could play in under one second.

I also built a validation agent that generates match scenarios and scores translations for grammar, meaning, completeness, gloss validity, and real-time fluency. This made quality visible instead of treating it as a guess.
