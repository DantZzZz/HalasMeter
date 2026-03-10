const APP_CONFIG = {
  shareTitle: "מדד הדובדבן של חלאסרטן",
  shareCta: "בדקו איפה אתם עומדים במדד הדובדבן של חלאסרטן",
  questionHelperText: "בחרו תשובה אחת. אפשר תמיד לחזור ולשנות.",
  infinityResult: {
    label: "המדד נשבר",
    miniDescription: "כשיש גם סרטן וגם טיל על הבית, אין לנו דרך נורמלית לסכם את זה.",
    description: "אם יש לך סרטן ונפל טיל על הבית, אין פה באמת ניקוד. יש פה חוויה שאף אחד לא אמור לעבור."
  },
  questions: [
    {
      id: "q1",
      number: "01",
      prompt: "באיזה סטטוס תפסה אותך ההתראה?",
      options: [
        { label: "עברו שנתיים ומעלה מאז הטיפול האחרון", value: 5 },
        { label: "בין שנה לשנתיים", value: 10 },
        { label: "עד שנה מטיפול אחרון", value: 15 },
        { label: "אני בפאקינג טיפולים", value: 20 }
      ]
    },
    {
      id: "q2",
      number: "02",
      prompt: "באיזור מגוריך יש הרבה אזעקות?",
      options: [
        { label: "וואלה מלא", value: 10 },
        { label: "כמו כולם", value: 0 },
        { label: "שששש... נראה לי האיראנים שכחו שהישוב שלי קיים", value: -10 }
      ]
    },
    {
      id: "q3",
      number: "03",
      prompt: "ואם יש אזעקה, לאן פנינו?",
      options: [
        { label: "לממ\"ד", value: 0 },
        { label: "לממ\"ק", value: 5 },
        { label: "למקלט של הבניין", value: 10 },
        { label: "לגג לצלם ירוטים - כבר יש לי סרטן, מה יש לי להפסיד?", value: 15 }
      ]
    },
    {
      id: "q4",
      number: "04",
      prompt: "אגב, המלחמה עוברת עליך בבית?",
      options: [
        { label: "כן, אני בבית", value: 0 },
        { label: "כן, אבל יש אצלי בני משפחה שאין להם ממ\"ד", value: 5 },
        { label: "לא, אני אצל המשפחה שלי", value: 10 }
      ]
    },
    {
      id: "q5",
      number: "05",
      prompt: "יש מקום לחוויה הסרטנית שלך בתוך כל השיט הזה?",
      options: [
        { label: "המלחמה גובה מחיר אבל תמיד דואגים לי לכיסא בממ\"ד", value: 5 },
        { label: "אין מקום לחוויה הסרטנית שלי אפילו ביני לבין עצמי", value: 10 },
        { label: "אני בעיקר חווה אשמה סביב כל מחשבה על זה שקשה לי יותר בגלל הסרטן", value: 15 },
        { label: "אני גמור.ה ואני לבד בזה", value: 30 }
      ]
    },
    {
      id: "q6",
      number: "06",
      prompt: "יצא לך לאוורר קצת תחושות או לחלוק מרחב עם עוד מסורטנים?",
      options: [
        { label: "כן, בפעילות של חלאס", value: 0 },
        { label: "כן, בקבוצת ווטסאפ עם עוד מסורטנים", value: 5 },
        { label: "בסושיאל של חלאס או בקבוצות פייסבוק של חלאס", value: 10 },
        { label: "בשיחה 1:1 עם חבר.ה לסרטן", value: 15 },
        { label: "לא יצא ולא ביצה", value: 25 }
      ]
    }
  ],
  bonuses: [
    { id: "bonus-g", label: "ביטלו לי תור ל-MRI בגלל המצב", value: 20, display: "+20" },
    { id: "bonus-h", label: "קיבלתי כימו בחניון", value: 30, display: "+30" },
    { id: "bonus-i", label: "אני בבידוד בגלל ספירות נמוכות במקלט עם עוד עשרים איש", value: 100, display: "+100" },
    { id: "bonus-j", label: "חסכתי ריצה למקלט כי כבר הייתי בבדיקת PET", value: -20, display: "-20" },
    { id: "bonus-k", label: "לא החלפתי טרנינג כבר שלושה ימים ואני מפחד.ת להריח את עצמי כי אין לי מספיק זופרן", value: 8, display: "+8" },
    { id: "bonus-l", label: "אני על סטרואידים וכל מה שיש לנשנש בממ\"ד זה קרקרים, עוגיות יבשות מהסבב הקודם וטונה במים בלי מזלג", value: 10, display: "+10" },
    { id: "bonus-m", label: "יש לי סרטן ונפל לי טיל על הבית", value: Infinity, display: "∞", isInfinity: true }
  ],
  resultBands: [
    { min: 0, max: 50, label: "דובדבן לייט", description: "המלחמה מבאסת, הסרטן מאחוריך. לך.י לעשות פילאטיס." },
    { min: 51, max: 150, label: "דובדבן קטן", description: "את.ה רשמית במועדון. יש לך סיפורים טובים לערב שישי, אבל עוד לא הגעת לשיא." },
    { min: 151, max: 300, label: "דובדבן מקצוען", description: "החיים נתנו לך לימונים, ואז זרקו עליהם רימון. מגיעה לך מדליה או לפחות קינוח עתיר קלוריות." },
    { min: 301, max: Infinity, label: "דובדבן עם גרורות", description: "רשמית אין אף אחד יותר מסכן ממך בחדר. מותר לך לא לשטוף כלים עד 2028." }
  ]
};

