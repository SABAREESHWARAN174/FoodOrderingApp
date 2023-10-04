import burger1 from '../assets/burger1.jpg';
import burger2 from '../assets/burger2.jpg';
import burger3 from '../assets/burger3.jpg';
import burger4 from '../assets/burger4.jpg';
import burger5 from '../assets/burger5.jpg';

import gyros1 from '../assets/gyros1.jpg';
import gyros2 from '../assets/gyros2.jpg';
import gyros3 from '../assets/gyros3.jpg';
import gyros4 from '../assets/gyros4.jpg';
import gyros5 from '../assets/gyros5.jpg';

import pizza1 from '../assets/pizza1.jpg';
import pizza2 from '../assets/pizza2.jpg';
import pizza3 from '../assets/pizza3.jpg';
import pizza4 from '../assets/pizza4.jpg';
import pizza5 from '../assets/pizza5.jpg';

import pasta1 from '../assets/pasta1.jpg';
import pasta2 from '../assets/pasta2.jpg';
import pasta3 from '../assets/pasta3.jpg';
import pasta4 from '../assets/pasta4.jpg';
import pasta5 from '../assets/pasta5.jpg';

import hotel1 from '../assets/hotel1.jpg';
import hotel2 from '../assets/hotel2.jpg';
import hotel3 from '../assets/hotel3.jpg';
import hotel4 from '../assets/hotel4.jpg';

export const foodTypes = [
    {
        name: 'Fine Dining',
        img: hotel1,
        id: crypto.randomUUID()
    },
    {
        name: 'Shree Annapoorna',
        img: hotel2,
        id: crypto.randomUUID()
    },
    {
        name: 'French door gate',
        img: hotel3,
        id: crypto.randomUUID()
    },
    {
        name: 'Hotel chellam',
        img: hotel4,
        id: crypto.randomUUID()
    },
];

// 24 foods (6 burger, 6 gyros, 6 pizza, 6 indian)
export const foods = [
    {
        name: 'Chinese Cuisine 1',
        category: 'chinese',
        img: burger1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chinese Cuisine 2',
        category: 'chinese',
        img: burger2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chinese Cuisine 3',
        category: 'chinese',
        img: burger3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chinese Cuisine 4',
        category: 'chinese',
        img: burger4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chinese Cuisine 5',
        category: 'chinese',
        img: burger5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'North Indian Cuisine 1',
        category: 'northindian',
        img: pizza1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'North Indian Cuisine 2',
        category: 'northindian',
        img: pizza2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'North Indian Cuisine 3',
        category: 'northindian',
        img: pizza3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'North Indian Cuisine 4',
        category: 'northindian',
        img: pizza4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'North Indian Cuisine 5',
        category: 'northindian',
        img: pizza5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Continental Cuisine 1',
        category: 'continental',
        img: gyros1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Continental Cuisine 2',
        category: 'continental',
        img: gyros2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Continental Cuisine 3',
        category: 'continental',
        img: gyros3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Continental Cuisine 4',
        category: 'continental',
        img: gyros4
    },
    {
        name: 'Continental Cuisine 5',
        category: 'continental',
        img: gyros5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Indian Cuisine 1',
        category: 'indian',
        img: pasta1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Indian Cuisine 2',
        category: 'indian',
        img: pasta2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Indian Cuisine 3',
        category: 'indian',
        img: pasta3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Indian Cuisine 4',
        category: 'indian',
        img: pasta4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Indian Cuisine 5',
        category: 'indian',
        img: pasta5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
];
