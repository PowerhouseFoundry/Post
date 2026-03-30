const companies = {
  bright: {
    name: 'Bright Energy Ltd',
    logo: 'assets/logos/bright-energy.png',
    address: ['Customer Accounts', '55 Orchard Park', 'Leeds', 'LS11 8AB'],
    envelope: 'white'
  },
  clearwater: {
    name: 'ClearWater UK',
    logo: 'assets/logos/clearwater.png',
    address: ['New Accounts', '8 Canal Street', 'Wakefield', 'WF1 3TR'],
    envelope: 'brown'
  },
  swift: {
    name: 'Swift Mobile',
    logo: 'assets/logos/swift-mobile.png',
    address: ['Customer Services', '21 Digital House', 'Manchester', 'M1 4BR'],
    envelope: 'white-alt'
  },
  homenet: {
    name: 'HomeNet Broadband',
    logo: 'assets/logos/homenet.png',
    address: ['Accounts Department', '3 Riverside Court', 'Sheffield', 'S1 9LT'],
    envelope: 'urgent'
  },
  council: {
    name: 'City Council Services',
    logo: 'assets/logos/council.png',
    address: ['Revenue Department', '32 Civic Hall', 'Leeds', 'LS1 1UR'],
    envelope: 'white'
  },
  primerent: {
    name: 'PrimeRent Ltd',
    logo: 'assets/logos/primerent.png',
    address: ['Tenancy Services', '9 Regent Square', 'Leeds', 'LS2 8RA'],
    envelope: 'brown'
  },

  pizzaflyer: {
    name: 'Joe’s Pizza',
    logo: 'assets/logos/joes-pizza.png',
    address: ['Promotions Department', '14 High Street', 'Leeds', 'LS3 2PT'],
    envelope: 'brown'
  },
  fitlife: {
    name: 'FitLife Gym',
    logo: 'assets/logos/fitlife.png',
    address: ['Membership Team', '21 Wellington Road', 'Leeds', 'LS4 6AA'],
    envelope: 'white-alt'
  },
  ukrewards: {
    name: 'UK Rewards Centre',
    logo: 'assets/logos/uk-rewards.png',
    address: ['Claims Department', '87 Reward House', 'Birmingham', 'B1 9TR'],
    envelope: 'urgent'
  },
  parcelalert: {
    name: 'Parcel Delivery Alert',
    logo: 'assets/logos/parcel-alert.png',
    address: ['Customer Support', '6 Sorting Office Way', 'Coventry', 'CV2 4PQ'],
    envelope: 'white'
  },
  energyswitch: {
    name: 'Energy Switch UK',
    logo: 'assets/logos/energy-switch.png',
    address: ['Customer Team', '41 Market Lane', 'Leeds', 'LS1 7HF'],
    envelope: 'white'
  },
  communitynews: {
    name: 'Community News',
    logo: 'assets/logos/community-news.png',
    address: ['Local Notice Team', '2 Civic Square', 'Leeds', 'LS1 1AA'],
    envelope: 'white-alt'
  }
};

const envelopeBackgrounds = {
  white: 'assets/envelopes/white.png',
  brown: 'assets/envelopes/brown.png',
  urgent: 'assets/envelopes/urgent.png',
  'white-alt': 'assets/envelopes/white-alt.png'
};

