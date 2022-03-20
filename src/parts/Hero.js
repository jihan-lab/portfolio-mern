import React from 'react'
import { Fade } from 'react-reveal'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icons/icon-traveler.svg'
import IconTreasue from 'assets/images/icons/icon-treasure.svg'


import numberFormat from 'utils/formatNumber'
import Button from 'elements/Button'

function showMostPicked() {
    window.scrollTo({
        top: this.props.refMostPicked.current.offsetTop - 30,
        behavior: "smooth",
    });
}

const Hero = (props) => {
    return (
        <Fade bottom>
            <section className='container pt-4'>
                <div className='row align-items-center'>
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work,<br />
                            Start Next Vacation
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, amet! Nostrum ullam explicabo beatae ratione reiciendis voluptates doloribus distinctio nemo.
                        </p>
                        <Button className="btn px-5" hasShadow isPrimary onclick={showMostPicked}>Show Me Now</Button>
                        <div className="row" style={{ marginTop: 80 }}>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img
                                    width="36"
                                    height="36"
                                    src={IconTraveler}
                                    alt={`${props.data.travelers}  Travelers`}
                                />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img
                                    width="36"
                                    height="36"
                                    src={IconTreasue}
                                    alt={`${props.data.treasures}  Treasures`}
                                />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
                                </h6>
                            </div>
                            <div className="col-auto">
                                <img
                                    width="36"
                                    height="36"
                                    src={IconCities}
                                    alt={`${props.data.cities}  Cities`}
                                />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.cities)} <span className="text-gray-500 font-weight-light">cities</span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 pl-5">
                        <div style={{ width: 520, height: 410 }}>
                            <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
                            <img src={ImageHero_} alt="Frame" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0' }} />
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}

export default Hero