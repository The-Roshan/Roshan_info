# Roshan Kumar Prajapati - Resume Website

## Overview
Roshan Kumar Prajapati's Resume Website is a professional, interactive web-based resume showcasing the skills, experience, education, and contact details of Roshan Kumar Prajapati, a dedicated student and programmer. Built with HTML, CSS, and JavaScript, the website features a modern design with a cursor bubble effect, a snow animation, and downloadable certificates and CV. It is responsive and optimized for both desktop and mobile devices.

## Features
- **Header**: Displays Roshan’s name and title ("Dedicated Student & Programmer") with a profile picture, navigation menu (About, Skills, Experience, Education, Contact, Declaration), and a downloadable CV button.
- **About Section**: Introduces Roshan’s passion for learning and programming.
- **Skills Section**: Lists technical and soft skills with downloadable certificates for each:
  - HTML, CSS
  - JavaScript (Basic)
  - C, C++ Programming
  - Python
  - Java, SQL
  - Data Structure
  - Database Management System
  - Data Science in Python
  - Artificial Intelligence
  - React.js (Basic)
  - Web Development
  - Ethical Hacking (Beginner)
  - Cloud Foundation
  - Computer Fundamentals
  - Tally
  - Communication Skills
- **Experience Section**: Details professional experiences:
  - Internship at Universal Tribes (Sales and Marketing, 06/2022–09/2022)
  - Tutors and Teachers Aides (2 years, emphasizing subject knowledge and soft skills)
- **Education Section**: Lists academic qualifications with downloadable certificates:
  - Bachelor in Computer Applications (B.C.A, Kolhan University, 2022–2026)
  - Intermediate in Commerce (XII, L.B.S.M. College, 2020–2022)
  - Matriculation (X, ST. Roberts High School, 2020)
- **Contact Section**: Provides contact details:
  - Mobile: +91 7061126213
  - Email: roshanjsr5555@gmail.com
  - Address: Kumbhar Tola, Sarjamda, Jamshedpur
- **Declaration Section**: A self-declaration of the accuracy of provided information.
- **Visual Effects**:
  - Cursor bubble effect for interactive navigation.
  - Snow animation for aesthetic appeal.
- **Responsive Design**: Optimized for all screen sizes with a mobile-friendly hamburger menu.
- **External Resources**:
  - Font Awesome for icons.
  - Google Fonts (Roboto) for typography.

## Tech Stack
- **HTML5**: Structure and content of the resume.
- **CSS3**: Styling, animations, and responsiveness (`styles.css`).
- **JavaScript**: Interactivity, including hamburger menu toggle and animations (`scripts.js`).
- **Font Awesome**: Icons for skills and contact info.
- **Google Fonts**: Roboto font for consistent typography.

## Project Structure
```
resume-website/
├── index.html                          # Main HTML file
├── styles.css                         # CSS styles for layout and effects
├── scripts.js                         # JavaScript for interactivity
├── profile.jpg                        # Profile picture
├── Roshan_cv.pdf                      # Downloadable CV
├── certificate-html.pdf               # Certificate for HTML, CSS
├── certificate-javascript.pdf         # Certificate for JavaScript
├── certificate-c.pdf                  # Certificate for C
├── certificate-cpp.pdf                # Certificate for C++
├── certificate-python.pdf             # Certificate for Python
├── certificate-java-sql.pdf           # Certificate for Java, SQL
├── certificate-data-structure.pdf     # Certificate for Data Structure
├── certificate-dbms.pdf               # Certificate for DBMS
├── certificate-Datascience.pdf        # Certificate for Data Science
├── certificate-ai.pdf                 # Certificate for AI
├── certificate-react.pdf              # Certificate for React.js
├── certificate-web-dev.pdf            # Certificate for Web Development
├── certificate-ethical-hacking.pdf    # Certificate for Ethical Hacking
├── certificate-cloud.pdf              # Certificate for Cloud Foundation
├── certificate-computer-fundamentals.pdf # Certificate for Computer Fundamentals
├── certificate-tally.pdf              # Certificate for Tally
├── certificate-communication.pdf      # Certificate for Communication Skills
├── certificate-bca.pdf                # Certificate for B.C.A
├── certificate-intermediate.pdf       # Certificate for Intermediate
├── certificate-matriculation.pdf      # Certificate for Matriculation
├── LICENSE.md                         # MIT License
└── README.md                          # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A code editor (e.g., VS Code) for customization.
- All listed images and PDF files (profile picture, CV, certificates) must be present.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/resume-website.git
cd resume-website
```

### 2. Verify Assets
- Ensure `profile.jpg`, `Roshan_cv.pdf`, and all certificate PDFs (e.g., `certificate-html.pdf`) are in the project root.
- Replace placeholders with actual files if needed, ensuring correct naming.

### 3. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server).

### 4. Customize (Optional)
- Edit `styles.css` to modify colors, fonts, or animations (e.g., snow or cursor effects).
- Update `scripts.js` to enhance interactivity (e.g., add form validation).
- Modify `index.html` to update content or add new sections.

## Usage
1. **Navigation**: Use the top menu to access About, Skills, Experience, Education, Contact, or Declaration sections.
2. **Download CV**: Click the "Download CV" button to get `Roshan_cv.pdf`.
3. **View Certificates**: Click "Download Certificate" links in Skills and Education sections to access PDFs.
4. **Mobile Menu**: Toggle the hamburger icon (`fas fa-bars`) on mobile devices.
5. **Visual Effects**: Interact with the cursor bubble and enjoy the snow animation.
6. **Contact**: Reach out via email (`roshanjsr5555@gmail.com`) or phone (`+91 7061126213`).

## Deployment
- **Static Hosting**:
  1. Upload all files (`index.html`, `styles.css`, `scripts.js`, images, and PDFs) to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/resume-website`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **Assets**: Ensure all PDFs and the profile image are correctly named and present to avoid broken links.
- **JavaScript**: The `scripts.js` file must implement the hamburger menu toggle, cursor bubble, and snow animation for full functionality.
- **Styling**: The `styles.css` file should include styles for the cursor bubble and snow effects.
- **SEO**: Update meta tags in `<head>` (e.g., `description`, `keywords`) for better visibility.
- **License**: Include the MIT License in `LICENSE.md` to clarify usage terms (as provided previously).

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with vanilla HTML, CSS, and JavaScript for a professional showcase.
- Uses Font Awesome for icons and Google Fonts for typography.
- Inspired by modern resume website designs with interactive elements.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- Email: roshanjsr5555@gmail.com
- Phone: +91 7061126213
- GitHub: [The-Roshan](https://github.com/The-Roshan)