const letterTemplates = [
  {
    id: 'bright-welcome',
    companyKey: 'bright',
    date: '7 April 2026',
    ref: 'BE-20451',
    tag: 'Welcome pack',
    style: 'info',
    subject: 'Welcome to Bright Energy - set up your monthly direct debit',
    prompt: 'This is a welcome letter for a new energy account. What should you do next?',
    correctAction: 'directdebit',
    feedback: 'Correct. This is a new account and the letter asks you to set up a direct debit for future monthly payments.',
    nextStep: 'Set up a direct debit so the monthly bill can be paid automatically.',
    calloutTitle: 'What this letter is telling you',
    calloutBody: 'A new tenant account has started. The company needs the customer to set up a monthly direct debit before the first payment date.',
    amount: '£78.00',
    dueDate: '15 May 2026',
    actionSummary: 'Set up direct debit',
    body: [
      'Thank you for choosing Bright Energy for your gas and electricity supply at your new address. Your account has now been opened and your energy supply started on 5 April 2026.',
      'To keep your account up to date, please set up a monthly direct debit. Your estimated monthly payment is £78.00 and your first collection date will be 15 May 2026.',
      'You do not need to make a card payment today. Instead, you should complete the direct debit instruction so your future payments are collected automatically each month.',
      'If we do not receive your direct debit instruction before 10 May 2026, your account may remain unpaid and you may receive a reminder letter.'
    ]
  },
  {
    id: 'bright-bill',
    companyKey: 'bright',
    date: '14 April 2026',
    ref: 'BE-21907',
    tag: 'Payment due',
    style: 'warning',
    subject: 'Your energy bill is due soon',
    prompt: 'This letter contains an amount and a due date. What should you do?',
    correctAction: 'payment',
    feedback: 'Correct. The letter says the bill must be paid by the due date, so you should make a payment.',
    nextStep: 'Make a payment now using the mock card page.',
    calloutTitle: 'Important details to find',
    calloutBody: 'Bill amount: £46.25. Payment due by: 28 April 2026.',
    amount: '£46.25',
    dueDate: '28 April 2026',
    actionSummary: 'Make payment',
    body: [
      'This is your latest statement for the period ending 12 April 2026. The total amount now due on your account is £46.25.',
      'Please make payment by 28 April 2026 to avoid your account falling into arrears. You can pay online using a debit card or through your bank.',
      'If you have already made this payment in the last 48 hours, you can ignore this reminder. Otherwise, action is required before the due date shown above.'
    ]
  },
  {
    id: 'swift-mobile-confirm',
    companyKey: 'swift',
    date: '10 April 2026',
    ref: 'SM-55890',
    tag: 'Confirmation',
    style: 'info',
    subject: 'We have received your monthly payment',
    prompt: 'This letter confirms a payment has already been received. What should you do?',
    correctAction: 'ignore',
    feedback: 'Correct. This is a confirmation letter. No urgent action is needed.',
    nextStep: 'You can close the letter and move on to another envelope.',
    calloutTitle: 'Key point',
    calloutBody: 'This letter is for information only. It confirms the account is up to date.',
    amount: '£22.00',
    dueDate: 'No payment due',
    actionSummary: 'No action needed',
    body: [
      'Thank you. We have received your payment of £22.00 for your monthly mobile service and your account is now up to date.',
      'No further action is needed at this time. Your next bill will be issued in May 2026 and will be shown in your online account in the usual way.',
      'Please keep this letter for your records.'
    ]
  },
  {
    id: 'homenet-reminder',
    companyKey: 'homenet',
    date: '16 April 2026',
    ref: 'HN-77210',
    tag: 'Reminder notice',
    style: 'urgent',
    subject: 'Reminder - your broadband payment is overdue',
    prompt: 'This letter says a payment is overdue. What should you do?',
    correctAction: 'payment',
    feedback: 'Correct. The account is overdue, so the right action is to make a payment now.',
    nextStep: 'Pay the overdue balance using the payment page.',
    calloutTitle: 'Urgent information',
    calloutBody: 'Overdue balance: £31.99. Please pay immediately.',
    amount: '£31.99',
    dueDate: 'Pay immediately',
    actionSummary: 'Make payment',
    body: [
      'Our records show that your broadband bill for £31.99 has not yet been paid. The original due date was 11 April 2026.',
      'Please make payment immediately to prevent further reminder activity on your account. If your payment remains outstanding, your services could be affected.',
      'If you are unable to pay today, please contact us as soon as possible to discuss your options.'
    ]
  },
  {
    id: 'clearwater-switch',
    companyKey: 'clearwater',
    date: '19 April 2026',
    ref: 'CW-39012',
    tag: 'New supply',
    style: 'warning',
    subject: 'Your water supplier account has changed',
    prompt: 'This letter explains that a new supply account has started. What should you do?',
    correctAction: 'directdebit',
    feedback: 'Correct. This letter says a new account has been opened and asks for a direct debit instruction.',
    nextStep: 'Set up a direct debit for the new supplier account.',
    calloutTitle: 'What changed?',
    calloutBody: 'A new account has been created and a direct debit must be set up before the first bill date.',
    amount: '£18.50',
    dueDate: '6 May 2026',
    actionSummary: 'Set up direct debit',
    body: [
      'We are writing to confirm that a new customer account has been opened for your address following your recent move. Your first monthly charge will be £18.50 from 6 May 2026.',
      'To make sure future payments are collected on time, please complete a direct debit instruction before 30 April 2026.',
      'You do not need to make a one-off card payment today unless you have already received a separate bill showing an amount overdue.'
    ]
  },
  {
    id: 'bright-price-change',
    companyKey: 'bright',
    date: '20 April 2026',
    ref: 'BE-23011',
    tag: 'Important info',
    style: 'info',
    subject: 'Changes to your tariff from 1 June 2026',
    prompt: 'This is important information, but does it need urgent action today?',
    correctAction: 'ignore',
    feedback: 'Correct. This letter gives information about future prices. It does not ask for payment or a direct debit today.',
    nextStep: 'No urgent action is needed now. Keep the information for later.',
    calloutTitle: 'Read carefully',
    calloutBody: 'This is a price change notice. It is information only.',
    amount: 'No payment due',
    dueDate: 'No action date',
    actionSummary: 'No action needed',
    body: [
      'We are writing to let you know that the unit price for your electricity will change from 1 June 2026 as part of our latest tariff review.',
      'This letter is for information only. You do not need to make a payment because of this notice and no further action is required today.',
      'Your future bills will show the new prices automatically.'
    ]
  },
  {
    id: 'council-tax-reminder',
    companyKey: 'council',
    date: '23 April 2026',
    ref: 'CC-11082',
    tag: 'Reminder',
    style: 'warning',
    subject: 'Council tax instalment due on 30 April 2026',
    prompt: 'This letter shows a date when an instalment must be paid. What should you do?',
    correctAction: 'payment',
    feedback: 'Correct. The instalment is due, so payment is the right action.',
    nextStep: 'Use the payment page to pay the instalment.',
    calloutTitle: 'Payment information',
    calloutBody: 'Amount due now: £92.00. Payment date: 30 April 2026.',
    amount: '£92.00',
    dueDate: '30 April 2026',
    actionSummary: 'Make payment',
    body: [
      'This letter is to remind you that your next council tax instalment of £92.00 is due on 30 April 2026.',
      'Please make payment on or before the due date shown above. If payment is not made, your account may fall behind and further reminders may be sent.',
      'You can pay online or through your bank using the methods shown in your account information.'
    ]
  },
  {
    id: 'primerent-dd-change',
    companyKey: 'primerent',
    date: '24 April 2026',
    ref: 'PR-88051',
    tag: 'Tenancy notice',
    style: 'warning',
    subject: 'New tenancy payment arrangement needed',
    prompt: 'This letter says rent will start on a new tenancy agreement. What should you do?',
    correctAction: 'directdebit',
    feedback: 'Correct. The letter says a new rent collection arrangement must be set up.',
    nextStep: 'Set up a direct debit for the new rent payment arrangement.',
    calloutTitle: 'New arrangement needed',
    calloutBody: 'A new tenancy has started. Set up direct debit before 1 May 2026.',
    amount: '£425.00',
    dueDate: '1 May 2026',
    actionSummary: 'Set up direct debit',
    body: [
      'We are pleased to confirm the start of your new tenancy agreement. Rent for this property will be £425.00 per month, beginning on 1 May 2026.',
      'Please complete a direct debit instruction so that future monthly rent can be collected automatically and your tenancy account stays up to date.',
      'You do not need to make a one-off card payment from this letter unless you have separately been told that a payment has been missed.'
    ]
  },

  {
    id: 'pizza-offer',
    companyKey: 'pizzaflyer',
    date: '26 April 2026',
    ref: 'JP-55108',
    tag: 'Advert',
    style: 'info',
    subject: 'Half price pizza this weekend',
    prompt: 'This is an advert. What should you do?',
    correctAction: 'ignore',
    feedback: 'Correct. This is junk mail. It does not need action.',
    nextStep: 'You can ignore this and move on.',
    calloutTitle: 'What type of post is this?',
    calloutBody: 'This is a promotion. There is no bill, no direct debit and no payment needed.',
    amount: 'No payment due',
    dueDate: 'No action date',
    actionSummary: 'No action needed',
    useName: false,
    body: [
      'To the Occupier, enjoy 50% off large pizzas this weekend at Joe’s Pizza.',
      'This is a promotional offer only. You do not need to make a payment or reply unless you want the offer.',
      'This leaflet can be ignored if it is not needed.'
    ]
  },
  {
    id: 'gym-promo',
    companyKey: 'fitlife',
    date: '27 April 2026',
    ref: 'FL-30214',
    tag: 'Promotion',
    style: 'info',
    subject: 'Join FitLife Gym today',
    prompt: 'This letter is offering a service. What should you do?',
    correctAction: 'ignore',
    feedback: 'Correct. This is promotional post, so no action is needed.',
    nextStep: 'You can ignore this letter.',
    calloutTitle: 'Important clue',
    calloutBody: 'This is an advert. It is not asking for a bill payment.',
    amount: 'No payment due',
    dueDate: 'No action date',
    actionSummary: 'No action needed',
    useName: false,
    body: [
      'To the Occupier, join FitLife Gym now and get your first month free.',
      'This is a sales promotion for local gym membership. There is no amount due now and no direct debit has been set up.',
      'If you do not want the offer, no action is needed.'
    ]
  },
  {
    id: 'prize-draw-scam',
    companyKey: 'ukrewards',
    date: '28 April 2026',
    ref: 'UR-99145',
    tag: 'Prize draw',
    style: 'urgent',
    subject: 'You have won a cash prize',
    prompt: 'This letter says you have won a prize. What should you do?',
    correctAction: 'ignore',
    feedback: 'Correct. This looks like a scam or junk mail and should be ignored.',
    nextStep: 'Do not reply or pay anything.',
    calloutTitle: 'Warning sign',
    calloutBody: 'Prize draw letters can be scams. Be careful if they ask for money or personal details.',
    amount: '£0.00',
    dueDate: 'No safe action date',
    actionSummary: 'Ignore',
    useName: false,
    body: [
      'Congratulations. You have been selected to receive a £1,000 cash prize in our special prize draw.',
      'To release your prize, you must reply today and send a small processing payment.',
      
    ]
  },
  {
    id: 'delivery-fee-scam',
    companyKey: 'parcelalert',
    date: '29 April 2026',
    ref: 'PD-11802',
    tag: 'Action required',
    style: 'urgent',
    subject: 'Missed parcel delivery fee',
    prompt: 'This says you must pay a small fee to get a parcel. What should you do?',
    correctAction: 'ignore',
    feedback: 'Correct. This looks like a scam letter and should be ignored.',
    nextStep: 'Do not pay the fee.',
    calloutTitle: 'Warning sign',
    calloutBody: 'Scam letters may ask for a small payment quickly to make you panic.',
    amount: '£1.99',
    dueDate: 'Immediately',
    actionSummary: 'Ignore',
    useName: false,
    body: [
      'We attempted to deliver your parcel today but were unable to complete delivery.',
      'Please make a payment of £1.99 immediately to rearrange delivery.',
      
    ]
  },
  {
    id: 'energy-switch-occupier',
    companyKey: 'energyswitch',
    date: '30 April 2026',
    ref: 'ES-44028',
    tag: 'To the occupier',
    style: 'info',
    subject: 'Save money on your energy bills',
    prompt: 'This letter is addressed to the occupier and is offering information. What should you do?',
    correctAction: 'ignore',
    feedback: 'Correct. This is general marketing post and can be ignored.',
    nextStep: 'Move on to another letter.',
    calloutTitle: 'Important clue',
    calloutBody: 'It is addressed to the occupier and is not asking for payment on an existing account.',
    amount: 'No payment due',
    dueDate: 'No action date',
    actionSummary: 'No action needed',
    useName: false,
    body: [
      'To the Occupier, you may be able to save money by changing your energy supplier.',
      'This is general information only. It is not a bill and there is no payment due.',
      'You do not need to take action from this letter.'
    ]
  },
  {
    id: 'community-notice',
    companyKey: 'communitynews',
    date: '1 May 2026',
    ref: 'CN-77831',
    tag: 'To the occupier',
    style: 'info',
    subject: 'Local community notice',
    prompt: 'This is a general notice for local residents. What should you do?',
    correctAction: 'ignore',
    feedback: 'Correct. This is information only and does not need action.',
    nextStep: 'You can ignore it and continue.',
    calloutTitle: 'Key point',
    calloutBody: 'This is a general notice, not a bill or payment request.',
    amount: 'No payment due',
    dueDate: 'No action date',
    actionSummary: 'No action needed',
    useName: false,
    body: [
      'To the Occupier, please read this notice about local services and changes in your area.',
      'There is no amount due and no action is required today.',
      'Keep the information if needed, or ignore it.'
    ]
  }
];

