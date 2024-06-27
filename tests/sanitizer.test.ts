import {SanitizeString} from "../src/Utility"

test('String sanitization', ()=>{
    const UnsanitizedStrings: string[] =
    [
        "Abcdefg123",
        "78214asDHOouajsd",
        "ABCщ123",
        "MyPassword/SELECT * FROM Users"
    ]
    
    let CorrectStrings: string[] = [
        "Abcdefg123",
        "78214asDHOouajsd",
        "ABC%449123",
        "MyPassword%2fSELECT%20%2a%20FROM%20Users"
    ];

    let Correct: boolean = true;
    UnsanitizedStrings.forEach((v, i)=>{
        if(SanitizeString(v) !== CorrectStrings[i])
        {
            Correct = false;   
        }
    });

    expect(Correct).toEqual(true);
});