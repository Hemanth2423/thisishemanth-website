---
title: "Synthetic Personas"
date: 2026-04-20
description: "A lightweight research pipeline that tests whether AI personas can find product signals before they reach public reviews."
repo: "https://github.com/Hemanth2423/synthetic_personas"
---

## Problem

Product teams often learn about pain points after users have already built workarounds or started looking elsewhere. Interviews and review mining are useful, but they take time and mostly show problems that are already obvious.

## Core idea

Could synthetic AI personas act as an early research signal? The goal was not to replace real users. It was to see whether well-defined personas could surface the same problems quickly, cheaply, and with useful context about user behavior.

## Solution and architecture

The pipeline uses four Claude-powered personas with different Notion workflows. Each persona answers blind questions across offline access, integrations, and AI capabilities. A second model scores the responses, then the system compares the ranked signals with web data from Hacker News, G2, and the Play Store.

Each run makes 24 API calls: four personas, three domains, and two calls for each pair. The comparison uses Spearman's rank correlation to measure how closely persona priorities match real-world signals.

## Experiment and results

The personas found all three signals that the web research found. There were no missed web signals and no persona-only false positives. The ranking correlation was 0.50, below the target of 0.70, because the personas and web data disagreed on whether offline access or integrations mattered most.

That difference was useful. Personas highlighted the everyday workarounds that users may not write public reviews about. The result is a practical rule: use synthetic personas beside web research to spot emerging problems, while using real-world data to calibrate severity.
