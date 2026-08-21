const resList = [
    {
        type: "restaurant",
        data: {
            "id": "168884",
            "name": "Uncle Peter's Pancakes",
            "image": "FOOD_CATALOG/IMAGES/CMS/2026/7/7/2f6c2426-ae9f-49ff-a14e-170d09af5cc6_95fc639b-c6f3-4335-88a8-6e0fd073502a.png",
            "locality": "Indiranagar",
            "area": "Indiranagar",
            "costForTwo": "₹300 for two",
            "cuisines": ["Waffle", "Desserts", "American", "Continental", "Beverages", "Ice Cream"],
            "rating": 4.1,
            "totalRatings": "6.0K+",
            "deliveryTime": "30-35 mins",
            "distance": "4.4 km",
            "isOpen": true,
            "promoted": true,
            "discount": "99 store",
            "googleRating": "4.7 (2.8K+)",
            "link": "https://www.swiggy.com/city/bangalore/uncle-peters-pancakes-indiranagar-rest168884"
        }
    },
    {
        type: "restaurant",
        data: {
            "id": "444178",
            "name": "Magnolia Bakery",
            "image": "FOOD_CATALOG/IMAGES/CMS/2026/6/17/772a8b03-3a0c-48c2-a916-9f7e450af16b_16c589a4-79ba-4318-977d-eb0fb26017bf.png",
            "locality": "Indiranagar",
            "area": "Indiranagar",
            "costForTwo": "₹500 for two",
            "cuisines": ["Bakery", "Desserts", "Ice Cream"],
            "rating": 4.6,
            "totalRatings": "17K+",
            "deliveryTime": "25-30 mins",
            "distance": "5.0 km",
            "isOpen": true,
            "badges": ["Top-rated for Cakes & Desserts", "Top-rated for Gourmet", "Premium gourmet"],
            "googleRating": "4.3 (8.4K+)",
            "link": "https://www.swiggy.com/city/bangalore/magnolia-bakery-indiranagar-rest444178"
        }
    },
    {
        type: "restaurant",
        data: {
            "id": "751353",
            "name": "Tim Hortons",
            "image": "fa82c229250adbd69440bb123d1b7b4d",
            "locality": "8TH BLOCK",
            "area": "KORAMANGALA",
            "costForTwo": "₹400 for two",
            "cuisines": ["Coffee", "Beverages", "Cafe", "Desserts", "Sandwich", "Fast Food"],
            "rating": 4.4,
            "totalRatings": "3.2K+",
            "deliveryTime": "15-20 mins",
            "distance": "0.9 km",
            "isOpen": true,
            "promoted": true,
            "discount": "50% OFF",
            "googleRating": "Not available",
            "link": "https://www.swiggy.com/city/bangalore/tim-hortons-8th-block-koramangala-rest751353"
        }
    },
    {
        type: "restaurant",
        data: {
            "id": "50467",
            "name": "Bakingo",
            "image": "FOOD_CATALOG/IMAGES/CMS/2026/8/11/9c3aacf1-824b-42eb-a688-1603be1c7734_ee67c7fe-0b51-4d3e-b0da-d3ce4e90406e.jpg",
            "locality": "1st Block",
            "area": "Koramangala",
            "costForTwo": "₹300 for two",
            "cuisines": ["Bakery", "Desserts", "Beverages", "Snacks"],
            "rating": 4.5,
            "totalRatings": "14K+",
            "deliveryTime": "15-20 mins",
            "distance": "3.0 km",
            "isOpen": true,
            "discount": "99 store + Get items under 649",
            "googleRating": "Not available",
            "link": "https://www.swiggy.com/city/bangalore/bakingo-1st-block-koramangala-rest50467"
        }
    },
    {
        type: "restaurant",
        data: {
            "id": "439624",
            "name": "Lubov Patisserie - Cakes, Macarons and Desserts",
            "image": "FOOD_CATALOG/IMAGES/CMS/2026/4/14/c8afec3c-f639-45f2-9ce7-838c8985d3c3_b7973235-3311-4919-8de5-5cb1bf978602.png_compressed",
            "locality": "Amarjyothi Layout",
            "area": "Bommanahalli",
            "costForTwo": "₹250 for two",
            "cuisines": ["Desserts", "Bakery"],
            "rating": 4.3,
            "totalRatings": "624",
            "deliveryTime": "35-40 mins",
            "distance": "6.4 km",
            "isOpen": true,
            "promoted": true,
            "veg": true,
            "badge": "Pure Veg",
            "discount": "₹200 OFF - Use code CELEBRATION",
            "googleRating": "Not available",
            "link": "https://www.swiggy.com/city/bangalore/lubov-patisserie-cakes-macarons-and-desserts-amarjyothi-layout-bommanahalli-rest439624"
        }
    },
    {
        type: "restaurant",
        data: {
            "id": "70012",
            "name": "SMOOR",
            "image": "FOOD_CATALOG/IMAGES/CMS/2026/8/5/d997be74-f01f-4329-a44b-ec4a3807ce87_8855b2c9-4175-4154-9a95-c936611a1c3b.jpg",
            "locality": "7th Block",
            "area": "Koramangala",
            "costForTwo": "₹450 for two",
            "cuisines": ["Asian", "Burgers", "Italian", "Thai", "Sushi", "Salads", "Pastas", "Pizzas", "Mexican", "Chinese"],
            "rating": 4.4,
            "totalRatings": "9.1K+",
            "deliveryTime": "10-15 mins",
            "distance": "1.4 km",
            "isOpen": true,
            "badges": ["bolt!", "Premium gourmet"],
            "discount": "20% OFF - Use code SPECIALS",
            "googleRating": "Not available",
            "link": "https://www.swiggy.com/city/bangalore/smoor-7th-block-koramangala-rest70012"
        }
    },
    {
        type: "restaurant",
        data: {
            "id": "816989",
            "name": "CakeZone Patisserie",
            "image": "FOOD_CATALOG/IMAGES/CMS/2025/11/24/769948b6-83a7-4980-aa03-17a462a201f9_458dd26e-6711-46b5-8565-8d994ba1ec25.png_compressed",
            "locality": "Shivajinagara",
            "area": "ADUGODI",
            "costForTwo": "₹200 for two",
            "cuisines": ["Bakery", "Desserts", "Beverages", "Ice Cream", "Sweets", "Juices", "Bengali"],
            "rating": 4.5,
            "totalRatings": "821",
            "deliveryTime": "20-25 mins",
            "distance": "2.6 km",
            "isOpen": true,
            "promoted": true,
            "badge": "bolt!",
            "discount": "50% OFF - 99 store",
            "googleRating": "Not available",
            "link": "https://www.swiggy.com/city/bangalore/cakezone-patisserie-shivajinagara-adugodi-rest816989"
        }
    },
    {
        type: "restaurant",
        data: {
            "id": "534235",
            "name": "Cheesecake & Co.",
            "image": "236d8476f215892286c2ef928ac7edc0",
            "locality": "Koramangala",
            "area": "Koramangala",
            "costForTwo": "₹250 for two",
            "cuisines": ["Bakery"],
            "rating": 4.6,
            "totalRatings": "4.2K+",
            "deliveryTime": "10-15 mins",
            "distance": "1.3 km",
            "isOpen": true,
            "veg": true,
            "badges": ["bolt!", "Premium gourmet"],
            "discount": "50% OFF - Use code SWIGGYIT",
            "googleRating": "2.9 (163)",
            "link": "https://www.swiggy.com/city/bangalore/cheesecake-and-co-koramangala-rest534235"
        }
    },
    {
        type: "restaurant",
        data: {
            "id": "408386",
            "name": "NOTO Ice Cream and Desserts",
            "image": "FOOD_CATALOG/IMAGES/CMS/2026/3/8/87979785-f031-46ac-a2d5-296dcdd6b9d4_4956b35b-f531-4b8b-98f1-2d6394ca22db.jpg_compressed",
            "locality": "Ejipura",
            "area": "Koramangla",
            "costForTwo": "₹250 for two",
            "cuisines": ["Ice Cream", "Desserts", "Healthy Food"],
            "rating": 4.6,
            "totalRatings": "1.5K+",
            "deliveryTime": "10-15 mins",
            "distance": "1.5 km",
            "isOpen": true,
            "promoted": true,
            "veg": true,
            "badges": ["bolt!", "Healthy meals - high protein, low calorie"],
            "discount": "₹175 OFF - Get every item @ 29",
            "googleRating": "Not available",
            "link": "https://www.swiggy.com/city/bangalore/noto-ice-cream-and-desserts-ejipura-koramangla-rest408386"
        }
    }
];

export default resList;