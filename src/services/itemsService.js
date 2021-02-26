let items = [
    {
        id: 1,
        name: "MAT202 TxtBk",
        description: "Slightly used, but just as effective at being read as a tomato!",
        image: "https://pictures.abebooks.com/isbn/9780321796974-us.jpg",
        price: 40.00,
        quality: 0.4,
        seller: "Bryce",
        categories: ["book"],
    },
    {
        id: 2,
        name: "Microwave",
        description: "A standard cuisinart microwave",
        image: "https://cdn.thewirecutter.com/wp-content/uploads/2020/05/microwave-lowres-2x1-5100jpg-1024x512.jpg",
        price: 40.00,
        quality: 0.9,
        seller: "Bryce",
        categories: ["book"],
    },
    {
        id: 3,
        name: "Dance showcase tickets",
        description: "For some day next week i think",
        image: "https://i.pinimg.com/originals/85/a4/4b/85a44b48f70d9f421e014b7b3a47e42b.jpg",
        price: 40.00,
        quality: 1,
        seller: "Bryce",
        categories: ["book"],
    },
    
]

export async function getItems() {
    return items;
}