const state = {
  learner: null,
  currentLetter: null,
  progress: JSON.parse(localStorage.getItem('billsAppProgress') || '{}'),
  visibleLetters: []
};

const setupScreen = document.getElementById('setupScreen');
const mailScreen = document.getElementById('mailScreen');
const setupForm = document.getElementById('setupForm');
const mailGrid = document.getElementById('mailGrid');
const letterModal = document.getElementById('letterModal');
const letterPaper = document.getElementById('letterPaper');
const actionOptions = document.getElementById('actionOptions');
const feedbackBox = document.getElementById('feedbackBox');
const nextStepBox = document.getElementById('nextStepBox');
const letterPrompt = document.getElementById('letterPrompt');
const paymentModal = document.getElementById('paymentModal');
const ddModal = document.getElementById('ddModal');
const guideModal = document.getElementById('guideModal');
const helpBtn = document.getElementById('helpBtn');

const paymentForm = document.getElementById('paymentForm');
const ddForm = document.getElementById('ddForm');
const paymentError = document.getElementById('paymentError');
const ddError = document.getElementById('ddError');
const paymentSuccess = document.getElementById('paymentSuccess');
const ddSuccess = document.getElementById('ddSuccess');
const cardNumberInput = document.getElementById('cardNumber');
const expiryInput = document.getElementById('expiry');
const cvvInput = document.getElementById('cvv');
const sortCodeInput = document.getElementById('sortCode');
const accountNumberInput = document.getElementById('accountNumber');

