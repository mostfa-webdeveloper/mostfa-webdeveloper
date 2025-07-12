let currentLang = 'fr';
let currentPage = 0;

const texts = {
  fr: {
    title: "Créer votre CV",
    sectionPersonal: "Informations Personnelles",
    sectionTitle: "Titre du CV",
    sectionObjective: "Objectif Professionnel",
    sectionEducation: "Formation / Éducation",
    sectionExperience: "Expérience Professionnelle",
    sectionSkillsTech: "Compétences Techniques",
    sectionSkillsSoft: "Compétences Personnelles",
    sectionLanguages: "Langues",
    sectionCertifications: "Certifications",
    sectionProjects: "Projets",
    sectionInterests: "Centres d’intérêt",
    sectionReferences: "Références",
    placeholders: {
      fullName: "Nom complet",
      birthDate: "Date de naissance",
      address: "Adresse (Ville, Région)",
      phone: "Téléphone",
      email: "Email",
      linkedin: "LinkedIn (optionnel)",
      github: "GitHub / Portfolio (optionnel)",
      cvTitle: "Exemple: Étudiant en Informatique",
      objective: "Votre objectif professionnel",
      educationDegree: "Diplôme (Licence, Bac, Mastère...)",
      educationInstitution: "Établissement",
      educationDate: "Date (de - à)",
      educationGrade: "Notes / Moyenne (optionnel)",
      educationProject: "Projet de fin d'études (optionnel)",
      skillsTech: "Langages, logiciels, outils...",
      skillsSoft: "Travail en équipe, communication...",
      certifications: "Nom, plateforme, date, lien",
      projects: "Nom, rôle, technologies, lien",
      interests: "Loisirs, hobbies...",
      references: "Nom, fonction, contact"
    },
    buttons: {
      next: "Suivant ➡️",
      prev: "⬅️ Précédent",
      generate: "Générer CV",
      addExperience: "+ Ajouter une expérience"
    },
    links: "Liens Professionnels"
  },
  en: {
    title: "Create your CV",
    sectionPersonal: "Personal Information",
    sectionTitle: "CV Title",
    sectionObjective: "Professional Objective",
    sectionEducation: "Education",
    sectionExperience: "Professional Experience",
    sectionSkillsTech: "Technical Skills",
    sectionSkillsSoft: "Soft Skills",
    sectionLanguages: "Languages",
    sectionCertifications: "Certifications",
    sectionProjects: "Projects",
    sectionInterests: "Interests",
    sectionReferences: "References",
    placeholders: {
      fullName: "Full Name",
      birthDate: "Birth Date",
      address: "Address (City, Region)",
      phone: "Phone",
      email: "Email",
      linkedin: "LinkedIn (optional)",
      github: "GitHub / Portfolio (optional)",
      cvTitle: "Example: Computer Science Student",
      objective: "Your professional objective",
      educationDegree: "Degree (Bachelor, High School, Master...)",
      educationInstitution: "Institution",
      educationDate: "Date (from - to)",
      educationGrade: "Grades / Average (optional)",
      educationProject: "Graduation project (optional)",
      skillsTech: "Languages, software, tools...",
      skillsSoft: "Teamwork, communication...",
      certifications: "Name, platform, date, link",
      projects: "Name, role, technologies, link",
      interests: "Hobbies, interests...",
      references: "Name, position, contact"
    },
    buttons: {
      next: "Next ➡️",
      prev: "⬅️ Previous",
      generate: "Generate CV",
      addExperience: "+ Add Experience"
    },
    links: "Professional Links"
  }
};

const pages = [document.getElementById('page-1'), document.getElementById('page-2')];
const form = document.getElementById('cv-form');

