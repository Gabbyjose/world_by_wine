import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/grapes">Grape Search</Link>
      </nav>

      <div className="welcome">
        <h1>Gabby's World by Wine</h1>
        <div className="ui secondary menu">
          <a className="item active" data-tab="first">
            Welcome
          </a>
          <a className="item" data-tab="second">
            Region
          </a>
          <a className="item" data-tab="third">
            Grape
          </a>
        </div>

        <div className="ui tab segment active" data-tab="first">
          <p>
            Welcome to Gabby's world by wine! A bottle of wine doesn't have to
            be expensive to be enjoyed. You can buy a wine you like at a good
            price if you know two things: the kinds of grapes you like, and the
            regions you like. We will explore both. I want you to know that you,
            too, can talk snobbishly about wine and enjoy it too.
          </p>
          <p>
            Start exploring wines today. Click on any highlighted map below to
            begin exploring a country's wine regions, what grapes they use, and
            what kind of wines they produce.
          </p>
        </div>
        <div className="ui tab segment" data-tab="second">
          <p>
            Regions are the name of the game when it comes to Old World wines.
            When people talk about Old World wines, they are talking about
            mainly European wines, and wine makers that have been in the
            industry as long as we can remember. New World wines, on the other
            hand, refer to wines from the Americas, Australia, Africa, and other
            new players to the wine game. When it comes to branding, the main
            difference between Old and New World wines are how they're marketed.
            Old World wines are marketed by the region in which they're grown.
            Meanwhile, New World wines are sold by grape.
          </p>
        </div>
        <div className="ui tab segment" data-tab="third">
          <p>
            When people drink wine, they think about the grapes. This hasn't
            always been the way we think about wine. In fact, it was only until
            the 'New World' wines rose in popularity that consumers knew what
            grapes they were drinking. Now, consumers have come to expect to
            know what they're drinking, which forced Old World producers to
            include this information on their bottles. While Old World wines are
            still sold by region, you can find the grape information on the back
            of the label or online. Many Old World regions have laws that
            regulate the types of grape you can use in a wine, so once you
            understand what regions use what grapes, you can make a more
            informed purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
