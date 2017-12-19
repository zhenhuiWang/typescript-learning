// 布尔值类型
let isDone: Boolean = false;

// 数字类型
let decimal: number = 6;

// 字符串类型
let color: string = 'blue';
let fullName: string = `Bob Bobbington`;

// 数组类型
let list: number[] = [1,2,3];
let list2: any[] = [1, false, 'a'];

// 元祖类型
let x: [string, number];

// 元祖类型赋值
x = ['hello', 10]; // OK
// x = [10, 'hello']; Error
console.log(x[0].substr(1));
x[2] = 'world';
console.log(x);

// 枚举类型
enum Color {Red = 1, Green = 3, Blue}
let c : Color = Color.Green;
let colorName: string = Color[1];
console.log(c, colorName);

// Any 类型
let notSure: any = 4;
notSure = 'maybe a string'; // 可以给any类型任意的值
notSure.ifItExists(); // 可以调用任意的方法

// void 类型
let unusable: void = undefined; // 只能为unusable赋值 undefined null

// never 类型
function infiniteLoop(): never {
    while(true){

    }
} // 返回never的函数必须存在无法达到的终点

// 类型断言
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
console.log(strLength);