function getLearner() {
  const saved = localStorage.getItem('billsAppLearner');
  return saved ? JSON.parse(saved) : null;
}

function saveLearner(learner) {
  localStorage.setItem('billsAppLearner', JSON.stringify(learner));
}

function friendlyStatus(letterId) {
  return state.progress[letterId] || 'Not completed';
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getRandomDay(min = 1, max = 28) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function generateDate(offsetDays = 0) {
  const now = new Date();
  const randomDay = getRandomDay();

  const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    randomDay + offsetDays
  );

  return formatDate(date);
}

function pickVisibleLetters() {
  return shuffleArray(letterTemplates)
    .slice(0, 6)
    .map(letter => {

      const baseDate = generateDate(0);

      // Only generate due date if it's a real one
      let newDueDate = letter.dueDate;

      if (
        letter.dueDate !== 'No payment due' &&
        letter.dueDate !== 'No action date' &&
        letter.dueDate !== 'No safe action date' &&
        letter.dueDate !== 'Immediately'
      ) {
        newDueDate = generateDate(5 + Math.floor(Math.random() * 10));
      }

      return {
        ...letter,
        date: baseDate,
        dueDate: newDueDate
      };
    });
}

function getRecipientLines(letter, learner) {
  const recipientName = letter.useName === false ? 'The Occupier' : learner.name;
  return [recipientName, learner.address1, learner.address2, learner.postcode];
}

