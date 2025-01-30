import "./App.css";
import Logo from "./assets/logo.png";
import ShinyText from "./components/shinyText/ShinyText";
import SpotlightCard from "./components/SpotLightCard/SpotlightCard";
import GradientText from "./components/GradientText/GradientText";
import CountUp from "./components/CountUp/CountUp";
import BlurText from "./components/BlurText/BlurText";
import { IoMenu } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";
import LogoWall from "./components/LogoWall/LogoWall";
import Google from "./assets/CompanyLogos/Google.png";
import Meta from "./assets/CompanyLogos/Meta.png";
import Github from "./assets/CompanyLogos/Github.png";
import Ibm from "./assets/CompanyLogos/IBM.png";
import Netlify from "./assets/CompanyLogos/Netlify.png";
import Microsoft from "./assets/CompanyLogos/Microsoft.png";
import { GiClick } from "react-icons/gi";
import { useState } from "react";
import Brain from "./assets/Icons/Brain.svg";
import Bulb from "./assets/Icons/Bulb.svg";
import Graph from "./assets/Icons/Graph.svg";
import { motion } from "framer-motion";
import People from "./assets/Icons/People.svg";
import { FaRegCircleCheck } from "react-icons/fa6";
import People1 from "./assets/Images/People.jpg";
import StarBorder from "./components/StarBorder/StarBorder";
import { SiTarget } from "react-icons/si";

