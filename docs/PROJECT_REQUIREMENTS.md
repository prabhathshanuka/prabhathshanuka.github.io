# DEPENDABITS — Website Project Requirements & Development Specification

**Project:** Dependabits Official Website  
**Domain:** https://www.dependabits.com  
**Location:** Anuradhapura, Sri Lanka  
**Development environment:** Visual Studio Code on Windows  
**Phase:** 1 — Professional online presence  
**Version:** 1.0

## 1. Project overview
Dependabits is an educational academy based in Anuradhapura, Sri Lanka, offering multiple educational services under one brand. The academy's approach emphasizes project-based learning, practical activities, technology integration, creativity, and real-world skills.

The Phase 1 website will establish a professional online presence, introduce the academy and its educational services, and make it easy for prospective students and parents to enquire through WhatsApp.

## 2. Brand identity
- **Brand:** Dependabits
- **Tagline:** Think. Build. Evolve.
- **Positioning:** A broad educational academy combining academic support, technology education, and practical learning.
- **Visual direction:** Professional with creative educational elements.
- **Palette direction:** Modernized teal and navy, supported by white, light grey, and subtle gold.
- **Homepage hero:** Brand-focused, with logo, tagline, concise introduction, course exploration, and WhatsApp enquiry actions.

## 3. Audience
- School students from Grade 5 onwards.
- Pearson Edexcel learners.
- Students following other international curricula as the academy expands.
- Learners interested in programming and technology.
- Parents seeking educational support.
- Local learners in Anuradhapura and online learners elsewhere.

## 4. Educational services
Initial course categories:
1. Mathematics
2. English
3. Science
4. ICT
5. Computer Science
6. Python Programming
7. STEAM Education

### Curriculum
Initial focus: Pearson Edexcel IGCSE and International A Level. The site should be structured so additional international curricula can be introduced later.

### Learning modes
- Physical classroom learning
- Live online classes
- Recorded lessons

## 5. Site map
The initial site is a multi-page static website.

| Page | Suggested file | Purpose |
|---|---|---|
| Home | `index.html` | Academy introduction, hero, featured courses, differentiators, learning modes |
| About | `about.html` | Academy story, vision, mission, teaching philosophy |
| Courses | `courses.html` | Course cards, browse by subject and programme |
| Learning | `learning.html` | Physical, live online, and recorded learning |
| Founder | `founder.html` | Founder profile and background |
| Contact | `contact.html` | WhatsApp and Facebook contact |
| Learning Notes | `learning-notes/index.html` and `learning-notes/article.html` | Browse topics and read Markdown-based notes |

Navigation: Home, About, Courses, Learning, Founder, Contact.

## 6. Course presentation
Each course card should contain:
- Course name
- Short description
- Relevant image or illustration
- WhatsApp enquiry button

Do not publish fees, detailed schedules, online registration, or payment functionality in Phase 1. Course enquiries should be directed to WhatsApp.

### Initial course descriptions
- **Mathematics:** Develop logical thinking, analytical skills, and mathematical confidence through engaging lessons and practical problem-solving.
- **English:** Build confidence in communication, reading, writing, and language skills through interactive learning experiences.
- **Science:** Explore the world through scientific thinking, experimentation, and hands-on activities.
- **ICT:** Develop essential digital literacy and information technology skills.
- **Computer Science:** Explore computing principles, algorithms, computational thinking, and problem-solving.
- **Python Programming:** Learn programming fundamentals through practical exercises and creative projects.
- **STEAM Education:** Connect Science, Technology, Engineering, Arts, and Mathematics through hands-on projects.

## 7. Academy story and teaching philosophy
Dependabits began from a desire to contribute to meaningful change in education. The initial initiative focused on STEAM classes and practical projects integrating science, mathematics, and technology. It later expanded into international curriculum support, including Pearson Edexcel IGCSE Computer Science and International A Level IT. Other teachers, including Mathematics teachers, joined as the academy developed.