function updateLanguage() {
  const t = texts[currentLang];

  document.getElementById('title').innerText = t.title;

  document.getElementById('next-btn').innerText = t.buttons.next;
  document.getElementById('prev-btn').innerText = t.buttons.prev;
  document.getElementById('generate-btn').innerText = t.buttons.generate;
  document.getElementById('add-experience-btn').innerText = t.buttons.addExperience;

  document.getElementById('full-name').placeholder = t.placeholders.fullName;
  document.getElementById('birth-date').placeholder = t.placeholders.birthDate;
  document.getElementById('address').placeholder = t.placeholders.address;
  document.getElementById('phone').placeholder = t.placeholders.phone;
  document.getElementById('email').placeholder = t.placeholders.email;
  document.getElementById('linkedin').placeholder = t.placeholders.linkedin;
  document.getElementById('github').placeholder = t.placeholders.github;
  document.getElementById('cv-title').placeholder = t.placeholders.cvTitle;
  document.getElementById('objective').placeholder = t.placeholders.objective;
  document.getElementById('education-degree').placeholder = t.placeholders.educationDegree;
  document.getElementById('education-institution').placeholder = t.placeholders.educationInstitution;
  document.getElementById('education-date').placeholder = t.placeholders.educationDate;
  document.getElementById('education-grade').placeholder = t.placeholders.educationGrade;
  document.getElementById('education-project').placeholder = t.placeholders.educationProject;
  document.getElementById('skills-tech').placeholder = t.placeholders.skillsTech;
  document.getElementById('skills-soft').placeholder = t.placeholders.skillsSoft;
  document.getElementById('certifications').placeholder = t.placeholders.certifications;
  document.getElementById('projects').placeholder = t.placeholders.projects;
  document.getElementById('interests').placeholder = t.placeholders.interests;
  document.getElementById('references').placeholder = t.placeholders.references;

  // تحديث العناوين حسب اللغة
  document.getElementById('section-personal').innerText = t.sectionPersonal;
  document.getElementById('section-title').innerText = t.sectionTitle;
  document.getElementById('section-objective').innerText = t.sectionObjective;
  document.getElementById('section-education').innerText = t.sectionEducation;
  document.getElementById('section-experience').innerText = t.sectionExperience;
  document.getElementById('section-skills-tech').innerText = t.sectionSkillsTech;
  document.getElementById('section-skills-soft').innerText = t.sectionSkillsSoft;
  document.getElementById('section-languages').innerText = t.sectionLanguages;
  document.getElementById('section-certifications').innerText = t.sectionCertifications;
  document.getElementById('section-projects').innerText = t.sectionProjects;
  document.getElementById('section-interests').innerText = t.sectionInterests;
  document.getElementById('section-references').innerText = t.sectionReferences;
  document.getElementById('section-links').innerText = t.links;
}

document.getElementById('toggle-language').addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  updateLanguage();
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.getElementById('next-btn').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    pages[currentPage].style.display = 'none';
    currentPage++;
    pages[currentPage].style.display = 'block';
  }
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 0) {
    pages[currentPage].style.display = 'none';
    currentPage--;
    pages[currentPage].style.display = 'block';
  }
});

document.getElementById('add-experience-btn').addEventListener('click', () => {
  const expList = document.getElementById('experience-list');
  const newExp = document.createElement('textarea');
  newExp.style.marginBottom = "15px";
  newExp.placeholder = currentLang === 'fr' ?
    "Nom entreprise, durée, poste, description..." :
    "Company name, duration, role, description...";
  expList.appendChild(newExp);
});

