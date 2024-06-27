import {IsPasswordSecure} from "../src/Utility"

test('Password check', ()=>{
    const Password: string[] =
    [
        "MyPassword",
        "whatever123456",
        "Correct0ne",
        "Пароль123456",
        "email@test.com"
    ]
    
    let CorrectPassword: boolean[] = [
        false,
        false,
        true,
        false,
        false
    ];

    let Correct: boolean = true;
    Password.forEach((v, i)=>{
        if(IsPasswordSecure(v) !== CorrectPassword[i])
        {
            Correct = false;
        }
    });

    expect(Correct).toEqual(true);
});