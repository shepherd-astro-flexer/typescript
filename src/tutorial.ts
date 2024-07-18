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

const runSomeCode = () => {
  const random = Math.random();

  if (random < 0.5) {
    // coming from the error class
    throw new Error("This is coming from the error class");
  } else {
    throw "error...";
  }
};

try {
  runSomeCode();
} catch (error) {
  // error is of type unknown
  if (error instanceof Error) {
    // if this is true, typescript know for sure that we have access to the message
    console.log(error.message);
  } else {
    console.log(error);
  }
}