updateLanguage();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 10;
  const padding = 8;
  const cadreWidth = pageWidth - margin * 2;
  const maxTextWidth = cadreWidth - padding * 2;
  const lineHeight = 10;
  const leftMargin = margin + padding;

  doc.setDrawColor(46, 125, 50);
  doc.setLineWidth(1.5);
  
  // الصفحة 1 إطار
  doc.rect(margin, margin, cadreWidth, pageHeight - margin * 2);

  let y = margin + 15;

  function addText(text, x, y, maxWidth) {
    const splitText = doc.splitTextToSize(text, maxWidth);
    doc.text(splitText, x, y);
    return y + splitText.length * lineHeight;
  }

  const t = texts[currentLang];

  // الصفحة 1: العنوان، المعلومات الشخصية، العنوان الوظيفي، الهدف المهني، التعليم
  y = addText(t.title, leftMargin, y, maxTextWidth);
  y += lineHeight;

  y = addText(t.sectionPersonal + ":", leftMargin, y, maxTextWidth);
  y = addText(`${t.placeholders.fullName}: ${document.getElementById('full-name').value}`, leftMargin + 5, y, maxTextWidth - 5);
  y = addText(`${t.placeholders.birthDate}: ${document.getElementById('birth-date').value}`, leftMargin + 5, y, maxTextWidth - 5);
  y = addText(`${t.placeholders.address}: ${document.getElementById('address').value}`, leftMargin + 5, y, maxTextWidth - 5);
  y = addText(`${t.placeholders.phone}: ${document.getElementById('phone').value}`, leftMargin + 5, y, maxTextWidth - 5);
  y = addText(`${t.placeholders.email}: ${document.getElementById('email').value}`, leftMargin + 5, y, maxTextWidth - 5);
  y = addText("LinkedIn: " + document.getElementById('linkedin').value, leftMargin + 5, y, maxTextWidth - 5);
  y = addText("GitHub: " + document.getElementById('github').value, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.sectionTitle + ":", leftMargin, y, maxTextWidth);
  y = addText(document.getElementById('cv-title').value, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.sectionObjective + ":", leftMargin, y, maxTextWidth);
  y = addText(document.getElementById('objective').value, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.sectionEducation + ":", leftMargin, y, maxTextWidth);
  y = addText(`${t.placeholders.educationDegree}: ${document.getElementById('education-degree').value}`, leftMargin + 5, y, maxTextWidth - 5);
  y = addText(`${t.placeholders.educationInstitution}: ${document.getElementById('education-institution').value}`, leftMargin + 5, y, maxTextWidth - 5);
  y = addText(`${t.placeholders.educationDate}: ${document.getElementById('education-date').value}`, leftMargin + 5, y, maxTextWidth - 5);
  y = addText(`${t.placeholders.educationGrade}: ${document.getElementById('education-grade').value}`, leftMargin + 5, y, maxTextWidth - 5);
  y = addText(`${t.placeholders.educationProject}: ${document.getElementById('education-project').value}`, leftMargin + 5, y, maxTextWidth - 5);

  // صفحة جديدة
  doc.addPage();

  // الصفحة 2 إطار
  doc.rect(margin, margin, cadreWidth, pageHeight - margin * 2);

  y = margin + 15;

  y = addText(t.sectionExperience + ":", leftMargin, y, maxTextWidth);
  const expList = document.getElementById('experience-list').querySelectorAll('textarea');
  if (expList.length === 0) {
    y = addText(currentLang === 'fr' ? "Aucune expérience ajoutée." : "No experience added.", leftMargin + 5, y, maxTextWidth - 5);
  } else {
    expList.forEach((exp, i) => {
      y = addText(`${i + 1}. ${exp.value}`, leftMargin + 5, y, maxTextWidth - 5);
    });
  }

  y += lineHeight;

  y = addText(t.sectionSkillsTech + ":", leftMargin, y, maxTextWidth);
  y = addText(document.getElementById('skills-tech').value, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.sectionSkillsSoft + ":", leftMargin, y, maxTextWidth);
  y = addText(document.getElementById('skills-soft').value, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.sectionLanguages + ":", leftMargin, y, maxTextWidth);
  const langSelect = document.getElementById('language-level');
  const selectedLanguages = Array.from(langSelect.selectedOptions).map(option => option.text).join(', ');
  y = addText(selectedLanguages, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.sectionCertifications + ":", leftMargin, y, maxTextWidth);
  y = addText(document.getElementById('certifications').value, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.sectionProjects + ":", leftMargin, y, maxTextWidth);
  y = addText(document.getElementById('projects').value, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.sectionInterests + ":", leftMargin, y, maxTextWidth);
  y = addText(document.getElementById('interests').value, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.sectionReferences + ":", leftMargin, y, maxTextWidth);
  y = addText(document.getElementById('references').value, leftMargin + 5, y, maxTextWidth - 5);

  y += lineHeight;

  y = addText(t.links + ":", leftMargin, y, maxTextWidth);
  y = addText("LinkedIn: " + document.getElementById('linkedin').value, leftMargin + 5, y, maxTextWidth - 5);
  y = addText("GitHub: " + document.getElementById('github').value, leftMargin + 5, y, maxTextWidth - 5);

  doc.save(currentLang === 'fr' ? 'CV_Généré.pdf' : 'Generated_CV.pdf');
});
