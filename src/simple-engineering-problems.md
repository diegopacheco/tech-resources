## Simple Engineering Problems

## Rationale

* A list of engineering problems that are worth solving.
* Helps engineers to understand what they are doing.
* Helps to build confidence.
* Helps to build up coding skills.
* Helps to build up debugging skills.

## How to use

* Can be done with any language.
* Do it 2h per day, every day no matter what. Could be any time but do it.
* It needs to be 2h per day, this part is very important, needs to be daily.
* You need to understand the code line by line.
* The idea is to always do 4 simple things:
  * Do table test ("In portuguese teste de mesa") where you similate the code execution in text block file.
  * Debug the code to understand.
  * Ask questions
  * Make sure you understand every single line of the code.
* Each problem should be done 10 times before moving to the next one.  
  * It's okay yo copy on the first time
  * But in all other times it needs to be done without looking the solution
  * If you get stuck you can look the solution but, do not do that more than 3 times.
* When you deliver the solution you should have something like this on the file system:
  * src/DPK01_impl_1.js
  * src/DPK01_impl_2.js
  * src/DPK01_impl_3.js
  * src/DPK01_impl_4.js
  * src/DPK01_impl_5.js
  * src/DPK01_impl_6.js
  * src/DPK01_impl_7.js
  * src/DPK01_impl_8.js
  * src/DPK01_impl_9.js
  * src/DPK01_impl_10.js  
* But all files might have the same code?
  * sure - if that is the case no problem, what matter is to pratice.
  * however you might find better ways of doing it - if you dont - is also fine.  
* Any issues? Ask for help.

## How should be presented?

* Explain the problem.
* Explain the solution line by line of the code.
* Share the parts that was hard to understand - ask for advice.
* Ask for refactoring tips - how could we make the code better.
* Ask for feedback

## Problems

### DPK01 Revert String
Create a function that can revert a string.
```
revert("Hello") -> "olleH"
```

### DPK02 Revert a List  
Create a function that can revert a list.
```
revert([1,2,3,4,5]) -> [5,4,3,2,1]
```

###  DPK03 Lookup
Create a function that perform a lookup in a map for a given key you hould have id, name. 
```
lookup(1) -> "John"
```
Refactor the code so you can lookup for email as well and ge the name and vice versa.
```
lookup("John") -> "john@john.jhon.com"
lookup("john@john.jhon.com") -> "John"
```

###  DPK04 Simple Pattern Matcher
Given the following countries and languages:
```
Usa -> English
Brazil -> Portuguese
Spain -> Spanish
Italy -> Italian
France -> French
Germany -> German
```
Create a function that can return the language for a given country.
You cannot use a hashmap or dictionary.
```
pattern_matcher("Usa") -> "English"
```
Refactor the code, can you do that without using IF statements?
```
pattern_matcher("Usa") -> "English"
```

###  DPK05 Pointers
Considering the following hash map:
```
power = {
  "John": 100,
  "Paul": 90,
  "George": 80,
  "Ringo": 70
}
```
Create three functions. 
1. Function one should return the power of a given person.
2. Function two should recive 2 names and the with one is the most powerful(should use function one).
3. Function three should recive 2 names and update the leaderboard.

Now the thrid function that will update the leaderboard after all the matches.
i.e Leaderboard should be:
```
leaderboard = {
  "John": 0,
  "Paul": 0,
  "George": 0,
  "Ringo": 0
}
```
Every time a play wins, he scores +10 points, if there is a draw, both players score +5 points.
IF one player loses, he scores -5 points.
```
play("John", "Paul") -> "John"
leaderboard -> {
  "John": 10,
  "Paul": -5,
  "George": 0,
  "Ringo": 0
}
```
lets do another round:
```
play("John", "Ringo") -> "John"
leaderboard -> {
  "John": 20,
  "Paul": -5,
  "George": 0,
  "Ringo": -5
}
```
Now can you refactor your code and do less ifs? Maybe introduce pointers?

###  DPK06 Tokenizer

Create a function that can tokenize a string based on a token.
```
tokenize("Hello,World,How,Are,You", ",") -> ["Hello", "World", "How", "Are", "You"]
tokenize("Hello World How Are You", " ") -> ["Hello", "World", "How", "Are", "You"]
tokenize("Hello-World-How-Are-You", "-") -> ["Hello", "World", "How", "Are", "You"]
```
Can you refactor your code and do that without using any prebuild function like split?

### DPK07 Group By

Create a function that can group a list of numbers by a given number.
```
group_by([1,2,3,4,5,6,7,8,9,10], 3) -> [[1,2,3], [4,5,6], [7,8,9], [10]]
```
Please make sure the same function works with strings as well.
```
group_by(["a","b","c","d","e","f","g","h","i","j"], 3) -> [["a","b","c"], ["d","e","f"], ["g","h","i"], ["j"]]
```
Can you refactor the code and create your own group by function, do not use any prebuild function.

