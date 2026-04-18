---
date: 2026-04-17
time: 00:00
title: Impromptu Zoom Meeting
source: fathom
type: meeting-transcript
attendees:
  - Mac Nosek
  - Andrew Porter
  - Travis Hickey
  - Obed
duration: 4
call_id: 138997478
fathom_link: https://fathom.video/calls/642090848
processed: 2026-04-18T14:00:00Z
tags:
  - meeting
  - fathom
---

## Summary

### [Loading product data from shared drive @ 0:00](https://fathom.video/calls/642090848?tab=summary&timestamp=0)

Andrew referenced a product item that needs to be loaded, and Mac confirmed he can load it from the R drive where all other documentation is stored. Andrew will provide a link to the file location.

### [Pre-load sync on metadata mapping @ 0:20](https://fathom.video/calls/642090848?tab=summary&timestamp=20)

Andrew proposed syncing with Mac before the data load to align on which metadata fields should be mapped to the product table. This coordination is needed to ensure proper data structure during the import process.

### [Data quality issues with source sheet @ 0:35](https://fathom.video/calls/642090848?tab=summary&timestamp=35)

The team discovered significant problems with the current product sheet: Travis attempted to use Claude to merge approximately 70 additional products with the existing sheet, but the AI tool failed due to confusion around commercial evaluation products. Upon inspection, they found the source file itself contained errors—for example, the "drive-by commercial sales" product had incorrect tier and day values (5 days vs. 10 days). Andrew decided to disregard this sheet for now pending corrections.

### [Obtaining corrected source data @ 1:52](https://fathom.video/calls/642090848?tab=summary&timestamp=112)

Travis will retrieve a new, corrected sheet from Blake. Andrew clarified that the metadata columns in the source spreadsheet are primarily for internal understanding and mapping purposes, helping the team understand where products fit within their system architecture.

### [Defining required product table fields @ 2:22](https://fathom.video/calls/642090848?tab=summary&timestamp=142)

Andrew outlined the required fields for the product table in the CPI/sales system: product name, product code, product family, SKU, and list price. The team confirmed that product configuration data (discounting, pricing rules) will not be imported, and Travis noted that list price will be included in a payload update arriving next week. Travis captured a screenshot of these requirements for reference.

### [Worksheet naming and lookup configuration @ 3:26](https://fathom.video/calls/642090848?tab=summary&timestamp=206)

Andrew requested two changes: renaming the "enviro cost worksheet" to simply "cost worksheet" and adding a lookup to site. Mac confirmed he can implement these modifications.

### [LWC development progress and close @ 3:44](https://fathom.video/calls/642090848?tab=summary&timestamp=224)

Mac reported that he has been making progress on Lightning Web Components (LWCs) development. He needed to leave for another meeting but indicated the team would sync up later. The meeting concluded with brief thanks from Andrew and Travis.

## Transcript

