import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Notfound from './components/Notfound';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import GardenIdeas from './components/Gardenideas';
import Plants from './components/Plants';
import DesignGarden from './components/Designgarden';
import PlantChatBlog from './components/Blog';
import TestimonialsCarousel from './components/TestimonialCarousel';

import Header from './components/Header';
import Footer from './components/Footer';
import PlantSlider from './components/PlantCollections';
import About from './components/About';

function App() {
  return (
    <Router >
      <Routes>

        {/* All normal pages */}
        <Route
          path="*"
          element={
            <>
              <Header />

              <Routes>
                <Route path="/" element={<Getproducts />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/about" element = {<About/>}/>
                <Route path="/addproducts" element={<Addproducts />} />
                <Route path="/makepayment" element={<Makepayment />} />
                <Route path="/garden-ideas" element={<GardenIdeas />} />
                <Route path="/plants" element={<Plants />} />
                <Route path="/design-garden" element={<DesignGarden />} />
                <Route path="/blog" element={<PlantChatBlog />} />
                <Route path="/carousel" element={<TestimonialsCarousel />} />
               
                <Route path="/header" element={<Header />} />
                <Route path='/footer' element = {<Footer/>}/>
                <Route path='/collections' element = {<PlantSlider/>}/>
                
              </Routes>

              {/* Garden Section */}
              <section className="content-links-block py-5">
          <div className="container text-center">
            <h2 className="h3 mb-4">Create the garden you’ve always wanted</h2>

            <div className="row g-4">

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4 h-100">
                  <Link to="/garden-ideas" className="text-decoration-none text-dark">
                    <i className="fas fa-seedling fa-2x mb-3 text-success"></i>
                    <h3 className="h5">Get garden design ideas</h3>
                    <p>Find your perfect garden</p>
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4 h-100">
                  <Link to="/plants" className="text-decoration-none text-dark">
                    <i className="fas fa-leaf fa-2x mb-3 text-success"></i>
                    <h3 className="h5">Find the plants that work for you</h3>
                    <p>Ideas for seasons and regions</p>
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4 h-100">
                  <Link to="/design-garden" className="text-decoration-none text-dark">
                    <i className="fas fa-pencil-ruler fa-2x mb-3 text-success"></i>
                    <h3 className="h5">Design your garden</h3>
                    <p>Use interactive tools to design your dream garden</p>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
              <Footer/>

              {/* Footer */}
              
            </>
          }
        />

        {/* Real 404 page */}
        <Route path="*" element={<Notfound />} />

      </Routes>
    </Router>
  );
}

export default App;