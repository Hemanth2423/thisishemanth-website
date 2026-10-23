---
title: "PM Intelligence Agent"
date: 2026-04-10
description: "A research agent that turns scattered user feedback into a clear product brief and roadmap signals."
repo: "https://github.com/Hemanth2423/PM-research-agent-1"
---

## Problem

Product research can disappear into collecting links, reading repetitive comments, and debating which signals are real. The important work is deciding what to do next, not spending hours assembling the evidence.

## Core idea

The PM Intelligence Agent turns feedback from across the web into a focused product brief. It separates verified problems from early signals and noise, so a product team can spend its time on decisions.

## Solution and architecture

The agent runs in six phases: collection, research filtering, synthesis, validation, scoring, and reporting. It pulls feedback from Hacker News and can add Reddit, G2, and app-store reviews. Claude filters for relevant signals, groups pain points into themes, and checks themes against the product and competitor changelogs.

Before model calls, the pipeline removes exact and near-duplicate feedback. It scores themes with source coverage, engagement, recency, severity, and query intent. A human review gate appears before the final report so a PM can confirm the most important findings.

## Experiment and results

In the mock run, the improved pipeline collected 144 items, kept 24 relevant signals, and created 11 themes. Six themes reached the emerging-signal tier. The tool correctly kept all themes below the verified tier because the mock data only included one source type.

The key result was not just faster output. It was a report that explains confidence, flags when ranking methods disagree, and gives a PM a chance to apply judgment before a recommendation becomes a roadmap input.
