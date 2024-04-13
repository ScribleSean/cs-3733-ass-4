type Bumblor = string;

export function bumblor2arabic(Bumblor: string): number {
    let numberResult: number = 0; // Variable for holding the returned arabic value
    let isMalformedNumber: boolean = false; // Boolean for holding if the inputted Bumblor is malformed or not
                                            // To be used to try and catch error later

    if (Bumblor === "") { // If the inputted string is empty
        isMalformedNumber = true; // Throws a malformed number err

    }

    const pattern1: RegExp = /M{5,}/gm; // If there are more than 4 of any M correct Bumblor character in a row
    const pattern2: RegExp = /D{2,}/gm; // If there is more than 1 of any D correct Bumblor character in a row
    const pattern3: RegExp = /C{5,}/gm; // If there are more than 4 of any C correct Bumblor character in a row
    const pattern4: RegExp = /L{2,}/gm; // If there is more than 1 of any L correct Bumblor character in a row
    const pattern5: RegExp = /X{5,}/gm; // If there are more than 4 of any X correct Bumblor character in a row
    const pattern6: RegExp = /V{2,}/gm; // If there is more than 1 of any V correct Bumblor character in a row
    const pattern7: RegExp = /I{5,}/gm; // If there are more than 4 of any I correct Bumblor character in a row

    // Combined regex, so it just marks true if even one of the regex flags go off
    const combinedRegex = new RegExp(`(${pattern1.source}|${pattern2.source}|${pattern3.source}
|${pattern4.source}|${pattern5.source}|${pattern6.source}|${pattern7.source})`, 'g');


    if (combinedRegex.test(Bumblor)) { // If the inputted Bumblor value fails any of the regex tests
        isMalformedNumber = true; // Marks it as a malformed number to throw an error
    } else if (Bumblor.indexOf("-", 1) > 0) { // If there's a negative sign anywhere outside the first character
        isMalformedNumber = true;
    } else if (Bumblor.indexOf("O", 1) > 0) { // If there's an O anywhere outside the first character
        if ((Bumblor.indexOf("-") == 0) && (Bumblor.indexOf("O") == 1)) { // If there's a negative symbol at the first position and the second character is an O
            // Does nothing, redundant but doesn't throw an error like below
        } else { // If there isn't a negative sign in front of a single O
            isMalformedNumber = true;
        }
    }


    // Booleans for holding if each of the Bumbler characters has been found yet for ensuring that they're in greatest magnitude order
    let isD: boolean = false;
    let isC: boolean = false;
    let isL: boolean = false;
    let isX: boolean = false;
    let isV: boolean = false;
    let isI: boolean = false;
    let isO: boolean = false;
    // We don't need M because they will always be first and don't need to be checked against

    for (let i: number = 0; i < Bumblor.length; i++) { // Loops through the entire length of the inputted string
        const char: string = Bumblor[i]; // Gets the character at the current index

        if (char == "M") { // If the current character in the loop is M
            numberResult += 1000; // Adds the appropriate value for M to the final returned

            // This will get redundant for each letter, but a function wouldn't make sense since the list
            // gets smaller with each letter unfortunately
            if (isD) { // If a D character has been found before this M
                isMalformedNumber = true; // Sets the number to malformed so an error can be thrown
            } else if (isC) { // If a C character has been found before this
                isMalformedNumber = true;
            } else if (isL) { // If an L character has been found before this
                isMalformedNumber = true;
            } else if (isX) { // If an X character has been found before this
                isMalformedNumber = true;
            } else if (isV) { // If a V character has been found before this
                isMalformedNumber = true;
            } else if (isI) { // If an I character has been found before this
                isMalformedNumber = true;
            } else if (isO) { // If an O character has been found before this
                isMalformedNumber = true;
            }
        } else if (char == "D") {
            numberResult += 500;
            isD = true; // Marks that we've found a D in the inputted string

            if (isC) { // If a C character has been found before this
                isMalformedNumber = true;
            } else if (isL) { // If an L character has been found before this
                isMalformedNumber = true;
            } else if (isX) { // If an X character has been found before this
                isMalformedNumber = true;
            } else if (isV) { // If a V character has been found before this
                isMalformedNumber = true;
            } else if (isI) { // If an I character has been found before this
                isMalformedNumber = true;
            } else if (isO) { // If an O character has been found before this
                isMalformedNumber = true;
            }
        } else if (char == "C") {
            numberResult += 100;
            isC = true;

            if (isL) { // If an L character has been found before this
                isMalformedNumber = true;
            } else if (isX) { // If an X character has been found before this
                isMalformedNumber = true;
            } else if (isV) { // If a V character has been found before this
                isMalformedNumber = true;
            } else if (isI) { // If an I character has been found before this
                isMalformedNumber = true;
            } else if (isO) { // If an O character has been found before this
                isMalformedNumber = true;
            }
        } else if (char == "L") {
            numberResult += 50;
            isL = true;

            if (isX) { // If an X character has been found before this
                isMalformedNumber = true;
            } else if (isV) { // If a V character has been found before this
                isMalformedNumber = true;
            } else if (isI) { // If an I character has been found before this
                isMalformedNumber = true;
            } else if (isO) { // If an O character has been found before this
                isMalformedNumber = true;
            }
        } else if (char == "X") {
            numberResult += 10;
            isX = true;

            if (isV) { // If a V character has been found before this
                isMalformedNumber = true;
            } else if (isI) { // If an I character has been found before this
                isMalformedNumber = true;
            } else if (isO) { // If an O character has been found before this
                isMalformedNumber = true;
            }
        } else if (char == "V") {
            numberResult += 5;
            isV = true;

            if (isI) { // If an I character has been found before this
                isMalformedNumber = true;
            } else if (isO) { // If an O character has been found before this
                isMalformedNumber = true;
            }
        } else if (char == "I") {
            numberResult += 1;
            isI = true;

            if (isO) { // If an O character has been found before this
                isMalformedNumber = true;
            }
        } else if (char == "O") {
            numberResult += 0;

            if (isO) { // If an O character has been found before this
                isMalformedNumber = true;
            }
            isO = true; // Has to go at the end or the previous if statement goes off
        } else if (char == "-") {
            numberResult += 0; // This is redundant, but keeps the loop from catching '-' signs and marking them as malformed
        } else { // If it isn't any of the Bumblor alphabet, it isn't a correct input and should throw an error
            isMalformedNumber = true;
        }
        //console.log(char);
    }

    if (Bumblor.indexOf("-") == 0) { // If the first character of the inputted Bumblor value is negative, sets the result to be negative
        numberResult *= -1; // Sets the result to negative if the first inputted value was a negative sign
    }

    if (isMalformedNumber) { // If there is a real error in the inputted Bumblor value
        numberResult = -1; // Sets the returned value to -1 (which admittedly doesn't do anything, but feels right)
        throw new Error("Malformed Number"); // Throws the error
    }

    // Admittedly within the constraints given, inputting a valid number out of bounds is impossible but I wanted to be thorough
    let isOutOfRange: boolean = false; // Sets an out of range boolean to see if the final result is out of range or not
    if (numberResult > 4999) { // If the final result is greater than 4999
        isOutOfRange = true; // Marks the value to throw an error
    } else if (numberResult < -4999) { // If the final result is less than -4999
        isOutOfRange = true; // Marks the value to throw an error
    }

    if (isOutOfRange) { // If the final value of the inputted Bumblor value has all valid characters but is out of range
        numberResult = -1; // Sets the returned value to -1 (which admittedly doesn't do anything, but feels right)
        throw new Error("Out of Range"); // Throws the error
    }

    return numberResult; // Returns the final Bumblor value (if valid)
}


