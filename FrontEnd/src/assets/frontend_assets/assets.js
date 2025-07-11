import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import empty_cart_icon from './empty_cart_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    empty_cart_icon,
}

export const menu_list = [
    {
        menu_name: "Chinese",
        menu_image: menu_1
    },
    {
        menu_name: "Non-Veg",
        menu_image: menu_2
    },
    {
        menu_name: "Dessert",
        menu_image: menu_3
    },
    {
        menu_name: "Indian",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Veg",
        menu_image: menu_6
    },
    {
        menu_name: "South Indian",
        menu_image: menu_7
    },
    {
        menu_name: "Beverage",
        menu_image: menu_8
    }]

export const food_list = [
    {
        "_id": 1,
        "name": "Butter Chicken",
        "img": "https://b.zmtcdn.com/data/dish_images/0fd90992e7e2a0aa2d3c9744e129d6601613059877.png",
        "price": 249,
        "star": 4.5,
        "description": "Tender chicken pieces cooked in creamy tomato sauce.",
        "category": "Non-Veg"
    },
    {
        "_id": 2,
        "name": "Paneer Tikka",
        "img": "https://b.zmtcdn.com/data/dish_photos/825/16b8ed98c80300704c0251e59fb18825.jpg",
        "price": 299,
        "star": 4.7,
        "description": "Grilled paneer marinated in spices served with chutney.",
        "category": "Veg"
    },
    {
        "_id": 3,
        "name": "Sindhi Biryani",
        "img": "https://b.zmtcdn.com/data/o2_assets/bedfaee28839d61014ead129e351e6301632129487.png",
        "price": 249,
        "star": 4.6,
        "description": "Aromatic basmati rice cooked with marinated mutton.",
        "category": "Indian"
    },
    {
        "_id": 4,
        "name": "Sweet and Sour Chicken",
        "img": "https://b.zmtcdn.com/data/dish_images/54d24ff83b8e78b65b76b5a8facbcdcc1639737652.png",
        "price": 599,
        "star": 4.3,
        "description": "Crispy chicken tossed in a sweet and sour sauce.",
        "category": "Chinese"
    },
    {
        "_id": 5,
        "name": "Masala Dosa",
        "img": "https://b.zmtcdn.com/data/dish_images/1998d5d541a33e1e9705a4381a00cbc41602873745.png",
        "price": 159,
        "star": 4.8,
        "description": "Crispy rice crepe filled with spiced mashed potatoes.",
        "category": "South Indian"
    },
    {
        "_id": 6,
        "name": "Chocolate Cake",
        "img": "https://b.zmtcdn.com/data/dish_photos/b24/163ec0c041094f6e4f1efc81cf32bb24.png",
        "price": 149,
        "star": 4.9,
        "description": "Moist chocolate cake topped with rich frosting.",
        "category": "Dessert"
    },
    {
        "_id": 7,
        "name": "Mango Lassi",
        "img": "https://b.zmtcdn.com/data/dish_photos/00c/5e99ce9e513a5f239d9bea14588be00c.jpg",
        "price": 399,
        "star": 4.7,
        "description": "Refreshing yogurt drink blended with mango.",
        "category": "Beverage"
    },
    {
        "_id": 8,
        "name": "Chicken Tikka Masala",
        "img": "https://b.zmtcdn.com/data/dish_photos/4bb/d2ec39b74ba84e6c6b1cc7d39cac14bb.jpg",
        "price": 499,
        "star": 4.5,
        "description": "Grilled chicken pieces in spicy tomato gravy.",
        "category": "Non-Veg"
    },
    {
        "_id": 9,
        "name": "Chole Bhature",
        "img": "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png",
        "price": 89,
        "star": 4.6,
        "description": "Spicy chickpeas served with deep-fried bread.",
        "category": "Indian"
    },
    {
        "_id": 10,
        "name": "Kung Pao Tofu",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWw702ZnwZUTRdfd_hQsOVReqwtJgLFT-ZVdty70bL37IoT14hgKFYzY&usqp=CAE&s",
        "price": 1099,
        "star": 4.4,
        "description": "Stir-fried tofu with peanuts and spicy sauce.",
        "category": "Chinese"
    },
    {
        "_id": 11,
        "name": "Sambar Rice",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCxIE5eKOW_kZJ_lunJvW_Br8pgn-VSWblXfJTlyA6OujgsUm41RGJWM&usqp=CAE&s",
        "price": 399,
        "star": 4.5,
        "description": "Rice served with lentil and vegetable stew.",
        "category": "South Indian"
    },
    {
        "_id": 12,
        "name": "Gulab Jamun",
        "img": "https://b.zmtcdn.com/data/dish_images/9ee9586b919b7a0515ab6e85a94721131596207679.png",
        "price": 299,
        "star": 4.9,
        "description": "Soft balls of dough soaked in sugar syrup.",
        "category": "Dessert"
    },
    {
        "_id": 13,
        "name": "Masala Chai",
        "img": "https://b.zmtcdn.com/data/dish_images/7c1156965eb5d049e01a462f94c1c6f91628748596.png",
        "price": 199,
        "star": 4.8,
        "description": "Spiced tea brewed with milk and aromatic spices.",
        "category": "Beverage"
    },
    {
        "_id": 14,
        "name": "Fish Curry",
        "img": "https://b.zmtcdn.com/data/dish_photos/ecf/0c865a0b167ebdf4d9ebea355021eecf.jpg",
        "price": 449,
        "star": 4.6,
        "description": "Fish pieces cooked in coconut gravy, a coastal delight.",
        "category": "Non-Veg"
    },
    {
        "_id": 15,
        "name": "Palak Paneer",
        "img": "https://b.zmtcdn.com/data/o2_assets/b4e00e78273d698d451d649c750c35111715681536.png",
        "price": 439,
        "star": 4.8,
        "description": "Cottage cheese in a creamy spinach sauce.",
        "category": "Veg"
    },
    {
        "_id": 16,
        "name": "Spring Rolls",
        "img": "https://b.zmtcdn.com/data/o2_assets/58e8898d06725441896d0aafc54932af1634556480.png",
        "price": 369,
        "star": 4.5,
        "description": "Crispy rolls filled with mixed vegetables.",
        "category": "Chinese"
    },
    {
        "_id": 17,
        "name": "Idli",
        "img": "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
        "price": 149,
        "star": 4.7,
        "description": "Soft steamed rice cakes served with chutney.",
        "category": "South Indian"
    },
    {
        "_id": 18,
        "name": "Tiramisu",
        "img": "https://b.zmtcdn.com/data/o2_assets/87c70510634544f14945f5c2acf173a11632716549.png",
        "price": 549,
        "star": 4.6,
        "description": "Classic Italian dessert made with coffee and mascarpone.",
        "category": "Dessert"
    },
    {
        "_id": 19,
        "name": "Lemonade",
        "img": "https://b.zmtcdn.com/data/dish_photos/8ca/c3995f4429816679fb2064d8a28358ca.jpg",
        "price": 249,
        "star": 4.8,
        "description": "Refreshing drink made with fresh lemons.",
        "category": "Beverage"
    },
    {
        "_id": 20,
        "name": "Tandoori Chicken",
        "img": "https://b.zmtcdn.com/data/o2_assets/8625864d5ec6f6576af3e714e75f55621637209437.png",
        "price": 499,
        "star": 4.5,
        "description": "Marinated chicken grilled in a traditional oven.",
        "category": "Non-Veg"
    },
    {
        "_id": 21,
        "name": "Aloo Gobi",
        "img": "https://b.zmtcdn.com/data/o2_assets/5550f5ac66431cd2b695f86efaebb07d1634556106.png",
        "price": 249,
        "star": 4.7,
        "description": "Spiced potato and cauliflower stir-fry.",
        "category": "Veg"
    },
    {
        "_id": 22,
        "name": "Hakka Noodles",
        "img": "https://b.zmtcdn.com/data/dish_photos/de2/1fc6387f613170faa51184697f71ade2.jpg",
        "price": 299,
        "star": 4.4,
        "description": "Wheat noodles tossed with vegetables and sauces.",
        "category": "Chinese"
    },
    {
        "_id": 23,
        "name": "Uttapam",
        "img": "https://b.zmtcdn.com/data/o2_assets/7ab7679bbd422b52205ba598502674291632716549.png",
        "price": 599,
        "star": 4.5,
        "description": "Thick, pancake-like rice batter topped with vegetables.",
        "category": "South Indian"
    },
    {
        "_id": 24,
        "name": "Ras Malai",
        "img": "https://b.zmtcdn.com/data/o2_assets/6c9d314b696a88a653acaae1060790d31728889859.png",
        "price": 349,
        "star": 4.8,
        "description": "Soft cheese dumplings in sweetened milk.",
        "category": "Dessert"
    },
    {
        "_id": 25,
        "name": "Fruit Punch",
        "img": "https://b.zmtcdn.com/data/dish_photos/b0f/51ee24dad9d4e5824ccf8f5765340b0f.jpg",
        "price": 399,
        "star": 4.6,
        "description": "A refreshing mix of fruit juices and soda.",
        "category": "Beverage"
    },
    {
        "_id": 26,
        "name": "Lamb Rogan Josh",
        "img": "https://b.zmtcdn.com/data/dish_images/fc39307e8b65002dc87b69800534f25a1613652647.png",
        "price": 649,
        "star": 4.5,
        "description": "Flavorful lamb curry with aromatic spices.",
        "category": "Non-Veg"
    },
    {
        "_id": 27,
        "name": "Vegetable Biryani",
        "img": "https://b.zmtcdn.com/data/dish_images/a098f678350380809a464fb5aaf7128a1602873799.png",
        "price": 699,
        "star": 4.6,
        "description": "Basmati rice cooked with assorted vegetables.",
        "category": "Veg"
    },
    {
        "_id": 28,
        "name": "Szechuan Noodles",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-y7YovahGzjqVz51DlDMFJ10hV-05ItSZA&s",
        "price": 299,
        "star": 4.5,
        "description": "Spicy noodles cooked with Szechuan sauce.",
        "category": "Chinese"
    },
    {
        "_id": 29,
        "name": "Vada Sambar",
        "img": "https://b.zmtcdn.com/data/dish_photos/b27/46b07268c471cbe074d8b2f846278b27.jpg",
        "price": 149,
        "star": 4.8,
        "description": "Fried lentil doughnuts served with sambar.",
        "category": "South Indian"
    },
    {
        "_id": 30,
        "name": "Cheesecake",
        "img": "https://b.zmtcdn.com/data/o2_assets/27a6de4c51a648c2d3a68c8f42ee9a571632716698.png",
        "price": 599,
        "star": 4.7,
        "description": "Rich, creamy dessert on a graham cracker crust.",
        "category": "Dessert"
    },
    {
        "_id": 31,
        "name": "Mint Mojito",
        "img": "https://b.zmtcdn.com/data/dish_photos/3e9/7741b030cc81ce2ed97179965c2723e9.jpg",
        "price": 349,
        "star": 4.9,
        "description": "Refreshing drink made with mint and lime.",
        "category": "Beverage"
    },
    {
        "_id": 32,
        "name": "Baked Salmon",
        "img": "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Best-Oven-Baked-Salmon-Recipe-500x500.jpg",
        "price": 599,
        "star": 4.7,
        "description": "Oven-baked salmon fillet seasoned to perfection.",
        "category": "Non-Veg"
    },
    {
        "_id": 33,
        "name": "Mushroom Masala",
        "img": "https://b.zmtcdn.com/data/dish_photos/55f/ca79cf0de7a5056ef2c1c3e22568855f.png",
        "price": 349,
        "star": 4.5,
        "description": "Mushrooms simmered in a spicy gravy.",
        "category": "Veg"
    },
    {
        "_id": 34,
        "name": "Fried Rice",
        "img": "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        "price": 299,
        "star": 4.6,
        "description": "Stir-fried rice with vegetables and eggs.",
        "category": "Chinese"
    },
    {
        "_id": 35,
        "name": "Masala Puri",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_1vA3S3RaIvOPysgdQIq4i95de9LIMnH8A&s",
        "price": 199,
        "star": 4.5,
        "description": "Deep-fried bread served with spicy curry.",
        "category": "South Indian"
    },
    {
        "_id": 36,
        "name": "Fruit Tart",
        "img": "https://b.zmtcdn.com/data/dish_photos/5b6/853dd71cf9657eff1268bc11e98975b6.jpg",
        "price": 499,
        "star": 4.8,
        "description": "Pastry filled with custard and topped with fresh fruits.",
        "category": "Dessert"
    },
    {
        "_id": 37,
        "name": "Cold Coffee",
        "img": "https://b.zmtcdn.com/data/o2_assets/9c1dfe59035bbbcb1e06328f621917051632716659.png",
        "price": 299,
        "star": 4.7,
        "description": "Iced coffee blended with milk and sugar.",
        "category": "Beverage"
    },
    {
        "_id": 38,
        "name": "Cup Cake",
        "img": "https://b.zmtcdn.com/data/o2_assets/d7791002acb6d04a9d57d9b76b9025cc1632716660.png",
        "price": 140,
        "star": 4.6,
        "description": "Food provides essential nutrients for overall health and well-being",
        "category": "Cake"
    },
    {
        "_id": 39,
        "name": "Vegan Cake",
        "img": 'https://b.zmtcdn.com/data/dish_photos/1ee/fb36d633f4ae91ac72bb59bee438b1ee.jpg',
        "price": 120,
        "star": 4.5,
        "description": "Food provides essential nutrients for overall health and well-being",
        "category": "Cake"
    },
    {
        "_id": 40,
        "name": "Butterscotch Cake",
        "img": 'https://b.zmtcdn.com/data/dish_photos/37d/7353188bf93b4d73ed7cc31e0c72237d.jpg',
        "price": 200,
        "star": 4.7,
        "description": "Food provides essential nutrients for overall health and well-being",
        "category": "Cake"
    },
    {
        "_id": 41,
        "name": "Sliced Cake",
        "img": 'https://b.zmtcdn.com/data/pictures/6/20960736/ad1c2e5baa4bea771c6c6772a7cb01cb_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A',
        "price": 150,
        "star": 4.4,
        "description": "Food provides essential nutrients for overall health and well-being",
        "category": "Cake"
    },
    {
        "_id": 42,
        "name": "Rajma Chawal",
        "img": "https://b.zmtcdn.com/data/pictures/5/20278665/09626c137b2bdfa7d084aa7b44eb16a0_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        "price": 179,
        "star": 4.6,
        "description": "Red kidney beans simmered in spices, served with basmati rice.",
        "category": "Indian"
    },
    {
        "_id": 43,
        "name": "Dhokla",
        "img": "https://b.zmtcdn.com/data/dish_photos/2b5/a7d9a93cfa8b6ec604f22de144d002b5.jpg",
        "price": 99,
        "star": 4.5,
        "description": "Steamed savory cake made from fermented rice and chickpea batter.",
        "category": "Indian"
    },
    {
        "_id": 44,
        "name": "Bhindi Masala",
        "img": "https://b.zmtcdn.com/data/dish_photos/c3b/00f37147bad1de53e0d33904ac658c3b.png",
        "price": 189,
        "star": 4.4,
        "description": "Stir-fried okra with onions and aromatic Indian spices.",
        "category": "Indian"
    },
    {
        "_id": 45,
        "name": "Pav Bhaji",
        "img": "https://b.zmtcdn.com/data/o2_assets/bf549b1fce240073d134bfe706afad9d1632716575.png",
        "price": 149,
        "star": 4.7,
        "description": "Spiced mashed vegetables served with buttered buns.",
        "category": "Indian"
    },
    {
        "_id": 46,
        "name": "Kadhi Pakora",
        "img": "https://b.zmtcdn.com/data/dish_photos/275/0902803fdb8982d7e6a67fe7e415b275.jpg",
        "price": 169,
        "star": 4.6,
        "description": "Gram flour dumplings simmered in spiced yogurt curry.",
        "category": "Indian"
    }


]

