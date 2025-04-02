import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import labradorImage from '../assets/LABRADOR.jpg';
import germanShepherdImage from '../assets/GERMAN_SHEPHEARD.jpg';
import goldenRetrieverImage from '../assets/GOLDEN_RETRIVER.jpg';
import frenchBulldogImage from '../assets/FRENCH_BULLDOG.jpg';
import poodleImage from '../assets/POODLE.jpg';
import siberianHuskyImage from '../assets/SIBERIAN_HUSKY.jpg';
import maineCoonImage from '../assets/MAINE_COON.jpg';
import persianCatImage from '../assets/PERSIAN_CAT.jpg';
import siameseCatImage from '../assets/SIAMESE_CAT.jpg';
import newfoundlandImage from '../assets/NEWFOLUNFALAND.jpeg';
import shibaInuImage from '../assets/SHIBA_INU.jpeg';
import rottweilerImage from '../assets/ROTTWEILER.jpg';

const HomePage = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgba(224, 213, 213, 0.734)" }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Pet Paradise</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/buy">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://petresin.org/">Help</a>
                                </li>
                            </ul>
                            
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signin">Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/login">Log In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="custom-division container-fluid  pt-5" >
                <div className="custom-division-content">
                    <div className="homepage" id="homepage">
                        <h2 className='text-black text-3xl'>Welcome to Pet Paradise</h2>
                        <p className='text-black ' style={{fontSize:"20px"}}>At Pet Paradise, we believe that every pet deserves a loving home and the best care possible. Whether you’re looking to adopt a new furry friend or need expert advice on pet care, we’re here to help. Our mission is to connect pets with their forever families and provide the resources needed to keep them happy and healthy.</p>
                        <p className='text-black  text-xl' style={{fontSize:"20px"}}><strong>Why Choose Pet Paradise?</strong></p>
                        <ul className='text-black  text-xl' style={{fontSize:"20px"}}>
                            <li><strong>Wide Selection of Pets:</strong> From playful puppies and curious kittens to loyal dogs and affectionate cats, we have a variety of pets waiting for a loving home.</li>
                            <li><strong>Expert Advice:</strong> Our team of pet care specialists is available to provide guidance on everything from nutrition and training to health and wellness.</li>
                            <li><strong>Community Support:</strong> Join our community of pet lovers and access forums, events, and workshops to learn more about responsible pet ownership.</li>
                            <li><strong>Adoption Events:</strong> Participate in our regular adoption events and meet your new best friend in person.</li>
                            <li><strong>Comprehensive Resources:</strong> Explore our blog for tips, stories, and news about the latest in pet care and adoption.</li>
                        </ul>
                        <p className='text-black ' style={{fontSize:"20px"}}>Ready to find your perfect pet or need some help with your current companion? Let Pet Paradise be your trusted partner in pet adoption and care.</p>
                        <div className="margin-top-20">
                            <Link to="/care" className="btn btn-primary read-more-button">
                                More About Pet Care
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-division container-fluid pt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Card 1 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={labradorImage} alt="Labrador Retriever" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Labrador Retriever</h2>
                                <p className="card-text">Labrador Retrievers are friendly, outgoing, and high-spirited dogs known for their intelligence and obedience. They are great family pets and excel in various roles, including as service dogs.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={germanShepherdImage} alt="German Shepherd" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">German Shepherd</h2>
                                <p className="card-text">German Shepherds are highly intelligent and versatile dogs known for their loyalty and courage. They are often used in police and military roles, as well as for search and rescue operations.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={goldenRetrieverImage} alt="Golden Retriever" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Golden Retriever</h2>
                                <p className="card-text">Golden Retrievers are gentle, friendly, and tolerant dogs that make excellent companions for families. They are known for their intelligence, obedience, and love for outdoor activities.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={frenchBulldogImage} alt="French Bulldog" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">French Bulldog</h2>
                                <p className="card-text">French Bulldogs are small, muscular dogs with distinctive bat-like ears and a playful yet affectionate temperament. They are adaptable to various living situations and are known for their charming personalities.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={poodleImage} alt="Poodle" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Poodle</h2>
                                <p className="card-text">Poodles are highly intelligent and energetic dogs known for their distinctive curly coats. They come in three sizes (standard, miniature, and toy) and excel in obedience and agility training.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={siberianHuskyImage} alt="Siberian Husky" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Siberian Husky</h2>
                                <p className="card-text">Siberian Huskies are medium-sized working dogs known for their endurance and striking appearance. They are friendly, alert, and gentle, making them great companions for active individuals or families.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={maineCoonImage} alt="Maine Coon" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Maine Coon</h2>
                                <p className="card-text">Maine Coons are one of the largest domestic cat breeds, known for their friendly and sociable nature. They have a distinctive appearance with tufted ears and bushy tails, and they make wonderful family pets.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={persianCatImage} alt="Persian Cat" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Persian Cat</h2>
                                <p className="card-text">Persian Cats are known for their long, luxurious coats and calm, affectionate personalities. They are gentle and enjoy a relaxed lifestyle, making them ideal for a quiet home environment.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 9 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={siameseCatImage} alt="Siamese Cat" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Siamese Cat</h2>
                                <p className="card-text">Siamese Cats are known for their sleek bodies, striking blue eyes, and vocal nature. They are highly social and enjoy interacting with their human companions, making them great pets for those who can provide plenty of attention.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 10 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={newfoundlandImage} alt="Newfoundland" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Newfoundland</h2>
                                <p className="card-text">Newfoundlands are large, gentle giants known for their sweet temperaments and strong swimming abilities. They are excellent with children and make loyal and protective family pets.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 11 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={shibaInuImage} alt="Shiba Inu" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Shiba Inu</h2>
                                <p className="card-text">Shiba Inus are small, agile dogs with a fox-like appearance and spirited personality. They are known for their independence and cleanliness, making them a popular choice for pet owners.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 12 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={rottweilerImage} alt="Rottweiler" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h2 className="card-title">Rottweiler</h2>
                                <p className="card-text">Rottweilers are powerful, confident dogs known for their protective nature and loyalty to their families. They are highly trainable and excel in various roles, including as guard dogs and service animals.</p>
                                <Link to="/buy" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="container-fluid pt-5" style={{ backgroundColor: " rgba(135, 126, 255, 0.734)" }}>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-envelope"></i> Email: info@petparadise.com</li>
                            <li><i className="bi bi-telephone"></i> Phone: +1 123 456 7890</li>
                            <li><i className="bi bi-geo-alt"></i> Address: 123 Pet Street, Pet City, PC 12345</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contactme">Contact</Link></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="https://petresin.org/">Help</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled" style={{color:"white"}}>
                            <li><a href="https://petresin.org/">Facebook</a></li>
                            <li><a href="https://petresin.org/">Twitter</a></li>
                            <li><a href="https://petresin.org/">Instagram</a></li>
                            <li><a href="https://petresin.org/">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center py-3">
                   
                    
                    <p>&copy; 2023 Pet Paradise. All Rights Reserved.</p>
                    <div className="row">
            <div className="col-md-3">
                <p>Mopuru Venkata Srikanth Reddy</p>
            </div>
            <div className="col-md-3">
                <p>Kosireddy Ram Sai Eswar</p>
            </div>
            <div className="col-md-3">
                <p>Narasimha Ampavalli</p>
            </div>
            <div className="col-md-3">
                <p>Sai Tejaswi Rongali</p>
            </div>
        </div>
                </div>
            </footer>
        </>
    );
};



export default HomePage;
