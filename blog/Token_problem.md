Ever wondered why your 500 token prompt returned two paragraphs of text and you got charged 128K tokens in the process? I did today. Reversing LLMs (because what else would you do on a Sunday!) shows a massive design flaw, they do not have a real working memory! When you chat with an AI, it does not hold thoughts the way humans do. Instead, it must store its working memory in something called a Key Value, KV cache. The model has to read your entire chat history and all your code files every single time it writes a new word. If you think you misread, I did mean each next word of output. The process is extremely inefficient. We almost got used to assuming models are thinking like us, but they are really not no matter how effective and truly helpful they may be.

### The Bottleneck in the hardware

AI processing has two different stages. The first is the initial stage, where the model reads your prompt. This requires a massive amount of math that scales quadratically

The second stage is writing the actual words, one by one. To write just one word, the model has to load its entire set of weights (which can be 140 gigabytes for a 70-billion parameter model) plus the entire KV cache from the graphics card memory.

Because it has to do this massive data transfer for every single word, the expensive GPU chips actually sit idle most of the time. They are not waiting on math, they are just waiting for memory to load. This quickly explains the recent and sudden RAM memory shortage problems! It also consumes enormous amounts of energy, this explain another set of headlines about AI models being energy hogs.

### The Math Loop and the KV Cache

To make things worse, the size of this KV cache scales with the length of your chat. For a 70-billion parameter model, keeping a long chat of 128,000 words in memory for just 10 users takes about 420 gigabytes of memory. This requires multiple top-tier graphics cards just to hold the active memory of those 10 users.

When modern models are forced to "think" before they answer, this compounds. The model writes thousands of words of hidden internal reasoning. Every single one of those hidden words loops back, gets added to the input, and makes the system calculate everything all over again on the next step. It add the words to the pipeline and prcoesses them over and over again!

### The Extreme Cost of Coding Agents

This design becomes a financial challange when we use autonomous coding agents. An agent does not just write code, it uses a harness to read the codebase files, run tests, run tools and loop back frequently. Also is it just me but I really hope someone checks if they count the tokens usage correctly. Who checks if they are not counting the same tokens twice?

Every time the agent takes an action, the harness stuffs the new files and test errors back into the prompt. On a benchmark like ProjDevBench, which tests how agents build software, agents take an average of 138 turns and burn through 4.81 million tokens per task. If you run 500 agent tasks a day, you easily end up reading and calculating tens of millions of shared words all over again every day.

### Is Generative AI the Answer to True AGI design?

Frontier providers try to save these calculated model states in the graphics card's memory so they do not have to repeat the work, but this memory is expensive and hard to get. Since cloud servers must serve thousands of users at once, these saved states have a very short lifetime. If a developer stops typing for just a few minutes to think, their saved memory is deleted to make room for someone else. When they type their next question, the system must trigger the initial stage and calculate everything all over again from scratch.

For a long time, tech companies paid for these massive computer bills themselves to sell cheap monthly subscriptions. But that is ending quickly now. Companies are moving to usage based pricing with AI credits.

I posted few best practices for token managemnt here couple month ago:
https://llm-threatintel.com/#blog/2026-05-25-claude-code-token-economics-context-window-discipline

Until we move away from this heavy repeating loop, large generative agents will remain slow and very expensive. For real engineering tasks, small and highly localized autocomplete tools remain a good realistic choice. I also think there is a differemce betwee Intelligence and intelligent output. There is a grate video by the Manchester Uni based Computerphile that explains this very well:

https://www.youtube.com/watch?v=-0HRzXk8vlk&t=1s

