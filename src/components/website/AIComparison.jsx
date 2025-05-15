import React from "react";
import { Brain, Bot, Cpu, Zap, Workflow, Lightbulb, Target, RefreshCw, Layers, Sparkles } from "lucide-react";

const AIComparison = () => {
  const agentTypes = [
    {
      title: "Learning agents",
      description: "Adapt based on experience, like customer service chatbots",
      icon: RefreshCw,
    },
    {
      title: "Utility-based agents",
      description: "Make decisions by weighing outcomes, like AI trading systems",
      icon: Layers,
    },
    {
      title: "Goal-based agents",
      description: "Focus on achieving specific objectives, like inventory systems",
      icon: Target,
    },
    {
      title: "Reflex agents",
      description: "React directly to user inputs using set rules",
      icon: Zap,
    },
    {
      title: "Model-based agents",
      description: "Use internal representations for smarter decisions",
      icon: Brain,
    },
  ];

  const agentCharacteristics = [
    "Designed for specific tasks within defined parameters",
    "Operates independently within designated domains",
    "Uses rule-based systems or machine learning models",
    "Often reactive, responding to specific triggers",
    "Limited ability to adapt beyond programming",
  ];

  const agenticFeatures = [
    {
      title: "Autonomous decision-making",
      description: "Analyzes situations and acts independently",
      icon: Brain,
    },
    {
      title: "Goal-driven actions",
      description: "Works toward specific objectives by planning multi-step tasks",
      icon: Target,
    },
    {
      title: "Learning and adapting",
      description: "Improves from interactions and adjusts in real time",
      icon: RefreshCw,
    },
    {
      title: "Advanced reasoning",
      description: "Connects multiple systems and manages complex workflows",
      icon: Workflow,
    },
  ];

  const agenticCharacteristics = [
    "Acts as a conductor orchestrating multiple AI agents",
    "Capable of proactive problem-solving without prompting",
    "Manages complex workflows across multiple systems",
    "Learns and improves continuously from experience",
    "Operates with higher levels of autonomy and adaptability",
  ];

  return (
    <section className="my-20 py-20 bg-[#F7F7F9] overflow-hidden">
      <div className="wrapper relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 data-aos="fade-up" className="section-heading text-center">
            <span className="gradient-text">AI Agents vs Agentic AI</span>
          </h2>
          <p data-aos="fade-up" className="max-w-3xl mx-auto text-gray-600">
            Understanding the evolution from traditional AI agents to advanced agentic AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          {/* AI Agent Column */}
          <div data-aos="fade-right" className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-secondary/80 to-primary/80 p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-md">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">What is an AI Agent?</h3>
              </div>
              <p className="text-gray-600 mb-6">
                An AI agent is a software program designed to understand its environment, process information, and take actions to achieve specific goals. These agents range from simple to highly advanced—from setting reminders with Siri to handling complex tasks using deep learning models.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 gradient-text">Types of AI Agents:</h4>
              <div className="space-y-4">
                {agentTypes.map((type, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="bg-secondary/10 p-2 rounded-lg group-hover:bg-secondary/20 transition-all">
                      <type.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">{type.title}</h5>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-xl font-semibold mt-8 mb-4 gradient-text">AI Agent Characteristics</h4>
              <ul className="space-y-2">
                {agentCharacteristics.map((characteristic, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="min-w-5 h-5 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-xs text-white">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{characteristic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Agentic AI Column */}
          <div data-aos="fade-left" className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-primary/80 to-secondary/80 p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-md">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">What is Agentic AI?</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Agentic AI refers to artificial intelligence systems that feature autonomous decision-making, goal-driven actions, learning capabilities, and advanced reasoning. Unlike individual AI agents, agentic AI employs multiple agents to handle complex workflows, learning and adapting in real-time.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 gradient-text">Key Features of Agentic AI:</h4>
              <div className="space-y-4">
                {agenticFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-all">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">{feature.title}</h5>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-xl font-semibold mt-8 mb-4 gradient-text">Agentic AI Characteristics</h4>
              <ul className="space-y-2">
                {agenticCharacteristics.map((characteristic, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="min-w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-xs text-white">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{characteristic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div data-aos="fade-up" className="mt-16 relative z-10">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Head-to-Head Comparison</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-100 shadow-md">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-4 text-left text-gray-800">Feature</th>
                  <th className="p-4 text-center text-gray-800">
                    <div className="flex items-center justify-center gap-2">
                      <Bot className="w-5 h-5 text-secondary" />
                      <span>AI Agents</span>
                    </div>
                  </th>
                  <th className="p-4 text-center text-gray-800">
                    <div className="flex items-center justify-center gap-2">
                      <Cpu className="w-5 h-5 text-primary" />
                      <span>Agentic AI</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">Autonomy</td>
                  <td className="p-4 text-center text-gray-600">Limited to programmed tasks</td>
                  <td className="p-4 text-center text-gray-600">High level of independent operation</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">Learning Capability</td>
                  <td className="p-4 text-center text-gray-600">Specific to designated domain</td>
                  <td className="p-4 text-center text-gray-600">Continuous learning across domains</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">Decision Making</td>
                  <td className="p-4 text-center text-gray-600">Rule-based or model-based</td>
                  <td className="p-4 text-center text-gray-600">Complex reasoning with multiple factors</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">Adaptability</td>
                  <td className="p-4 text-center text-gray-600">Limited by initial programming</td>
                  <td className="p-4 text-center text-gray-600">Highly adaptable to new situations</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">System Integration</td>
                  <td className="p-4 text-center text-gray-600">Usually operates in isolation</td>
                  <td className="p-4 text-center text-gray-600">Orchestrates multiple systems and agents</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div data-aos="fade-up" className="mt-16 text-center relative z-10">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Explore Advanced AI Solutions?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover how our AI expertise can transform your business with cutting-edge solutions tailored to your needs.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary px-6 py-3 rounded-full text-white font-medium hover:shadow-lg hover:shadow-secondary/20 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            <span>Contact Our AI Experts</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIComparison;