import { Code, Server, Brain } from "lucide-react"

export const About = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Backend Developer & AI Enthusiast</h3>
                    <p className="text-muted-foreground">
                        I am a Software Engineering student with a strong interest in backend architecture and system design. 
                        I enjoy building applications that are not only functional, 
                        but scalable, maintainable, and performance-oriented.
                    </p>
                    <p className="text-muted-foreground">
                        With experience in Java, C#, Data Science, and Machine Learning, 
                        I aim to combine solid engineering principles with intelligent decision-making systems. 
                        My goal is to build software that delivers real-world impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary texte-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 "> 
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg"> Development</h4>
                                <p className="text-muted-foreground">Engineering the bridge between backend systems 
                                    and intelligent solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p3 rounded-full bg-primary/10">
                                <Server className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg"> Backend Engineering</h4>
                                <p className="text-muted-foreground">Designing scalable architectures and building reliable systems using Java and C#.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p3 rounded-full bg-primary/10">
                                <Brain className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg"> AI & Data-Driven Systems</h4>
                                <p className="text-muted-foreground">Developing intelligent applications powered by data analysis and machine learning models</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}