import { Code, Smartphone, Database, Zap, Shield, Headphones } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "End-to-end web application development using modern technologies like Next.js, React, and Node.js.",
    features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"],
  },
  {
    icon: Smartphone,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration, inventory management, and admin dashboards.",
    features: ["Online Stores", "Payment Gateways", "Inventory Management", "Order Processing"],
  },
  {
    icon: Database,
    title: "SaaS Development",
    description: "Scalable Software-as-a-Service applications with multi-tenancy, subscriptions, and analytics.",
    features: ["Multi-tenant Architecture", "Subscription Management", "Analytics Dashboard", "API Integration"],
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Custom ERP and CRM systems to streamline business processes and improve efficiency.",
    features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Data Analytics"],
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly.",
    features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Bug Fixes"],
  },
  {
    icon: Headphones,
    title: "Consulting & Strategy",
    description: "Technical consulting and strategic planning to help you make informed technology decisions.",
    features: ["Technology Assessment", "Architecture Planning", "Code Review", "Best Practices"],
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development solutions to help your business grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                <div className="mb-6">
                  <Icon className="h-12 w-12 text-purple-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
