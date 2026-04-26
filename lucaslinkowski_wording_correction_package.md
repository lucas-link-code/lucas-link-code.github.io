# lucas-link-code.github.io wording correction package

This package is for the repository:

lucas-link-code/lucas-link-code.github.io

Purpose:
Review and improve wording only.
Do not redesign the site.
Do not change layout, CSS, JS, metadata, routing, support link wording, or site structure.
Do not change the footer support link text. Leave "Support me" as it is.
Avoid em dashes and avoid adding new stylistic dash usage where it is not required by existing filenames or technical terms.

This package covers:
1. File by file wording correction priorities
2. Specific wording corrections
3. Suggested replacement text
4. Implementation boundaries for an editing agent

No repository changes have been made. This is a review and implementation package only.

## Files in scope

- index.html
- blog.html
- support.html
- blog/mcp-server-malware-traffic-analysis.html
- blog/cognitive-induction-prompting.html
- blog/weaponizing-web-lures-against-agentic-ai.html
- blog/detecting-ai-prompt-injection-in-the-wild.html

gallery.html does not require meaningful wording changes.

## Priority order

1. blog/detecting-ai-prompt-injection-in-the-wild.html
2. index.html
3. blog/weaponizing-web-lures-against-agentic-ai.html
4. blog/cognitive-induction-prompting.html
5. blog/mcp-server-malware-traffic-analysis.html
6. blog.html
7. support.html

---

# 1. index.html

## Goal

Keep the same positioning and meaning, but improve grammar, polish, sentence flow, and consistency.

## Problems to fix

Current homepage About copy contains:
- missing articles
- inconsistent phrasing
- spelling issues
- awkward compression
- missing hyphenation in standard compound modifiers
- small punctuation issues

## Suggested replacement copy

### About paragraph 1

Replace the current first About paragraph with:

I am part of a Malware Defense operations team at a major global institution. My day to day work involves reverse engineering malware, building detection rules, threat hunting, and creating automation. I am particularly interested in how GenAI tools will reshape security operations over time. In my personal time, I follow the latest developments in GenAI and LLM technology, along with the threats emerging around them.

### About paragraph 2

Replace the current second About paragraph with:

I specialise in malware analysis across both Windows and Linux environments. I have built and deployed YARA rules and EKFiddle detection rules for off network analysis and sandbox systems, and I have proactively processed thousands of indicators of compromise. I also research broader industry threats such as ClickFix, ClearFake, and npm supply chain attacks affecting public package repositories.

### About paragraph 3

Replace the current third About paragraph with:

I believe AI will reshape cybersecurity, both in offensive capability and in the defensive challenges organisations will face. Outside my day to day work, I have built MCP integrated tools that connect large language models to traffic analysis platforms. In my own time, I am preparing for an AI augmented future. Based in Wales and working from Chester, I bring the same intensity to mentoring analysts and sharing knowledge as I do to dissecting binaries.

### Beyond the Screen paragraph

Replace the current Beyond the Screen paragraph with:

I am interested in computer science, processor architecture, quantum physics, neuroscience, LLM design, GenAI technology stacks, and assembly level debugging. I am particularly inspired by the work of Brian Kernighan, Mark Russinovich, Eric Zimmermann, Didier Stevens, and Dennis Ritchie.

## Notes

- Keep the independence disclaimer exactly as it is unless a small punctuation cleanup is required.
- Do not change positioning or claims materially.
- Keep employer references general, not specific.

---

# 2. blog.html

## Goal

Make only minor wording improvements. Do not change structure, filters, or support link wording.

## Suggested corrections

### Blog subtitle

Current:
Technical analysis, threat research, reflections, and thoughts on the evolving cybersecurity landscape.

Suggested:
Technical analysis, threat research, and reflections on the evolving cybersecurity landscape.

### Blog card description

Current:
EKFiddle rules and UrlScan.io hunting queries for IDPI, AI ClickFix lures, hidden CSS traps, and agent credential exfiltration.

Suggested:
EKFiddle rules and urlscan.io hunting queries for IDPI, AI ClickFix lures, hidden CSS traps, and agent credential exfiltration.

## Notes

- Leave the footer support link text exactly as "Support me".
- Only apply wording corrections where they clearly improve consistency.

---

# 3. support.html

## Goal

Keep the page low pressure and professional.
Do not change the support link wording itself.

## Suggested corrections

### Subtitle

Current:
Independent personal website notes, disclosures, and support link.

Suggested:
Independent personal website notes, disclosures, and optional support information.

### Contact paragraph

Current:
For general questions, corrections, or personal contact, email contact@lucaslinkowski.com.

Suggested:
For general questions, corrections, or contact, email contact@lucaslinkowski.com.

## Notes

- Leave the heading "Support me" exactly as it is.
- Leave the footer support link text exactly as it is.

---

# 4. blog/mcp-server-malware-traffic-analysis.html

## Goal

Apply only light editorial improvements.
This article is already one of the strongest pieces on the site.

## Suggested corrections

### Opening sentence

Current:
Every malware analyst spends a significant portion of their day staring at HTTP traffic.

Suggested:
Malware traffic analysis often involves spending a significant amount of time working through HTTP sessions.

### Workflow sentence

Current:
I wanted to change that workflow by connecting Fiddler directly to a large language model so I could ask questions about captured traffic in plain English.

Suggested:
I wanted to improve that workflow by connecting Fiddler directly to a large language model so I could ask questions about captured traffic in plain English.

### Data formatting sentence

Current:
The challenge is getting the data from Fiddler's memory into a format the model can consume, and doing it in a way that feels like a natural conversation rather than a copy paste exercise.

Suggested:
The challenge is getting Fiddler session data into a format the model can consume, and doing it in a way that feels like a natural conversation rather than a copy paste exercise.

## Notes

- Do not alter code blocks.
- Do not change technical meaning.
- Keep first person voice.

---

# 5. blog/cognitive-induction-prompting.html

## Goal

Keep the article intact, but soften a few absolute statements and slightly sharpen wording.

## Suggested corrections

### Opening paragraph

Current:
The advice works, sometimes, but nobody explains why.

Suggested:
The advice often works, but many explanations stop short of the underlying mechanics.

### Diagnostic framework sentence

Current:
Understanding which stage you are affecting, and which stage failed when output disappoints you, is the entire diagnostic framework.

Suggested:
Understanding which stage you are affecting, and which stage failed when output disappoints you, gives you a practical diagnostic framework.

### Truth distinction sentence

Current:
The model cannot distinguish them.

Suggested:
The training objective does not reliably distinguish between them.

### Attention bias sentence

Current:
The critical rules go first and last, exploiting the primacy and recency attention bias.

Suggested:
Placing the critical rules first and last helps take advantage of primacy and recency effects in attention.

### Final line

Current:
The most reliable prompt is not the most eloquent one. It is the one that makes the right next tokens statistically easiest to produce.

Suggested:
The most reliable prompt is not the most eloquent one. It is the one that makes the intended next tokens statistically easier to produce.

## Notes

- Preserve the article's structure and conceptual framing.
- Do not weaken the core thesis, only reduce unnecessary absolutism.

---

# 6. blog/weaponizing-web-lures-against-agentic-ai.html

## Goal

Keep the technical depth, but reduce thesis like overstatement and make the article read more like measured personal technical analysis.

## Main editing rule

Throughout this file, systematically reduce:
- absolute phrasing
- dramatic adjectives
- totalizing claims
- whitepaper style overstatement

Increase use of:
- can
- may
- increasingly
- appears to
- research suggests
- in this context

## Examples of rewrite direction

### Severity sentence

Current:
The implications of this architectural shift are severe and far reaching.

Suggested:
The implications of this architectural shift could be significant.

### Assistant to execution vector sentence

Current:
the agent ceases to be a helpful assistant and instead becomes a highly privileged, automated execution vector

Suggested:
the agent can shift from a helpful assistant into a highly privileged automated execution vector

### Open web attack surface sentence

Current:
This systemic flaw effectively transforms the entire open web into a potential attack surface for prompt delivery.

