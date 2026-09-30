import {sum} from "../sum"

// test = function that having two argguments 1) description 2) callback function
test("Sum Function should calculate the sum of number", () =>{

    const result = sum(3,4);
// Assesration 
expect(result).toBe(7);

});