export const BrandData= [
    {
        "id": 1,
        "name": "Domino's Pizza",
        "description": "Delicious and hot pizzas with fresh ingredients.",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg"
    },
    {
        "id": 2,
        "name": "KFC",
        "description": "Finger-licking good chicken meals and burgers.",
        "logo": "//upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/300px-KFC_logo.svg.png?20170615210441"
    },
    {
        "id": 3,
        "name": "McDonald's",
        "description": "Tasty burgers, fries, and refreshing drinks.",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjLWhWpx9PfbzysffLbMA_DK_8jawJAVHbw&s"
    },
    {
        "id": 4,
        "name": "Starbucks",
        "description": "Premium coffee, beverages, and pastries.",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
    },
    {
        "id": 5,
        "name": "Subway",
        "description": "Fresh and customizable sandwiches and salads.",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQsZ2KczTIWDJ5PXw8A-YKmGZ6UGVe-g5ZQ&s"
    },
    {
        "id": 6,
        "name": "Burger King",
        "description": "Flame-grilled burgers and crispy fries.",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1YUsojqPKLq9Z4Ey3w_TEJ-XZHA4Y4Jjuw&s"
    },
    {
        "id": 7,
        "name": "Pizza Hut",
        "description": "Cheesy pizzas with a variety of toppings.",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pizza_Hut_classic_logo.svg"
    },
    {
        "id": 8,
        "name": "Dunkin' Donuts",
        "description": "Tasty donuts and fresh brewed coffee.",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9CdsgfMvgDHkx_dv2LJ1neXa8ClEpa1b1g&s"
    },
    {
        "id": 9,
        "name": "Taco Bell",
        "description": "Mexican-inspired fast food like tacos and burritos.",
        "logo": "https://brandlogos.net/wp-content/uploads/2016/11/taco-bell-logo-preview.png"
    },
    {
        "id": 10,
        "name": "Costa Coffee",
        "description": "Quality coffee and delicious snacks.",
        "logo": "https://1000logos.net/wp-content/uploads/2020/10/Costa-Coffee-Logo.png"
    }
]