export function arabic2bumblor(arabic: number): string {
    let bumblorResult: Bumblor = ""; // Defaults the returned string to be empty

    arabic = ~~arabic; // Gets rid of any decimal given in the inputted number, if any
    const ogArabic: number = arabic;

    if (ogArabic < 0) { // If the inputted value is negative
        bumblorResult = "-"; // Puts a negative sign in front
        arabic *= -1; // Sets the value of the inputted number to positive so below math will work
    }

    let addM: number = (arabic / 1000); // Divides the given number by 1000 to see how many Ms there would be, if any
    addM = ~~addM; // Gets rid of any decimal given in the inputted number, if any
    for (addM; addM > 0; addM--) { // For loop that goes through and adds each M, if any
        bumblorResult = bumblorResult.concat("M");
        arabic -= 1000; // Subtracts 1000 from the inputted arabic value after every iteration
    }

    let addD: number = (arabic / 500);
    addD = ~~addD; // Gets rid of any decimal given in the inputted number, if any
    for (addD; addD > 0; addD--) { // For loop that goes through and adds a D, if any
        bumblorResult = bumblorResult.concat("D");
        arabic -= 500; // Subtracts 500 from the inputted arabic value after every iteration
    }

    let addC: number = (arabic / 100);
    addC = ~~addC; // Gets rid of any decimal given in the inputted number, if any
    for (addC; addC > 0; addC--) { // For loop that goes through and adds a C, if any
        bumblorResult = bumblorResult.concat("C");
        arabic -= 100; // Subtracts 100 from the inputted arabic value after every iteration
    }

    let addL: number = (arabic / 50);
    addL = ~~addL; // Gets rid of any decimal given in the inputted number, if any
    for (addL; addL > 0; addL--) { // For loop that goes through and adds an L, if any
        bumblorResult = bumblorResult.concat("L");
        arabic -= 50; // Subtracts 50 from the inputted arabic value after every iteration
    }

    let addX: number = (arabic / 10);
    addX = ~~addX; // Gets rid of any decimal given in the inputted number, if any
    for (addX; addX > 0; addX--) { // For loop that goes through and adds an X, if any
        bumblorResult = bumblorResult.concat("X");
        arabic -= 10; // Subtracts 10 from the inputted arabic value after every iteration
    }

    let addV: number = (arabic / 5);
    addV = ~~addV; // Gets rid of any decimal given in the inputted number, if any
    for (addV; addV > 0; addV--) { // For loop that goes through and adds an V, if any
        bumblorResult = bumblorResult.concat("V");
        arabic -= 5; // Subtracts 5 from the inputted arabic value after every iteration
    }

    let addI: number = (arabic / 1);
    addI = ~~addI; // Gets rid of any decimal given in the inputted number, if any
    for (addI; addI > 0; addI--) { // For loop that goes through and adds an I, if any
        bumblorResult = bumblorResult.concat("I");
        arabic -= 1; // Subtracts 1 from the inputted arabic value after every iteration
    }

    if (ogArabic == 0) { // If the original inputted value was 0, returns O
        bumblorResult = "O";
    }


    let isOutOfRange: boolean = false; // Sets an out of range boolean to see if the final result is out of range or not
    if (ogArabic > 4999) { // If the original inputted result is greater than 4999
        isOutOfRange = true; // Marks the value to throw an error
    } else if (ogArabic < -4999) { // If the original inputted result is less than -4999
        isOutOfRange = true; // Marks the value to throw an error
    }
    if (isOutOfRange) { // If the inputted value is out of range for a valid Bumblor character
        bumblorResult = "-1"; // Sets the returned value to -1 (which admittedly doesn't do anything, but feels right)
        throw new Error("Out of Range"); // Throws the error
    }

    return bumblorResult;
}