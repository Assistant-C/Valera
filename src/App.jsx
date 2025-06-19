import { useEffect, useRef, useState } from 'react'
import './App.css'
import work from "./assets/workualogo.png"
import robota from "./assets/robotaualogo.png"
import Boldosmall from "./assets/Boldosmall.png"
import Furniture from "./assets/Furniture.png"
import Furnica from "./assets/Furnica.png"
import Ukraine from "./assets/Ukraine.png"
import Tiffany from "./assets/tiffany.png"

const translations = {
  en: {
    introduction: "Introduction",
    work: "Work",
    about: "About",
    contact: "Contact",
    start: "Start /&gt;",
    howdy: "Howdy, my name's",
    design: "I design and develop websites.",
    show: "Come on, let me show You...",
    findMe: "Find me here:",
    writeMe: "Write me something!",
    yourEmail: "Your e-mail",
    yourEmailPlaceholder: "your e-mail",
    whatAbout: "What is it about?",
    yourMsgPlaceholder: "your message",
    send: "Send",
    madeBy: "© Made by Valera Popovich in 2025. (Heavily influenced by ",
    jan: "Jan Baszczok's portfolio",
    mailBtn: "MAIL ME SOMETH",
    name: "Valera Popovich",
    jobs: "Currently none, would you help me with that?",
    school: "CMS (Computer Mastery School)",
    hardSkillsArr: [
      "HTML/CSS/JS", "Node.js", "Wordpress", "JQuery", "GitHub", "Adaptive"
    ],
    softSkillsArr: [
      "Communication", "Teamwork", "Creativity", "Critical thinking", "Stressproof", "Quicklearner", "Selfcritical", "Open to new things", "Working w/ feedback"
    ]
  },
  uk: {
    introduction: "Вступ",
    work: "Робота",
    about: "Про себе",
    contact: "Контакти",
    start: "Start /&gt;",
    howdy: "Привіт, мене звати",
    design: "Я проєктую та розробляю вебсайти.",
    show: "Давайте я вам покажу...",
    findMe: "Знайти мене тут:",
    writeMe: "Напишіть мені щось!",
    yourEmail: "Ваша електронна пошта",
    yourEmailPlaceholder: "ваша пошта",
    whatAbout: "Про що це?",
    yourMsgPlaceholder: "ваше повідомлення",
    send: "Відправити",
    madeBy: "© Зроблено Валерою Поповичем у 2025. (Натхнення: ",
    jan: "портфоліо Яна Башчока",
    mailBtn: "НАПИСАТИ МЕНІ",
    name: "Валера Попович",
    jobs: "На даний момент немає, допоможете мені з цим?",
    school: "ШКМ (Школа Комп'ютерної Майстерності)",
    hardSkillsArr: [
      "HTML/CSS/JS", "Node.js", "Wordpress", "JQuery", "GitHub", "Адаптивність"
    ],
    softSkillsArr: [
      "Комунікація", "Робота в команді", "Креативність", "Критичне мислення", "Стресостійкість", "Швидко навчаюсь", "Самокритичність", "Відкритий до нового", "Робота з відгуками"
    ]
  },
  pl: {
    introduction: "Wprowadzenie",
    work: "Praca",
    about: "O mnie",
    contact: "Kontakt",
    start: "Start /&gt;",
    howdy: "Cześć, mam na imię",
    design: "Projektuję i tworzę strony internetowe.",
    show: "Chodź, pokażę Ci...",
    findMe: "Znajdź mnie tutaj:",
    writeMe: "Napisz do mnie!",
    yourEmail: "Twój e-mail",
    yourEmailPlaceholder: "twój e-mail",
    whatAbout: "O czym to?",
    yourMsgPlaceholder: "twoja wiadomość",
    send: "Wyślij",
    madeBy: "© Wykonane przez Valera Popovich w 2025. (Silnie inspirowane ",
    jan: "portfolio Jana Baszczoka",
    mailBtn: "NAPISZ DO MNIE",
    name: "Walera Popowicz",
    jobs: "Obecnie brak, pomożesz mi w tym?",
    school: "SMK (Szkoła Mistrzostwa Komputerowego)",
    hardSkillsArr: [
      "HTML/CSS/JS", "Node.js", "Wordpress", "JQuery", "GitHub", "Responsywność"
    ],
    softSkillsArr: [
      "Komunikacja", "Praca zespołowa", "Kreatywność", "Myślenie krytyczne", "Odporność na stres", "Szybko się uczę", "Samokrytyka", "Otwartość na nowe", "Praca z feedbackiem"
    ]
  }
};