function App() {
  const links = ["home", "about", "services", "pricing", "contact"];
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const chooseUs = [
    {
      title: "Innovative Tools for Every Problem",
      icon: Bulb,
      alternative_icon: "🔧",
      description:
        "Stay ahead with cutting-edge tools designed to tackle any challenge. Whether you're streamlining workflows, automating repetitive tasks, or finding creative solutions, our platform empowers you with the resources needed to solve problems efficiently and effectively.",
    },
    {
      title: "AI-Powered Insights to Simplify Your Work",
      icon: Brain,
      alternative_icon: "🤖",
      description:
        "Leverage the power of artificial intelligence to gain deep insights, automate processes, and make smarter decisions. Our AI-powered solutions analyze data in real time, providing you with actionable recommendations that enhance productivity and reduce complexity.",
    },
    {
      title: "Seamless Collaboration for Teams",
      icon: People,
      alternative_icon: "🤝",
      description:
        "Work better together with tools that foster collaboration and communication. Whether your team is remote, hybrid, or in-office, our platform ensures seamless coordination, real-time feedback, and effortless project management, keeping everyone aligned and productive.",
    },
    {
      title: "Real-Time Analytics and Visualization",
      icon: Graph,
      alternative_icon: "📈",
      description:
        "Make data-driven decisions with interactive analytics and real-time visualizations. Track key metrics, monitor trends, and get instant updates to stay ahead of the competition. Our intuitive dashboards transform complex data into clear, actionable insights.",
    },
  ];

  const about = [
    {
      to: 2,
      desc: "years of experience",
    },
    {
      to: 237,
      desc: "5 Star Reviews",
    },
    {
      to: 259,
      desc: "happy clients",
    },
  ];
  const logoImgs = [
    { imgUrl: Google, altText: "Google" },
    { imgUrl: Meta, altText: "Meta" },
    { imgUrl: Github, altText: "Github" },
    { imgUrl: Ibm, altText: "IBM" },
    { imgUrl: Netlify, altText: "Netlify" },
    { imgUrl: Microsoft, altText: "Microsoft" },
  ];

  const pricing = [
    {
      plan: "Basic",
      desc: "Best for personal use.",
      price: "Free",
      month: "",
      scale: 1,
      perks: [
        "100 requests per day",
        "Free trial features access",
        "Limited API access",
      ],
    },
    {
      plan: "Enterprise",
      desc: "For large teams & corporations.",
      price: "$20",
      month: "/ per month",
      scale: 1.05,
      perks: [
        "Unlimited AI generation",
        "Full new features access",
        "Priority support",
      ],
    },
    {
      plan: "Business",
      desc: "Best for business owners.",
      price: "$120",
      month: "/ per month",
      scale: 1,
      perks: [
        "Custom deployment",
        "Comprehensive usage data",
        "Training specialized models",
      ],
    },
  ];
  const [servicesActive, setServicesActive] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const SideBar = ({ toggleSidebar, setToggleSidebar }) => {
    return (
      <div
        className={`w-full h-screen bg-black fixed top-0 left-0 flex md:hidden flex-col items-center justify-center gap-10 ${
          toggleSidebar
            ? "opacity-100 scale-100 translate-y-0"
            : " opacity-0 hidden -translate-y-full"
        } transition ease-in-out origin-bottom duration-300 z-50`}
        onClick={() => setToggleSidebar(false)}
      >
        {links.map((item, index) => (
          <a
            href={`#${item}`}
            key={index}
            onClick={() => {
              console.log(item);
            }}
            className="text-xl"
          >
            {Capitalize(item)}
          </a>
        ))}
      </div>
    );
  };
  return (
    <div className="bg-black min-h-screen text-white pb-10 transition-all ease-in-out duration-300">
      <SideBar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div className="w-[1300px] max-w-full mx-auto px-4 ">
        <div className="relative flex items-center justify-center gap-2">
          <div className="bg-[rgba(255,255,255,0.2)] h-[300px] w-[300px] md:h-[600px] md:w-[700px] shadow-[0px_0px_50px_rgba(255,255,255,0.1)] blur-3xl absolute -top-[230px] md:-top-[350px] rounded-full fades"></div>
        </div>
        <nav className="flex items-center justify-between py-4 z-50">
          <Fade triggerOnce>
            <div className="flex flex-col items-center">
              <img src={Logo} alt="" className="w-[45px]" />
              <h1 className="text-white text-[14px] md:text-base">
                BrainWave.
              </h1>
            </div>
          </Fade>
          <ul className="hidden md:flex gap-7">
            {links.map((item, index) => {
              return (
                <Fade triggerOnce delay={index * 200} key={index}>
                  <a
                    href={`#${item}`}
                    className="relative inline-block px-1 text-transparent bg-gradient-to-r from-white via-white to-gray-400 bg-[length:200%_100%] bg-left transition-all duration-300 ease-in-out hover:bg-right hover:scale-[1.02] group bg-clip-text"
                  >
                    {Capitalize(item)}
                    <span class="absolute bottom-[-3px] left-0 w-0 h-[3px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </a>
                </Fade>
              );
            })}
          </ul>

          <Fade triggerOnce delay={200} className="hidden md:flex">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
            >
              <ShinyText
                text="Get Started"
                disabled={false}
                speed={3}
                className="custom-class border py-2 px-5 rounded-3xl text-xs md:text-[14px] bg-[#111111] sm:mx-auto "
              />
            </motion.button>
          </Fade>
          <IoMenu
            className="flex md:hidden text-3xl"
            onClick={() => setToggleSidebar(true)}
          />
        </nav>
        {/* Header */}
        <section className="flex flex-col items-center justify-center minHeight">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <Fade triggerOnce delay={400}>
              <ShinyText
                text="BIG OR SMALL"
                disabled={false}
                speed={3}
                className="custom-class text-base md:text-3xl"
              />
            </Fade>
            <BlurText
              text="THE GREAT NEVER SETTLE FOR LESS"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-[45px] mb-8 whitespace-nowrap"
            />
          </div>
        </section>
        {/* Infinite Scrolling */}
        <div style={{ height: "300px", width: "100%" }}>
          <LogoWall
            items={logoImgs}
            direction="horizontal"
            pauseOnHover={true}
            size="clamp(8rem, 1rem + 20vmin, 25rem)"
            duration="60s"
            bgColor="#060606"
            bgAccentColor="#111111"
          />
        </div>
      </div>
      {/* About Section */}
      <div
        className="w-[1300px] max-w-full mx-auto px-5 flex flex-col gap-4 pt-10 pb-16 scroll-mt-9 overflow-hidden"
        id="about"
      >
        <Fade triggerOnce direction="left">
          <GradientText
            colors={["#808080", "#eae9e9", "#808080", "#eae9e9", "#808080"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-2xl md:text-4xl  "
          >
            Who We Are
          </GradientText>
        </Fade>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-2 md:mb-0 ">
          <div className="md:basis-1/2 space-y-5 md:space-y-10">
            <Fade triggerOnce direction="left" fraction={0.3}>
              <h4 className="text-base md:text-[18px] ">
                Brainwave is an AI-powered platform designed to simplify
                workflows, enhance collaboration, and provide real-time
                insights. Whether you're an individual, a startup, or a large
                enterprise, Brainwave equips you with innovative tools to
                optimize efficiency and make smarter decisions.
              </h4>
              <p className="text-base md:text-[18px] font-light opacity-85">
                We empower individuals and businesses to build exceptional
                brands and cutting-edge products. Our vision is to deliver
                innovative, high-impact solutions that captivate and drive
                success.
              </p>
            </Fade>
          </div>
          <div className="hidden md:flex gap-3 basis-1/2">
            <Fade triggerOnce direction="right" fraction={0.3}>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={People1}
                  alt=""
                  className="w-full object-cover hover:scale-[1.05] transition"
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {about.map((item, index) => {
            return (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
              >
                <Fade
                  triggerOnce
                  key={index}
                  fraction={0.5}
                  delay={index * 100}
                >
                  <SpotlightCard
                    className="custom-spotlight-card flex flex-col gap-2 items-center"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <CountUp
                      from={0}
                      to={item.to}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-3xl"
                    />
                    <p className="opacity-70">{item.desc}</p>
                  </SpotlightCard>
                </Fade>
              </motion.button>
            );
          })}
        </div>
      </div>
      {/* Services */}

      <div
        className={`pt-10 ${
          servicesActive ? "bg-white" : "bg-black"
        } transition-all ease-in-out duration-500 `}
        id="services"
      >
        <div className="w-[1300px] max-w-full mx-auto px-4">
          <div className="flex justify-between gap-2 items-center overflow-hidden">
            <Fade triggerOnce direction="left">
              {servicesActive ? (
                <GradientText
                  colors={[
                    "#808080",
                    "#a9a9a9",
                    "#808080",
                    "#a9a9a9",
                    "#808080",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class text-2xl md:text-4xl  "
                >
                  Why Choose Brainwave?
                </GradientText>
              ) : (
                <GradientText
                  colors={[
                    "#808080",
                    "#eae9e9",
                    "#808080",
                    "#eae9e9",
                    "#808080",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class text-2xl md:text-4xl  "
                >
                  Why Choose Brainwave?
                </GradientText>
              )}
            </Fade>
            <Fade triggerOnce direction="right">
              <motion.button
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                className={`min-w-[50px] h-[50px] rounded-full ${
                  servicesActive ? "bg-black text-white" : "bg-white text-black"
                } flex items-center justify-center text-2xl  transition ease-in-out duration-300 cursor-pointer`}
                onClick={() => setServicesActive(!servicesActive)}
              >
                <GiClick />
              </motion.button>
            </Fade>
          </div>
          <div
            className={`${
              servicesActive
                ? "h-auto opacity-100 scale-100 pb-10"
                : "h-0 opacity-0 scale-0"
            } grid grid-cols-1 sm:grid-cols-2  gap-2 my-10 transition-height ease-in-out duration-300`}
          >
            {chooseUs.map((item, index) => {
              return (
                <SpotlightCard
                  className="custom-spotlight-card flex flex-col gap-2"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                  key={index}
                >
                  <img src={item.icon} alt={item.title} className="w-[72px]" />
                  <h1 className="font-semibold text-[18px]">{item.title}</h1>
                  <p className="text-[14px] md:text-base opacity-75">
                    {item.description.split(".")[0]}.
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
      {/* Pricing Section */}

      <div
        className="w-[1300px] max-w-full mx-auto px-5 @container pb-5 scroll-mt-12 overflow-hidden"
        id="pricing"
      >
        <Fade triggerOnce direction="left">
          <GradientText
            colors={["#808080", "#eae9e9", "#808080", "#eae9e9", "#808080"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-2xl md:text-4xl  mb-5 inline-block"
          >
            Best Deals & Prices
          </GradientText>
        </Fade>
        {/* Add smoke effect and background */}
        <Fade triggerOnce fraction={0.2} delay={100}>
          <div className="grid grid-cols-1 @max-[900px]:grid-cols-1 @max-[1200px]:grid-cols-2 lg:grid-cols-3 gap-5">
            {pricing.map((item, index) => {
              return (
                <StarBorder
                  as="button"
                  className="custom-class  flex-1 items-start hover:scale-[1.05] transition"
                  color="white"
                  speed="5s"
                  key={index}
                >
                  <div className="flex flex-col items-start">
                    <SiTarget className="text-2xl mb-2" />
                    <h2 className="text-2xl font-semibold my-3">{item.plan}</h2>
                    <p className="text-[14px] opacity-75">{item.desc}</p>
                    <h1 className="text-2xl md:text-4xl my-6">
                      {item.price} {item?.month}
                    </h1>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      whileDrag={{ scale: 0.9, rotate: 10 }}
                    >
                      <ShinyText
                        text="Get Started"
                        disabled={false}
                        speed={3}
                        className="custom-class border py-2 px-5 rounded-2xl text-xs md:text-[14px] bg-[#111111] cursor-pointer flex-1 "
                      />
                    </motion.button>
                    <div className="my-7 flex flex-col items-start gap-2">
                      {item.perks.map((items, index) => {
                        return (
                          <div
                            className="flex items-center gap-2 text-[14px] md:text-base"
                            key={index}
                          >
                            <FaRegCircleCheck />
                            {items}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </StarBorder>
              );
            })}
          </div>
        </Fade>
      </div>
      {/* Contact Section */}
      <div
        className="w-[1300px] max-w-full mx-auto px-5  mt-10 pb-10 scroll-mt-8 overflow-hidden"
        id="contact"
      >
        <Fade triggerOnce direction="left" fraction={0.5}>
          <GradientText
            colors={["#808080", "#eae9e9", "#808080", "#eae9e9", "#808080"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-2xl md:text-4xl  mb-5 inline-block"
          >
            Get In Touch
          </GradientText>
        </Fade>
        <Fade triggerOnce fraction={0.4} direction="up">
          <StarBorder
            as="button"
            className="custom-class flex-1 items-start hover:scale-[1.02] transition w-full"
            color="white"
            speed="5s"
          >
            <div className="flex flex-col ">
              <h1 className="text-2xl font-semibold">Drop Us a Line</h1>
              <form className="flex flex-col gap-3">
                <label htmlFor="name" className="text-left pt-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="border-b p-2 outline-none"
                />
                <label htmlFor="name" className="text-left pt-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="border-b p-2 outline-none"
                />
                <label htmlFor="name" className="text-left pt-2">
                  Message
                </label>
                <textarea
                  type="text"
                  placeholder="This is a dummy form."
                  className="border-b p-2 mb-5 outline-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  whileDrag={{ scale: 0.9, rotate: 10 }}
                >
                  <ShinyText
                    text="Submit"
                    disabled={false}
                    speed={3}
                    className="custom-class border py-3 px-5 rounded-2xl text-xs md:text-[14px] bg-[#111111] cursor-pointer w-[150px]"
                    onClick={(e) => e.preventDefault()}
                  />
                </motion.button>
              </form>
            </div>
          </StarBorder>
        </Fade>
      </div>
    </div>
  );
}

export default App;