function getCompanyLogoMarkup(company) {
  if (company.logo) {
    return `<img class="company-logo" src="${company.logo}" alt="${company.name} logo">`;
  }
  return `<div class="company-logo company-logo-fallback">${company.name}</div>`;
}

function renderMail() {
  const learner = state.learner;
  mailGrid.innerHTML = '';

  state.visibleLetters.forEach((letter) => {
    const company = companies[letter.companyKey];
    const recipientLines = getRecipientLines(letter, learner);

    const card = document.createElement('button');
    card.type = 'button';
    card.className = `envelope ${letter.style}`;
    card.style.backgroundImage = `url('${envelopeBackgrounds[company.envelope]}')`;

    card.innerHTML = `
      ${getCompanyLogoMarkup(company)}
      <div class="date">${letter.date}</div>
      <div class="sender-address">${company.address[0]}<br>${company.address[1]}<br>${company.address[2]} ${company.address[3]}</div>
      <div class="mail-tag">${letter.tag}</div>
      <div class="window">
        ${recipientLines.join('<br>')}
      </div>
      <div class="mail-ref">Ref: ${letter.ref}<br><span class="status-chip">${friendlyStatus(letter.id)}</span></div>
    `;

    card.addEventListener('click', () => openLetter(letter));
    mailGrid.appendChild(card);
  });
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function wrapTerm(text, term) {
  if (!term || term === 'No payment due' || term === 'No action date' || term === 'No safe action date' || term === '£0.00') {
    return text;
  }
  const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
  return text.replace(regex, '<span class="key-highlight">$1</span>');
}

function highlightImportantText(text, letter) {
  let result = text;

  const terms = [
    letter.amount,
    letter.dueDate,
    'direct debit',
    'payment',
    'pay',
    'overdue',
    'due',
    'urgent',
    'prize draw',
    'final notice',
    'confirmation',
    'ignore',
    'new account',
    'bill'
  ];

  terms.forEach((term) => {
    result = wrapTerm(result, term);
  });

  return result;
}

function buildLetterBody(letter) {
  return letter.body
    .map((paragraph) => `<p>${highlightImportantText(paragraph, letter)}</p>`)
    .join('');
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function wrapTerm(text, term) {
  if (!term || term === 'No payment due' || term === 'No action date' || term === 'Pay immediately') {
    return text;
  }
  const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
  return text.replace(regex, '<span class="key-highlight">$1</span>');
}

function highlightImportantText(text, letter) {
  let result = text;

  const terms = [
    letter.amount,
    letter.dueDate,
    'direct debit',
    'payment',
    'pay',
    'overdue',
    'due',
    'urgent',
    'reminder',
    'confirmation',
    'new account',
    'bill'
  ];

  terms.forEach((term) => {
    result = wrapTerm(result, term);
  });

  return result;
}

function openLetter(letter) {
  const learner = state.learner;
  const company = companies[letter.companyKey];
  state.currentLetter = letter;
  feedbackBox.className = 'feedback hidden';
  feedbackBox.innerHTML = '';
  nextStepBox.className = 'next-step hidden';
  nextStepBox.innerHTML = '';
  letterPrompt.textContent = letter.prompt;
  actionOptions.innerHTML = '';

  const recipientName = letter.useName === false ? 'The Occupier' : learner.name;

  letterPaper.innerHTML = `
    <div class="letter-head">
      <div class="company-line">
        <img src="${company.logo}" alt="${company.name} logo">
        <div class="company-mark">
          <h4>${company.name}</h4>
          <p>${company.address.join('<br>')}</p>
        </div>
      </div>
      <div class="letter-meta">
        <p><strong>Date:</strong> <span class="key-highlight">${letter.date}</span></p>
        <p><strong>Reference:</strong> ${letter.ref}</p>
      </div>
    </div>

    <div class="recipient-box">
      <strong>${recipientName}</strong><br>
      ${learner.address1}<br>
      ${learner.address2}<br>
      ${learner.postcode}
    </div>

    <p class="subject-line">${highlightImportantText(letter.subject, letter)}</p>

    <div class="letter-body">
      ${letter.body.map((paragraph) => `<p>${highlightImportantText(paragraph, letter)}</p>`).join('')}
      <div id="letterHelp" class="letter-help hidden">
        <strong>Help with this letter</strong>
        <div class="letter-help-box highlightable">
          <p><strong>Amount:</strong> ${letter.amount}</p>
          <p><strong>Due date:</strong> ${letter.dueDate}</p>
          <p><strong>Action:</strong> ${letter.actionSummary}</p>
          <p><strong>${letter.calloutTitle}</strong><br>${letter.calloutBody}</p>
        </div>
      </div>
      <p>Yours sincerely,</p>
      <p><strong>${company.name}</strong></p>
    </div>
  `;

  const options = [
    { value: 'ignore', label: 'Ignore for now' },
    { value: 'directdebit', label: 'Set up direct debit' },
    { value: 'payment', label: 'Make payment' }
  ];

  options.forEach((option) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.type = 'button';
    btn.textContent = option.label;
    btn.addEventListener('click', () => chooseAction(option.value));
    actionOptions.appendChild(btn);
  });

  letterModal.classList.remove('hidden');
}

function chooseAction(action) {
  const letter = state.currentLetter;
  const correct = action === letter.correctAction;

  feedbackBox.className = `feedback ${correct ? 'success' : ''}`;
  feedbackBox.innerHTML = correct
    ? `<strong>Well done.</strong><br>${letter.feedback}`
    : `<strong>Try again.</strong><br>This letter is better matched with a different action. Look again at the date, any money shown, and the words the company is using.`;

  if (!correct) {
    nextStepBox.className = 'next-step';
    nextStepBox.innerHTML = `<strong>Helpful tip:</strong> ${letter.calloutBody}`;
    return;
  }

  state.progress[letter.id] = `Completed: ${
    action === 'payment'
      ? 'Payment made'
      : action === 'directdebit'
        ? 'Direct debit set up'
        : 'No action needed'
  }`;

  localStorage.setItem('billsAppProgress', JSON.stringify(state.progress));
  renderMail();

  if (action === 'payment') {
    openPayment(letter);
  } else if (action === 'directdebit') {
    openDirectDebit(letter);
  } else {
    nextStepBox.className = 'next-step';
    nextStepBox.innerHTML = `<strong>Next step:</strong> ${letter.nextStep}`;
  }
}

function openPayment(letter) {
  const company = companies[letter.companyKey];
  document.getElementById('paymentTitle').textContent = `Pay ${company.name}`;
  document.getElementById('paymentDescription').textContent = `Amount to pay: ${letter.amount}. Enter the mock card details below.`;
  document.getElementById('paymentForm').reset();
  document.getElementById('paymentSuccess').className = 'feedback success hidden';
  document.getElementById('paymentError').className = 'feedback error hidden';
  document.getElementById('paymentError').innerHTML = '';
  clearFieldState(
    document.getElementById('cardName'),
    document.getElementById('cardNumber'),
    document.getElementById('expiry'),
    document.getElementById('cvv')
  );
  paymentModal.classList.remove('hidden');
}

function openDirectDebit(letter) {
  const company = companies[letter.companyKey];
  document.getElementById('ddTitle').textContent = `Set up direct debit for ${company.name}`;
  document.getElementById('ddDescription').textContent = `Estimated payment: ${letter.amount}. Complete the instruction below.`;
  document.getElementById('ddForm').reset();
  document.getElementById('ddSuccess').className = 'feedback success hidden';
  document.getElementById('ddError').className = 'feedback error hidden';
  document.getElementById('ddError').innerHTML = '';
  clearFieldState(
    document.getElementById('accountHolder'),
    document.getElementById('sortCode'),
    document.getElementById('accountNumber')
  );
  ddModal.classList.remove('hidden');
}

function closeModal(modal) {
  modal.classList.add('hidden');
}

function clearHighlights() {
  document.querySelectorAll('.highlightable').forEach((item) => item.classList.remove('highlight-box'));
  document.querySelectorAll('.key-highlight').forEach((item) => item.classList.remove('key-highlight-active'));
}

helpBtn.addEventListener('click', () => {
  const helpSection = document.getElementById('letterHelp');
  if (!helpSection) return;

  helpSection.classList.remove('hidden');
  helpSection.scrollIntoView({ behavior: 'smooth', block: 'end' });

  document.querySelectorAll('.highlightable').forEach((item) => item.classList.add('highlight-box'));
  document.querySelectorAll('.key-highlight').forEach((item) => item.classList.add('key-highlight-active'));
});

document.querySelectorAll('[data-close="true"]').forEach((element) => {
  element.addEventListener('click', () => {
    closeModal(letterModal);
    clearHighlights();
  });
});

document.querySelectorAll('[data-close-payment="true"]').forEach((element) => {
  element.addEventListener('click', () => closeModal(paymentModal));
});

document.querySelectorAll('[data-close-dd="true"]').forEach((element) => {
  element.addEventListener('click', () => closeModal(ddModal));
});

document.querySelectorAll('[data-close-guide="true"]').forEach((element) => {
  element.addEventListener('click', () => closeModal(guideModal));
});

document.getElementById('showGuideBtn').addEventListener('click', () => {
  guideModal.classList.remove('hidden');
});

document.getElementById('resetProgressBtn').addEventListener('click', () => {
  localStorage.removeItem('billsAppProgress');
  localStorage.removeItem('billsAppLearner');
  location.reload();
});

setupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  state.learner = {
    name: document.getElementById('studentName').value.trim(),
    address1: document.getElementById('address1').value.trim(),
    address2: document.getElementById('address2').value.trim(),
    postcode: document.getElementById('postcode').value.trim().toUpperCase()
  };

  saveLearner(state.learner);
  setupScreen.classList.add('hidden');
  mailScreen.classList.remove('hidden');
  state.visibleLetters = pickVisibleLetters();
  renderMail();
});

