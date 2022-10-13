import logo from './logo.svg';
import './App.css';
import CardsSection from './components/CardsSection';

let data = {
  "courses": [
    {
      "id": "python_c1",
      "img":"./imgs/python-c1.jpg",
      "title":"Learn Python: The Complete Python Programming Course",
      "instructor":"Avinash Jain, The Codex",
      "stars":4.3,
      "students":1721,
      "price":679.99,
      "bestseller":false
    },
    {
      "id": "python_c2",
      "img":"./imgs/python-c2.jpg",
      "title":"Learning Python for Data Analysis and Visualization",
      "instructor":"Jose Portille",
      "stars":4.8,
      "students":4037,
      "price":1499.99,
      "bestseller":true
    },
    {
      "id": "python_c3",
      "img":"./imgs/python-c3.jpg",
      "title":"Python for Beginners - Learn Programming from scratch",
      "instructor":"Edwin Diaz, Coding Faculty Solutions",
      "stars":4.2,
      "students":1231,
      "price":679.99,
      "bestseller":false
    },
    {
      "id": "python_c4",
      "img":"./imgs/python-c4.jpg",
      "title":"Learn Python: Python for Beginners",
      "instructor":"Abrar Hussain",
      "stars":4.5,
      "students":1439,
      "price":389.99,
      "bestseller":false
    },
    {
      "id": "python_c5",
      "img":"./imgs/python-c5.jpg",
      "title":"Python Beyond the Basics - Object-Oriented Programming",
      "instructor":"Infinite Skills",
      "stars":4.4,
      "students":2570,
      "price":529.99,
      "bestseller":false
    },
    {
      "id": "python_c6",
      "img":"./imgs/python-c6.jpg",
      "title":"Python for Data Structures, Algorithms, and Interviews!",
      "instructor":"Jose Portilla",
      "stars":4,
      "students":9471,
      "price":1299.99,
      "bestseller":false
    }
  ],
  title:"Expand your career opportunities with Python",
  description:"Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to ...",
  topic:"Python"
}
function App() {
  return (
    <CardsSection data={data}/>
  );
}

export default App;
