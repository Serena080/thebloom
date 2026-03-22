import React, { useEffect, useState } from "react";

export default function PlantChatBlog() {
  const chats = [
  {
    name: "Emma",
    avatar: "🌿",
    question: "My Monstera leaves are turning yellow. What could be wrong?",
    answer: "Yellow leaves usually mean overwatering. Let the soil dry slightly before watering again."
  },
  {
    name: "David",
    avatar: "🪴",
    question: "Which indoor plant survives low light best?",
    answer: "Snake plants and ZZ plants thrive beautifully in low-light spaces."
  },
  {
    name: "Leila",
    avatar: "🌸",
    question: "How often should I feed flowering plants?",
    answer: "Every 2–4 weeks during active growth works best."
  },
  {
    name: "Maya",
    avatar: "🍃",
    question: "Can I keep succulents outside in spring?",
    answer: "Yes, but make sure nights aren’t too cold. Gradually acclimate them to sunlight."
  },
  {
    name: "James",
    avatar: "🌾",
    question: "My ficus keeps dropping leaves. Help!",
    answer: "Leaf drop can happen from stress or moving. Keep light consistent and avoid drafts."
  },
  {
    name: "Sophia",
    avatar: "🌺",
    question: "Best soil for orchids?",
    answer: "Use a chunky orchid mix with bark, charcoal, and perlite for proper drainage."
  },
  {
    name: "Liam",
    avatar: "🍀",
    question: "How do I stop aphids on my outdoor plants?",
    answer: "Try neem oil spray or insecticidal soap weekly. Ladybugs also help naturally."
  },
  {
    name: "Olivia",
    avatar: "🌷",
    question: "Can I propagate my pothos in water?",
    answer: "Absolutely! Cut just below a node and place in water until roots grow."
  },
  {
    name: "Ethan",
    avatar: "🪻",
    question: "My basil smells weak and looks pale. Why?",
    answer: "It may need more sunlight or nutrients. Fertilize lightly and place in bright light."
  },
  {
    name: "Chloe",
    avatar: "🌹",
    question: "Do I need to repot my snake plant?",
    answer: "If roots are crowded or coming out of the pot, yes! Repot in well-draining soil."
  },
  {
    name: "Noah",
    avatar: "🌱",
    question: "Can I use coffee grounds for compost?",
    answer: "Yes! Coffee grounds are great for nitrogen. Mix them well with other compost ingredients."
  },
  {
    name: "Ava",
    avatar: "🌻",
    question: "How do I encourage more flowers on my hibiscus?",
    answer: "Make sure it gets 6+ hours of sunlight and feed with a bloom-focused fertilizer."
  },
  {
    name: "Lucas",
    avatar: "🍂",
    question: "Why are my spider plant leaves curling?",
    answer: "Curling can mean underwatering or low humidity. Increase watering and mist occasionally."
  }
];

  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % chats.length);
      setTypedText("");
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const currentText = chats[activeIndex].answer;

    const typing = setInterval(() => {
      setTypedText(currentText.slice(0, i + 1));
      i++;

      if (i >= currentText.length) clearInterval(typing);
    }, 25);

    return () => clearInterval(typing);
  }, [activeIndex]);

  return (
    <section className="chat-blog">
      <div className="chat-header">
        <h2>Plant Community Conversations</h2>
        <p>Helpful advice, real questions, and growing confidence together 🌱</p>
      </div>

      <div className="chat-card">
        <div className="chat-user">
          <span className="avatar">{chats[activeIndex].avatar}</span>
          <div>
            <strong>{chats[activeIndex].name}</strong>
            <p>{chats[activeIndex].question}</p>
          </div>
        </div>

        <div className="chat-response">
          <span className="avatar expert">💚</span>
          <div>
            <strong>Plant Expert</strong>
           <p>{typedText}<span className="cursor">|</span></p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chat-blog {
          padding: 80px 20px;
          background: #f8f7f3;
          text-align: center;
        }

        .chat-header h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .chat-header p {
          color: #666;
          margin-bottom: 40px;
        }

        .chat-card {
          max-width: 800px;
          margin: auto;
          background: white;
          padding: 35px;
          border-radius: 24px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          animation: slideFade 1s ease;
        }

        .chat-user,
        .chat-response {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          margin-bottom: 25px;
          text-align: left;
        }

        .chat-response {
          justify-content: flex-end;
        }

        .avatar {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #f2f2f2;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .expert {
          background: #dff5e1;
        }

        .chat-user div,
        .chat-response div {
          background: #fafafa;
          padding: 18px;
          border-radius: 18px;
          max-width: 500px;
        }

        .chat-response div {
          background: #eef9f0;
        }

        @keyframes slideFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .chat-card {
            padding: 20px;
          }

          .chat-user,
          .chat-response {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}