function digitsOnly(value) {
  return value.replace(/\D/g, '');
}

function formatCardNumber(value) {
  return digitsOnly(value).slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(value) {
  const digits = digitsOnly(value).slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function formatSortCode(value) {
  const digits = digitsOnly(value).slice(0, 6);
  const parts = digits.match(/.{1,2}/g) || [];
  return parts.join('-');
}

function clearFieldState(...fields) {
  fields.forEach((field) => field.classList.remove('invalid'));
}

function showError(box, message, fields = []) {
  box.className = 'feedback error';
  box.innerHTML = `<strong>Check your details.</strong><br>${message}`;
  fields.forEach((field) => field.classList.add('invalid'));
}

function hideBox(box) {
  box.className = box.className.includes('success')
    ? 'feedback success hidden'
    : 'feedback error hidden';
  box.innerHTML = '';
}

cardNumberInput.addEventListener('input', () => {
  cardNumberInput.value = formatCardNumber(cardNumberInput.value);
  cardNumberInput.classList.remove('invalid');
});

expiryInput.addEventListener('input', () => {
  expiryInput.value = formatExpiry(expiryInput.value);
  expiryInput.classList.remove('invalid');
});

cvvInput.addEventListener('input', () => {
  cvvInput.value = digitsOnly(cvvInput.value).slice(0, 3);
  cvvInput.classList.remove('invalid');
});

sortCodeInput.addEventListener('input', () => {
  sortCodeInput.value = formatSortCode(sortCodeInput.value);
  sortCodeInput.classList.remove('invalid');
});

accountNumberInput.addEventListener('input', () => {
  accountNumberInput.value = digitsOnly(accountNumberInput.value).slice(0, 8);
  accountNumberInput.classList.remove('invalid');
});

document.getElementById('cardName').addEventListener('input', (event) => {
  event.target.classList.remove('invalid');
});

document.getElementById('accountHolder').addEventListener('input', (event) => {
  event.target.classList.remove('invalid');
});

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  clearFieldState(document.getElementById('cardName'), cardNumberInput, expiryInput, cvvInput);
  hideBox(paymentError);
  hideBox(paymentSuccess);

  const cardName = document.getElementById('cardName');
  const cardDigits = digitsOnly(cardNumberInput.value);
  const expiryDigits = digitsOnly(expiryInput.value);
  const cvvDigits = digitsOnly(cvvInput.value);

  if (!cardName.value.trim()) {
    showError(paymentError, 'Enter the name on the card.', [cardName]);
    return;
  }

  if (cardDigits.length !== 16) {
    showError(paymentError, 'Card number must have exactly 16 digits.', [cardNumberInput]);
    return;
  }

  if (expiryDigits.length !== 4) {
    showError(paymentError, 'Expiry must have 4 digits in MM/YY format.', [expiryInput]);
    return;
  }

  const month = Number(expiryDigits.slice(0, 2));
  if (month < 1 || month > 12) {
    showError(paymentError, 'Expiry month must be between 01 and 12.', [expiryInput]);
    return;
  }

  if (cvvDigits.length !== 3) {
    showError(paymentError, 'Security code must have exactly 3 digits.', [cvvInput]);
    return;
  }

  paymentSuccess.className = 'feedback success';
  paymentSuccess.innerHTML = '<strong>Payment successful.</strong><br>Your mock payment has been accepted. This bill can now be treated as paid.';
});

