# Lesson Generation Recipe

This document defines the repeatable process for turning a small lesson request into a finished professional English listening lesson.

It must be used together with `CONTENT_SYSTEM.md`.

`CONTENT_SYSTEM.md` defines what good content should be.
This file defines how to produce it consistently.

---

## Input Contract

A lesson request should contain only the information that is different for that lesson.

### Minimum required input

The minimum useful input is:

- `domain`
- `scenario`

Example:

```yaml
domain: Finance
scenario: Challenging a budget assumption
```

If these two fields are clear enough to create a realistic professional situation, use the defaults from `CONTENT_SYSTEM.md` for everything else.

### Optional input

The request may also include:

```yaml
level: B2

audience:
  experience: mid
  responsibility: individual_contributor
  complexity: ambiguous

roles:
  - Finance Manager
  - FP&A Analyst

must_include:
  - run rate
  - downside risk

avoid:
  - accounting regulations

format: dialogue
```

Supported optional fields include:

- `level`
- `audience`
- `roles`
- `must_include`
- `avoid`
- `format`
- other explicit constraints relevant to the lesson

Optional fields override defaults from `CONTENT_SYSTEM.md`.

Do not require optional fields when the system can make a reasonable choice from the permanent defaults.

### Failure and ambiguity rule

Do not invent critical information merely to complete a lesson.

If the request is too vague to create a concrete professional situation, first make it more specific using safe, general workplace assumptions.

If the lesson would require unsupported specialist facts, regulations, procedures, or domain expertise:

- simplify the scenario to common professional knowledge, or
- ask for clarification if the missing information is essential

Do not guess specialist facts.

Do not ask unnecessary questions when the request is already sufficient.

---

## Step 1 — Interpret the Lesson Request

Extract only what is explicitly provided:

- domain / industry
- scenario or topic
- CEFR level, if provided
- audience, if provided
- roles, if provided
- specific professional language, if provided
- format preference, if provided
- constraints or exclusions

Use defaults from `CONTENT_SYSTEM.md` for anything not specified.

Do not ask for extra detail if the request is already sufficient to build a realistic lesson.

---

## Step 2 — Resolve Audience and Difficulty

Determine the intended audience using these dimensions when relevant:

### Experience

- junior
- mid
- senior

### Responsibility

- individual contributor
- lead
- manager
- stakeholder-facing

### Situation complexity

- routine
- ambiguous
- high-stakes

If no audience is supplied, use the default MVP audience from `CONTENT_SYSTEM.md`.

Keep language difficulty and professional seniority separate.

A B2 learner may be professionally senior.
A C1 learner may be professionally junior.

Use the audience to influence:

- how much ownership the speaker has
- how much ambiguity is present
- how directly people communicate
- how much professional judgement is required
- the complexity of the situation
- the type of decision or trade-off involved

---

## Step 3 — Build the Scenario Before Writing Dialogue

Create a concise scenario brief with:

- Domain
- Situation
- Roles
- Immediate context
- Tension / uncertainty / unresolved issue
- Goal
- Expected outcome
- Intended audience
- Situation complexity

Do not write the dialogue yet.

The scenario must be concrete enough that a professional could plausibly recognise the situation.

Weak:

> Two marketers discuss a campaign.

Better:

> A marketing lead questions why a paid campaign generated strong click-through rates but poor trial conversions. A performance marketer believes the issue is the landing page rather than targeting. They need to decide what to test next.

Check that the scenario:

- has a clear reason for the conversation
- contains one primary professional problem
- can naturally sustain approximately 2–4 minutes
- fits the intended professional level
- does not require unsupported specialist knowledge
- is useful beyond language learning

If the scenario is too broad, make it more specific.

If it contains multiple unrelated problems, reduce it to one central situation.

---

## Step 4 — Check Professional Usefulness

Before selecting vocabulary or drafting dialogue, ask:

- Is this a situation the intended audience could realistically face?
- Does it model a useful workplace interaction?
- Does it help the learner understand not only English, but also how a professional might handle the situation?
- Is the situation appropriate for the intended experience and responsibility level?

If not, revise the scenario.

The scenario should teach through exposure to a plausible professional interaction, not through explicit instruction.

---

## Step 5 — Select Target Professional Language

Choose approximately 5–8 expressions, collocations, or domain terms that naturally fit the scenario.

Prefer:

- common meeting language
- professional collocations
- reusable phrases
- domain-specific terms
- phrases for clarification
- disagreement
- recommendation
- prioritisation
- explanation
- trade-offs
- uncertainty
- next steps

The scenario comes first.

Do not distort the conversation merely to include target language.

It is acceptable for some candidate phrases not to appear if they do not fit naturally.

Do not explain the target language inside the dialogue.

---

## Step 6 — Draft the Spoken Conversation

Write the full spoken script.

Target duration:

- approximately 2–4 minutes
- preferred: 2:30–3:30
- roughly 350–550 spoken words depending on pace and structure

The dialogue should:

- establish the situation quickly
- avoid long greetings or unnecessary setup
- contain natural back-and-forth
- show different perspectives when appropriate
- include clarification, challenge, explanation, uncertainty, or decision-making
- develop toward a credible outcome
- sound like a real workplace interaction
- stay focused on one central issue
- avoid teaching language explicitly

Most lessons should use two speakers unless a monologue is more natural.

---

## Step 7 — Natural Speech Pass

Review the draft only for spoken naturalness.

Rewrite any line that sounds:

- written rather than spoken
- overly complete
- overly formal
- textbook-like
- unnaturally polite
- corporate-jargon-heavy
- repetitive
- obviously AI-generated

Prefer:

- contractions
- concise turns
- natural reactions
- follow-up questions
- incomplete but understandable sentences
- realistic transitions
- conversational phrasing
- normal professional rhythm

Avoid adding filler merely to imitate human speech.

Use hesitation sparingly and only when it improves realism.

Pay special attention to:

- the first 20–30 seconds
- moments of disagreement
- clarification exchanges
- the final resolution

---

## Step 8 — Professional Realism Pass

Review the script for domain and workplace credibility.

Check:

- Would these roles actually have this conversation?
- Would each role reasonably know what they know?
- Would they use this language?
- Is the decision-making process plausible?
- Is one speaker explaining something the other would obviously already know just for the learner's benefit?
- Are responsibilities realistic?
- Are any procedures, regulations, or technical facts invented?

Fix unrealistic content.

If specialist knowledge is required and reliable context has not been provided, simplify the scenario rather than inventing details.

---

## Step 9 — Professional Behaviour Pass

Check how the situation is handled.

The script may model useful professional behaviour, such as:

- asking for clarification
- explaining reasoning
- acknowledging concerns
- proposing alternatives
- surfacing risks
- communicating uncertainty
- confirming next steps
- checking assumptions
- summarising agreements

Do not present one response style as universally correct.

The conversation should show one credible way professionals might handle the situation.

Avoid moralising or explicitly teaching workplace behaviour inside the dialogue.

---

## Step 10 — Listening Suitability Pass

Review the script specifically as an intensive listening exercise.

Check for:

- varied sentence length
- natural turn-taking
- useful connected speech
- enough context for inference
- phrases a learner might initially miss but understand after replay
- natural repetition only where realistic
- no excessive proper nouns
- no unnecessary figures, dates, acronyms, or names
- no needlessly difficult names
- no dense stretches that become impossible to reconstruct

The script should be challenging enough to practise, but not artificially difficult.

Do not slow or simplify the language unnaturally just to make listening easier.

---

## Step 11 — TTS Preparation Pass

Prepare the final script for AI-generated speech.

Use:

- clean speaker labels
- one speaker turn at a time
- punctuation that supports natural rhythm
- contractions where appropriate
- short or medium-length spoken turns

Avoid:

- stage directions inside spoken text
- bracketed acting instructions mixed into dialogue
- long paragraphs
- awkward punctuation
- pronunciation notes inside spoken text
- metadata mixed with script lines
- unnecessary symbols

The script should be ready for text-to-speech without major rewriting.

---

## Step 12 — Freeze the Final Spoken Script

Once naturalness, realism, professional behaviour, listening suitability, and TTS checks pass, treat the script as final.

Do not create the transcript from an earlier draft.

The transcript must exactly match the final spoken script.

If any spoken line changes later, update the transcript before audio generation.

---

## Step 13 — Create the Exact Transcript

Create the full transcript from the final spoken script.

Requirements:

- exact wording
- exact speaker order
- no simplification
- no summary
- no vocabulary explanations
- no rewritten learner-friendly version

The transcript is the learner's reference for comparing what they heard and wrote.

Accuracy is essential.

---

## Step 14 — Create One Comprehension Question

Create exactly one multiple-choice question for the MVP.

The question should test:

- the main reason for the conversation
- a central concern
- the main decision
- the final outcome
- the reasoning behind a recommendation

Do not test:

- isolated vocabulary definitions
- grammar
- insignificant details
- trivia
- exact wording unless it is central to meaning

Provide four answer options.

Only one answer should clearly be correct.

Wrong options should be plausible based on the conversation, not obviously ridiculous.

Also provide a short explanation of the correct answer.

---

## Step 15 — Final Quality Gate

Before returning the finished lesson, review it against `CONTENT_SYSTEM.md`.

The lesson must pass all of the following:

### Scenario

- one clear professional situation
- concrete reason for the conversation
- appropriate audience fit
- realistic tension, uncertainty, or decision

### Engagement

- the situation becomes clear quickly
- the learner has a reason to keep listening

### Professional realism

- roles and responsibilities make sense
- no invented specialist practices
- no artificial exposition

### Professional usefulness

- the interaction models something the learner could plausibly encounter or use

### Natural speech

- dialogue sounds spoken
- no textbook language
- no obvious AI phrasing
- no unnecessary formality

### Target language

- useful phrases appear naturally
- vocabulary does not drive the scenario

### Listening quality

- natural but practicable
- varied speech
- no unnecessary complexity

### TTS suitability

- script is clean and voice-ready

### Transcript

- exact match to final spoken script

### Assessment

- one question
- tests central meaning
- one clearly correct answer

Fix any issue that can reasonably be corrected before producing the final output.

Do not return a knowingly weak draft and merely list its problems.

---

## Step 16 — Produce Structured Output

Return the lesson in this order:

1. Lesson metadata
2. Scenario brief
3. Audience metadata
4. Target professional language
5. Final spoken script
6. Exact transcript
7. Comprehension question
8. Correct answer
9. Explanation
10. Content quality review

The exact machine-readable JSON schema may be defined separately.

Do not change the output order unless a different format is explicitly requested.

---

## Default Generation Flow

When given a short request such as:

> Create a B2 Finance lesson about challenging a budget assumption.

Follow this internal sequence:

**Interpret request  
→ resolve audience  
→ build scenario  
→ check professional usefulness  
→ select target language  
→ draft dialogue  
→ natural speech pass  
→ professional realism pass  
→ professional behaviour pass  
→ listening suitability pass  
→ TTS preparation pass  
→ freeze final script  
→ create exact transcript  
→ create one comprehension question  
→ final quality gate  
→ structured output**

The user should not need to explain this process each time.

The per-lesson request should describe only what is different about that lesson.
