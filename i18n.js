const LOCALE_STORAGE_KEYS = {
  manual: "personal-page.locale.manual",
};

const resumeLinks = {
  en: "asset/resume_EN.pdf",
  "zh-CN": "asset/resume_CN.pdf",
};

const translations = {
  home: {
    en: {
      pageTitle: "About Me | Aaron Wang",
      "header.role": "Software Development Engineer",
      "header.contact": "Contact Me",
      "header.resume": "Resume PDF",
      "header.askGpt": "Ask Aaron's GPT",
      "hero.greetingHtml":
        "Hello, I'm <span class=\"text-blue-600\">Aaron Wang</span>",
      "hero.role": "Software Development Engineer",
      "hero.summary":
        "Hi, I'm Aaron Wang, a full-stack software engineer passionate about building scalable systems, intelligent tools, and elegant user experiences. Whether it's backend infrastructure, data pipelines, or intuitive frontend interfaces, I enjoy turning ideas into working solutions.",
      "hero.experience": "My Experience",
      "hero.projects": "View Projects",
      "section.experience": "Professional Experience",
      "exp1.title": "Software Development Engineer",
      "exp1.company": "Applications Technology Group (ATG Inc) • Duluth, GA",
      "exp1.bullets":
        "<li>Collaborated in <b>Kubernetes-based</b> deployment workflows, leveraging container orchestration to enhance application reliability and scalability.</li><li>Automated infrastructure provisioning and application deployment using Terraform and <b>GitHub Actions</b> CI/CD tools.</li><li>Designed, containerized, and deployed <b>Spring Boot</b> microservices using <b>Docker</b> to ensure consistent and scalable <b>cloud-native</b> backend architecture.</li><li>Implemented RESTful APIs with <b>Spring Boot</b>, supporting seamless integration with the <b>frontend</b> and <b>distributed systems</b>.</li><li>Integrated Spring Security for robust user authentication and role-based access control in cloud environments.</li>",
      "exp2.title": "Software Development Engineer Intern",
      "exp2.company": "HARRiS Group • Atlanta, GA",
      "exp2.bullets":
        "<li>Built internal dashboards using <b>Apache Superset</b> to visualize production metrics and support real-time decision-making.</li><li>Developed a web-based app using <b>Flask</b> and <b>React</b> to automate the slot-die-coating process, cut 28% in production time, improved 26% in quality, and enhanced image data querying and analysis speed by 20%.</li><li>Designed and deployed a multi-user management system with <b>React</b>, <b>Flask</b>, <b>HTML/CSS</b>, and <b>MySQL</b>, enabling a teamwork setting.</li><li>Automated the processes of image data collection, standardization, pre-processing, and defect labeling using <b>Python</b>.</li><li>Improved defect detection accuracy by 8% and decreased processing time by 83% through the implementation of machine learning models with <b>NumPy</b> and <b>PyTorch</b>.</li>",
      "section.projects": "Key Projects",
      "proj1.title": "Personal Portfolio Website",
      "proj1.desc":
        "Built a personal website using <b>React</b> as the frontend framework, deployed on <b>GitHub Pages</b>. The backend was implemented in <b>Go</b>, responsible for tracking visitor analytics and performing website security checks. Integrated a <b>RAG-based AI assistant</b> powered by <b>ChatGPT API</b>, which answers HR-related questions about my resume. The project demonstrates full-stack capabilities including AI integration, traffic analysis, and secure deployment.",
      "proj2.title": "HealthAI Advisor",
      "proj2.desc":
        "Developed a user login and registration system using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b>. Designed a machine learning model to analyze user health data and identify potential health risks. Implemented a Flask backend for secure user credential storage and integrated ChatGPT for text summarization and healthy lifestyle suggestions.",
      "proj3.title": "Task Manager Mobile App",
      "proj3.desc":
        "Developed a task manager mobile application including task management, account operations, and map/calendar event views. Designed and developed the frontend User Interface using <b>React Native</b> and <b>Expo Go</b>, ensuring an intuitive user experience. Created a backend system via <b>Express.js</b> and <b>MongoDB</b>, handling incoming API requests and storing user-generated information.",
      "project.repo": "GitHub Repo",
      "projects.viewAll": "View All Projects",
      "section.skills": "Skills & Expertise",
      "skills.languages": "Languages & Frameworks",
      "skills.cloud": "Cloud & DevOps",
      "skills.professional": "Professional Skills",
      "skill.leadership": "Leadership",
      "skill.communication": "Communication",
      "skill.pm": "Project Management",
      "skill.collaboration": "Team Collaboration",
      "section.education": "Education & Certifications",
      "education.title": "Education",
      "education.masters": "Master in Computer Science",
      "education.bachelors": "Bachelor in Computer Science",
      "education.degreePdf": "Degree PDF",
      "education.verificationPdf": "Verification PDF",
      "certifications.title": "Certifications",
      "section.contact": "Get In Touch",
      "contact.infoTitle": "Contact Information",
      "contact.subtitle":
        "Feel free to reach out if you're looking for someone with my skills and experience, or just want to connect.",
      "contact.email": "Email",
      "contact.location": "Location",
      "contact.locationValue": "Atlanta, GA or anywhere on Earth",
      "contact.availability": "Availability",
      "contact.availabilityValue": "Available for full-time opportunities",
      "contact.connect": "Connect with me",
      "form.name": "Name",
      "form.email": "Email",
      "form.subject": "Subject",
      "form.message": "Message",
      "form.submit": "Send Message",
      "form.placeholder.name": "Your name",
      "form.placeholder.email": "Your email",
      "form.placeholder.subject": "How can I help?",
      "form.placeholder.message": "Tell me a bit about your project or role.",
      "footer.notice":
        "This static site does not run visitor analytics. If you switch languages, your preference is stored only in your browser.",
      "footer.privacyLead": "Read the",
      "footer.privacyLink": "Privacy Policy ->",
      "footer.role": "Software Development Engineer",
      "footer.copyright": "© 2025 Aaron Wang. All rights reserved.",
      "hero.imageAlt": "Portrait of Aaron Wang",
    },
    "zh-CN": {
      pageTitle: "关于我 | Aaron Wang",
      "header.role": "软件开发工程师",
      "header.contact": "联系我",
      "header.resume": "简历 PDF",
      "header.askGpt": "和 Aaron 的 GPT 聊聊",
      "hero.greetingHtml":
        "你好，我是 <span class=\"text-blue-600\">Aaron Wang</span>",
      "hero.role": "软件开发工程师",
      "hero.summary":
        "你好，我是 Aaron Wang，一名热衷于构建可扩展系统、智能工具和优秀用户体验的全栈软件工程师。无论是后端基础设施、数据流水线，还是直观的前端界面，我都喜欢把想法真正落地成可运行的产品。",
      "hero.experience": "工作经历",
      "hero.projects": "查看项目",
      "section.experience": "工作经历",
      "exp1.title": "软件开发工程师",
      "exp1.company": "Applications Technology Group (ATG Inc) • Duluth, GA",
      "exp1.bullets":
        "<li>参与基于 <b>Kubernetes</b> 的部署流程，利用容器编排提升应用的可靠性与可扩展性。</li><li>使用 Terraform 与 <b>GitHub Actions</b> 自动化基础设施创建和应用部署流程。</li><li>使用 <b>Docker</b> 设计、容器化并部署 <b>Spring Boot</b> 微服务，构建一致且可扩展的 <b>cloud-native</b> 后端架构。</li><li>基于 <b>Spring Boot</b> 实现 RESTful API，支持与前端及分布式系统的顺畅集成。</li><li>集成 Spring Security，在云环境中实现稳健的用户认证与基于角色的访问控制。</li>",
      "exp2.title": "软件开发工程师实习生",
      "exp2.company": "HARRiS Group • Atlanta, GA",
      "exp2.bullets":
        "<li>使用 <b>Apache Superset</b> 搭建内部仪表盘，用于可视化生产指标并支持实时决策。</li><li>基于 <b>Flask</b> 与 <b>React</b> 开发 Web 应用，自动化 slot-die-coating 工艺，使生产时间降低 28%，质量提升 26%，图像数据查询和分析速度提升 20%。</li><li>使用 <b>React</b>、<b>Flask</b>、<b>HTML/CSS</b> 与 <b>MySQL</b> 设计并部署多用户管理系统，支持团队协作场景。</li><li>使用 <b>Python</b> 自动化图像数据采集、标准化、预处理和缺陷标注流程。</li><li>通过引入基于 <b>NumPy</b> 与 <b>PyTorch</b> 的机器学习模型，将缺陷检测准确率提升 8%，处理时间缩短 83%。</li>",
      "section.projects": "重点项目",
      "proj1.title": "个人作品集网站",
      "proj1.desc":
        "使用 <b>React</b> 构建个人网站前端，并部署在 <b>GitHub Pages</b>。后端使用 <b>Go</b> 实现，负责访客分析与网站安全检查。集成了基于 <b>ChatGPT API</b> 的 <b>RAG</b> 智能助手，用于回答与我简历相关的 HR 问题。这个项目展示了我在 AI 集成、流量分析与安全部署方面的全栈能力。",
      "proj2.title": "HealthAI Advisor",
      "proj2.desc":
        "使用 <b>HTML</b>、<b>CSS</b>、<b>JavaScript</b> 与 <b>React</b> 开发用户注册和登录系统。设计机器学习模型以分析用户健康数据并识别潜在风险。后端使用 Flask 安全存储用户凭据，并集成 ChatGPT 完成文本总结和健康生活建议。",
      "proj3.title": "任务管理移动应用",
      "proj3.desc":
        "开发了一款任务管理移动应用，覆盖任务管理、账号操作以及地图/日历事件视图。前端使用 <b>React Native</b> 与 <b>Expo Go</b> 构建，保证直观的用户体验。后端基于 <b>Express.js</b> 与 <b>MongoDB</b>，负责处理 API 请求和存储用户数据。",
      "project.repo": "GitHub 仓库",
      "projects.viewAll": "查看全部项目",
      "section.skills": "技能与专长",
      "skills.languages": "语言与框架",
      "skills.cloud": "云与 DevOps",
      "skills.professional": "职业能力",
      "skill.leadership": "领导力",
      "skill.communication": "沟通能力",
      "skill.pm": "项目管理",
      "skill.collaboration": "团队协作",
      "section.education": "教育背景与证书",
      "education.title": "教育背景",
      "education.masters": "计算机科学硕士",
      "education.bachelors": "计算机科学学士",
      "education.degreePdf": "毕业证 PDF",
      "education.verificationPdf": "学历验证 PDF",
      "certifications.title": "证书",
      "section.contact": "联系我",
      "contact.infoTitle": "联系信息",
      "contact.subtitle":
        "如果你正在寻找具备这些技能和经验的人，或者只是想建立联系，欢迎随时联系我。",
      "contact.email": "邮箱",
      "contact.location": "地点",
      "contact.locationValue": "Atlanta, GA 或全球远程",
      "contact.availability": "可入职时间",
      "contact.availabilityValue": "可接受全职机会",
      "contact.connect": "社交链接",
      "form.name": "姓名",
      "form.email": "邮箱",
      "form.subject": "主题",
      "form.message": "内容",
      "form.submit": "发送消息",
      "form.placeholder.name": "请输入你的姓名",
      "form.placeholder.email": "请输入你的邮箱",
      "form.placeholder.subject": "你想聊什么？",
      "form.placeholder.message": "简单介绍一下你的项目、职位或需求。",
      "footer.notice":
        "这个静态网站不会做访客统计。如果你切换语言，偏好只会保存在你的浏览器本地。",
      "footer.privacyLead": "查看",
      "footer.privacyLink": "隐私政策 ->",
      "footer.role": "软件开发工程师",
      "footer.copyright": "© 2025 Aaron Wang。保留所有权利。",
      "hero.imageAlt": "Aaron Wang 的头像",
    },
  },
  privacy: {
    en: {
      pageTitle: "Privacy Policy | Aaron Wang",
      "privacy.title": "Privacy Policy",
      "privacy.intro":
        "This site is a static GitHub Pages portfolio. It does not run server-side visitor analytics. This page explains the limited browser-side data handling used for language preference and the third-party services linked from the site.",
      "privacy.section1.title": "1. Information We Collect",
      "privacy.section1.lead":
        "The site itself only stores or transmits the following information in specific cases:",
      "privacy.section1.list":
        "<li>Your selected language preference, stored in your browser via localStorage</li><li>Any information you choose to submit through the contact form, which is processed by Formspree</li>",
      "privacy.section1.note":
        "The site does not collect your IP address for analytics through its own JavaScript.",
      "privacy.section2.title": "2. How We Use Your Information",
      "privacy.section2.lead": "We use the collected data to:",
      "privacy.section2.list":
        "<li>Remember your language choice between visits on the same browser</li><li>Deliver contact form submissions to the configured email workflow</li>",
      "privacy.section2.note":
        "We do not sell, rent, or share your information with third parties except as required by law.",
      "privacy.section3.title": "3. Data Storage and Security",
      "privacy.section3.p1":
        "Language preference is stored locally in your own browser storage.",
      "privacy.section3.p2":
        "If you submit the contact form, the submitted data is handled by Formspree under its own security and retention practices.",
      "privacy.section4.title": "4. Cookies and Tracking Technologies",
      "privacy.section4.p1":
        "We do not use analytics cookies or tracking beacons on this site. localStorage is used only to remember language preference.",
      "privacy.section5.title": "5. Third-Party Services",
      "privacy.section5.p1":
        "The site uses or links to third-party services such as GitHub Pages, Google Fonts, Font Awesome, and Formspree. Those services may receive standard request metadata when your browser loads their resources or when you submit the contact form.",
      "privacy.section6.title": "6. Your Rights",
      "privacy.section6.p1":
        "You can clear the saved language preference at any time by clearing this site's browser storage. For questions about contact form submissions, reach out at <a href=\"mailto:aaronwork1205@outlook.com\">aaronwork1205[at]outlook[dot]com</a>.",
      "privacy.section7.title": "7. Changes to This Privacy Policy",
      "privacy.section7.p1":
        "We may update this Privacy Policy occasionally. Changes will be posted on this page, so please check back regularly.",
      "privacy.section8.title": "8. Contact Us",
      "privacy.section8.p1":
        "If you have any questions about this Privacy Policy, please contact us:",
      "privacy.section8.list":
        "<li>Email: <a href=\"mailto:aaronwork1205@outlook.com\">aaronwork1205[at]outlook[dot]com</a></li><li>Website: <a href=\"https://aaronw.link\" target=\"_blank\" rel=\"noopener noreferrer\">https://aaronw.link</a></li>",
      "privacy.footer": "© 2025 aaronw.link. All rights reserved.",
    },
    "zh-CN": {
      pageTitle: "隐私政策 | Aaron Wang",
      "privacy.title": "隐私政策",
      "privacy.intro":
        "本网站是部署在 GitHub Pages 上的静态个人主页，不运行服务端访客统计。本页说明网站在语言偏好和第三方服务方面涉及的少量数据处理。",
      "privacy.section1.title": "1. 我们收集的信息",
      "privacy.section1.lead":
        "本站仅会在特定情况下存储或传递以下信息：",
      "privacy.section1.list":
        "<li>你选择的语言偏好，会通过 localStorage 保存在浏览器本地</li><li>你通过联系表单主动提交的信息，这部分由 Formspree 处理</li>",
      "privacy.section1.note":
        "本站自身的前端脚本不会为了统计目的收集你的 IP 地址。",
      "privacy.section2.title": "2. 我们如何使用这些信息",
      "privacy.section2.lead": "我们会将收集到的数据用于：",
      "privacy.section2.list":
        "<li>在同一浏览器中记住你的语言选择</li><li>将联系表单内容发送到配置好的邮件处理流程</li>",
      "privacy.section2.note":
        "除法律要求外，我们不会出售、出租或向第三方共享你的信息。",
      "privacy.section3.title": "3. 数据存储与安全",
      "privacy.section3.p1":
        "语言偏好仅保存在你自己的浏览器本地存储中。",
      "privacy.section3.p2":
        "如果你提交联系表单，相关数据会由 Formspree 按其自身的安全和保留策略处理。",
      "privacy.section4.title": "4. Cookies 与跟踪技术",
      "privacy.section4.p1":
        "本站不会使用分析类 Cookies 或跟踪 beacon。localStorage 仅用于记住语言偏好。",
      "privacy.section5.title": "5. 第三方服务",
      "privacy.section5.p1":
        "本站会使用或链接到 GitHub Pages、Google Fonts、Font Awesome、Formspree 等第三方服务。当浏览器加载这些资源或提交联系表单时，这些服务可能会收到标准请求元数据。",
      "privacy.section6.title": "6. 你的权利",
      "privacy.section6.p1":
        "你可以随时通过清理本站浏览器存储来删除语言偏好。如果对联系表单提交内容有疑问，请通过 <a href=\"mailto:aaronwork1205@outlook.com\">aaronwork1205[at]outlook[dot]com</a> 联系我们。",
      "privacy.section7.title": "7. 本隐私政策的变更",
      "privacy.section7.p1":
        "我们可能会不定期更新本隐私政策。任何变更都会发布在本页面上，请定期查看。",
      "privacy.section8.title": "8. 联系我们",
      "privacy.section8.p1":
        "如果你对本隐私政策有任何疑问，请通过以下方式联系我们：",
      "privacy.section8.list":
        "<li>邮箱：<a href=\"mailto:aaronwork1205@outlook.com\">aaronwork1205[at]outlook[dot]com</a></li><li>网站：<a href=\"https://aaronw.link\" target=\"_blank\" rel=\"noopener noreferrer\">https://aaronw.link</a></li>",
      "privacy.footer": "© 2025 aaronw.link。保留所有权利。",
    },
  },
};

