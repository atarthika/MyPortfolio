
function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-list">

        <div className="project-card">
          <h3>1. Address Book (C Programming)</h3>
          <p>
            A terminal-based contact management system built in C.  
            It allows users to store and manage people's details like name, email, and phone number.  
            Features include add, display, search, sort, and update operations.
          </p>
        </div>

        <div className="project-card">
          <h3>2. Steganography in BMP (C Programming)</h3>
          <p>
            A C program that hides secret text data inside BMP images using basic steganography techniques.  
            It includes data encoding and decoding functionality.
          </p>
        </div>

        <div className="project-card">
          <h3>3. APC Calculator (C + Data Structures)</h3>
          <p>
            A calculator application implemented using C with various data structures.  
            Handles arithmetic operations and uses concepts like linked lists and stacks internally.
          </p>
        </div>

        <div className="project-card">
          <h3>4. HomlyHub (MERN Stack)</h3>
          <p>
            A platform similar to Airbnb where users can list or rent homes for trips and vacations.  
            Built using the MERN stack with authentication, property management, and booking features.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
