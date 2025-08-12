import React from 'react'
import Carousel from '../../components/Carousel.jsx'

const articles = [
  {
    image: '/images/article1.jpg',
    title: 'Fashion Trends 2025',
    teaser: 'Explore the hottest fashion styles coming this year...',
  },
  {
    image: '/images/article2.jpg',
    title: 'Delicious Summer Recipes',
    teaser: 'Try these fresh and tasty dishes for sunny days.',
  }
]

const fiction = [
  {
    image: '/images/fiction1.jpg',
    title: 'The Lost Kingdom',
    teaser: 'An epic tale of courage and adventure...',
  },
  {
    image: '/images/fiction2.jpg',
    title: 'Midnight Whispers',
    teaser: 'A mysterious story full of secrets.',
  }
]

export default function Home() {
  return (
    <>
      <Carousel items={articles} title="Featured Articles" />
      <Carousel items={fiction} title="Featured Fiction" />
    </>
  )
    }
