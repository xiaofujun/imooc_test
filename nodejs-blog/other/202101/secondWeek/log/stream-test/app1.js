// 输入即输出
process.stdin.pipe(process.stdout);


// console.log(process.stdout);   // WriteStream{}  程序读取，写入控制台
// console.log(process.stdin);    // ReadStream    用户输入，程序读取