Suggested:
This systemic weakness expands the open web as a practical attack surface for prompt delivery.

### Remote code execution sentence

Current:
This results in arbitrary Remote Code Execution.

Suggested:
This can result in arbitrary remote code execution.

## Notes

- This file needs an editorial pass, not just isolated grammar fixes.
- Preserve research depth.
- Keep technical examples and structure.
- Remove or soften lines that read like declarations rather than analysis.

---

# 7. blog/detecting-ai-prompt-injection-in-the-wild.html

## Goal

Bring this file up to the same editorial standard as the stronger pages in the repo.
This is the highest priority wording correction file.

## Specific corrections

### Human bottleneck sentence

Current:
This eliminates the human bottleneck entirely.

Suggested:
This significantly reduces the human bottleneck in parts of the attack chain.

### Unit 42 formatting

Current:
Unit42 documented 22 distinct payload construction techniques in the wild since December 2025.

Suggested:
Unit 42 documented 22 distinct payload construction techniques discussed in public research and reporting since December 2025.

### Research phrasing

Current:
They published extensive research on the topic.

Suggested:
They published detailed technical research on the topic.

### Reference lead in

Current:
See more here:

Suggested:
Reference:

### Personal transition paragraph

Current:
I thought it would be useful to build a detection rule set to address this. I like writing EKFiddle regex rules for web traffic analysis and other search queries for proactive threat hunting using UrlScan.io.

Suggested:
I thought it would be useful to build a detection rule set around this using EKFiddle regex rules for web traffic analysis and complementary urlscan.io queries for proactive hunting.

### Inference pipeline sentence

Current:
Both go to the inference pipeline

Suggested:
Both enter the inference pipeline

### CSS concealment sentence

Current:
CSS files are well suited for this because the user does not see them as page body copy.

Suggested:
CSS based concealment is particularly effective because the end user typically does not see the hidden content, while the agent may still process it.

### Legitimate reason sentence

Current:
have no legitimate reason to appear in web page content

Suggested:
rarely have a legitimate reason to appear in normal web page content

### Agent targeted wording

Current:
The agent targeted variant...

Suggested:
The agent targeted variant...

Keep the wording but improve surrounding sentence flow. Do not force extra dash usage.

### HashJack observability line

Current:
No server logs, no WAF alerts, no network IDS signatures.

Suggested:
In practice, this can leave little or no visibility in server logs, WAF telemetry, or conventional network IDS signatures.

### urlscan naming

Current:
Example of a UrlScan.io threat hunting query:

Suggested:
Example urlscan.io hunting query:

### Paid subscription line

Current:
You need a paid UrlScan.io subscription for this property to be available.

Suggested:
This does, however, require a paid urlscan.io subscription for that property to be available.

### Closing paragraph

Current:
The categories and detection logic above raise awareness of where to look for these attacks. They describe the attack surfaces and will remain relevant as long as AI agents process untrusted web content.

Suggested:
These categories highlight where defenders should look for these attacks and are likely to remain relevant as long as AI agents continue to process untrusted web content.

## Notes

- Do not change code blocks unless fixing only surrounding prose references.
- Do not add em dashes.
- Preserve technical substance.
- Remove conversational wording and rhetorical excess.

---

# Implementation rules for an editing agent

1. Edit wording only.
2. Do not change CSS, JS, layout, structure, metadata, canonical tags, or routing.
3. Do not change filenames or slugs.
4. Do not change the support link wording. Leave "Support me" exactly as it is in footer and support surfaces.
5. Avoid em dashes.
6. Avoid introducing new unnecessary dash style phrasing.
7. Keep first person voice where already present.
8. Preserve technical examples and code blocks.
9. Reduce overstatement where noted.
10. Fix grammar, punctuation, consistency, and clarity only.

---

# Validation checklist

Before finishing, verify:
- only the intended content files were edited
- no code blocks were corrupted
- no metadata or layout changes were introduced
- "Support me" remained unchanged
- no em dashes were added
- wording is cleaner, calmer, and more professional than before
