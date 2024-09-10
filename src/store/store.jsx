import card1__img from "assets/img/card1.png"
import card2__img from "assets/img/card2.png"
import card3__img from "assets/img/card3.png"
import card4__img from "assets/img/card4.png"
import card5__img from "assets/img/card5.png"
import card6__img from "assets/img/card6.png"

const emails = [];


const store = {
    emails,
    cardInfo: {
        card1: {
            title: "Search engine",
            subtitle : "optimization",
            img: card1__img,
        },
        card2: {
            title: "Pay-per-click",
            subtitle: "advertising",
            img: card2__img,
        },
        card3: {
            title: "Social Media",
            subtitle: "Marketing",
            img: card3__img,
        },
        card4: {
            title: "Email",
            subtitle: "Marketing",
            img: card4__img,
        },
        card5: {
            title: "Content",
            subtitle: "Creation",
            img: card5__img,
        },
        card6: {
            title: "Analytics and",
            subtitle: "Tracking",
            img: card6__img,
        }
    },
    steps : {
        step1: {
          id: '01',
          title: 'Consultation',
          subtitle:
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        step2: {
          id: '02',
          title: 'Research and Strategy Development',
          subtitle:
            'We will conduct thorough research to develop a strategy that aligns with your business objectives and helps you reach your target audience effectively.',
        },
        step3: {
          id: '03',
          title: 'Implementation',
          subtitle:
            'Our team will execute the strategy with precision, ensuring all aspects of the plan are implemented effectively to achieve your desired results.',
        },
        step4: {
          id: '04',
          title: 'Monitoring and Optimization',
          subtitle:
            'We will continuously monitor your strategy’s performance and make optimizations as necessary to ensure optimal results and maximize your ROI.',
        },
        step5: {
          id: '05',
          title: 'Reporting and Communication',
          subtitle:
            'We provide regular reports and updates on your strategy’s performance, keeping you informed of progress and adjustments made to improve outcomes.',
        },
        step6: {
          id: '06',
          title: 'Continual Improvement',
          subtitle:
            'Our team is committed to continual improvement, always refining strategies and techniques to keep your business ahead of the competition.',
        },
      },
      history: {
        history1: {
          id: 1,
          text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        },
        history2: {
          id: 2,
          text: "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.",
        },
        history3: {
          id: 3,
          text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
        },
      },
      testimonials: {
        testimonial1: {
          id: 1,
          text: "Working with Positivus has transformed our user experience. Their innovative approach and attention to detail have significantly improved our website's usability.",
          name: "Jared Spool",
          position: "Founder, User Interface Engineering"
        },
        testimonial2: {
          id: 2,
          text: "Positivus helped us create a seamless customer journey that has increased our engagement metrics dramatically. Their deep understanding of UX design principles is impressive.",
          name: "Don Norman",
          position: "Co-founder, Nielsen Norman Group"
        },
        testimonial3: {
          id: 3,
          text: "The team at Positivus provided us with a fresh perspective on UX design, which resulted in a more intuitive and user-friendly interface. Their expertise is second to none.",
          name: "Aarron Walter",
          position: "VP of Design Education, InVision"
        },
        testimonial4: {
          id: 4,
          text: "Positivus was instrumental in overhauling our digital platforms, enhancing both aesthetics and functionality. Their dedication to the user experience is unmatched.",
          name: "Alan Cooper",
          position: "Co-founder, Cooper"
        },
        testimonial5: {
          id: 5,
          text: "Partnering with Positivus has been a game-changer for us. Their UX strategies have led to increased customer satisfaction and retention rates.",
          name: "Susan Weinschenk",
          position: "Chief Behavioral Scientist, The Team W"
        }
      }
};

export default store;
