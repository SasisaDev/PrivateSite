import {IsNameGood} from "../src/Utility"

test('Password check', ()=>{
    const Names: string[] =
    [
        "MyName",
        "i dont know",
        "???",
        "Am",
        "Text"
    ]
    
    let CorrectName: boolean[] = [
        true,
        false,
        true,
        true,
        true
    ];

    let Correct: boolean = true;
    Names.forEach((v, i)=>{
        if(IsNameGood(v) !== CorrectName[i])
        {
            Correct = false;
        }
    });

    expect(Correct).toEqual(true);
});