let currentLocale = "en";
let currentMode = "auto";

function normalizeLocale(value) {
  if (!value) {
    return null;
  }

  const normalized = value.trim().toLowerCase();
  if (normalized === "auto") {
    return "auto";
  }
  if (normalized.startsWith("zh")) {
    return "zh-CN";
  }
  if (normalized.startsWith("en")) {
    return "en";
  }

  return null;
}

function getCurrentPage() {
  return document.body?.dataset.page || "home";
}

function getDictionary(locale) {
  const page = getCurrentPage();
  const pageTranslations = translations[page] || translations.home;
  return pageTranslations[locale] || pageTranslations.en;
}

function applyLocale(locale, mode) {
  currentLocale = locale;
  currentMode = mode;

  const dictionary = getDictionary(locale);
  document.documentElement.lang = locale;
  document.title = dictionary.pageTitle || document.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-resume-link]").forEach((element) => {
    element.setAttribute("href", resumeLinks[locale] || resumeLinks.en);
  });

  updateLocaleSwitcher();
}

function openResumeForCurrentLocale() {
  const resumeUrl = resumeLinks[currentLocale] || resumeLinks.en;
  window.open(resumeUrl, "_blank", "noopener,noreferrer");
}

function updateLocaleSwitcher() {
  document.querySelectorAll("[data-locale-mode]").forEach((button) => {
    const mode = button.dataset.localeMode;
    const isActive =
      (mode === "auto" && currentMode === "auto") ||
      (mode === "en" && currentMode === "manual" && currentLocale === "en") ||
      (mode === "zh-CN" &&
        currentMode === "manual" &&
        currentLocale === "zh-CN");

    button.style.backgroundColor = isActive ? "#2563eb" : "transparent";
    button.style.color = isActive ? "#ffffff" : "#4b5563";
    button.style.boxShadow = isActive ? "0 1px 2px rgba(15, 23, 42, 0.12)" : "none";
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function getBrowserFallbackLocale() {
  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const candidate of candidates) {
    const locale = normalizeLocale(candidate);
    if (locale && locale !== "auto") {
      return locale;
    }
  }

  return "en";
}

function getQueryLocalePreference() {
  const params = new URLSearchParams(window.location.search);
  return normalizeLocale(params.get("lang"));
}

function getAutomaticLocale() {
  return getBrowserFallbackLocale();
}

function bindLocaleSwitcher() {
  document.querySelectorAll("[data-locale-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.localeMode;
      if (mode === "auto") {
        localStorage.removeItem(LOCALE_STORAGE_KEYS.manual);
        applyLocale(getAutomaticLocale(), "auto");
        return;
      }

      const locale = normalizeLocale(mode);
      if (!locale || locale === "auto") {
        return;
      }

      localStorage.setItem(LOCALE_STORAGE_KEYS.manual, locale);
      applyLocale(locale, "manual");
    });
  });
}

function bindResumeLinks() {
  document.querySelectorAll("[data-resume-link]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      openResumeForCurrentLocale();
    });
  });
}

function initLocale() {
  bindLocaleSwitcher();
  bindResumeLinks();

  const queryPreference = getQueryLocalePreference();
  const manualLocale = normalizeLocale(
    localStorage.getItem(LOCALE_STORAGE_KEYS.manual),
  );
  const autoLocale = getAutomaticLocale();

  if (queryPreference === "auto") {
    localStorage.removeItem(LOCALE_STORAGE_KEYS.manual);
    applyLocale(autoLocale, "auto");
    return;
  }

  if (queryPreference && queryPreference !== "auto") {
    applyLocale(queryPreference, "manual");
    return;
  }

  if (manualLocale && manualLocale !== "auto") {
    applyLocale(manualLocale, "manual");
    return;
  }

  applyLocale(autoLocale, "auto");
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    initLocale();
  } catch (error) {
    applyLocale(getBrowserFallbackLocale(), "auto");
  }
});
