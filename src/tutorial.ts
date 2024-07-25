// let name: string = "astro";
// name = name.toUpperCase();
// console.log(name);

// let num: number = 1.5435;
// num = parseFloat(num.toFixed(2));
// console.log(num);

// let isListening: boolean = false;
// isListening = true;
// console.log(isListening);

// let orderStatus: "processing" | "shipped" | "delivered" = "processing";
// orderStatus = "shipped";
// orderStatus = "delivered";

// let discount: number | string = 20;
// discount = "20%";

// let mixed: object[] = [
//   { id: 1, name: "astro" },
//   { id: 2, name: "king" },
// ];
// console.log(mixed);

// const users: string[] = ["astro", "payk", "kweng"];

// const checkName = (name: string): boolean => {
//   return users.includes(name);
// };

// const found = checkName("pay");
// console.log(found);

// const processInput = (val: string | number): string | number => {
//   if (typeof val === "string") {
//     return val.toUpperCase();
//   } else {
//     return val * 2;
//   }
// };

// const result = processInput("hello");
// console.log(result);

// const processData = (
//   input: string | number,
//   { reverse }: { reverse: boolean } = { reverse: false }
// ): string | number => {
//   if (typeof input === "number") {
//     return Math.pow(input, 2);
//   } else {
//     if (reverse) {
//       return [...input].reverse().join("").toUpperCase();
//     } else {
//       return input.toUpperCase();
//     }
//   }
// };

// const result1 = processData(3);
// console.log(result1);
// const result2 = processData("astro");
// console.log(result2);
// const result3 = processData("astro", { reverse: true });
// console.log(result3);

// const john: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: { id: number; name: string; isActive: boolean }): {
//   id: number;
//   name: string;
//   isActive: boolean;
// } {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }

// type Employee = { id: number; name: string; department: string };
// // we use the Employee type instead of creating a whole new annotation
// type Manager = { id: number; name: string; employees: Employee[] };
// type Staff = Employee | Manager;

// const printStaffDetails = (staff: Staff) => {
//   if ("employees" in staff) {
//     console.log(
//       `${staff.name} is a manager and he/she manages ${staff.employees.length} employee/employees.`
//     );
//   } else {
//     console.log(
//       `${staff.name} is an employee at the ${staff.department} department.`
//     );
//   }
// };

// const staff1: Manager = {
//   id: 1,
//   name: "astro",
//   employees: [{ id: 2, name: "ehe", department: "development" }],
// };

// const staff2: Employee = {
//   id: 2,
//   name: "ehe",
//   department: "development",
// };

// console.log(staff1);

// interface Computer {
//   readonly id: number; // cannot be changed once initialized
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(val: number): number;
// }

// interface Computer {
//   test: string;
// }

// type Computer = {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage: number;
//   upgradeRam: (val: number) => number;
// };

// const nitro5: Computer = {
//   id: 5,
//   brand: "acer",
//   ram: 16,
//   storage: 255,
//   upgradeRam(val) {
//     return (this.ram += val);
//   },
//   test: "hello",
// };

// console.log(nitro5.upgradeRam(16));
// console.log(nitro5);

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// const person: Person = {
//   name: "astro",
// };

// const dogOwner: DogOwner = {
//   name: "amor",
//   dogName: "tepu",
// };

// const manager: Manager = {
//   name: "fyke",
//   managePeople() {
//     console.log("done managing people");
//   },
//   delegateTasks() {
//     console.log("done delegating task");
//   },
// };

// const getEmployee = () => {
//   const randomNum = Math.random();

//   if (randomNum < 0.33) {
//     return person;
//   } else if (randomNum > 0.33 && randomNum < 0.66) {
//     return dogOwner;
//   } else {
//     return manager;
//   }
// };

// type Employee = Person | Manager | DogOwner;

// const employee: Employee = getEmployee();
// const employee2: Employee = getEmployee();
// const employee3: Employee = getEmployee();

// console.log(employee);
// console.log(employee2);
// console.log(employee3);

// ! Tuples

// let user: [string, number] = ["astro"];

// ! Enums
// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// console.log(UserRole);

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string];
// };

// function createUser(user: User):User {
//   return user;
// }

// const test = createUser({
//   id: 123,
//   name: "astro",
//   role: ,
//   contact: ["flezos@gmail.com", "0942342343"],
// });

// console.log(test);

