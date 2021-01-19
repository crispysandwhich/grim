import React from 'react'
import { Link } from 'react-router-dom'

const peoples = [
  {
    name: 'Renzo',
    description: 'One of my brothers who know the feeling of life',
    img: 'https://cdn.dribbble.com/users/1387431/screenshots/11214303/media/704e0f34ede8ac63763a1b241242711b.jpg?compress=1&resize=800x600'
  },
  {
    name: 'AJ',
    description: 'One of my homies that will help out if needed',
    img: 'https://cdn.dribbble.com/users/1387431/screenshots/11126445/media/b02a16ecea3b9908a9c07d2ada05c56b.jpg?compress=1&resize=800x600'
  },
  {
    name: 'Bruno',
    description: 'One of my brother from another mother who I wish I can be a better friend to',
    img: 'https://cdn.dribbble.com/users/1387431/screenshots/11112168/media/34e7e596d55dc5623134700a6e24d8b8.jpg?compress=1&resize=800x600'
  },
  {
    name: 'Jose',
    description: 'One of my brothers who is down to help when the time is right',
    img: 'https://cdn.dribbble.com/users/1387431/screenshots/11157641/media/9b3a9ddbbb2da4da1c99b027b59148ca.jpg?compress=1&resize=800x600'
  },
  {
    name: 'Justin',
    description: 'One of little brothers from another ukrainian brother who is like a mini me but better',
    img: 'https://cdn.dribbble.com/users/1387431/screenshots/11081145/media/561bb5d324921ac25f5516d165968e9e.jpg?compress=1&resize=800x600'
  }
]

function TributePage() {

  return (
    <div className="tributePage">
      <header className="tributeHeader">
        <h2>Tribute Page</h2>
        <p>A small little part where I wanna show you guys what you mean to me</p>
      </header>

      <div className="tributeSection">

        {
          peoples.map(person => {
            return(
              <div>
                <div>
                  <img src={person.img} alt={person.name} />
                </div>
                <div>
                  <h2>{person.name}</h2>
                  <p>
                    {person.description}
                  </p>
                  <Link to="/p">Learn More</Link>
                </div>
              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default TributePage


// https://dribbble.com/Avoss