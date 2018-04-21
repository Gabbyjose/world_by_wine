const { Grapes, Region, Country } = require("./models");
const db = require("./db.js");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  let countries;
  await Promise.all([
    Country.create({
      name: "France",
      mapName: "fr_region_mill"
    }),
    Country.create({
      name: "Argentina",
      mapName: "ar_mill"
    }),
    Country.create({
      name: "Spain",
      mapName: "es_mill"
    }),
    Country.create({
      name: "United States",
      mapName: "us_aea"
    }),
    Country.create({
      name: "South Africa",
      mapName: "za_mill"
    })
  ]).then(createdCountries => (countries = createdCountries));

  const regions = await Promise.all([
    Region.create({
      name: "Burgundy",
      description:
        "This region is often regarded as the home place of Pinot Noirs. Vines here are often decades old, and if you think you know Pinot Noirs, you should drink up on your old vine Pinots.",
      fameGrape: "Pinot Noir",
      flavors: "Plum, cherrystone, white tobacco, minerality and good acidity",
      quote:
        "New World Pinot Noirs have nothing on the OG Burgundy, especially those old vine Burgundy's.",
      imageURL: "../public/css/burgundy.jpg",
      value: "FR-B",
      countryId: 1
    }),
    Region.create({
      name: "Loire Valley",
      description:
        "The Loire Valley is one of the most often visited wine region in France because of its proximity to Paris. With only a one hour train ride, visitors can easily hop a train and have a taste of the French countryside.",
      fameGrape: "Cabernet Franc",
      flavors: "Earthiness, vegetable, green pepper",
      quote:
        "New World Pinot Noirs have nothing on the OG Burgundy, especially those old vine Burgundy's.",
      imageURL: "../public/css/loire-valley.jpg",
      value: "FR-F",
      countryId: 1
    }),
    Region.create({
      name: "Rhone Valley",
      description:
        "The Rhone valley is one of France's most varied. Wines here range from the famous 'Hermitage' sub-region that produce some of the best Syrahs in the world, to the 'GSM' blend which always consists of Grenache, Syrah and Mourverde.",
      fameGrape: "Syrah (Northern Rhone) and Grenache (Southern Rhone)",
      flavors:
        "Berry fruit on the palate, with notes of coffee, spice, and game",
      quote:
        "I can't wait to have the opportunity to try another Hermitage, because we all know that's some of the rarest of the Rhone wines.",
      imageURL: "../public/css/hermitage-rhone.jpg",
      value: "FR-V",
      countryId: 1
    }),
    Region.create({
      name: "Alsace",
      description:
        "Over the years, the territory of Alsace has been passed between France and Germany. This shines through in its wine culture. Although in France, Alsace produces German style wine, most notably their Reisling.",
      fameGrape: "Reisling",
      flavors: "Dry, apple, crisp acidity",
      quote:
        "Unlike the German Reisling, the Reisling here in Alsace are nice and dry.",
      imageURL: "../public/css/alsace.jpg",
      value: "FR-A",
      countryId: 1
    }),
    Region.create({
      name: "Bordeaux",
      description:
        "Bordeaux has always been regarded as one of the world's most prominent wine making region. Most wines that come from this region are a blend of grapes. In fact, many new wineries around the world will try their hand a 'Bordeaux style blend' because of its fame.",
      fameGrape: "Cabernet Sauvignon",
      flavors: "Black Currant, Plum, Graphite, Cedar, Violet",
      quote:
        "I prefer a well aged Bordeaux over a Napa Cab any day because I love the oak flavor.",
      imageURL: "../public/css/bordeaux-river.jpg",
      value: "FR-D",
      countryId: 1
    }),
    Region.create({
      name: "Ribera del Duero",
      description:
        "Named best wine region of the year in 2012, this small region on the Duero River produces almost exclusively 100% Tempranillo wines. Although they use the same grapes as their Rioja counterparts, the temperatures of the region, as well as the aging process, give the Ribera del Duero a unique flavor.",
      fameGrape: "Tempranillo",
      flavors:
        "Dark, earthy, slightly herby fruit, oaky, spicy, and roasted coffee.",
      quote:
        "I feel like the Tempranillo grape really shines through in Ribera del Duero.",
      imageURL: "../public/css/ribera-del-duero.jpg",
      value: "ES-BU",
      countryId: 3
    }),
    Region.create({
      name: "Rioja",
      description:
        "In classic old world tradition, many Rioja naming laws require that these wines be agred a certain amount of time before they hit the market. That means the region could stop producing wine today but still have inventory to sell for the next five to ten years.",
      fameGrape: "Tempranillo",
      flavors:
        "cherry, plum, tomato, and dried fig, cedar, leather, tobacco, vanilla, dill, and clove",
      quote:
        "What I love about Rioja is that you can find a great value bottle, like you would never find in France.",
      imageURL: "../public/css/rioja.jpg",
      value: "ES-LO",
      countryId: 3
    }),
    Region.create({
      name: "Galicia",
      description:
        "Galicia has been a producer of highly popular white wines for quite a while. Their wine reds, however, have only recently gained popularity. Because Spain already has several region that grow red wine, the red wines from this area have a hard time shining through.",
      fameGrape: "Tempranillo",
      flavors:
        "Dark fruit (black cherry, raspberry, blackberry), herbs, earthiness",
      quote:
        "I find that Galician wines have more in common with Portugese wines rather than other Spanish wines, given their proximity to Portugal.",
      imageURL: "../public/css/galicia.jpg",
      value: "ES-PO",
      countryId: 3
    }),
    Region.create({
      name: "Catalunya",
      description:
        "Because of its proximity to France, many wines from Catalunya have more in common with their French counterparts. Catalan wines come from a Mediterranean climate, making them vastly different than the wine grown in the northern part of the country.",
      fameGrape: "Mencia",
      flavors:
        "Similar to other Spanish wines, Catalan wines also have flavors of licorice, tar and brandied cherries.",
      quote:
        "Wines from Priorat have really become popular recently, it's good to see a new kind of Spanish wine.",
      imageURL: "../public/css/catalunya.jpg",
      value: "ES-T",
      countryId: 3
    }),
    Region.create({
      name: "The Western Cape",
      description:
        "The Western Cape took the New World by storm with their varied and delicious Syrahs. In recent years, the Eastern Cape and the Northern Cape were both deemed to be wine regions. It seems like South Africa could have a lot in store for us in the future.",
      fameGrape: "Syrah",
      flavors: "Dark spiced fruit flavors with a chocolate like richness",
      quote:
        "I'd love to do a trip to Cape Town, especially to visit those beautiful Western Cape wineries.",
      imageURL: "../public/css/western-cape.jpg",
      value: "ZA-WC",
      countryId: 5
    }),
    Region.create({
      name: "Mendoza",
      description:
        "Although Malbecs today enjoy a lot of love and recognition, the Malbec boom is relatively new. It wasn't too long ago that wines from Argentina were not very well known. Now the new fad for Mendoza is making 100% bottles of Cabernet Franc, a grape often just used in blends.",
      fameGrape: "Malbec",
      flavors:
        "Full of ripe, juicy berries and purple fruits, often with herbal, licorice/anise, or purple floral notes",
      quote:
        "Remember back before the Malbec boom, when no one knew about Argentinian wine? What a new world gem!",
      imageURL: "../public/css/mendoza_vineyard.jpg",
      value: "AR-M",
      countryId: 2
    }),
    Region.create({
      name: "Salta",
      description:
        "Thought Mendoza had high altitude vineyards? Salta's vineyards are about 3,000 meters above sea level, which makes them some of the world's highest vineyards.",
      fameGrape: "Malbec",
      flavors: "Roasted peppers, and spices like black pepper or paprika",
      quote:
        "As much as I like Mendoza, I have to admit that the Malbecs from Salta bring those berry notes to a whole new level.",
      imageURL: "../public/css/salta.jpg",
      value: "AR-A",
      countryId: 2
    }),
    Region.create({
      name: "California",
      description:
        "When wine production started in California, they would market their 'Bordeaux style blends'. Bordeaux quickly deemed this illegal, so California had to come up with a new way to market their wines. California wine makers were some of the first to market their wines by the varietals of grapes instead of region, which has impacted the wine industry to this day.",
      fameGrape: "Cabernet Sauvignon",
      flavors: "Fruit forward, black cherry, black currant and blackberry",
      quote:
        "I hear people say that California wine is more sought after than French wine, isn't that crazy?",
      imageURL: "../public/css/napa-valley.jpg",
      value: "US-CA",
      countryId: 4
    }),
    Region.create({
      name: "Oregon",
      description:
        "Thanks to the Willamette valley's climate, it is quickly becoming a major producer of Pinot Noirs. Unlike California Pinots, these wines are often earthier and more rustic in their flavor. Many say that a Willamette Pinot is the closest you'll get to a Burgundy outside of Burgundy.",
      fameGrape: "Pinot Noir",
      flavors: "Cranberries, earth, rustic",
      quote:
        "I don't know what all the fuss is about in California, when the real Pinot Noirs are in Willamette.",
      imageURL: "../public/css/WillametteValley.jpg",
      value: "US-OR",
      countryId: 4
    }),
    Region.create({
      name: "New York",
      description:
        "Not many people think of wine when they think of New York. Given New York's proximity to water, from the Atlantic Ocean to the Finger Lakes up north, New York produces wine, most notably their roses and their Cabernet Francs.",
      fameGrape: "Cabernet Franc",
      flavors: "Light to medium in color, texture and taste; spicy and peppery",
      quote:
        "I was going to just spend another weekend in the Hamptons but then I found this winery, I haven't had a Cabernet Franc like this in the U.S. before.",
      imageURL: "../public/css/finger-lakes.jpg",
      value: "US-NY",
      countryId: 4
    })
  ]);

  const grapes = await Promise.all([
    Grapes.create({
      name: "Pinot Noir"
    }),
    Grapes.create({
      name: "Cabernet Sauvignon"
    }),
    Grapes.create({
      name: "Merlot"
    }),
    Grapes.create({
      name: "Malbec"
    }),
    Grapes.create({
      name: "Syrah"
    })
  ]);

  console.log(countries, grapes);

  console.log("seeded succesfully");
}

seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
  })
  .then(() => {
    console.log("closing db connection");
    db.close();
    console.log("db closed");
  });