### DPK08 Map

Create a function that can map a function execution to each element of a list, return a new list.
```
map([1,2,3,4,5], (x) => x * 2) -> [2,4,6,8,10]
```
The map function should recive a collection(list or array) and a function that will be apply to each element of the collection.

Now refactor the code and do not use any prebuild function.

### DPK09 Filter

Create a function that can filter a list based on a given condition.
```
filter([1,2,3,4,5,6,7,8,9,10], (x) => x % 2 == 0) -> [2,4,6,8,10]
```
The filter function should recive a collection(list or array) and a function that will be apply to each element of the collection.

Now refactor the code and do not use any prebuild function.

### DPK10 Reduce

Create a function that can reduce a list to a single value.
```
reduce([1,2,3,4,5], (acc, x) => acc + x, 0) -> 15
```
The reduce function should recive a collection(list or array), a function that will be apply to each element of the collection and an initial value.

Now refactor the code and do not use any prebuild function.

### DPK11 Replace

Create a function that can replace a given token in a string.
```
replace("Hello,World,How,Are,You", ",", "-") -> "Hello-World-How-Are-You"
```
The replace function should recive a string, a token to be replaced and a new token.
Refactor the code to not only replace one token but a string that you can recive by parameter.
```
replace("Hello,World,How,Are,You", ",World,", "-") -> "Hello-How-Are-You"
```

Now refactor the code and do not use any prebuild function.

### DPK12 Sort

Create a function that can sort a list of numbers.
The implementation should be a Bubble Sort(good to learn but terrible to use in production).
```
bubble_sort([5,4,3,2,1]) -> [1,2,3,4,5]
```
The sort function should recive a collection(list or array) and return a new sorted list.

### DPK13 FizzBuzz

Create a function that can return a list of numbers from 1 to 100.
For multiples of three return "Fizz" instead of the number and for the multiples of five return "Buzz".
For numbers which are multiples of both three and five return "FizzBuzz".
```
fizzbuzz() -> [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz",97,98,"Fizz","Buzz"]
```
Refactor the code to recive by parameter how many numbers you want to generate.
```
fizzbuzz(10) -> [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz"]
```

### DPK14 2D Walk

Create a function that can move a fighter in a 2D grid.
The grid should be a 2D array.
```
grid = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
```
The moves should be:
* up
* down
* left
* right

The function should recive the grid, the initial position of the fighter and a list of moves.
```
move(grid, [0,0], ["up", "left", "down", "right"])
```
Every time a player move to a new position, the old position should be empty.
```
move(grid, [0,0], ["up"]) -> 
      ["", "E.Honda", "Blanka", "Guile", "Balrog", "Vega", 
      "Ryu", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
```
What the function needs to return is a list with the name of all players was beaten, therefore removed from the grid.

```
move(grid, [0,0], ["up", "left", "down", "right"]) -> ["ken", "M.Bison", "Vega"] 
```

### DPK15 OOP with Classes

Create a class that can represent a person.
The person should have a name, age and a list of friends.
```
person = new Person("John", 30)
person.addFriend("Paul")
person.addFriend("George")
person.addFriend("Ringo")
```
The person should have a method that can return the name of the person and the list of friends.
```
person.getFriends() -> ["Paul", "George", "Ringo"]
```
The person should have a method that can return the age.
```
person.getAge() -> 30
```
The person should have a method that can return the name of the person.
```
person.getName() -> "John"
```

Refactoring time:

1. Now could you refactor the code and move the list of friends to a separate class?
2. Refactor the code so you dont allow the same friend to be added twice.
3. Refactor the code so you can remove a friend from the list.

More Refactoring: 

1. In one of your classes, could you create a method that tell who is the person with more friends?
2. In one of your classes, could you create a method that tell who is the person with less friends?
3. In one of your classes, could you create a method that tell who is the person with the oldest friend?

### DPK16 Mosquito Game

Create the following classes:
* Exterminator
* Mosquito
* Game

```
The game should start with 10 mosquitos, 1 exterminator.
The game should have a internal matrix of 100x100.
Every 1s the mosquito should move to a random position.
Every 1s the exterminator should move to a spesific position.
If the mosquito and the exterminator are in the same position, the mosquito should die.
If the mosquito moves 5 times without being killed, it should reproduce if there is a mosquito nearby.
The game should have a method that can return the number of mosquitos killed.
The game should have a method that can return the number of mosquitos alive.
The mosquito can walk in any direction (up, down, left, right, diagonals).
The exterminator can walk in one direction, it should swap the metrixs.
The exterminator can walk from the bottown left corner to the top right corner them from the botton to the top them return on the same route.
```

The game does not needa UI, you can be print the matrix in the console.