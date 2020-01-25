import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import BannerBg from './../assets/background.jpg';
import Logo from './../assets/logo.png';
import Search from './../assets/search.svg';

import Meal from './../assets/meal.jpg';
import Meal1 from './../assets/meal-1.jpg';
import Meal2 from './../assets/meal-2.jpg';
import Meal3 from './../assets/meal-6.jpg';
import Meal4 from './../assets/meal-4.jpg';
import Meal5 from './../assets/meal-5.jpg';

function Home() {

    const [breakfast, setBreakfast] = useState(true)
    const [soup, setSoup] = useState(false)
    const [salads, setSalads] = useState(false)
    const [inTheOver, setnTheOver] = useState(false)

    let BreakfastStatus = breakfast ? 'openToggle' : 'closedToggle'
    let SoupStatus = soup ? 'openToggle' : 'closedToggle'
    let SaladsStatus = salads ? 'openToggle' : 'closedToggle'
    let InTheOverStatus = inTheOver ? 'openToggle' : 'closedToggle'

    let BreakfastSArrow = breakfast ? 'flaticon-arrow-chevron' : 'flaticon-bottom'
    let SoupArrow = soup ? 'flaticon-arrow-chevron' : 'flaticon-bottom'
    let SaladsArrow = salads ? 'flaticon-arrow-chevron' : 'flaticon-bottom'
    let InTheOverArrow = inTheOver ? 'flaticon-arrow-chevron' : 'flaticon-bottom'

    return (
        <div className="homepage">
            <div className="banner">
                <img src={BannerBg} alt="banner" className="w-100" />
                <div className="d-md-none banner-text">
                    <img src={Logo} alt="banner" className="logo" />
                    <h2>Enab Beirut</h2>
                    <p>Traditional lebanese Cuisine</p>
                </div>
            </div>
            <section>
                <div className="d-md-none d-flex border-bottom align-items-center justify-content-between">
                    <div className="form-search">
                        <form>
                            <input type="text" class="form-control" placeholder="Search Product" />
                            <button type="submit"><img src={Search} alt="Search button" /></button>
                        </form>
                    </div>
                    <div className="mobile-filter">
                        <i className="flaticon-icon-151917"></i>
                    </div>
                </div>

                <div className="container">

                    <div className="row d-none d-md-flex align-items-center py-md-4">
                        <aside className="d-block col-md-3 text-center">
                            <img src={Logo} alt="banner" className="logo" />
                        </aside>
                        <div className="col-md-9 mb-3 mb-md-0">
                            <div className="w-100 d-flex align-items-center justify-content-between mb-3">
                                <div className="infos">
                                    <h2>Enab Beirut</h2>
                                    <p>Traditional lebanese Cuisine</p>
                                    <p>Min. Order: KD 0.00</p>
                                </div>
                                <div className="toggle">
                                    <Link to="/" className="active">Delivery</Link>
                                    <Link to="/">Pick up</Link>
                                </div>
                            </div>
                            <div className="w-100 form-search">
                                <form>
                                    <input type="text" class="form-control" placeholder="Search Product" />
                                    <button type="submit"><img src={Search} alt="Search button" /></button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-md-flex row pt-0 pb-0 pt-md-3 pb-md-5">
                        <aside className="col-md-3">
                            <ul className="list-categories mt-2">
                                <h4>Categories</h4>
                                <li className="active"><Link to="/">Breakfast</Link></li>
                                <li><Link to="/">Cold Mezze</Link></li>
                                <li><Link to="/" className="active">Salads</Link></li>
                                <li><Link to="/">Low Carb</Link></li>
                                <li><Link to="/">Salads</Link></li>
                                <li><Link to="/">Sides</Link></li>
                                <li><Link to="/">Sauces</Link></li>
                                <li><Link to="/">Cold Drinks</Link></li>
                            </ul>
                        </aside>
                        <div className="col-md-9 mb-4 meals">
                            <div className="row mt-2">
                                <div className="col-6 mb-4">
                                    <div className="meal d-block d-md-flex align-items-center">
                                        <img src={Meal} alt="Meal" />
                                        <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                            <h3><Link to="/">Foul Medamas</Link></h3>
                                            <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                            <div className="price">KWD 1.750</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="meal d-block d-md-flex align-items-center">
                                        <img src={Meal1} alt="Meal" />
                                        <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                            <h3><Link to="/">Foul Medamas</Link></h3>
                                            <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                            <div className="price">KWD 1.750</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="meal d-block d-md-flex align-items-center">
                                        <img src={Meal2} alt="Meal" />
                                        <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                            <h3><Link to="/">Foul Medamas</Link></h3>
                                            <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                            <div className="price">KWD 1.750</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="meal d-block d-md-flex align-items-center">
                                        <img src={Meal3} alt="Meal" />
                                        <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                            <h3><Link to="/">Foul Medamas</Link></h3>
                                            <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                            <div className="price">KWD 1.750</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="meal d-block d-md-flex align-items-center">
                                        <img src={Meal4} alt="Meal" />
                                        <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                            <h3><Link to="/">Foul Medamas</Link></h3>
                                            <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                            <div className="price">KWD 1.750</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="meal d-block d-md-flex align-items-center">
                                        <img src={Meal5} alt="Meal" />
                                        <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                            <h3><Link to="/">Foul Medamas</Link></h3>
                                            <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                            <div className="price">KWD 1.750</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-md-none">
                        <div className="toggle row">
                            <div className="col-6 px-4"><Link to="/" className="active">Delivery</Link></div>
                            <div className="col-6 px-4"><Link to="/">Pick up</Link></div>
                        </div>
                        <div className="meals-toggle">
                            <h5 onClick={ () => setBreakfast(!breakfast) }>Breakfast <i className={BreakfastSArrow}></i></h5>
                            <div className={BreakfastStatus}>
                                <div className="row meals py-3">
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal1} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal2} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal3} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal4} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal5} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <h5 onClick={ () => setSoup(!soup) }>Soup <i className={SoupArrow}></i></h5>
                            <div className={SoupStatus}>
                                <div className="row meals py-3">
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal1} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal2} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal3} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal4} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal5} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <h5 onClick={ () => setSalads(!salads) }>Salads <i className={SaladsArrow}></i></h5>
                            <div className={SaladsStatus}>
                                <div className="row meals py-3">
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal1} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal2} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal3} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal4} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal5} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <h5 onClick={ () => setnTheOver(!inTheOver) }>In The Over <i className={InTheOverArrow}></i></h5>
                            <div className={InTheOverStatus}>
                                <div className="row meals py-3">
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal1} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal2} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal3} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal4} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-2 my-2">
                                        <div className="meal d-block d-md-flex align-items-center">
                                            <img src={Meal5} alt="Meal" />
                                            <div className="meal-info px-3 py-3 px-md-3 py-md-0">
                                                <h3><Link to="/">Foul Medamas</Link></h3>
                                                <p>leuce, grilled mushrooms, mozzarella cheese, ranch.</p>
                                                <div className="price">KWD 1.750</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ordering row">
                            <button type="button">Start ordring</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Home;