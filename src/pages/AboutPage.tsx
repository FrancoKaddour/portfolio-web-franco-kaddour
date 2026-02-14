const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12 font-mono text-[14px] leading-[26px]">
      <h1 className="text-4xl font-sans font-bold text-primary mb-1 text-center">
        Tu Nombre
      </h1>
      <p className="text-center text-foreground text-lg font-sans mb-10">
        Software Engineer
      </p>

      <p className="text-foreground mb-6">
        Hey! I'm a software engineer from Buenos Aires, Argentina. I primarily
        work with JavaScript / TypeScript and the React ecosystem.
      </p>
      <p className="text-foreground mb-10">
        I'm focused on frontend development with React, but you'll also find me
        working with Node.js, PostgreSQL and Express while building the backend
        for my personal projects.
      </p>

      <h2 className="text-2xl font-sans font-bold text-primary mb-4">Experience</h2>
      <p className="text-foreground mb-4">
        Currently working as a Full Stack Developer, building modern web applications
        with a lean team of engineers.
      </p>
      <p className="text-foreground mb-10">
        I've been leading the development efforts for building responsive and 
        performant user interfaces. I also maintain our component library and website.
      </p>

      <h2 className="text-2xl font-sans font-bold text-primary mb-4">Tech Stack</h2>
      <p className="text-foreground mb-10">
        React, TypeScript, Next.js, Node.js, Tailwind CSS, PostgreSQL, Docker, Git, 
        and many more tools that help me build great software.
      </p>

      <h2 className="text-2xl font-sans font-bold text-primary mb-4">Beyond Code</h2>
      <p className="text-foreground">
        Aside from programming, I like to read, listen to music, explore new 
        technologies and contribute to open source projects.
      </p>
    </div>
  );
};

export default AboutPage;
