import {IsEmail} from "../src/Utility"

test('Email check', ()=>{
    const Emails: string[] =
    [
        "emailabcmysite.com",
        "email123@ooawd.com",
        "email@mysite.",
        "MyPassword/SELECT * FROM Users",
        "email@mysite.ru"
    ]
    
    let CorrectEmails: boolean[] = [
        false,
        true,
        false,
        false,
        true
    ];

    let Correct: boolean = true;
    Emails.forEach((v, i)=>{
        if(IsEmail(v) !== CorrectEmails[i])
        {
            Correct = false;   
        }
    });

    expect(Correct).toEqual(true);
});