# Coffee Barista(Narrate each step, sort of like a tech interview)

Take in a order, which our barista will create for us and it will return a coffeeDrink

# What does it mean

Taking in an order
Deducting all parts of the order, and creating a drink

coffeeDrink needs to be an object
const coffeeDrink = {};

name needs to be a string Default value = "Stranger"
size needs to be an string Sizes should equal the same = (grande == medium/ tall == small)
dairy needs to be an array
whipcream needs to be an boolean
syrups needs to be an array
iced needs to be a boolean
espressoShots needs to an int

# Input and Outputs

Input - name, size, dairy, whipcream, syrups, iced, espressoShots
Output - is a coffeeDrink object

# How

Pseudo code

const barista = (name, size, dairy, whipcream, syrups, iced, espressoShots) => {

    //grab the everything from the order
    //a default object, with a standard drink blueprint
    //add each parameter to the corresponding key value pair
    //return that coffeeDrink

}

barista("Kevin", "Large","2%", false, "", false, 4)
barista("Ravneet", "Medium","2%", false, "", true, 3)
barista("Saeed", "Small","Oat Milk", true, "chocolate", false, 2)
barista("Slava", "Medium","2%", true, "vanilla", true, 3)


# Test cases/ Edge case

Happy Path
    - everyone gets their drink, and they are happy! :)
    - The function returns a proper drink object


Sad Path
    - What happens if we pass in empty arguements
    - What if someone wants sugar?
    - Incorrect types, every argument needs to match a specific type
    - What if they order something that we don't have? Ketchup? Mustard? Syrups = Vanilla, Chocolate, Almond, Caramel
    - Size that doesnt exist? Small, medium, and large. Extra-small, and extra-large-> it should pass reassign them to a bigger/smaller size or go to a different coffee shop
    - Inputs are in the wrong order
    - Quantity of ingredients for the array types/ Max quantity