Core principles:
- Learning by doing
- Project-based education
- Practical problem-solving
- Creativity and innovation
- Real-world skill development
- Connecting academic knowledge with practical applications

## 8. Founder profile
- **Name:** Prabhath Wijesiri
- **Role:** Founder & Academy Director
- **Qualification:** BSc in Mathematics and Computing
- **Experience areas:** Computer Science teaching, Pearson Edexcel IGCSE Computer Science, International A Level Information Technology, STEAM and practical technology education.

Only the founder will have an individual profile at initial launch. Other educator profiles may be added later.

## 9. Contact and social links
- **WhatsApp:** +94 70 181 9425
- **WhatsApp URL:** `https://wa.me/94701819425`
- **Facebook:** https://www.facebook.com/@dependabits

WhatsApp is the only direct contact method to display initially. Enquiry buttons should use a relevant pre-filled message. Facebook should appear in the footer.

## 10. Design requirements
- Professional overall design with creative elements.
- White and light-grey backgrounds, with dark navy sections for emphasis.
- Modernized teal and navy brand colours; subtle gold accent.
- Brand-focused hero section.
- Desktop header: logo left, navigation centered, WhatsApp action right.
- Mobile hamburger navigation.
- Minimal footer with logo, tagline, navigation, Facebook, WhatsApp, and copyright.
- Use a combination of authentic academy photography and modern illustrations.
- Include subtle animations: smooth scrolling, reveal effects, and hover states.
- Respect reduced-motion accessibility preferences.

## 11. Media assets supplied
The following assets are included in `assets/images/` when available:
- Dependabits transparent/background-removed logo
- Vertical Dependabits logo
- Signboard/banner artwork
- 3D printer photograph
- Student learning photograph
- Founder portrait

Use student photographs publicly only with appropriate parent/guardian consent.

## 12. Technical requirements — Phase 1
- HTML5, CSS3, and vanilla JavaScript only.
- No backend or database in Phase 1.
- Use Git for version control and GitHub for the repository.
- Host the static site using GitHub Pages.
- Connect the existing custom domain.
- Use `www.dependabits.com` as the canonical domain and configure the apex domain to redirect to it.
- Enable HTTPS.
- Mobile-first responsive design for phones, tablets, and desktops.
- Optimize images and keep JavaScript lightweight.
- Use semantic HTML, accessible labels, keyboard-friendly navigation, and descriptive image alt text.

## 13. Future roadmap
### Phase 1 — Online presence
Static multi-page site, branding, course promotion, founder profile, WhatsApp enquiries, Facebook integration, and GitHub Pages deployment.

### Phase 2 — Dynamic website
Introduce Django, PostgreSQL, and a custom Super Admin dashboard for course, subject, curriculum, teacher, image, and announcement management. Initially, only the Super Admin will access the dashboard.

### Phase 3 — Learning platform
Potential future features include student accounts, registrations, recorded course access, payments, and learning progress tracking.

## 14. Success criteria
Phase 1 is complete when:
- The site is available at `https://www.dependabits.com`.
- All pages and navigation work.
- Layouts work on mobile and desktop.
- Branding is consistent.
- All seven course categories are represented.
- WhatsApp links open the correct number.
- Facebook link works.
- Founder profile is present.
- Accessibility and performance basics are addressed.
- HTTPS works reliably.

## 15. Development principles
1. Build incrementally.
2. Keep Phase 1 lightweight and static.
3. Use reusable components and shared styles.
4. Keep content and assets organized.
5. Test each page before deployment.
6. Prepare the structure for future Django integration without introducing Django now.


## 16. Learning Notes feature
A lightweight public notes area is included under `learning-notes/` in the existing GitHub Pages project. It has two views: a topic browser and a shared article reader. Subjects, topics and subtopics are managed in `learning-notes/data/topics.json`; article metadata and Markdown file paths are managed in `learning-notes/data/articles.json`; note content is written in individual `.md` files under `learning-notes/articles/`. The Learning page links to this feature using the **Learn Now** button. It uses static files only and has no backend or student login.
