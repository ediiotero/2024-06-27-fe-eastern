import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

import moviePosters from '../images/movies.jpg'

const data = [
    {
        id: 1,
        title: 'The Batman',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos, perferendis obcaecati maxime distinctio amet voluptatum aliquid dolores placeat?'
    },
    {
        id: 2,
        title: 'Top Gun',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos, perferendis obcaecati maxime distinctio amet voluptatum aliquid dolores placeat?'
    },
    {
        id: 3,
        title: 'Lightyear',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos, perferendis obcaecati maxime distinctio amet voluptatum aliquid dolores placeat?'
    },
    {
        id: 4,
        title: 'Jurassic Park',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos, perferendis obcaecati maxime distinctio amet voluptatum aliquid dolores placeat?'
    },
]

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container-fluid">
            <img src={moviePosters} alt="movie posters" style={{minWidth: '100%', height: '15rem'}}/>
        </main>
        <p className="post-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis inventore, quo quia vel non eligendi corporis deleniti id corrupti minus consequuntur blanditiis obcaecati quaerat rerum? Architecto quibusdam enim esse officia possimus. Minus libero deleniti laboriosam vel illo deserunt quos culpa.
        </p>
        <div className="row">
            {data.map(movie => <Card key={movie.id} className='col-6' title={movie.title} text={movie.post} />)}
        </div>
        <Footer copy="2024" />
      </div>
    );
  }
}
