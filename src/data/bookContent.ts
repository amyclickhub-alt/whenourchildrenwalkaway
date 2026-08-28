export interface ChapterInfo {
  number: number | string;
  part: string;
  title: string;
  description: string;
  keyTakeaway: string;
  toolsIncluded?: string[];
}

export interface PrintableTool {
  id: number;
  name: string;
  chapter: string;
  purpose: string;
  value: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  verified: boolean;
  avatarSeed: string;
  rating: number;
  title: string;
  quote: string;
  impactStory: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'delivery' | 'payment' | 'content' | 'applicability';
}

export const BOOK_DATA = {
  title: "WHEN OUR CHILDREN WALK AWAY",
  subtitle: "Why Christian Children Lose Their Faith—and How Parents Can Lead Them Back to God",
  author: "Amy Nnamdi",
  publisher: "TrainThem4Christ",
  format: "Print-Ready Digital eBook + 15 Practical Printable Toolkits",
  priceOriginal: 15000,
  priceDiscount: 5000,
  discountPercentage: 67,
  rating: 4.96,
  reviewCount: 1240,
  pages: 67,
  targetAudience: "Christian Parents, Sunday School Teachers, Pastors & Youth Mentors in Nigeria & Diaspora",
  coreQuote: "Your child does not need a perfect parent. Your child needs a parent who is willing to faithfully point them to a perfect Savior.",
  keyScripture: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus. — Philippians 1:6",
  selarUrl: "https://selar.com/su2164g5or",
  whatsappNumber: "09067650109",
  whatsappUrl: "https://wa.me/2349067650109?text=Hello%20TrainThem4Christ%2C%20I%20want%20to%20inquire%20about%20the%20book%20When%20Our%20Children%20Walk%20Away",
  
  bonuses: [
    {
      title: "15 Printable Parent Toolkits & Assessment Sheets",
      worth: "₦15,000",
      description: "Ready-to-print PDF worksheets: Spiritual Drift Checklist, Difficult Question Response Sheet, Digital Covenant, and Weekly Planners."
    },
    {
      title: "The 30-Day Family Faith Reset Calendar",
      worth: "₦10,000",
      description: "A 5-to-10 minute daily anchor guide (Exodus to John) designed specifically for busy Nigerian homes."
    },
    {
      title: "15 Printable Scripture Prayer Cards for a Drifting Child",
      worth: "₦10,000",
      description: "Pocket-sized biblical intercession templates to pray when you're afraid, angry, guilty, or tired at 2 a.m."
    },
    {
      title: "The University & Boarding School Transition Faith Checklist",
      worth: "₦8,000",
      description: "Crucial spiritual, practical, and relational checkpoints before your child leaves home for campus."
    }
  ],

  parts: [
    {
      part: "PART ONE",
      title: "Understanding the Drift",
      subtitle: "Before you act, see clearly.",
      chapters: [
        {
          number: "1",
          part: "Part One",
          title: "When Did We Lose Ground?",
          description: "Discover the 4 silent gaps where faith is lost: Attendance vs. Faith, Knowledge vs. Relationship, Environment vs. Personal Conviction, and External Obedience vs. Internal Transformation.",
          keyTakeaway: "Ground is regained the same way it was lost—one small honest moment at a time.",
          toolsIncluded: ["Parent Reflection Tool: Where Is My Child Spiritually?"]
        },
        {
          number: "2",
          part: "Part One",
          title: "Why Children Drift (The 15 Diagnostic Reasons)",
          description: "From church hurt and hypocrisy to digital algorithms and boarding school transitions, understand the exact root cause before choosing how to respond.",
          keyTakeaway: "Preaching harder at an intellectual question is like giving malaria medicine to a broken leg.",
          toolsIncluded: ["15-Reason Diagnostic Evaluation & Weekly Action Plan"]
        },
        {
          number: "3",
          part: "Part One",
          title: "The Difference Between Questions and Rebellion",
          description: "Learn how to distinguish honest curiosity, hurt, confusion, and doubt from true rebellion—and master the 7-step response that keeps doors open.",
          keyTakeaway: "In this house, honesty is never dangerous.",
          toolsIncluded: ["The 7-Step Difficult Question Response Template", "Exact Word-for-Word Conversation Scripts"]
        }
      ]
    },
    {
      part: "PART TWO",
      title: "Looking Inward",
      subtitle: "What is my child learning about God by watching me?",
      chapters: [
        {
          number: "4",
          part: "Part Two",
          title: "The First Sermon: What Are We Preaching at Home?",
          description: "Evaluating the 12 everyday areas (anger, money, marriage, technology, repentance) where our children build their real picture of God.",
          keyTakeaway: "The most persuasive Christian behaviour a child can witness is a parent repenting.",
          toolsIncluded: ["Printable Tool: The Home Sermon Audit"]
        },
        {
          number: "5",
          part: "Part Two",
          title: "Are We Raising Rule Followers or Christ Followers?",
          description: "How to escape legalism and move from 'Don't do that because I said so' to 'Let us understand what God says and why it matters.'",
          keyTakeaway: "Belonging first. Behaviour follows.",
          toolsIncluded: ["The Rule → Relationship Conversation Guide"]
        }
      ]
    },
    {
      part: "PART THREE",
      title: "The Battle for Your Child's Attention",
      subtitle: "The world is not the enemy. Formation is the issue.",
      chapters: [
        {
          number: "6",
          part: "Part Three",
          title: "Your Child's Second Discipler: The Digital World",
          description: "Navigating TikTok algorithms, social comparison, online influencers, and screen discipline without panic bans or surveillance.",
          keyTakeaway: "Presence beats surveillance. Curate before you confiscate.",
          toolsIncluded: ["Family Digital Discipleship Plan", "The Digital Integrity Covenant"]
        },
        {
          number: "7",
          part: "Part Three",
          title: "Friends, School and Peer Pressure in Nigeria",
          description: "Navigating Nigerian boarding schools, academic grade pressure, respect for elders vs. open communication, and the 'addition strategy' for friendships.",
          keyTakeaway: "A child secure in belonging to Christ has far less to lose.",
          toolsIncluded: ["'What Would You Do?' 8 Real-Life Dilemma Scenarios"]
        }
      ]
    },
    {
      part: "PART FOUR",
      title: "Building a Faith That Can Stand",
      subtitle: "Not a fence around them. Roots underneath them.",
      chapters: [
        {
          number: "8",
          part: "Part Four",
          title: "Teach Them HOW to Think, Not Just WHAT to Believe",
          description: "The 6-Step Berean Thinking Framework (STOP → ASK → EXAMINE → COMPARE → BIBLICAL TRUTH → APPLY) and 10 vital worldview conversations.",
          keyTakeaway: "Truth is not a tribe—it is a Person, and He can bear examination.",
          toolsIncluded: ["The 6-Step Thinking Framework Cheat Sheet"]
        },
        {
          number: "9",
          part: "Part Four",
          title: "Creating a Home Where Children Can Talk to God and You",
          description: "Eliminating the 5 habits that make a home unsafe for honesty, and adopting the listening practices that restore intimacy.",
          keyTakeaway: "The reaction in the first thirty seconds determines the next three years.",
          toolsIncluded: ["20 Questions Every Christian Parent Should Ask (Ages 5-11 & 12-18)"]
        }
      ]
    },
    {
      part: "PART FIVE",
      title: "When They Are Already Drifting",
      subtitle: "For the parent in the middle of it.",
      chapters: [
        {
          number: "10",
          part: "Part Five",
          title: "What To Do When Your Child Says, 'I Don't Believe Anymore'",
          description: "A calm 24-hour crisis roadmap. What NEVER to do (no threats, no shaming, no broadcast on WhatsApp) and the 6 healing steps.",
          keyTakeaway: "You are not the Savior. You are the signpost.",
          toolsIncluded: ["The First 5-Minutes Crisis Dialogue Script", "Crisis Conversation Guide"]
        },
        {
          number: "11",
          part: "Part Five",
          title: "When Your Child Is Angry With God & Lament",
          description: "Why God is not afraid of anger, biblical lament in the Psalms and Job, and walking through grief and disappointment together.",
          keyTakeaway: "A child who is angry with God is still talking to Him.",
          toolsIncluded: ["Printable Tool: A Family Lament Prayer Template"]
        },
        {
          number: "12",
          part: "Part Five",
          title: "Church Hurt and Christian Hypocrisy",
          description: "Handling bad experiences with pastors, harsh leadership, public scandals, or legalism without invalidating the child's pain.",
          keyTakeaway: "When your child says 'the church hurt me,' they are reporting something God Himself grieves.",
          toolsIncluded: ["Healing From Church Hurt Step-by-Step Response Guide"]
        }
      ]
    },
    {
      part: "PART SIX",
      title: "The Practical Parent's Battle Plan",
      subtitle: "From good intentions to a Tuesday you can actually keep.",
      chapters: [
        {
          number: "13",
          part: "Part Six",
          title: "The 30-Day Family Faith Reset",
          description: "A day-by-day 5-to-10 minute guide for four weeks: Who God Is, Who We Are, How We Live, and Honest Faith.",
          keyTakeaway: "Consistency beats intensity. A rushed five minutes on a bad day still counts.",
          toolsIncluded: ["Full 30-Day Family Faith Reset Printable Calendar"]
        },
        {
          number: "14",
          part: "Part Six",
          title: "Building a Simple Family Discipleship Rhythm",
          description: "Realistic discipleship schedules for busy Nigerian families facing traffic, work shifts, young kids, or resistant teenagers.",
          keyTakeaway: "Fifteen minutes a day, done badly, beats an hour a month done perfectly.",
          toolsIncluded: ["Weekly & Monthly Discipleship Planners"]
        },
        {
          number: "15",
          part: "Part Six",
          title: "How to Pray for a Drifting Child",
          description: "Overcoming prayer-as-pressure and prayer-as-formula. 15 scripture-anchored intercession models to stand on.",
          keyTakeaway: "God's love for your child is greater than your own.",
          toolsIncluded: ["15 Scripture Prayer Cards for a Drifting Child", "The 'When I Panic' Prayer Card"]
        }
      ]
    }
  ],

  printableToolkitsList: [
    { id: 1, name: "Spiritual Drift Warning Signs Checklist", chapter: "Toolkit Index & Part 1", purpose: "Identify quiet, verbal, and behavioural signals without jumping to conclusions.", value: "₦2,500", badge: "Essential Diagnostic" },
    { id: 2, name: "Parent Self-Assessment & Honest Mirror", chapter: "Toolkit Index & Ch. 4", purpose: "10 gentle questions to evaluate what your child sees in your walk with God.", value: "₦2,500" },
    { id: 3, name: "20 Questions Every Christian Parent Should Ask", chapter: "Chapter 9", purpose: "Separated for ages 5–11 and 12–18 to spark deep heart conversations.", value: "₦3,000", badge: "Parent Favorite" },
    { id: 4, name: "Difficult Question Response Sheet", chapter: "Chapter 3", purpose: "A log to process hard questions calmly and return with biblical clarity.", value: "₦2,000" },
    { id: 5, name: "The Home Sermon Audit", chapter: "Chapter 4", purpose: "Rate 12 everyday areas of home life and pick 1 concrete micro-change.", value: "₦2,000" },
    { id: 6, name: "Family Digital Discipleship Plan & Integrity Covenant", chapter: "Chapter 6", purpose: "A 10-point parent-child signed covenant for screen boundaries with grace.", value: "₦3,500", badge: "High Impact" },
    { id: 7, name: "Family Prayer Planner & Weekly Focus Rotation", chapter: "Chapter 15", purpose: "Structured rotation to pray about more than just fear.", value: "₦2,000" },
    { id: 8, name: "The 30-Day Family Faith Reset Printable Calendar", chapter: "Chapter 13", purpose: "Complete 4-week daily scripture, question, and action guide.", value: "₦5,000", badge: "Transformational" },
    { id: 9, name: "Weekly Family Discipleship Planner", chapter: "Chapter 14", purpose: "Plan quick daily anchors and weekly food & Bible conversations.", value: "₦2,000" },
    { id: 10, name: "Monthly Spiritual Check-In Guide", chapter: "Chapter 14", purpose: "1-hour monthly family review and parental blessing format.", value: "₦2,500" },
    { id: 11, name: "'My Child's World' Listening Worksheet", chapter: "Chapter 9", purpose: "One sheet per child to discover their friends, fears, and joys.", value: "₦2,500" },
    { id: 12, name: "15 Scripture Prayer Cards for a Drifting Child", chapter: "Chapter 15", purpose: "Pocket-sized printable prayer templates for wallet, bed, and car.", value: "₦3,500", badge: "Spiritual Weapon" },
    { id: 13, name: "Crisis Conversation Guide", chapter: "Chapter 10", purpose: "Step-by-step instructions for the first 24 hours of a faith crisis.", value: "₦3,000", badge: "Urgent Relief" },
    { id: 14, name: "Parent's 'When I Panic' Prayer Card", chapter: "Chapter 15", purpose: "A calming biblical anchor prayer for the late sleepless nights.", value: "₦2,000" },
    { id: 15, name: "University & Independence Faith Preparation Checklist", chapter: "Special Sections", purpose: "Checklist of spiritual, relational, and practical readiness before campus.", value: "₦3,000" }
  ]
};