// ! Type Assertion
// let someValue: any = "hello there";
// let length: number = (someValue as string).length;
// console.log(length);

// type Bird = {
//   name: string;
// };

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let birdObject = JSON.parse(birdString);

// let bird = birdObject as Bird;
// console.log(bird);

// const runSomeCode = () => {
//   const random = Math.random();

//   if (random < 0.5) {
//     // coming from the error class
//     throw new Error("This is coming from the error class");
//   } else {
//     throw "error...";
//   }
// };

// try {
//   runSomeCode();
// } catch (error) {
//   // error is of type unknown
//   if (error instanceof Error) {
//     // if this is true, typescript know for sure that we have access to the message
//     console.log(error.message);
//   } else {
//     console.log(error);
//   }
// }

// type ValueType = String | Number | Boolean;

// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

// const checkValue = (value: ValueType) => {
//   if (typeof value === "string") {
//     console.log(value.toLowerCase());
//     return;
//   } else if (typeof value === "number") {
//     console.log(value.toFixed(2));
//     return;
//   } else {
//     console.log(`boolean: ${value}`);
//     return;
//   }
// };

// checkValue(value);

// type Dog = { type: "dog"; name: string; bark: (sound: string) => void };
// type Cat = { type: "cat"; name: string; meow: (sound: string) => void };
// type Animal = Dog | Cat;

// const makeSound = (animal: Animal): void => {
//   if (animal.type === "dog") {
//     animal.bark("bark");
//   } else {
//     animal.meow("meow");
//   }
// };

// const pet: Animal = {
//   type: "cat",
//   name: "pishok",
//   meow: (sound) => console.log(`${sound} maderf***er`),
// };

// makeSound(pet);
// type Str = string | null | undefined;

// const printLength = (str: Str) => {
//   if (str) {
//     console.log(str.length);
//   } else {
//     console.log("No string privided.");
//   }
// };

// printLength("qwqw");
// const genericArrowFunction<T>(value: T) T => {
//     return value
// }
// ! Generic
// setting up generic functions

// function genericFunction<T>(value: T): T {
//   return value;
// }

// const genericString = genericFunction<string>("name");
// const genericNumber = genericFunction<number>(2);
// console.log(genericString);
// console.log(genericNumber);

// interface GenericInterface<T> {
//   value: T;
//   testFunc: () => T;
// }

// const genericSetup1: GenericInterface<string> = {
//   value: "test",
//   testFunc() {
//     return this.value;
//   },
// };

// const genericSetup2: GenericInterface<number> = {
//   value: 4,
//   testFunc() {
//     return this.value;
//   },
// };

// console.log(genericSetup1);
// console.log(genericSetup2);

// function createArray<T>(length: number, value: T): Array<T> {
//   return Array.from({ length }, () => value);
// }

// const createStringArray = createArray<string>(3, "hello");
// const createNumberArray = createArray<number>(4, 100);

// console.log(createStringArray);
// console.log(createNumberArray);

// function pair<T, U>(param1: T, param2: U): [T, U] {
//   return [param1, param2];
// }

// const firstPair = pair<string, number>("astro", 2);
// const secondPair = pair<number, string>(4, "flexer");

// console.log(firstPair);
// console.log(secondPair);
// ! fetching data
import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

// type Tour = {
//   id: string;
//   image: string;
//   info: string;
//   name: string;
//   price: string;
//   something: string;
// };

// create schema
const tourSchema = z.object({
  id: z.string(),
  image: z.string(),
  info: z.string(),
  name: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    // we need to do additional checks because fetch url doesn't treat status codes 400+ as error
    if (!response.ok) {
      // we want to check if the response is really ok. If it's not, then we throw a new error
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // here, we are going to access the response.json and invoke it, and since it is a asynchronous, we are going to use await in front of it
    const rawData: Tour[] = await response.json();

    const result = tourSchema.array().safeParse(rawData);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "Something went wrong...";
    console.log(errorMsg);

    // we still need to return something from the catch block in this case
    return [];
  }
}

const tours = await fetchData(url);

// tours.map((tour) => {
//   // here we are accesing a property that doesn't exist in the tour object, but since it is a property that exist on the type, and in this case, typescript doesn't notice it until the buildtime
//   // so how do we check that all the properties that we are accessing in the tour object really exist even if we have that property on the type?
//   console.log(tour.something);
// });
