import "./App.css";

let Quote = () => {
  return (
    <div class="quote">
      <p>
 Lorem ipsum dolor sit, amet consectetur adipisicing <br/> elit. Consequuntur distinctio totam doloremque odio <br/> quae, recusandae sequi eos earum nisi tempora placeat ratione <br/> magnam optio possimus! Nemo  autem aspernatur odit earum.
      </p>
    </div>
  );
};

let ButtonQuote = ({ handleClick }) => {
  return (
    <div class="container-button">
      <input
        class="generate-button"
        type="button"
        value="generate quote"
        onClick={handleClick}
      />
    </div>
  );
};

function App() {
  let quoteDatabase = [
    { text: "V: In Night City, you can be anyone you want to be.", date: "2024-01-01" },
    { text: "Johnny Silverhand: Wake the fuck up, Samurai. We have a city to burn.", date: "2024-02-14" },
    { text: "Regina Jones: Life's unpredictable. We can't always control what happens, but we can control how we respond.", date: "2024-03-10" },
    { text: "Takemura: In the world of Cyberpunk, few things are ever what they seem.", date: "2024-04-22" },
    { text: "Judy Alvarez: Sometimes it seems like the city's just one big, fat rat, devouring other rats born and bred to be devoured.", date: "2024-05-30" },
    { text: "Panam Palmer: The road's been long, but you made it.", date: "2024-06-15" },
    { text: "Dexter DeShawn: Work hard, play hard. That's how we do it in Night City.", date: "2024-07-04" },
    { text: "Rogue Amendiares: Legends never die. They're just reborn.", date: "2024-08-08" },
    { text: "Meredith Stout: Trust is a luxury few can afford.", date: "2024-09-14" },
    { text: "Viktor Vektor: The heart of a warrior beats within you.", date: "2024-10-01" },
    { text: "Misty Olszewski: Fate is like a river. You can try to change its course, but you'll always end up downstream.", date: "2024-11-11" },
    { text: "Lizzy Wizzy: Sometimes, you have to burn the old to make way for the new.", date: "2024-12-21" },
    { text: "Jackie Welles: In this city, only the strong survive.", date: "2025-01-07" },
    { text: "Kerry Eurodyne: Music's the heartbeat of the city.", date: "2025-02-19" },
    { text: "Hanako Arasaka: Power is not given. It is taken.", date: "2025-03-23" },
    { text: "River Ward: Justice might be blind, but it sees everything in Night City.", date: "2025-04-16" },
    { text: "V: Sometimes the road to hell is paved with good intentions.", date: "2025-05-05" },
    { text: "Johnny Silverhand: Never fade away.", date: "2025-06-10" },
    { text: "Regina Jones: You can't outrun your past.", date: "2025-07-22" },
    { text: "Judy Alvarez: Love's the only thing worth fighting for.", date: "2025-08-30" }
  ];
  
  let handleClick = () => {
    let randomQuote = Math.floor(Math.random() * quoteDatabase.length);
    let quote = quoteDatabase[randomQuote];
    alert(quote.text);
  };
  return (
    <div class="container">
      <Quote />
      <ButtonQuote handleClick={handleClick} />
    </div>
  );
}

export default App;