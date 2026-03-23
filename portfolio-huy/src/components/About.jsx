import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import StarField from "./StarField";

// Mock styles and utils for demonstration
const styles = {
  sectionSubText: "text-[14px] sm:text-[16px] uppercase tracking-wider",
};

const textVariant = () => ({
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay: 0 } }
});

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" }
  }
});

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen bg-primary py-20 px-6 sm:px-16">
      {/* Header Section */}
      <motion.div variants={textVariant()} className="text-center relative mb-16">
        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] 
          bg-gradient-to-r from-[#915EFF]/30 via-[#7c3aed]/30 to-[#00BFFF]/30 
          blur-3xl rounded-full opacity-60" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-6 py-3 rounded-full
              bg-gradient-to-r from-[#915EFF]/20 to-[#00BFFF]/20 
              border border-[#915EFF]/30 backdrop-blur-sm"
          >
            <span className="text-3xl">🚀</span>
            <span className="text-[#CBB6FF] font-semibold text-sm uppercase tracking-wider">
              Hành trình của tôi
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] sm:text-[50px] lg:text-[70px] font-black leading-tight
              bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
              bg-clip-text text-transparent mb-4"
          >
            Từ ý tưởng đến hiện thực
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 w-40 mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full"
          />
        </div>
      </motion.div>

      {/* Main Content: Text + Image */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
        {/* Left: Description */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="flex-1 relative"
        >
          {/* Personal Info Card */}
          <div className="relative bg-gradient-to-br from-tertiary via-black-200 to-black-200/50 
            rounded-3xl p-8 mb-8 border border-white/10 overflow-hidden group
            shadow-2xl hover:shadow-[#915EFF]/20 transition-all duration-500">
            
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#915EFF]/10 to-transparent rounded-bl-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-[#915EFF] to-[#7c3aed] rounded-full" />
                <h3 className="text-[#CBB6FF] text-[26px] font-bold">
                  Thông tin cá nhân
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "👤", label: "Họ tên", value: "Nguyễn Quang Huy" },
                  { icon: "🎂", label: "Sinh năm", value: "05-11-2004" },
                  { icon: "📧", label: "Email", value: "nguyenhuyvt639@gmail.com", small: true },
                  { icon: "📱", label: "SĐT", value: "0849500516" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-3 p-4 rounded-xl 
                      bg-gradient-to-r from-[#915EFF]/10 via-[#915EFF]/5 to-transparent 
                      border border-[#915EFF]/20 hover:border-[#915EFF]/40
                      transition-all duration-300 cursor-default group/item"
                  >
                    <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[#CBB6FF] text-xs font-semibold mb-1">{item.label}</div>
                      <div className={`text-white/90 font-medium ${item.small ? 'text-xs' : 'text-sm'} truncate`}>
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="sm:col-span-2 flex items-center gap-3 p-4 rounded-xl 
                    bg-gradient-to-r from-[#915EFF]/10 via-[#915EFF]/5 to-transparent 
                    border border-[#915EFF]/20 hover:border-[#915EFF]/40
                    transition-all duration-300 cursor-default group/item"
                >
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">🎓</span>
                  <div className="flex-1">
                    <div className="text-[#CBB6FF] text-xs font-semibold mb-1">Đã tốt nghiệp</div>
                    <div className="text-white/90 font-medium text-sm">
                      Ho Chi Minh City University of Technology
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Introduction Text */}
          <div className="space-y-6 mb-8">
            <motion.div
              whileHover={{ x: 4 }}
              className="relative p-6 rounded-2xl bg-gradient-to-r from-[#915EFF]/10 to-transparent 
                border-l-4 border-[#915EFF] backdrop-blur-sm group
                hover:bg-gradient-to-r hover:from-[#915EFF]/15 hover:to-transparent
                transition-all duration-300"
            >
              <p className="text-white/95 text-[17px] leading-[32px] font-medium">
                Với hơn <span className="text-[#915EFF] font-bold text-[19px]">4 năm học tập</span> và nghiên cứu trong lĩnh vực 
                <span className="text-[#00BFFF] font-bold"> Công nghệ thông tin</span>, tôi đã tích lũy được 
                kinh nghiệm thực tế trong việc phát triển các dự án từ ý tưởng đến triển khai.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 4 }}
              className="relative p-6 rounded-2xl bg-gradient-to-r from-[#00BFFF]/10 to-transparent 
                border-l-4 border-[#00BFFF] backdrop-blur-sm group
                hover:bg-gradient-to-r hover:from-[#00BFFF]/15 hover:to-transparent
                transition-all duration-300"
            >
              <p className="text-white/95 text-[17px] leading-[32px] font-medium">
                Tôi đặc biệt quan tâm đến việc tạo ra những 
                <span className="text-[#CBB6FF] font-bold"> giải pháp sáng tạo</span> và 
                <span className="text-[#CBB6FF] font-bold"> tối ưu hóa trải nghiệm người dùng</span>, 
                luôn cập nhật và học hỏi những công nghệ mới nhất để mang đến giá trị thực tế.
              </p>
            </motion.div>
          </div>

          {/* Skills & Goals */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-[#7c3aed] to-[#00BFFF] rounded-full" />
              <h3 className="text-[#CBB6FF] text-[22px] font-bold">
                Kỹ năng & Mục tiêu
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Frontend Development", desc: "React, JavaScript, HTML/CSS", icon: "⚛️", color: "from-blue-500/20" },
                { title: "Backend Development", desc: "Java, C#, ASP.NET Core, Python, JS, TS", icon: "⚙️", color: "from-green-500/20" },
                { title: "Database", desc: "Sql(postgresql), NoSQL(mongo, redis)", icon: "🗄️", color: "from-orange-500/20" },
                { title: "Software Engineering", desc: "OOP, Design Patterns, Git/GitHub, Docker", icon: "🛠️", color: "from-blue-400/20" },
                { title: "Career Goal", desc: "Backend/AI", icon: "🎯", color: "from-purple-500/20" },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`relative p-5 rounded-2xl bg-gradient-to-br ${skill.color} to-transparent 
                    border border-white/10 hover:border-[#915EFF]/40
                    shadow-lg hover:shadow-xl hover:shadow-[#915EFF]/20
                    transition-all duration-300 overflow-hidden group cursor-default`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/0 to-[#915EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="text-3xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-bold text-[16px] mb-2">{skill.title}</h4>
                    <p className="text-secondary/80 text-[13px] leading-relaxed">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          initial="hidden"
          animate="show"
          className="relative group"
        >
          {/* Animated rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] opacity-20 blur-2xl" />
          </motion.div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
            opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700 animate-pulse" />
          
          {/* Outer gradient ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
            opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          
          <Tilt
            className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] 
              rounded-full overflow-hidden shadow-2xl shadow-[#915EFF]/50
              group-hover:shadow-[#915EFF]/80 transition-all duration-500
              border-[6px] border-tertiary"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={400}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-[#915EFF]/20 to-[#00BFFF]/20">
              <img
                src="/myPhoto.jpg"
                alt="Nguyen Quang Huy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#915EFF]/30 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Tilt>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl 
              bg-gradient-to-br from-[#915EFF]/40 to-[#7c3aed]/40 
              backdrop-blur-md border-2 border-[#915EFF]/60 shadow-2xl shadow-[#915EFF]/50
              flex items-center justify-center text-3xl"
          >
            💻
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -bottom-8 -left-8 w-24 h-24 rounded-2xl 
              bg-gradient-to-br from-[#00BFFF]/40 to-[#915EFF]/40 
              backdrop-blur-md border-2 border-[#00BFFF]/60 shadow-2xl shadow-[#00BFFF]/50
              flex items-center justify-center text-4xl"
          >
            🚀
          </motion.div>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto relative">
        {/* Section title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/5 via-transparent to-[#915EFF]/5 rounded-3xl blur-3xl" />
        
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "4+", label: "Năm đại học", icon: "🎓", gradient: "from-blue-500 to-cyan-500", delay: 0.2 },
            { number: "12+", label: "Dự án học tập & cá nhân", icon: "💻", gradient: "from-purple-500 to-pink-500", delay: 0.3 },
            { number: "4+", label: "Dự án nhóm thực hiện", icon: "🚀", gradient: "from-orange-500 to-red-500", delay: 0.4 },
            { number: "100%", label: "Tinh thần học hỏi", icon: "⚡", gradient: "from-green-500 to-emerald-500", delay: 0.5 }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.delay, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="relative bg-gradient-to-br from-tertiary via-black-200 to-black-200/50 
                p-8 rounded-3xl 
                border border-white/10 hover:border-[#915EFF]/60
                shadow-xl hover:shadow-2xl hover:shadow-[#915EFF]/40
                transition-all duration-500 overflow-hidden group cursor-default"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r 
                from-transparent via-white/20 to-transparent skew-x-12 
                group-hover:left-full transition-all duration-1000" />
              
              <div className="relative z-10 text-center">
                {/* Icon with animation */}
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {stat.icon}
                </motion.div>
                
                {/* Number with gradient */}
                <div className="text-[56px] font-black leading-none mb-4
                  bg-gradient-to-r from-white via-[#CBB6FF] to-[#915EFF] 
                  bg-clip-text text-transparent
                  group-hover:from-[#915EFF] group-hover:to-[#00BFFF]
                  transition-all duration-500">
                  {stat.number}
                </div>
                
                {/* Animated divider */}
                <motion.div 
                  initial={{ width: "3rem" }}
                  whileHover={{ width: "100%" }}
                  className="h-1 mx-auto bg-gradient-to-r from-[#915EFF] to-[#00BFFF] rounded-full mb-4"
                />
                
                {/* Label */}
                <div className="text-secondary/80 group-hover:text-white text-[15px] leading-snug font-medium
                  transition-colors duration-300">
                  {stat.label}
                </div>
              </div>

              {/* Corner glow effect */}
              <div className="absolute top-0 right-0 w-24 h-24 
                bg-gradient-to-bl from-[#915EFF]/30 to-transparent rounded-bl-full
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-24 h-24 
                bg-gradient-to-tr from-[#00BFFF]/30 to-transparent rounded-tr-full
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* StarField background */}
      <StarField />
    </div>
  );
};

export default About;