ddForm.addEventListener('submit', (event) => {
  event.preventDefault();

  clearFieldState(document.getElementById('accountHolder'), sortCodeInput, accountNumberInput);
  hideBox(ddError);
  hideBox(ddSuccess);

  const accountHolder = document.getElementById('accountHolder');
  const sortDigits = digitsOnly(sortCodeInput.value);
  const accountDigits = digitsOnly(accountNumberInput.value);

  if (!accountHolder.value.trim()) {
    showError(ddError, 'Enter the account holder name.', [accountHolder]);
    return;
  }

  if (sortDigits.length !== 6) {
    showError(ddError, 'Sort code must have 6 digits and look like 12-34-56.', [sortCodeInput]);
    return;
  }

  if (accountDigits.length !== 8) {
    showError(ddError, 'Account number must have exactly 8 digits.', [accountNumberInput]);
    return;
  }

  ddSuccess.className = 'feedback success';
  ddSuccess.innerHTML = '<strong>Direct debit set up.</strong><br>The bill will now be collected automatically on the chosen date each month.';
});

function init() {
  state.learner = getLearner();

  if (state.learner) {
    setupScreen.classList.add('hidden');
    mailScreen.classList.remove('hidden');
    state.visibleLetters = pickVisibleLetters();
    renderMail();
  }
}

init();