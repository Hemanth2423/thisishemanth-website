---
title: "Threat Relay"
date: 2026-03-25
description: "An agentic security assessment console that makes testing workflows visible, explainable, and easier to act on."
repo: "https://github.com/Hemanth2423/threat_relay_final"
---

## Problem

Security scanners often return a flat list of findings. That leaves the operator with two hard questions: how did the tool reach this conclusion, and what should happen next?

## Core idea

Threat Relay treats security testing as a live decision workflow. It shows specialist agents at work, records their handoffs, and turns technical findings into clear impact statements for the person reviewing the scan.

## Solution and architecture

The console starts with a target URL and runs reconnaissance to find same-origin links and forms. Dedicated checks look for reflected XSS, SQL injection, information disclosure, and business-logic issues such as IDOR or redirect abuse.

Codex-powered subagents run these checks in parallel. A live operator view shows scan telemetry and agent handoffs as they happen. Findings are then collected into a final report with summaries that are easier for a security team to review and prioritize.

## Experiment and results

I tested the product through its local demo target and used the live log to verify that the scan flow, agent handoffs, and finding summaries were all visible in one place. The useful outcome was not only detection. It was the ability to trace a finding from the test that produced it to the final explanation.

The project shows how agent workflows can be made more trustworthy: keep the operator in the loop, show the work as it happens, and make every result easier to audit.