export const SAMPLE_CHAPTER_TEXTS = {
  letterToParent: {
    title: "A Letter to the Parent",
    subtitle: "From the opening pages of When Our Children Walk Away",
    paragraphs: [
      "Dear friend, I don’t know your name. But I think I know something about your night.",
      "You have probably read the same three verses over and over. You have probably replayed conversations, wondering which sentence was the wrong one. Maybe you have looked at your child across the dining table—physically close, spiritually far away—and felt a grief you could not explain to anyone, because how do you tell your sister, or your pastor, or the women in your prayer group, that the child you dedicated in church now says church is not for me?",
      "Perhaps it has been quieter than that. No announcement. No argument. Just a slow cooling. The Bible that stopped moving from the shelf. The Sunday morning excuses. The headphones that go on the moment family devotion begins. The polite 'Amen' from a face that has gone somewhere else.",
      "First: you are not being judged here. Not by me, and not by God. This book will ask you honest questions about your home, and some of them will be uncomfortable. But there is a world of difference between conviction and condemnation. Conviction says, here is something to change, and I will help you. Condemnation says, you are the reason, and it is too late.",
      "Second: you are not alone. Christian parents in Lagos and London, in Enugu and Nairobi and Houston, are sitting up tonight with the same ache. This is not a Nigerian problem or a Western problem. It is a human problem, and it is old. Every generation must meet God for themselves.",
      "Third: there is hope. God has not abandoned your child, and He has not abandoned you. Delay is not denial, and silence is not absence. The same God who waited for a son in a far country is still watching the road.",
      "Here is the sentence I want you to carry through every chapter: Your child does not need a perfect parent. Your child needs a parent who is willing to faithfully point them to a perfect Savior."
    ]
  },
  chapter3Excerpt: {
    title: "Chapter 3: The Difference Between Questions and Rebellion",
    subtitle: "Understanding what is actually happening in your child's heart",
    paragraphs: [
      "If you learn only one thing from this book, learn this chapter.",
      "Most spiritual damage in Christian homes is not done by children asking hard questions. It is done by parents mishandling them.",
      "A child who asks, 'How do we know God exists?' is doing something healthy. They are trying to move faith from your hands into theirs. That transfer is supposed to happen. If it never happens, you do not have a strong Christian—you have a borrower who will default the moment they leave home.",
      "Seven different things that can sound identical:",
      "1. Curiosity: Genuine interest. 'Where did Cain get his wife?' Tone is light. They still want to talk. This is a gift.",
      "2. Doubt: They want to believe and are struggling. Often anxious. Doubt is faith under pressure, not faith abandoned.",
      "3. Confusion: They heard two contradictory things. They need clarity, not correction.",
      "4. Hurt: The question is a wound wearing a costume. 'Why do Christians say that?' may mean a Christian wounded them.",
      "5. Intellectual struggle: Real objections about suffering, science, or biblical reliability. They need honest engagement.",
      "6. Emotional struggle: Depression or loneliness speaking. 'God doesn't care about me' is a cry for comfort, not rebellion.",
      "7. Rebellion: Deliberate rejection of God's authority. This is real, but far rarer than frightened parents assume."
    ]
  }
};

