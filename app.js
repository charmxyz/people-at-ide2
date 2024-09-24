document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-container');

    const people = [
        {
            "name": "Henry Drayton",
            "spiritAnimal": "Seal",
            "threeTopic": "Sculpture, Surfing, Nature Biology",
            "excitedThings": "Getting to create!",
            "needHelp": "IT emails information all that jazzz"
          },
          {
            "name": "William Napier",
            "spiritAnimal": "Cougar",
            "threeTopic": "US politics, AI, Fine Arts",
            "excitedThings": "Excited to be in London",
            "needHelp": "Access to labs"
          },
          {
            "name": "Khalil Ismail",
            "spiritAnimal": "Dolphin",
            "threeTopic": "Wearables, Philosophy, Interaction",
            "excitedThings": "Focusing on one project",
            "needHelp": "Focusing on one project"
          },
          {
            "name": "Chanwoo Lee",
            "spiritAnimal": "Rabbit",
            "threeTopic": "Tech, Design, Fashion, Movies and Drama",
            "excitedThings": "GROUP PROJECT",
            "needHelp": "Group Project"
          },
          {
            "name": "Adonis Christodoulou",
            "spiritAnimal": "Lion",
            "threeTopic": "Tech, Design, Sports & Fashion",
            "excitedThings": "Group project",
            "needHelp": "Group project"
          },
          {
            "name": "Gerogros Koukoulis",
            "spiritAnimal": "🦍",
            "threeTopic": "F1, Animals, Traveling",
            "excitedThings": "My group project",
            "needHelp": "Anyone works with drone autonomy"
          },
          {
            "name": "Tanguy Perron",
            "spiritAnimal": "Sloth",
            "threeTopic": "Tech, History of the Tube, TV Shows",
            "excitedThings": "End of the month, more clarity on group project.",
            "needHelp": "Managing my time better."
          },
          {
            "name": "Rosalie Valentiny",
            "spiritAnimal": "Seal",
            "threeTopic": "Psychology, Taboo Topics, Bio Design",
            "excitedThings": "Oktoberfest",
            "needHelp": "3D modelling"
          },
          {
            "name": "Rashi Agarwala",
            "spiritAnimal": "Panda",
            "threeTopic": "Behavioral Science, Reality TV, Musical Gigs",
            "excitedThings": "Next Group Project",
            "needHelp": "Stress Management"
          },
          {
            "name": "Jérémie Kofman",
            "spiritAnimal": "Hedgehog",
            "threeTopic": "Food, Travel, Golf",
            "excitedThings": "IDE1 coming in",
            "needHelp": "Solo project"
          },
          {
            "name": "Jinhak Lee",
            "spiritAnimal": "Small Mouse",
            "threeTopic": "Designer, Industrial Design, Motion Graphics",
            "excitedThings": "Talking",
            "needHelp": "Being small talked"
          },
          {
            "name": "Vishal Mehta",
            "spiritAnimal": "Elephant",
            "threeTopic": "Making things in the workshop, Design, Dad Jokes",
            "excitedThings": "Start of the 2nd year of IDE and just life in general",
            "needHelp": "-"
          },
          {
            "name": "Sonia Rettenmaier",
            "spiritAnimal": "Monkey",
            "threeTopic": "Exhibition, Philosophy, London",
            "excitedThings": "Behavioral Economics",
            "needHelp": "Learn engineering skills"
          },
          {
            "name": "Etienne Naude",
            "spiritAnimal": "Beaver",
            "threeTopic": "Robots, Security, Weird Facts",
            "excitedThings": "Meeting the new IDE 1",
            "needHelp": "Nope"
          },
          {
            "name": "Gonzalo Morales",
            "spiritAnimal": "Meerkat",
            "threeTopic": "Tech, Intercultural Stuff (Languages), Outdoor Sports (Surfing, Sailing)",
            "excitedThings": "Beginning of the year (getting to know IDE 1) and solo project",
            "needHelp": "Improv lessons"
          },
          {
            "name": "Kamsi Orazulike",
            "spiritAnimal": "Tiger",
            "threeTopic": "Movies & TV Shows, Sports, Design",
            "excitedThings": "Sleep",
            "needHelp": "Portfolio review & feedback"
          },
          {
            "name": "Yuchen Cai",
            "spiritAnimal": "Orange Cat",
            "threeTopic": "Theatre, Cars/F1, Innovation Projects",
            "excitedThings": "Second Year Team",
            "needHelp": "Adjusting bicycle seat"
          },
          {
            "name": "Alex Clark",
            "spiritAnimal": "Cat",
            "threeTopic": "Cycling, Food, Design",
            "excitedThings": "New beginnings",
            "needHelp": "Programming"
          },
          {
            "name": "India Gabb",
            "spiritAnimal": "Octopus",
            "threeTopic": "Arts, Nature, Design, Farming",
            "excitedThings": "Starting a new group project",
            "needHelp": "Sound ecological design"
          },
          {
            "name": "Annie George",
            "spiritAnimal": "Nymph",
            "threeTopic": "My niece, anyone’s dog, Anti-corporatism",
            "excitedThings": "Fresh people from the RCA",
            "needHelp": "Nothing"
          },
          {
            "name": "Lulu Afolayan",
            "spiritAnimal": "Cat",
            "threeTopic": "Capitalism/Socialism/Communism, Nigerian Cuisine, Series! (Archer, Brooklyn99, Blue Eye Samurai etc)",
            "excitedThings": "Meeting the IDE1s! Soo excitedd",
            "needHelp": "Nothing atm!"
          },
          {
            "name": "Diego Muñoz",
            "spiritAnimal": "Chameleon",
            "threeTopic": "Architecture, The Ocean, Street Art",
            "excitedThings": "Trail running",
            "needHelp": "Chemistry"
          }                                                                 
    ];

    people.forEach(person => {
        const card = document.createElement('div');
        card.className = 'card';
    
        card.innerHTML = `
            <div class="name">${person.name}</div>

            <div class="characteristic">My Spirit Animal</div>
            <div class="placeholder">${person.spiritAnimal}</div>
            
            <div class="characteristic">3 Topics I Love Chatting About</div>
            <div class="placeholder">${person.threeTopic}</div>
            
            <div class="characteristic">Something I’m Excited About Right Now</div>
            <div class="placeholder">${person.excitedThings}</div>
            
            <div class="characteristic">Something I Need Help With Right Now</div>
            <div class="placeholder">${person.needHelp}</div>
    
            <div class="portfolio-button">
                <div class="button" id="portfolio-link-${person.name.replace(/\s+/g, '-')}" onclick="window.open('${person.portfolioLink}', '_blank')">
                    <div class="label">Portfolio</div>
                    <img class="icon-left" alt="" src="./image/chevron.png">
                </div>
            </div>
        `;
    
        container.appendChild(card);
    });
    
    
});
