import projectImage from "@/assets/project-example.jpg";

const projects = [
  {
    title: "Condomínio Residencial Premium",
    category: "Residencial",
    image: projectImage
  },
  {
    title: "Centro Comercial Moderno",
    category: "Comercial",
    image: projectImage
  },
  {
    title: "Complexo Industrial",
    category: "Industrial",
    image: projectImage
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Projetos Realizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos onde nossos produtos fizeram a diferença
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <div className="text-sm font-semibold text-accent mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
