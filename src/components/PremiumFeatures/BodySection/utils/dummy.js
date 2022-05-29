const bodyDetails = {
  bodyTitle: 'Up-Level Your Communication',
  bodySubTitle: "Unlock Grammarly Premium's advanced features and suggestions.",
  plans: [
    {
      id: 1,
      type: 'Free',
      role: 'FOR CASUAL WRITERS',
      subtitle: 'Basic Writing suggestions.',
      btnText: 'Included in Premium',
      isBtnDisabled: true,
      btnSpacing: 42,
      moreDetails: [
        {
          subId: 1,
          image: 'https://static.grammarly.com/assets/files/8ce10810d1ced77584f15d910a7b69dd/example-spelling.svg',
          titleText: 'Eliminate Spell Errors.',
          Heading: 'Spelling',
        },
        {
          subId: 2,
          image: 'https://static.grammarly.com/assets/files/45bb5d7f61028cc68409ac207d58e806/example-grammar.svg',
          titleText: 'Eliminate Grammatical Errors.',
          Heading: 'Grammar',
        },
        {
          subId: 3,
          image: 'https://static.grammarly.com/assets/files/04a6185f01001090f239f95e005d7b96/example-punctuation.svg',
          titleText: 'Eliminate punctuation errors.',
          Heading: 'Punctuation',
        },
        {
          subId: 4,
          image: 'https://static.grammarly.com/assets/files/b16a2117a5bc0b5ac49fdcdbbfee30c9/example-conciseness.svg',
          titleText: 'Make every sentence concise and easy to follow.',
          Heading: 'Conciseness',
        },
      ],
    },
    {
      id: 2,
      type: 'Premium',
      role: 'FOR WORK OR SCHOOL',
      subtitle: 'Style, tone, and clarity improvements for writing at work and school.',
      btnText: 'Upgrade to Grammarly Premium',
      btnSpacing: 24,
      moreDetails: [
        {
          subId: 1,
          image: null,
          titleText: null,
          Heading: 'Everything in Free',
        },
        {
          subId: 2,
          image: 'https://static.grammarly.com/assets/files/b14251ced92375bba8190092543d2937/example-sentence-rewrites.svg',
          titleText: 'Automatically rewrite hard-to-read sentences.',
          Heading: 'Clarity-focused sentence rewrites',
        },
        {
          subId: 3,
          image: 'https://static.grammarly.com/assets/files/1e01fcc98c60d4c210320cc735a38368/example-confident-writing.svg',
          titleText: 'Tone adjustments',
          Heading: 'Tone adjustments',
        },
        {
          subId: 4,
          image: null,
          titleText: 'Tone adjustments',
          Heading: 'Plagiarism detection',
        },
        {
          subId: 5,
          image: 'https://static.grammarly.com/assets/files/1cb3884004858ec65c71e5f7db9edd54/example-word-choice.svg',
          titleText: 'Tone adjustments',
          Heading: 'Word Choice',
        },

        {
          subId: 6,
          image: 'https://static.grammarly.com/assets/files/d7dae495a77eb1db07abafa627c135db/example-formality.svg',
          titleText: 'Tone adjustments',
          Heading: 'Formality level',
        },
        {
          subId: 7,
          image: 'https://static.grammarly.com/assets/files/6ae68325cb99c9176eab1924c4bc8ce4/example-fluency.svg',
          titleText: 'Tone adjustments',
          Heading: 'Fluency',
        },
        {
          subId: 8,
          image: null,
          titleText: 'Tone adjustments',
          Heading: 'Additional Advanced Suggestions',
        },

      ],
    },

  ],

};

export default bodyDetails;
