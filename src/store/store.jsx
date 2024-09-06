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
    }
};

export default store;
