console.log('ENV', process.env.Y) //works

export const env1 = JSON.parse(JSON.stringify(process.env));
export const env2 = process.env;
export const env3 = {...process.env};

console.log('ENV', env1.Y) // does not work
console.log('ENV', env2.Y) // does not work
console.log('ENV', env3.Y) // does not work