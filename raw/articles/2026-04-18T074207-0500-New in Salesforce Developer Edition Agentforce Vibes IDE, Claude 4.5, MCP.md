---
title: "New in Salesforce Developer Edition: Agentforce Vibes IDE, Claude 4.5, MCP"
source: "https://developer.salesforce.com/blogs/2026/04/new-developer-edition-agentforce-vibes-claude-mcp"
author:
  - "[[Salesforce]]"
published: 2026-04-15
created: 2026-04-18
description: "Salesforce Developer Edition now includes Agentforce Vibes IDE, Claude Sonnet 4.5, and Hosted MCP Servers – all free. Here’s what’s new."
tags:
  - "clippings"
---
The free Salesforce Developer Edition just got a major upgrade today at TDX in April 2026, alongside other platforms like [Agent Fabric](https://www.salesforce.com/news/stories/agent-fabric-control-plane-announcement/). Starting today, every Developer Edition org includes access to [Agentforce Vibes IDE](https://developer.salesforce.com/docs/platform/code-builder/guide/codebuilder-overview.html), [Agentforce Vibes](https://www.salesforce.com/agentforce/developers/vibe-coding/) with Claude Sonnet 4.5 as the default coding model, and [Salesforce Hosted MCP Servers](https://help.salesforce.com/s/articleView?id=platform.hosted_mcp_servers.htm&type=5), all at no cost.

If you’ve been waiting for a reason to spin up a new Developer Edition org (or dust off your existing one), this is it. Since [we launched the new Developer Edition in March](https://developer.salesforce.com/blogs/2025/03/introducing-the-new-salesforce-developer-edition-now-with-agentforce-and-data-cloud) with Agentforce and Data 360 (formerly Data Cloud), these three additions turn it into a full AI development environment.

## Agentforce Vibes IDE is now available in Developer Edition

Agentforce Vibes IDE is a **browser-based, cloud-hosted Visual Studio Code (VS Code) environment** that launches directly from your org’s Setup menu. Previously known as Code Builder, it gives you a fully authenticated, org-aware development environment with no local installation required.

![Agentforce Vibes IDE open in the browser](https://d259t2jj6zp7qm.cloudfront.net/images/20260414144519/image1_bd4d9d-e1776199536496.png?w=1000)

Agentforce Vibes IDE open in the browser

Open Setup, click Agentforce Vibes, and within moments you’re working in a full VS Code editor with Salesforce Extensions, [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli), and GitHub integration preconfigured. Your org’s metadata loads automatically into an SFDX project. No manual authentication, no CLI setup, no extension hunting.

From there you can develop and deploy Apex, Lightning Web Components (LWCs), and flows; run tests against your org; use the integrated terminal; and access Agentforce Vibes (the agentic coding experience) directly from the sidebar.

## Agentforce Vibes with Claude Sonnet 4.5: vibe coding for Salesforce

Agentforce Vibes is the Salesforce enterprise vibe coding capability, and it’s now available in Developer Edition with **Claude Sonnet 4.5 as the default model**. It understands your Salesforce org’s metadata, schema, and existing code patterns. When you tell it to “create a trigger that prevents duplicate Accounts based on email,” for example, it reads your actual org structure first. No hallucinated field names.

The coding agent comes with two modes:

- **Plan mode:** Analyzes your org, clarifies requirements, and generates an implementation plan before writing code.
- **Act mode:** Creates and modifies Apex classes, LWCs, triggers, and test classes based on your natural language instructions.

Agentforce Vibes comes with predefined agent skills, and integrates with Salesforce ALM tools like [Code Analyzer](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/code-analyzer.html), and [DevOps Center](https://help.salesforce.com/s/articleView?id=platform.devops_center_overview.htm&type=5). It does not deploy anything unless you explicitly ask; by default, it modifies local project files you review first.

### Usage limits for Developer Edition

- **110 requests per month** with Claude Sonnet 4.5
- **1.5 million tokens per month**
- **Monthly refresh through May 31, 2026** (allocation resets each month)
- **After May 31:** a one-time-only allocation of 110 requests / 1.5M tokens with no further refresh

You have about two months of recurring access to experiment and build, followed by a final allocation, if you start *now*. Use the monthly cycles to explore broadly; use the final allocation to finish what you’ve started. If you don’t start now, you’ll only get the final allocation.

**To stretch your requests,** use Plan mode before switching to Act mode, be specific in your prompts (for example, say “create an Apex before-insert trigger on Lead that checks for duplicate Email values” rather than “build something for leads”), and retrieve only the metadata relevant to your current task.

## Salesforce Hosted MCP Servers come to Developer Edition

Now available in Developer Edition, Salesforce Hosted MCP Servers provide a standardized way for external AI tools to connect to your Salesforce data.

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) is an open standard created by Anthropic that acts as a **universal interface between AI assistants and external data sources**. Configure one MCP server, and any MCP-compatible client (for example Claude Desktop, Cursor, or Claude Code) can interact with your Salesforce org.

**The following table shows how** Hosted MCP differs from DX MCP.

| **Dimension** | **DX MCP Server** | **Hosted MCP Server** |
| --- | --- | --- |
| Runs on | Your local machine | Salesforce infrastructure |
| Authentication | CLI credentials | OAuth 2.0 (per user) |
| Primary tools | 60+ dev tools (metadata, Apex testing, LWC) | sObject API access, invocable actions, flows |
| Use case | Development and deployment workflows | Data and logic access for external AI tools |
| Requires local CLI | Yes | No |

Hosted MCP respects your org’s security model: object and field-level security, sharing rules, and profiles all apply.

[Once connected](https://help.salesforce.com/s/articleView?id=platform.hosted_mcp_servers_setup.htm&type=5), you can query your Salesforce data through natural language in Claude Desktop, build Agentforce agents that interact with your data via MCP, and prototype AI-driven integrations before committing to a production implementation.

## How these three features work together

**Agentforce Vibes IDE** provides the development environment, **Agentforce Vibes with Claude Sonnet 4.5** provides the AI coding partner, and **Hosted MCP Servers** connect external AI tools to your org’s data. Each is useful independently, but together they create a complete AI-assisted development loop.

A practical workflow:

1. Launch Agentforce Vibes IDE from Setup.
2. Use Agentforce Vibes to scaffold an Apex class and an LWC.
3. Configure a Hosted MCP Server to let Claude Desktop query the data your component displays.
4. Iterate on the component with Vibes while validating the data layer through MCP.

That’s a full AI-assisted development loop running in a free Salesforce org.

## Sign up and start building

If you don’t have a Developer Edition org yet, [sign up here](https://developer.salesforce.com/signup). It’s free, doesn’t expire as long as you log in regularly, and now includes everything covered in this post.

If you already have a Developer Edition with Agentforce and Data 360, these features are gradually rolling out starting this week to existing environments. Navigate to Setup and search for “Agentforce Vibes” to get started. No additional enablement steps required.

## Developer Edition resources and documentation

- [Sign up for a free Developer Edition](https://developer.salesforce.com/signup)
- [Agentforce Developer Center](https://developer.salesforce.com/developer-centers/agentforce) – documentation, guides, and tutorials
- [Agentforce Vibes Workshop](https://developer.salesforce.com/workshops/agentforce-vibes-workshop/explore-agentforce-vibes/overview) – hands-on guided workshop
- [Salesforce Hosted MCP Server setup guide](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_mcp_server_eca.htm)
- [Salesforce DX MCP Server on GitHub](https://github.com/salesforcecli/mcp) – local MCP server with 60+ tools
- [Agentforce Vibes IDE release notes](https://github.com/forcedotcom/code-builder-feedback/blob/main/release-notes.md)

## About the Author

**René Winkelmeyer** leads the Developer Advocacy team at Salesforce. His team focuses on Agentforce, Data 360, and the Salesforce Platform. In his spare time, you might find him still coding on [GitHub](https://github.com/muenzpraeger). Follow René on [LinkedIn](https://www.linkedin.com/in/muenzpraeger/).