const BONUS_LOOKUP = new Map(APP_CONFIG.bonuses.map((bonus) => [bonus.id, bonus]));
const HEADER_PROGRESS_MAX = APP_CONFIG.resultBands.reduce(
  (max, band) => (Number.isFinite(band.max) ? Math.max(max, band.max) : max),
  0
);
const DEFAULT_SHARE_BUTTON_LABEL = "שתפו את התוצאה";

const state = {
  answers: {},
  bonuses: new Set(),
  animatedScore: 0,
  scoreAnimationFrame: null,
  isSharing: false,
  shareFeedbackTimeout: null
};

const dom = {
  questionSections: document.getElementById("question-sections"),
  bonusGrid: document.getElementById("bonus-grid"),
  headerProgress: document.getElementById("header-progress"),
  liveScore: document.getElementById("live-score"),
  resultScoreValue: document.getElementById("result-score-value"),
  resultScoreLabel: document.getElementById("result-score-label"),
  resultDescription: document.getElementById("result-description"),
  shareButton: document.getElementById("share-button"),
  shareFeedback: document.getElementById("share-feedback"),
  shareCardExport: document.getElementById("share-card-export"),
  shareCardProgress: document.getElementById("share-card-progress"),
  shareCardScoreValue: document.getElementById("share-card-score-value"),
  shareCardScoreLabel: document.getElementById("share-card-score-label"),
  shareCardDescription: document.getElementById("share-card-description"),
  infinityOverlay: document.getElementById("infinity-overlay"),
  overlayReset: document.getElementById("overlay-reset")
};

function getResultBand(score) {
  return APP_CONFIG.resultBands.find((band) => score >= band.min && score <= band.max)
    || APP_CONFIG.resultBands[APP_CONFIG.resultBands.length - 1];
}

function getCurrentScore() {
  let total = Object.values(state.answers).reduce((sum, value) => sum + value, 0);

  for (const bonusId of state.bonuses) {
    const bonus = BONUS_LOOKUP.get(bonusId);
    if (!bonus) {
      continue;
    }

    if (bonus.isInfinity) {
      return { isInfinity: true, score: 0 };
    }

    total += bonus.value;
  }

  return {
    isInfinity: false,
    score: Math.max(0, total)
  };
}

function getProgressValue(score, isInfinity = false) {
  return isInfinity ? 1 : Math.max(0, Math.min(score / HEADER_PROGRESS_MAX, 1));
}

function getShareState() {
  const { isInfinity, score } = getCurrentScore();
  const band = isInfinity ? APP_CONFIG.infinityResult : getResultBand(score);

  return {
    isInfinity,
    score,
    scoreText: isInfinity ? "∞" : String(score),
    label: band.label,
    description: band.description,
    progress: getProgressValue(score, isInfinity)
  };
}

function isQuestionnaireComplete() {
  return APP_CONFIG.questions.every((question) => typeof state.answers[question.id] === "number");
}

function setLiveFeedback(text) {
  dom.shareFeedback.textContent = text;
}

function updateShareButtonState() {
  const isComplete = isQuestionnaireComplete();
  dom.shareButton.disabled = state.isSharing || !isComplete;
  dom.shareButton.setAttribute("aria-disabled", String(dom.shareButton.disabled));
  dom.shareButton.title = isComplete ? "" : "השלימו את כל השאלות כדי לשתף";

  if (state.isSharing) {
    dom.shareButton.textContent = "מכינים תמונה...";
    return;
  }

  if (dom.shareButton.dataset.feedbackActive === "true") {
    return;
  }

  dom.shareButton.textContent = DEFAULT_SHARE_BUTTON_LABEL;
}

function setButtonFeedback(button, text) {
  window.clearTimeout(state.shareFeedbackTimeout);
  button.dataset.feedbackActive = "true";
  button.textContent = text;
  setLiveFeedback(text);
  state.shareFeedbackTimeout = window.setTimeout(() => {
    delete button.dataset.feedbackActive;
    setLiveFeedback("");
    updateShareButtonState();
  }, 1400);
}

