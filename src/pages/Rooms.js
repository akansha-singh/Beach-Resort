import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import StyledHero from "../components/StyledHero";

const Rooms = () => {
    return (
    <React.Fragment>
    <Hero>
        <Banner title="our rooms">
        <Link to="/" className="btn-primary">
            return home
        </Link>
        </Banner>
    </Hero>
    <RoomsContainer />
    </React.Fragment>
    );
};

export default Rooms;
