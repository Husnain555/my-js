// its run on these steps
//
//
// Code =>   parsing =>   Compilation =>  Execution
//
//
// In parsing =
//     code converted into AST (Abstract Syntax Tree) it convert code into byte code
//
//
// Compilation =
//
//     in compilation js use "JIT" Just in time Compilation means on run time after AST code goes to interpret and then Compiler
//
// Note:
// in js Compiler means not like java Compiler its means "To optimise the Code" in java code first compiled and then run but not this theory works in js
//
// Execution:
// after compilation code go to execution in execution we get to mode phase like
//
// => memory Heap
// => Call Stack
// Memory Heap:
// in this phase we declare memory to variables and functions etc
//
// if er have memory heap we also have
//
// => Garbage Collector and Other optimization tools which google v8 engine provides us
// like Inline optimization
// garbage collector collect unused code to free memory for optimization and return when we need the code
//
// and now call stack
// in call stack code comes its execute and we get a answer
// in call stack when a new line in into create a execution contest and then we get our answer
// call stack works on simple formula LIFO "last in first out"
//
// AND there is also a little feature with a lots of work his name is "event loop "which regularly check the call back queue.
// we also call its task queue and there is also a Microtask queue which handle web Apis