function renderQuestions() {
  dom.questionSections.innerHTML = `
    <section class="card-section question-card">
      <div class="question-list">
        ${APP_CONFIG.questions.map((question) => `
          <section class="question-block" data-question-id="${question.id}">
            <div class="section-kicker">${question.number}</div>
            <h3 class="question-title">${question.prompt}</h3>
            <div class="option-grid" role="radiogroup" aria-label="${question.prompt}">
              ${question.options.map((option, index) => `
                <button
                  class="option-button"
                  type="button"
                  data-question-id="${question.id}"
                  data-option-index="${index}"
                  data-value="${option.value}"
                  role="radio"
                  aria-checked="false"
                  aria-pressed="false"
                >
                  <span class="option-label">${option.label}</span>
                </button>
              `).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </section>
  `;
}

function renderBonuses() {
  const regularBonuses = APP_CONFIG.bonuses.filter((bonus) => !bonus.isInfinity);
  const criticalBonus = APP_CONFIG.bonuses.find((bonus) => bonus.isInfinity);

  dom.bonusGrid.innerHTML = `
    <div class="bonus-grid-main">
      ${regularBonuses.map((bonus) => `
        <button
          class="bonus-button"
          type="button"
          data-bonus-id="${bonus.id}"
          role="switch"
          aria-checked="false"
        >
          <span class="bonus-copy">${bonus.label}</span>
          <span class="bonus-switch" aria-hidden="true">
            <span class="bonus-switch-thumb"></span>
          </span>
        </button>
      `).join("")}
    </div>
    ${criticalBonus ? `
      <div class="bonus-critical-row">
        <button
          class="bonus-button bonus-button--critical"
          type="button"
          data-bonus-id="${criticalBonus.id}"
          role="switch"
          aria-checked="false"
        >
          <span class="bonus-copy">${criticalBonus.label}</span>
          <span class="bonus-switch" aria-hidden="true">
            <span class="bonus-switch-thumb"></span>
          </span>
        </button>
      </div>
    ` : ""}
  `;
}

function updateQuestionSelection(questionId, selectedIndex) {
  document.querySelectorAll(`[data-question-id="${questionId}"].option-button`).forEach((button) => {
    const isSelected = Number(button.dataset.optionIndex) === selectedIndex;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
    button.setAttribute("aria-checked", String(isSelected));
  });
}

function updateBonusSelection(bonusId) {
  document.querySelectorAll(`[data-bonus-id="${bonusId}"]`).forEach((button) => {
    const isSelected = state.bonuses.has(bonusId);
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-checked", String(isSelected));
  });
}

function setHeaderProgress(score, isInfinity = false) {
  const progress = getProgressValue(score, isInfinity);
  dom.headerProgress.style.setProperty("--header-progress", progress.toFixed(4));
  dom.headerProgress.classList.toggle("is-active", progress > 0);
  dom.headerProgress.classList.toggle("is-infinity", isInfinity);
}

function setShareCardProgress(progress, isInfinity = false) {
  dom.shareCardProgress.style.setProperty("--share-progress", progress.toFixed(4));
  dom.shareCardProgress.classList.toggle("is-infinity", isInfinity);
}

function updateShareCard(resultState) {
  dom.shareCardScoreValue.textContent = resultState.scoreText;
  dom.shareCardScoreLabel.textContent = resultState.label;
  dom.shareCardDescription.textContent = resultState.description;
  setShareCardProgress(resultState.progress, resultState.isInfinity);
}

function animateScoreTo(target) {
  if (state.scoreAnimationFrame) {
    cancelAnimationFrame(state.scoreAnimationFrame);
    state.scoreAnimationFrame = null;
  }

  const start = state.animatedScore;
  const difference = target - start;
  const duration = 450;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(start + difference * eased);
    state.animatedScore = value;
    dom.liveScore.textContent = value;
    dom.resultScoreValue.textContent = value;
    setHeaderProgress(value);

    if (progress < 1) {
      state.scoreAnimationFrame = requestAnimationFrame(step);
    } else {
      state.scoreAnimationFrame = null;
    }
  }

  state.scoreAnimationFrame = requestAnimationFrame(step);
}

function setInfinityMode(isVisible) {
  dom.infinityOverlay.classList.toggle("is-visible", isVisible);
  dom.infinityOverlay.setAttribute("aria-hidden", String(!isVisible));
  dom.liveScore.textContent = "∞";
  dom.resultScoreValue.textContent = "∞";
  dom.resultScoreLabel.textContent = APP_CONFIG.infinityResult.label;
  dom.resultDescription.textContent = APP_CONFIG.infinityResult.description;
  setHeaderProgress(HEADER_PROGRESS_MAX, isVisible);
}

function buildShareText(resultState) {
  const url = window.location.href;
  return `קיבלתי ${resultState.label} (${resultState.scoreText}) במדד הדובדבן של חלאסרטן\n${APP_CONFIG.shareCta}\n${url}`;
}

function waitForImages(container) {
  const images = Array.from(container.querySelectorAll("img"));

  return Promise.all(images.map((image) => new Promise((resolve) => {
    if (image.complete) {
      resolve();
      return;
    }

    image.addEventListener("load", resolve, { once: true });
    image.addEventListener("error", resolve, { once: true });
  })));
}

async function generateShareImageBlob() {
  if (typeof window.html2canvas !== "function") {
    throw new Error("Share image renderer unavailable.");
  }

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  await waitForImages(dom.shareCardExport);

  const canvas = await window.html2canvas(dom.shareCardExport, {
    backgroundColor: null,
    scale: 1,
    useCORS: true,
    logging: false
  });

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Failed to create share image."));
        return;
      }

      resolve(blob);
    }, "image/png");
  });
}

function downloadBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.className = "visually-hidden";
  document.body.appendChild(helper);
  helper.select();
  document.execCommand("copy");
  helper.remove();
}

async function shareGeneratedImage(blob, resultState) {
  const filename = `halasmeter-${resultState.scoreText}.png`;
  const text = buildShareText(resultState);

  if (typeof File === "function" && typeof navigator.share === "function" && typeof navigator.canShare === "function") {
    const shareFile = new File([blob], filename, { type: "image/png" });

    if (navigator.canShare({ files: [shareFile] })) {
      await navigator.share({
        title: APP_CONFIG.shareTitle,
        text,
        url: window.location.href,
        files: [shareFile]
      });
      return "shared";
    }
  }

  downloadBlob(blob, filename);
  await copyTextToClipboard(text);
  return "downloaded";
}

function updateView() {
  const resultState = getShareState();

  if (resultState.isInfinity) {
    setInfinityMode(true);
  } else {
    dom.infinityOverlay.classList.remove("is-visible");
    dom.infinityOverlay.setAttribute("aria-hidden", "true");

    dom.resultScoreLabel.textContent = resultState.label;
    dom.resultDescription.textContent = resultState.description;

    if (!Number.isFinite(state.animatedScore)) {
      state.animatedScore = 0;
    }

    animateScoreTo(resultState.score);
  }

  updateShareCard(resultState);
  updateShareButtonState();
}

async function shareResult() {
  if (state.isSharing || !isQuestionnaireComplete()) {
    return;
  }

  const resultState = getShareState();
  updateShareCard(resultState);
  state.isSharing = true;
  updateShareButtonState();

  try {
    const blob = await generateShareImageBlob();
    const shareOutcome = await shareGeneratedImage(blob, resultState);

    if (shareOutcome === "downloaded") {
      setButtonFeedback(dom.shareButton, "התמונה ירדה");
      return;
    }

    setButtonFeedback(dom.shareButton, "מוכן לשיתוף");
  } catch (error) {
    if (error?.name === "AbortError") {
      setLiveFeedback("");
      return;
    }

    try {
      await copyTextToClipboard(buildShareText(resultState));
      setButtonFeedback(dom.shareButton, "הטקסט הועתק");
      return;
    } catch {
      setButtonFeedback(dom.shareButton, "לא הצליח");
    }
  } finally {
    state.isSharing = false;
    updateShareButtonState();
  }
}

function handleQuestionClick(event) {
  const button = event.target.closest(".option-button");
  if (!button) {
    return;
  }

  const { questionId, optionIndex, value } = button.dataset;
  state.answers[questionId] = Number(value);
  updateQuestionSelection(questionId, Number(optionIndex));
  updateView();
}

function handleBonusClick(event) {
  const button = event.target.closest(".bonus-button");
  if (!button) {
    return;
  }

  const bonusId = button.dataset.bonusId;
  if (state.bonuses.has(bonusId)) {
    state.bonuses.delete(bonusId);
  } else {
    state.bonuses.add(bonusId);
  }

  updateBonusSelection(bonusId);
  updateView();
}

function resetInfinityBonus() {
  state.bonuses.delete("bonus-m");
  updateBonusSelection("bonus-m");
  updateView();
}

function bindEvents() {
  dom.questionSections.addEventListener("click", handleQuestionClick);
  dom.bonusGrid.addEventListener("click", handleBonusClick);
  dom.shareButton.addEventListener("click", shareResult);
  dom.overlayReset.addEventListener("click", resetInfinityBonus);
}

function initializeApp() {
  renderQuestions();
  renderBonuses();
  bindEvents();
  updateView();
}

initializeApp();
