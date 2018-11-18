/** 
 * Buffer is a NodeJS data type that is in 'addition' to the 5 primitives present in ECMAscript 
 * Boolean 
 * String 
 * Number 
 * undefined 
 * null 
 * They are extremely efficient
 * Used when reading from a file system or receiving packets over a network 
 */ 

const bufFromArray = Buffer.from([0x62, 0x75, 0x66, 0x65, 0x72])
console.log(bufFromArray.toString())

const arrayBuffer = new Uint16Array(2)

arrayBuffer[0] = 5
arrayBuffer[1] = 7000

/** Shares memory with `arrayBuffer` */ 
const bufFromArrayBuffer = Buffer.from(arrayBuffer.buffer)

// Prints: <Buffer 05 00 58 1b>
console.log(bufFromArrayBuffer)

console.log(bufFromArrayBuffer.toString())

console.log(bufFromArrayBuffer.toString('ascii'))

const bufFromHex = Buffer.from('c2bf43c3b36d6f20657374c3a13f', 'hex')

console.log(bufFromHex.toString())

