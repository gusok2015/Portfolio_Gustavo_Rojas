// Función para alternar modo oscuro
function toggleDarkMode() {
    const html = document.documentElement;
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const icon = darkModeToggle.querySelector('i');
    const toggleText = darkModeToggle.querySelector('.toggle-text');
    
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        toggleText.textContent = 'Modo Oscuro';
    } else {
        html.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        toggleText.textContent = 'Modo Claro';
    }
    
    // Guardar preferencia
    localStorage.setItem('darkMode', html.getAttribute('data-theme') === 'dark');
}

// Actualizar texto del botón al cargar la página
function updateDarkModeButton() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const icon = darkModeToggle.querySelector('i');
    const toggleText = darkModeToggle.querySelector('.toggle-text');
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    
    icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    toggleText.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
}

document.addEventListener('DOMContentLoaded', function() {
    // Configurar modo oscuro si estaba activado
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    updateDarkModeButton();

    // Elementos principales
    const mainContent = document.querySelector('.cv-header');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Configurar event listener para botón de modo oscuro
    document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);
    
    // Crear ventanas para cada sección
    const sections = ['profile', 'experience', 'certifications', 'skills', 'contact'];
    const sectionWindows = {};

    sections.forEach(section => {
        const window = document.createElement('div');
        window.className = 'section-window';
        window.id = `${section}-window`;
        window.style.display = 'none';
        
        let content = '';
        if(section === 'profile') {
            content = `
                <div class="section-content">
                    <h2><i class="fas fa-user-tie"></i> Perfil Profesional</h2>
                    <p>Soy un profesional proactivo que combina habilidades técnicas avanzadas con una destacada capacidad de liderazgo y comunicación efectiva.</p>
                    <p>Me adapto con facilidad a contextos cambiantes y exigentes, lo que me permite mantener el enfoque y lograr resultados incluso bajo presión.</p>
                    <p>He liderado equipos diversos con éxito, promoviendo el trabajo colaborativo y el desarrollo continuo.</p>
                    <p>Mi orientación está en aportar soluciones estratégicas que generen valor, siempre actuando con integridad, profesionalismo y un firme compromiso hacia el éxito colectivo.</p>
                </div>
            `;
        } else if(section === 'experience') {
            content = `
                <div class="section-content">
                    <h2><i class="fas fa-briefcase"></i> Últimas Experiencias</h2>
                    <ul class="experience-list">
                        <li>
                            <strong>2022 - Actual:</strong> Programa Conectados por Mendoza Futura<br>
                            <em>Monitor Territorial departamentos Guaymallén, Luján de Cuyo, Maipú.</em><br>
                            Facilitador de Habilidades Tecnológicas (Programación, Robótica, Biotecnología)
                        </li>
                        <li>
                            <strong>2024:</strong> Fundación Telefónica Movistar<br>
                            Coordinador Tecnológico.<br><br>
                            Muestra Conectados: Una Mirada a la Tecnología que nos Acerca.
                        </li>
                        <li>
                            <strong>2024 - Actual:</strong> Dictado de Capacitaciones Tecnológicas<br>
                            <em>Capacitaciones en programación desde básica a avanzada en diferentes lenguajes.</em><br>
                            (Fundación U.N.C) Municipalidades de Guaymallén, Luján de Cuyo.<br>
                            • Capacitaciones de bot y automatizaciones para emprendedores<br>
                            • Capacitaciones en A.I.
                        </li>
                        <li>
                            <strong>2022 - Actual:</strong> Freelance<br>
                            <em>Mentoreo y desarrollo de soluciones informáticas a empresas.</em><br>
                            • Desarrollo de páginas web, landing page<br>
                            • Sistemas de control de stock
                        </li>
                    </ul>
                </div>
            `;
        } else if(section === 'certifications') {
            content = `
                <div class="section-content">
                    <h2><i class="fas fa-certificate"></i> Certificaciones</h2>
                    <ul class="certifications-list">
                        <li>Certificado por Universidad Nacional de Córdoba Desarrollador de Software (2016)</li>
                        <li>Certificado por Egg Developer Web Full Stack (2020)</li>
                        <li>Certificado por Silvertech Front End Dinámico (2021)</li>
                        <li>Certificado por Cámara Argentina del Software Java Node Js (2022)</li>
                        <li>Certificado por Microsoft Azure (2023)</li>
                        <li>Certificado por Fundación Santander Desarrollador Web (2023)</li>
                        <li>Certificado por Alura Latam Soft Skills (2024)</li>
                        <li>Certificado por Alura Latam Python avanzado (2025)</li>
                    </ul>
                </div>
            `;
        } else if(section === 'skills') {
            content = `
                <div class="section-content">
                    <h2><i class="fas fa-chart-bar"></i> Habilidades</h2>
                    <div class="skills-container">
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>HTML</span>
                                <span>95%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: 95%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>CSS</span>
                                <span>95%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: 95%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>Java</span>
                                <span>80%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: 80%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>Python</span>
                                <span>100%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: 100%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>MySQL</span>
                                <span>75%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: 75%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>JavaScript</span>
                                <span>85%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: 85%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>Bootstrap</span>
                                <span>80%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: 80%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>Git</span>
                                <span>80%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: 80%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if(section === 'contact') {
            content = `
                <div class="section-content">
                    <h2><i class="fas fa-envelope"></i> Contacto</h2>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> <a href="mailto:gustavorojasok2015@gmail.com" target="_blank">gustavorojasok2015@gmail.com</a></p>
                        <p><i class="fas fa-phone"></i> 2615114147</p>
                        <p><i class="fab fa-whatsapp"></i> <a href="https://wa.me/5492615114147" target="_blank">+54 9 2615114147</a></p>
                        <p><i class="fab fa-instagram"></i> <a href="https://www.instagram.com/gustavo_ok2015/" target="_blank">@gustavo_ok2015</a></p>
                    </div>
                </div>
            `;
        }

        content += `<button class="back-button"><i class="fas fa-arrow-left"></i> Volver</button>`;
        window.innerHTML = content;
        document.body.appendChild(window);
        sectionWindows[section] = window;

        // Botón Volver
        window.querySelector('.back-button').addEventListener('click', function() {
            window.style.display = 'none';
            mainContent.style.display = 'block';
        });
    });

    // Configurar botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.dataset.section;
            mainContent.style.display = 'none';
            sectionWindows[section].style.display = 'block';
            
            // Cargar contenido dinámico si es necesario
            if(section === 'certifications') loadCertifications();
            if(section === 'skills') loadSkills();
            if(section === 'contact') loadContact();
        });
    });

    function loadCertifications() {
        const list = document.querySelector('.certifications-list');
        list.innerHTML = `
            <li>Certificado por Universidad Nacional de Córdoba Desarrollador de Software (2016)</li>
            <li>Certificado por Egg Developer Web Full Stack (2020)</li>
            <li>Certificado por Silvertech Front End Dinámico (2021)</li>
            <li>Certificado por Cámara Argentina del Software Java Node Js (2022)</li>
            <li>Certificado por Microsoft Azure (2023)</li>
            <li>Certificado por Fundación Santander Desarrollador Web (2023)</li>
            <li>Certificado por Alura Latam Soft Skills (2024)</li>
            <li>Certificado por Alura Latam Python avanzado (2025)</li>
        `;
    }

    function loadSkills() {
        const container = document.querySelector('.skills-container');
        container.innerHTML = `
            <div class="skill-item">
                <div class="skill-info">
                    <span>HTML</span>
                    <span>95%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 95%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-info">
                    <span>CSS</span>
                    <span>95%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 95%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-info">
                    <span>Java</span>
                    <span>80%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 80%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-info">
                    <span>Python</span>
                    <span>100%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 100%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-info">
                    <span>MySQL</span>
                    <span>75%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 75%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-info">
                    <span>JavaScript</span>
                    <span>85%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 85%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-info">
                    <span>Bootstrap</span>
                    <span>80%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 80%"></div>
                </div>
            </div>
            <div class="skill-item">
                <div class="skill-info">
                    <span>Git</span>
                    <span>80%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 80%"></div>
                </div>
            </div>
        `;
    }

    function loadContact() {
        const contactInfo = document.querySelector('.contact-info');
        contactInfo.innerHTML = `
            <p><i class="fas fa-envelope"></i> <a href="mailto:gustavorojasok2015@gmail.com" target="_blank">gustavorojasok2015@gmail.com</a></p>
            <p><i class="fas fa-phone"></i> 2615114147</p>
            <p><i class="fab fa-whatsapp"></i> <a href="https://wa.me/5492615114147" target="_blank">+54 9 2615114147</a></p>
            <p><i class="fab fa-instagram"></i> <a href="https://www.instagram.com/gustavo_ok2015/" target="_blank">@gustavo_ok2015</a></p>
        `;
    }
});
