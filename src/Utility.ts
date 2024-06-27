const SanitizationDictionary: string = "abcdefghijklmnopqrstuvwxyz1234567890";

export function SanitizeString(subject: string): string
{
    let SanitizedString: string = '';
    for(let i = 0; i < subject.length; i++)
    {   
        if(!SanitizationDictionary.includes(subject[i].toLowerCase()))
        {
            SanitizedString += `%${subject.charCodeAt(i).toString(16)}`;
        } 
        else
        {
            SanitizedString += subject[i];
        }
    }

    return SanitizedString;
}

export function IsEmail(email: string): boolean
{
    return /.+@.+\..+/.test(email);
}

export function IsNameGood(name: string): boolean
{
    return /*!*/(name.includes(' '));
}

export function IsPasswordSecure(password: string): boolean
{
    // Минимум 8 символов
    if(password.length < 8)
    {
        return false;
    }

    // Только латиница и цифры
    for(let i = 0; i < password.length; i++)
    {
        if(!SanitizationDictionary.includes(password[i].toLowerCase()))
        {
            return false;
        }
    }

    // Как минимум 1 большая буква
    let hasUppercase: boolean = false;
    for(let i = 0; i < password.length; i++)
    {
        if(password[i].toUpperCase() === password[i] /*&& !(`1234567890`.includes(password[i])) */)
        {
            hasUppercase = true;
            break;
        }
    }

    if(!hasUppercase)
    {
        return false;
    }

    // Как минимум одна цифра
    let hasNumbers: boolean = false;
    for(let i = 0; i < password.length; i++)
    {
        if(`0123456789`.includes(password[i]))
        {
            hasNumbers = true;
            break;
        }
    }

    if(!hasNumbers)
    {
        return false;
    }

    return true;
}