import React from 'react';
import validateInput from './inputValidation';

/*
    Test case for the inputValidation component in .../small-talk/components
    Test 1: Checks if non-string input returns false
    Test 2: Checks if input longer than max (31 char) returns false
    Test 3: Checks if input with forbidden characters returns false
    Test 4: Checks if valid input returns true
*/

describe("inputValidation Component", () =>
{
    // Test 1: Checks if non-string input returns false
    it("Checks if non-string input returns false", async () =>
    {
        expect(await validateInput(123)).toEqual(false);
    });

    // Test 2: Checks if input longer than max (31 char) returns false
    it("Checks if input longer than max (31 char) returns false", async () =>
    {
        expect(await validateInput("11111111111111111111111111111111111111111111111111111111111111")).toEqual(false);
    });

    // Test 3: Checks if input with forbidden characters returns false
    it("Checks if input with forbidden characters returns false", async () =>
    {
        expect(await validateInput("w<h>a/t")).toEqual(false);
    });

    // Test 4: Checks if valid input returns true
    it("Checks if valid input returns true", async () =>
    {
        expect(await validateInput("hellooooo")).toEqual(true);
    });
});