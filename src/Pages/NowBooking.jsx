import React from 'react'
import Book from '../Components/Book/Book'
import Icon from '../Components/Iconbar/Icon'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const NowBooking = () => {
  const movieData = [
    { id: 1, image: "5289-1-4-3-1721308188.jpg", title: "Deadpool & Wolverine", age: "16", genre: "Action, Comedy, Sci-fi" },
    { id: 2, image: "6097-1-2-3-1717594468.jpg", title: "Despicable Me 4", age: "PG", genre: "Adventure, Comedy, Family" },
    { id: 3, image: "6098-1-3-3-1722967951.jpg", title: "Speak No Evil", age: "16", genre: "Thriller" },
    { id: 4, image: "6106-1-2-3-1723018318.jpg", title: "Transformers One", age: "PG", genre: "Comedy" },
    { id: 5, image: "6381-1-3-3-1727425309.jpg", title: "Joker: Folie à Deux", age: "PG-13", genre: "Drama" },
    { id: 6, image: "6485-1-5-3-1723803980.jpg", title: "It Ends with Us", age: "R", genre: "Horror" },
    { id: 7, image: "6537-1-2-3-1716371101.jpg", title: "Bad Boys Ride or Die", age: "PG", genre: "Adventure" },
    { id: 8, image: "6542-1-2-3-1715763299.jpg", title: "Inside Out 2", age: "PG-13", genre: "Sci-Fi" },
    { id: 9, image: "6600-1-1-3-1719589140.jpg", title: "Blink Twice", age: "G", genre: "Animation" },
    { id: 10, image: "6605-1-2-3-1722605713.jpg", title: "Beetlejuice Beetlejuice", age: "R", genre: "Mystery" },
    { id: 11, image: "6610-1-2-3-1721041041.jpg", title: "Movie Eleven", age: "PG", genre: "Fantasy" },
    { id: 12, image: "6612-1-1-3-1724321033.jpg", title: "Movie Twelve", age: "PG-13", genre: "Romance" },
    { id: 13, image: "6614-1-1-3-1724837095.jpg", title: "Movie Thirteen", age: "R", genre: "Action" },
    { id: 14, image: "6615-1-2-3-1726236464.jpg", title: "Movie Fourteen", age: "PG", genre: "Comedy" },
    { id: 15, image: "6616-1-2-3-1726483631.jpg", title: "Movie Fifteen", age: "PG-13", genre: "Horror" },
    { id: 16, image: "6618-1-2-3-1725893580.jpg", title: "Movie Sixteen", age: "G", genre: "Animation" },
    { id: 17, image: "6621-1-1-3-1727708358.jpg", title: "Movie Seventeen", age: "R", genre: "Drama" },
    { id: 18, image: "6642-1-1-3-1725221375.jpg", title: "Movie Eighteen", age: "PG", genre: "Adventure" },
    { id: 19, image: "6643-1-1-3-1725220008.jpg", title: "Movie Nineteen", age: "PG-13", genre: "Sci-Fi" },
    { id: 20, image: "6644-1-1-3-1724681504.jpg", title: "Movie Twenty", age: "PG-13", genre: "Fantasy" },
    { id: 21, image: "6662-1-1-3-1726234131.jpg", title: "Movie Twenty-One", age: "R", genre: "Horror" },
    { id: 22, image: "6665-1-1-3-1726483529.jpg", title: "Movie Twenty-Two", age: "PG", genre: "Comedy" },
  ];



  return (
    <div>
      <Icon />
      <Navbar />
      <Book />
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '10px', 
          padding: '100px'
        }}
      >
        {movieData.map(movie => (
          <div 
            key={movie.id} 
            className="movie-card" 
            style={{ 
              padding: '10px', 
              textAlign: 'center', 
              backgroundColor: '#f9f9f9',
              overflow: 'hidden', 
              transition: 'background-color 0.3s ease', 
            }}
            
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'orange'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f9f9f9'}
          >
            <img 
              src={movie.image} 
              alt={movie.title} 
              className="movie-image" 
              style={{
                width: '100%',  
                height: '250px', 
                // objectFit: 'cover',
                marginBottom: '10px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div className="movie-info" style={{ marginTop: '10px' }}>
              <h3 
                className="movie-title" 
                style={{ fontSize: '18px', color: '#333', margin: '0' }}
              >
                {movie.title}
              </h3>
              <p 
                className="movie-details" 
                style={{ color: '#555', fontSize: '14px' }}
              >
                {movie.age} | {movie.genre}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
  }

export default NowBooking