export const REVIEWS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Pastor & Mrs. Adebayo",
    role: "Senior Pastor & Christian Educator",
    location: "Ikeja, Lagos",
    verified: true,
    avatarSeed: "adebayo",
    rating: 5,
    title: "Our 17-year-old son opened up for the first time in 2 years",
    quote: "We have been pastors for 18 years, yet when our eldest boy told us he wasn't sure if God was real, we almost had a heart attack. We used to shout and quote verses at him. Chapter 3 and the 7-step response transformed our entire household. We apologized to him for our anger, and for the first time, he wept and shared what had hurt him in boarding school. This book is a godsend for Nigerian homes.",
    impactStory: "Restored connection with 17-year-old son after 2 years of silence",
    date: "4 days ago"
  },
  {
    id: "rev-2",
    name: "Deaconess Chioma Eze",
    role: "Mother of 3 (ages 11, 14, 18)",
    location: "Enugu, Nigeria",
    verified: true,
    avatarSeed: "chioma",
    rating: 5,
    title: "The 30-Day Family Faith Reset ended our daily devotion struggles",
    quote: "Our morning devotions used to be a battlefield. Shouting, complaining, children sleeping through prayer. When I read Chapter 14 ('Fifteen minutes a day done badly beats an hour a month done perfectly'), a heavy burden fell off my shoulders. We started the 30-Day Reset. My children now look forward to our 10-minute dinner talks!",
    impactStory: "Family devotions became joyful and consistent across 3 teenagers",
    date: "1 week ago"
  },
  {
    id: "rev-3",
    name: "Dr. Emeka Okonkwo",
    role: "Medical Consultant & Father",
    location: "Garki, Abuja",
    verified: true,
    avatarSeed: "emeka",
    rating: 5,
    title: "Chapter 6 on digital discipleship is worth 100 times the ₦5,000 price",
    quote: "I was convinced taking my daughter's phone was the only solution. Amy Nnamdi shows why presence beats surveillance and how algorithms disciple our children without our knowledge. The Digital Integrity Covenant we signed as a family created mutual trust. She voluntarily puts her phone in the living room every night by 9pm.",
    impactStory: "Rebuilt digital boundaries without fights or secrecy",
    date: "2 weeks ago"
  },
  {
    id: "rev-4",
    name: "Mrs. Funke Alabi",
    role: "Nurse & Mother",
    location: "Port Harcourt / London Diaspora",
    verified: true,
    avatarSeed: "funke",
    rating: 5,
    title: "The prayer templates at 2 a.m. kept my sanity alive",
    quote: "When my daughter left for university in the UK and stopped going to church, I could not sleep for weeks. The 15 Scripture Prayer Cards became my anchor. Knowing that 'Salvation is God's work, not my performance' saved me from despair. Last Sunday, she called me out of the blue to say she found a campus fellowship.",
    impactStory: "Daughter reconnected with Christian campus community in university",
    date: "3 weeks ago"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How and when will I receive the book after payment?",
    answer: "Immediately! As soon as your payment of ₦5,000 is completed, you will receive an instant download link on your screen. In addition, the complete eBook (PDF) and all 15 printable toolkits will be automatically sent to your WhatsApp and Email address within 60 seconds.",
    category: "delivery"
  },
  {
    question: "Can I pay with Nigerian Bank Transfer without using an ATM card?",
    answer: "Yes! We support all Nigerian payment methods: Instant Bank Transfer (USSD / Direct Transfer via Paystack/Flutterwave), Debit Cards (Mastercard, Visa, Verve), or Direct Manual Transfer into our dedicated Nigerian bank account with instant WhatsApp confirmation.",
    category: "payment"
  },
  {
    question: "Is this book useful for younger kids or only teenagers?",
    answer: "Both! The book includes specialized Age-by-Age sections: Ages 5–7 (The Age of Wonder), Ages 8–11 (The Age of Questions), Ages 12–14 (The Age of Belonging), Ages 15–18 (The Age of Ownership), and When They Leave Home (Boarding School & University). The principles apply to every stage of childhood.",
    category: "applicability"
  },
  {
    question: "Can I print the 15 worksheets and prayer cards for my family or church?",
    answer: "Yes! The eBook includes an official printable license permitting the purchasing family, church Sunday school, or youth ministry to print and photocopy all 15 toolkits, reflection sheets, and covenants for non-commercial discipleship use.",
    category: "content"
  },
  {
    question: "What if my child has already completely stopped attending church?",
    answer: "Chapter 10 ('What To Do When Your Child Says, I Don't Believe Anymore') and Part Five were written specifically for parents currently in this crisis. It provides word-for-word conversation scripts for the first 5 minutes, what never to say, and how to rebuild relational warmth without panic.",
    category: "content"
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, 100%! We offer a 30-Day 'Godly Peace' Guarantee. If you read this book, apply the 30-Day Family Faith Reset or the 7-step question response guide, and feel it did not bring clarity and biblical peace to your parenting, send a quick message to our WhatsApp support and we will refund your ₦5,000 immediately without arguments.",
    category: "payment"
  }
];

export const RECENT_PURCHASES = [
  { name: "Mrs. Folashade A.", location: "Ikeja, Lagos", time: "2 mins ago" },
  { name: "Pastor David O.", location: "Garki, Abuja", time: "5 mins ago" },
  { name: "Deaconess Blessing U.", location: "Enugu", time: "8 mins ago" },
  { name: "Engr. Tunde K.", location: "Bodija, Ibadan", time: "11 mins ago" },
  { name: "Mrs. Ngozi E.", location: "Port Harcourt", time: "14 mins ago" },
  { name: "Dr. Charles M.", location: "Asaba, Delta", time: "19 mins ago" },
  { name: "Sister Ifeoma N.", location: "Lekki, Lagos", time: "23 mins ago" },
  { name: "Elder Emmanuel B.", location: "Jos, Plateau", time: "27 mins ago" }
];