function App() {
  const upBackgroundRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const footerPointRef = useRef(null);
  const introNavRef = useRef(null);
  const workNavRef = useRef(null);
  const aboutNavRef = useRef(null);
  const contactNavRef = useRef(null);
  const exampleRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [showForm, setShowForm] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef(null);
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    function handleClickOutside(e) {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setShowLangMenu(false);
      }
    }
    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLangMenu]);
  useEffect(() => {
    function handleScroll() {
      const sections = [
        {ref:upBackgroundRef, nav:introNavRef},
        {ref:workRef, nav:workNavRef },
        {ref:aboutRef, nav:aboutNavRef },
        {ref:footerPointRef, nav:contactNavRef}
      ];

      let activeIdx = -1;
      sections.forEach((section, idx) => {
        const el = section.ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          activeIdx = idx;
        }
      });
      sections.forEach((section, idx) => {
        if (!section.nav.current) return;
        section.nav.current.style.color = (idx === activeIdx) ? 'white' : '';
      });
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleExampleMouseMove(idx, e) {
    const img = exampleRefs[idx].current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const maxAngle = 20;
    const rotateY = Math.max(Math.min(x / (rect.width / 2) * maxAngle, maxAngle), -maxAngle);
    const rotateX = Math.max(Math.min(-y / (rect.height / 2) * maxAngle, maxAngle), -maxAngle);
    img.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    img.style.transition = 'transform 0.1s';
    img.style.zIndex = 10;
  }
  function handleExampleMouseLeave(idx) {
    const img = exampleRefs[idx].current;
    if (!img) return;
    img.style.transform = '';
    img.style.transition = 'transform 0.4s';
    img.style.zIndex = '';
  }
  return (
    <>
      <div className="box">
        <nav>
          <div className="name" style={{position: "relative"}}>
            <span className='Bigarrow'>&lt;</span>
            <h1 className='nav_name'>VĂLĒRĄ_P0P0VlCĦ</h1>
            <span className='Bigarrow'>&gt;</span>
            <button
              className="lang-menu-trigger"
              style={{
                marginLeft: 10,
                background: "none",
                border: "none",
                color: "#988e9f",
                fontSize: 18,
                cursor: "pointer"
              }}
              onClick={() => setShowLangMenu(v => !v)}
              aria-label="Choose language"
            >🌐</button>
            {showLangMenu && (
              <div
                ref={langMenuRef}
                className="lang-menu"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  marginTop: 8,
                  background: "#181619",
                  border: "1.5px solid #5918DF",
                  borderRadius: 10,
                  boxShadow: "0 4px 24px #000a",
                  zIndex: 100,
                  minWidth: 140,
                  padding: "10px 0",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <button style={langBtnStyle} onClick={() => { setLanguage('en'); setShowLangMenu(false); }}>English</button>
                <button style={langBtnStyle} onClick={() => { setLanguage('uk'); setShowLangMenu(false); }}>Українська</button>
                <button style={langBtnStyle} onClick={() => { setLanguage('pl'); setShowLangMenu(false); }}>Polski</button>
              </div>
            )}
          </div>
          <div className="chapters">
            <div id='Introduction' className="Introduction" ref={introNavRef}>{translations[language].introduction} <span>/&gt;</span></div>
            <div id='Work' className="Work" ref={workNavRef}>{translations[language].work} <span>/&gt;</span></div>
            <div id='About' className="About" ref={aboutNavRef}>{translations[language].about} <span>/&gt;</span></div>
            <div id='Contact' className="Contact" ref={contactNavRef}>{translations[language].contact} <span>/&gt;</span></div>
          </div>
        </nav>
        <div className="upper_background">
          <div className="scroll"></div>
          <header>
            <div className="dotone"></div>
            <div className="continue">&lt;-Scroll</div>
            <div className="header_text">
              <h3 className='part' ref={upBackgroundRef}>{translations[language].start}</h3>
              <h1 className='thinner'>{translations[language].howdy} <span>{translations[language].name}</span> <br />{translations[language].design}</h1>
              <h2 className='showing'>{translations[language].show}</h2>
            </div>
          </header>
        </div>
        <main>
          <div className="work" ref={workRef}>
            <h2>Work/&gt;</h2>
          </div>
          <img
            src={Boldosmall}
            alt=""
            className="example1 example"
            ref={exampleRefs[0]}
            onMouseMove={e => handleExampleMouseMove(0, e)}
            onMouseLeave={() => handleExampleMouseLeave(0)}
          />
          <img
            src={Furniture}
            alt=""
            className="example2 example"
            ref={exampleRefs[1]}
            onMouseMove={e => handleExampleMouseMove(1, e)}
            onMouseLeave={() => handleExampleMouseLeave(1)}
          />
          <img
            src={Ukraine}
            alt=""
            className="example3 example"
            ref={exampleRefs[2]}
            onMouseMove={e => handleExampleMouseMove(2, e)}
            onMouseLeave={() => handleExampleMouseLeave(2)}
          />
          <img
            src={Furnica}
            alt=""
            className="example4 example"
            ref={exampleRefs[3]}
            onMouseMove={e => handleExampleMouseMove(3, e)}
            onMouseLeave={() => handleExampleMouseLeave(3)}
          />
          <img
            src={Tiffany}
            alt=""
            className="example5 example"
            ref={exampleRefs[4]}
            onMouseMove={e => handleExampleMouseMove(4, e)}
            onMouseLeave={() => handleExampleMouseLeave(4)}
          />
        </main>
        <div className="about" ref={aboutRef}>
          <div id='about' className="point">
            <h2 className='part'>About/&gt;</h2>
          </div>
          <div className="info">
            <div className="numbers">
              <h2 className="barelyvisible">01</h2>
              <h2 className="barelyvisible">02</h2>
              <h2 className="barelyvisible">03</h2>
              <h2 className="barelyvisible">04</h2>
              <h2 className="barelyvisible">05</h2>
              <h2 className="barelyvisible">06</h2>
              <h2 className="barelyvisible">07</h2>
              <h2 className="barelyvisible">08</h2>
              <h2 className="barelyvisible">09</h2>
              <h2 className="barelyvisible">10</h2>
              <h2 className="barelyvisible">11</h2>
              <h2 className="barelyvisible">12</h2>
              <h2 className="barelyvisible">13</h2>
              <h2 className="barelyvisible">14</h2>
              <h2 className="barelyvisible">15</h2>
              <h2 className="barelyvisible">16</h2>
              <h2 className="barelyvisible">17</h2>
              <h2 className="barelyvisible">18</h2>
              <h2 className="barelyvisible">19</h2>
              <h2 className="barelyvisible">20</h2>
              <h2 className="barelyvisible">21</h2>
              <h2 className="barelyvisible">22</h2>
              <h2 className="barelyvisible">23</h2>
              <h2 className="barelyvisible">24</h2>
            </div>
            <div className="info_text">
              <div className="info_innertext"><h2><span className='purple'>class</span> <span className='yellow'>Valera_Popovich</span> &#123;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> <span className='gray'>//I am constantly improving</span></h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> <span className='purple'>constructor</span> &#40;&#41; &#123;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>····</span> <span className="red">var</span>.<span className="teal">name</span> <span className="red">=</span> <span className="green">'{translations[language].name}'</span></h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>····</span> <span className="red">var</span>.<span className="teal">dateOfBirth</span> <span className='red'>=</span> <span className="orange">04.04.2009</span></h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>····</span> <span className='red'>var</span>.<span className="teal">email</span> <span className='red'>=</span> <span className="green">'V'sLair@gmail.com'</span></h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> &#125;</h2></div>
              <div className="info_innertext"><h2><span className="barelyvisible">··</span> <span className="yellow">workExperience</span> &#40;&#41; &#125;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>····</span> <span className="purple">return</span> &#91;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>······</span> &#123; <span className="green">'{translations[language].jobs}'</span> &#125;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>····</span> &#93;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> &#125;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> <span className="yellow">education</span>&#40;&#41; &#123;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>····</span> <span className="purple">return</span> &#91;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>······</span> &#123; <span className="green">'2021-2025' : '{translations[language].school}'</span> &#125;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>····</span> &#93;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> &#125;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> <span className="yellow">hardSkills</span>&#40;&#41; &#123;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>····</span> <span className="purple">return</span> &#91; <span className="green">'{translations[language].hardSkillsArr.join("', '")}'</span> &#93;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> &#125;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> <span className="yellow">softSkills</span>&#40;&#41; &#123;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>····</span> <span className="purple">return</span> &#91; <span className="green">'{translations[language].softSkillsArr.join("', '")}'</span> &#93;</h2></div>
              <div className="info_innertext"><h2><span className='barelyvisible'>··</span> &#125;</h2></div>
              <div className="info_innertext"><h2>&#125;</h2></div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer_point" ref={footerPointRef}>
            <h2 className='part'>Contact/&gt;</h2>
          </div>
          <div className="find_me_here">
            <h2>{translations[language].findMe}</h2>
            <div className="socials">
              <div className="social">
                <img className='logo' src={work} alt="" />
                <a className='link' href="http://www.work.ua/resumes/12133648/">WORK.ua</a>
              </div>
              <div className="social">
                <img className='logo' src={robota} alt="" />
                <a className='link' href="http://robota.ua/ua/candidates/24166011?utm_source=app&utm_medium=share&utm_campaign=android">robota.ua</a>
              </div>
            </div>
          </div>
          <button className='mail_me' onClick={() => setShowForm(v => !v)} style={{zIndex: 20}}>{translations[language].mailBtn}</button>
          <form className={`mail_form${showForm ? ' show' : ' hide'}`}>
            <h3>{translations[language].writeMe}</h3>
            <label>
              <span>{translations[language].yourEmail}</span>
              <input type="email" placeholder={translations[language].yourEmailPlaceholder} required />
            </label>
            <label>
              <span>{translations[language].whatAbout}</span>
              <input type="text" placeholder={translations[language].yourMsgPlaceholder} required />
            </label>
            <button type="submit" className="sendie">{translations[language].send}</button>
          </form>
          <p className="made_by">{translations[language].madeBy}<a className='link' href="http://yasio.dev/#work">{translations[language].jan}</a>&#41;</p>
        </footer>
      </div>
    </>
  )
}

// Inline style for language buttons
const langBtnStyle = {
  background: "none",
  border: "none",
  color: "#988e9f",
  fontSize: 16,
  padding: "8px 18px",
  textAlign: "left",
  cursor: "pointer",
  width: "100%",
  transition: "background 0.2s",
  borderRadius: 6
};

export default App