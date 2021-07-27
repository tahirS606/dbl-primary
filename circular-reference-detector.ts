// export class CircularReferenceDetector {

//     static detectCircularReferences(toBeStringifiedValue: any, serializationKeyStack: string[] = []) {
//         Object.keys(toBeStringifiedValue).forEach(key => {
//             var value = toBeStringifiedValue[key];

//             var serializationKeyStackWithNewKey = serializationKeyStack.slice();
//             serializationKeyStackWithNewKey.push(key);
//             try {
//                 JSON.stringify(value);
//                 Logger.debug(`path "${Util.joinStrings(serializationKeyStack)}" is ok`);
//             } catch (error) {
//                 Logger.debug(`path "${Util.joinStrings(serializationKeyStack)}" JSON.stringify results in error: ${error}`);

//                 var isCircularValue:boolean;
//                 var circularExcludingStringifyResult:string = "";
//                 try {
//                     circularExcludingStringifyResult = JSON.stringify(value, CircularReferenceDetector.replaceRootStringifyReplacer(value), 2);
//                     isCircularValue = true;
//                 } catch (error) {
//                     Logger.debug(`path "${Util.joinStrings(serializationKeyStack)}" is not the circular source`);
//                     CircularReferenceDetector.detectCircularReferences(value, serializationKeyStackWithNewKey);
//                     isCircularValue = false;
//                 }
//                 if (isCircularValue) {
//                     throw new Error(`Circular reference detected:\nCircularly referenced value is value under path "${Util.joinStrings(serializationKeyStackWithNewKey)}" of the given root object\n`+
//                         `Calling stringify on this value but replacing itself with [Circular object --- fix me] ( <-- search for this string) results in:\n${circularExcludingStringifyResult}\n`);
//                 }
//             }
//         });
//     }

//     private static replaceRootStringifyReplacer(toBeStringifiedValue: any): any {
//         var serializedObjectCounter = 0;

//         return function (key: any, value: any) {
//             if (serializedObjectCounter !== 0 && typeof(toBeStringifiedValue) === 'object' && toBeStringifiedValue === value) {
//                 Logger.error(`object serialization with key ${key} has circular reference to being stringified object`);
//                 return '[Circular object --- fix me]';
//             }

//             serializedObjectCounter++;

//             return value;
//         }
//     }
// }

// export class Util {

//     static joinStrings(arr: string[], separator: string = ":") {
//         if (arr.length === 0) return "";
//         return arr.reduce((v1, v2) => `${v1}${separator}${v2}`);
//     }

// }