[00:00](https://fathom.video/calls/642090848?timestamp=0) Andrew Porter: So, one of the, well, at least one of the product items.
[00:02](https://fathom.video/calls/642090848?timestamp=2) Mac Nosek: I mean, I can get this loaded. That's not a problem. can you, is this an R drive?
[00:07](https://fathom.video/calls/642090848?timestamp=7) Andrew Porter: Yes, sir. It's in the, it's in the same folder that the, all the other docs are.
[00:11](https://fathom.video/calls/642090848?timestamp=11) Mac Nosek: Alrighty.
[00:12](https://fathom.video/calls/642090848?timestamp=12) Andrew Porter: I'll slap a link in.
[00:15](https://fathom.video/calls/642090848?timestamp=15) Mac Nosek: No problemo. I can get this loaded.
[00:20](https://fathom.video/calls/642090848?timestamp=20) Andrew Porter: there you go. and Mac, you and I can sync up, ahead of the load just to. line up. I think there's some of the stuff that we're probably going to want to put, like, from this metadata.
[00:34](https://fathom.video/calls/642090848?timestamp=34) Mac Nosek: .
[00:35](https://fathom.video/calls/642090848?timestamp=35) Andrew Porter: On to the product, just for what we've got right now. and then, Travis, right, anything that's in this sheet that we've been working with, but not in this sheet, the additional, like, 70 or so products in here, what should we, because part of this, this has kind of been our source of truth for mapping to, okay, this product comes in, and here's the stuff that we need to, like, the objects that should be created essentially from, from.
[01:02](https://fathom.video/calls/642090848?timestamp=62) Travis Hickey: . This is what I was trying to use. I was trying to get Claude to merge these and it just got super confused about all the commercial eval products. Those drive-by interior CSI. It did, it did a terrible job of wrapping these all together.
[01:18](https://fathom.video/calls/642090848?timestamp=78) Andrew Porter: Come on, Claude.
[01:19](https://fathom.video/calls/642090848?timestamp=79) Travis Hickey: it was a terrible job. I'm not ashamed to say it. Actually, this doesn't even look right. Wait a second. Go back. Maybe the problem was the source file was wrong. Look at that. Drive, the first one, drive-by, commercial sales, it's a tier one, five days on the left and ten days on the right. They're all wrong.
[01:39](https://fathom.video/calls/642090848?timestamp=99) Andrew Porter: it looks like these two are correct, maybe. Oh, no. seven days just doesn't have a thing. Okay, so maybe we'll ignore this sheet for right now.
[01:52](https://fathom.video/calls/642090848?timestamp=112) Travis Hickey: let me get a new one from Blake. And I'll try to, but what, what do you need? I guess that's my, from, from the source of truth website, web, spreadsheet that we were looking at. Was there some value in some of the metadata columns to the right that you, that you want to try to capture in the new spreadsheet?
[02:10](https://fathom.video/calls/642090848?timestamp=130) Andrew Porter: The value right now for the, for these additional fields is, is, is just for us, right? It's really for like. Mapping to our understanding of where the.
[02:21](https://fathom.video/calls/642090848?timestamp=141) Travis Hickey: Just to understand it, okay.
[02:22](https://fathom.video/calls/642090848?timestamp=142) Andrew Porter: so, what we'll need on the product table, specific, I can't remember the exact required fields, sales for CPI, product, I guess I'm logged in, I can just quickly. There's a couple of required fields, I remember, but we'll, like, this, like, we're not going to expect any of the, like, product config. To come over, right? Like, discounting or pricing, right? Things like that. Product name, maybe list price, right?
[02:59](https://fathom.video/calls/642090848?timestamp=179) Travis Hickey: I think we've got list price coming over in the payload or in the update to the payload that we'll get next week.
[03:05](https://fathom.video/calls/642090848?timestamp=185) Andrew Porter: Product code, product family, product name, SKU if you got it.
[03:10](https://fathom.video/calls/642090848?timestamp=190) Travis Hickey: Let me, let me just grab a screenshot of that real quick.
[03:26](https://fathom.video/calls/642090848?timestamp=206) Andrew Porter: And then, and then I do think, one last thing, Obed and Mac, I think we should change the name of the enviro cost worksheet to cost worksheet, and then add a lookup to site.
[03:41](https://fathom.video/calls/642090848?timestamp=221) Mac Nosek: Got it.
[03:43](https://fathom.video/calls/642090848?timestamp=223) Andrew Porter: Obed, you got something to grab?
[03:44](https://fathom.video/calls/642090848?timestamp=224) Mac Nosek: I can grab that. And then I have to drop, but.
[03:48](https://fathom.video/calls/642090848?timestamp=228) Andrew Porter: How dare you, Mac?
[03:50](https://fathom.video/calls/642090848?timestamp=230) Mac Nosek: I know. Another call. we'll chat later, but I started working on those LWCs, so those are coming along. Thanks, everyone. Have a great weekend.
[04:00](https://fathom.video/calls/642090848?timestamp=240) Travis Hickey: Thanks, Mac.
[04:01](https://fathom.video/calls/642090848?timestamp=241) Andrew Porter: Thank you, Mac.
