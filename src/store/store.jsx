import card1__img from "assets/img/card1.png"
import card2__img from "assets/img/card2.png"
import card3__img from "assets/img/card3.png"
import card4__img from "assets/img/card4.png"
import card5__img from "assets/img/card5.png"
import card6__img from "assets/img/card6.png"

const store = {
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
      }
};

export default store;
