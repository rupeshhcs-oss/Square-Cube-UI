'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiCheck, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi'
import { BsBuilding, BsPalette, BsEye, BsClipboard, BsPersonCheck, BsChartLine } from 'react-icons/bs'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Years of Experience', value: '15+', icon: FiAward },
    { label: 'Projects Delivered', value: '50+', icon: FiTrendingUp },
    { label: 'Happy Clients', value: '100+', icon: FiUsers },
  ]

  const services = [
    {
      icon: BsClipboard,
      title: 'Project Management',
      description: 'End-to-end project management from planning to delivery with complete transparency.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BsBuilding,
      title: 'Consultancy Services',
      description: 'Expert consultation for construction planning, budgeting, and risk management.',
      color: 'from-primary-600 to-primary-400',
    },
    {
      icon: BsPalette,
      title: 'Interior Design',
      description: 'Creative interior design solutions that blend aesthetics with functionality.',
      color: 'from-secondary-600 to-orange-400',
    },
    {
      icon: BsPersonCheck,
      title: 'Site Supervision',
      description: 'On-site supervision and quality control ensuring projects meet standards.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BsEye,
      title: '3D Visualization',
      description: 'Advanced 3D modeling and visualization before construction begins.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BsChartLine,
      title: 'Quality Assurance',
      description: 'Rigorous quality assurance protocols ensuring excellence at every stage.',
      color: 'from-yellow-500 to-amber-500',
    },
  ]

  const projects = [
    {
      title: 'Luxury Residential Complex',
      category: 'Residential',
      image: 'https://via.placeholder.com/400x300?text=Residential+1',
      description: '250 unit luxury apartment complex in Noida',
    },
    {
      title: 'Modern Office Space',
      category: 'Commercial',
      image: 'https://via.placeholder.com/400x300?text=Commercial+1',
      description: 'State-of-the-art office building with green certification',
    },
    {
      title: 'Mixed-Use Development',
      category: 'Mixed-Use',
      image: 'https://via.placeholder.com/400x300?text=Mixed+Use+1',
      description: 'Combined residential, retail, and office space',
    },
    {
      title: 'Boutique Residences',
      category: 'Residential',
      image: 'https://via.placeholder.com/400x300?text=Residential+2',
      description: 'Premium 3-4 BHK residences with modern amenities',
    },
    {
      title: 'Corporate Headquarters',
      category: 'Commercial',
      image: 'https://via.placeholder.com/400x300?text=Corporate+1',
      description: 'Modern corporate office with smart building features',
    },
    {
      title: 'Retail Complex',
      category: 'Commercial',
      image: 'https://via.placeholder.com/400x300?text=Retail+1',
      description: 'Premium retail and entertainment complex',
    },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Project Director, XYZ Developers',
      image: 'https://via.placeholder.com/80x80?text=Rajesh',
      content: 'Square and Cube delivered our project on time and within budget. Their professionalism and attention to detail are exceptional. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'CEO, ABC Real Estate',
      image: 'https://via.placeholder.com/80x80?text=Priya',
      content: 'Working with Square and Cube has transformed how we manage projects. Their expertise and innovative solutions have significantly improved our operations.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Homeowner',
      image: 'https://via.placeholder.com/80x80?text=Amit',
      content: 'They took complete care of our home renovation project. From design to execution, everything was perfect. We are extremely satisfied!',
      rating: 5,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="home" className="gradient-bg text-white min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{ y: [0, 50, 0], x: [0, 25, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ y: [0, -50, 0], x: [0, -25, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Square & Cube
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Premium Construction Consultancy & Project Management Services
            </p>
            <p className="text-lg text-cyan-200 mb-12 max-w-2xl mx-auto">
              15+ Years of Excellence | 50+ Projects Delivered | 100+ Satisfied Clients
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started <FiArrowRight className="inline ml-2" />
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-4 rounded-full">
                      <Icon className="text-white text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              About Square & Cube
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              We are a team of experienced professionals dedicated to delivering excellence in construction and project management.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://via.placeholder.com/500x400?text=About+Us"
                alt="About Square and Cube"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in the construction industry, Square & Cube has established itself as a trusted name in premium construction consultancy and project management.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of experienced architects, engineers, and project managers work collaboratively to ensure every project is delivered with excellence, on time, and within budget.
              </p>
              <div className="space-y-4">
                {['Quality Excellence', 'Timely Delivery', 'Budget Management', 'Client Satisfaction'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                      <FiCheck className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Our Services
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Comprehensive construction and design solutions tailored to your needs.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className={`bg-gradient-to-br ${service.color} p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Our Projects
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Showcasing our expertise across residential, commercial, and mixed-use developments.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 flex items-end justify-start p-6">
                    <div>
                      <p className="text-cyan-300 text-sm font-semibold mb-2">{project.category}</p>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              What Our Clients Say
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Success stories from satisfied clients who trusted us with their projects.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-gray-900 font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{ y: [0, 100, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your Project Today</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss your construction or design project and bring your vision to life.
            </p>
          </div>

          <motion.form
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-300 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-300 transition-colors"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Project Title"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-300 transition-colors"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Tell us about your project"
                rows={5}
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-300 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-primary-900 font-bold py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Free Quote
            </button>
          </motion.form>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <a href="tel:+919999999999" className="text-cyan-200 hover:text-white transition-colors">
                +91 9999 999999
              </a>
            </div>
            <div>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:info@squareandcube.in" className="text-cyan-200 hover:text-white transition-colors">
                info@squareandcube.in
              </a>
            </div>
            <div>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-cyan-200">Noida, Delhi NCR, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
