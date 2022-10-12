let Check = '';
let but_position = "absolute";

// classList works like a queue so you have to remove the first element
// applied before the second element can have effect

function Clear_Screen(Show_Hide) {

    document.getElementById('ABut').setAttribute("class", Show_Hide);
    document.getElementById('CBut').setAttribute("class", Show_Hide);
    document.getElementById('DBut').setAttribute("class", Show_Hide);
    document.getElementById('LBut').setAttribute("class", Show_Hide);
    document.getElementById('SBut').setAttribute("class", Show_Hide);
    document.getElementById('TeBut').setAttribute("class", Show_Hide);
    document.getElementById('TiBut').setAttribute("class", Show_Hide);
    document.getElementById('VBut').setAttribute("class", Show_Hide);
    document.getElementById('WBut').setAttribute("class", Show_Hide);
}

function Title_Adjust(Show_Hide) {
    
    document.getElementById('Title').setAttribute("class", Show_Hide);
}

function Secondary_Screen(Show_Hide) {

    let U_Show_Hide = '';
    let I_L_Show_Hide = '';
    let I_R_Show_Hide = '';

    if (Show_Hide == 'sblock') {
        U_Show_Hide = 'NBut';
        I_L_Show_Hide = 'inputLNum';
        I_R_Show_Hide = 'inputRNum';
    } else {
        U_Show_Hide = Show_Hide;
        I_L_Show_Hide = Show_Hide;
        I_R_Show_Hide = Show_Hide;
    }

    document.getElementById('inputLNum').setAttribute("class", I_L_Show_Hide);
    document.getElementById('SecLUnitBut').setAttribute("class", U_Show_Hide);
    document.getElementById('Sec=But').setAttribute("class", U_Show_Hide);
    document.getElementById('inputRNum').setAttribute("class", I_R_Show_Hide);
    document.getElementById('SecRUnitBut').setAttribute("class", U_Show_Hide);

    const List_of_Buttons_Secondary_Screen = ['SecBBut', 'SecC1', 'SecC2', '7But', '8But', '9But', 'DelBut', '4But', '5But', '6But', 'ACBut', '1But', '2But', '3But', 'PMBut', 'SWBut', 'DPBut', '0But'];

    for (let i = 0; i < List_of_Buttons_Secondary_Screen.length; i++){
        document.getElementById(List_of_Buttons_Secondary_Screen[i]).setAttribute("class", Show_Hide);
    }

}

function Button_Attribute_Editing() {

    List_of_Buttons = ['7But', '8But', '9But', 'DelBut', '4But', '5But', '6But', 'ACBut', '1But', '2But', '3But', 'PMBut', 'SWBut', 'DPBut', '0But'];
    List_of_U_Buttons = ['SecLUnitBut', 'Sec=But', 'SecRUnitBut'];

    for (let i = 0; i < List_of_U_Buttons.length; i++) {
        document.getElementById(List_of_U_Buttons[i]).style.position = but_position;
        document.getElementById(List_of_U_Buttons[i]).style.top = '200px';
    }

    for (let i = 0; i < List_of_Buttons.length; i++) {
        document.getElementById(List_of_Buttons[i]).style.position = but_position;
        document.getElementById(List_of_Buttons[i]).style.width = '107px';
        document.getElementById(List_of_Buttons[i]).style.height = '93px';
    }

    for (let i = 0; i < List_of_Buttons.length; i += 4) {
        document.getElementById(List_of_Buttons[(i)]).style.left = '625px';
    }

    for (let i = 1; i < List_of_Buttons.length; i += 4) {
        document.getElementById(List_of_Buttons[(i)]).style.left = '750px';
    }

    for (let i = 2; i < List_of_Buttons.length; i += 4) {
        document.getElementById(List_of_Buttons[(i)]).style.left = '875px';
    }

    for (let i = 3; i < List_of_Buttons.length; i += 4) {
        document.getElementById(List_of_Buttons[(i)]).style.left = '1000px';
    }

    for (let i = 0; i < 4; i++) {
        document.getElementById(List_of_Buttons[(i)]).style.top = '475px';
    }

    for (let i = 4; i < 8; i++) {
        document.getElementById(List_of_Buttons[(i)]).style.top = '593px';
    }

    for (let i = 8; i < 12; i++) {
        document.getElementById(List_of_Buttons[(i)]).style.top = '718px';
    }

    for (let i = 12; i < 15; i++) {
        document.getElementById(List_of_Buttons[(i)]).style.top = '843px';
    }

    document.getElementById('SecBBut').style.width = '107px';
    document.getElementById('SecBBut').style.height = '93px';
    document.getElementById('SecBBut').style.fontSize = '75px';

    document.getElementById('inputLNum').style.top = '202px';
    document.getElementById('inputLNum').style.left = '126px';

    document.getElementById('SecLUnitBut').style.left = '556px';
    document.getElementById('SecLUnitBut').style.cursor = 'default';
    
    document.getElementById('Sec=But').style.left = '820px';
    document.getElementById('Sec=But').style.cursor = 'default';

    document.getElementById('inputRNum').style.top = '202px';
    document.getElementById('inputRNum').style.left = '936px';

    document.getElementById('SecRUnitBut').style.left = '1366px';
    document.getElementById('SecRUnitBut').style.cursor = 'default';
    
    document.getElementById('0But').style.width = '232px';
}

function A_Check() {
    Check = 'Area';
}

function C_Check() {
    Check = 'Currency';
}

function D_Check() {
    Check = 'Data';
}

function L_Check() {
    Check = 'Length';
}

function S_Check() {
    Check = 'Speed';
}

function Te_Check() {
    Check = 'Temperature';
}

function Ti_Check() {
    Check = 'Time';
}

function V_Check() {
    Check = 'Volume';
}

function W_Check() {
    Check = 'Weight';
}

function ON_Change(C_Val) {
    switch (Check) {
        case 'Area':
            Area_Converter(C_Val);
            break;
        case 'Currency':
            Currency_Converter(C_Val);
            break;
        case 'Data':
            Data_Converter(C_Val);
            break;
        case 'Length':
            Length_Converter(C_Val);
            break;
        case 'Speed':
            Speed_Converter(C_Val)
            break;
        case 'Temperature':
            Temperature_Converter(C_Val);
            break;
        case 'Time':
            Time_Converter(C_Val);
            break;
        case 'Volume':
            Volume_Converter(C_Val)
            break;
        case 'Weight':
            Weight_Converter(C_Val);
            break;
    }
}

function Change_Buttons_Unit() {

    let Check_2 = '';

    switch (Check) {
        case 'Area':
            Check_2 = 'UnitA';
            break;
        case 'Currency':
            Check_2 = 'UnitC';
            break;
        case 'Data':
            Check_2 = 'UnitD';
            break;
        case 'Length':
            Check_2 = 'UnitL';
            break;
        case 'Speed':
            Check_2 = 'UnitS';
            break;
        case 'Temperature':
            Check_2 = 'UnitTe';
            break;
        case 'Time':
            Check_2 = 'UnitTi';
            break;
        case 'Volume':
            Check_2 = 'UnitV';
            break;
        case 'Weight':
            Check_2 = 'UnitW';
            break;
    }
    
    var Get_Form = document.getElementById(Check_2);
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;

    switch (selectedValue) {
        case 'Are':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Acre':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Hectare':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Square Centimetre':
            document.getElementById('SecLUnitBut').innerHTML = 'cm²';
            document.getElementById('inputLNum').placeholder = 'Sq. Cm';
            break;
        case 'Square Decimetre':
            document.getElementById('SecLUnitBut').innerHTML = 'dm²';
            document.getElementById('inputLNum').placeholder = 'Sq. Dm';
            break;
        case 'Square Feet':
            document.getElementById('SecLUnitBut').innerHTML = 'Ft²';
            document.getElementById('inputLNum').placeholder = 'Sq. Ft';
            break;
        case 'Square Inch':
            document.getElementById('SecLUnitBut').innerHTML = 'In²';
            document.getElementById('inputLNum').placeholder = 'Sq. In';
            break;
        case 'Square Kilometre':
            document.getElementById('SecLUnitBut').innerHTML = 'km²';
            document.getElementById('inputLNum').placeholder = 'Sq. Km';
            break;
        case 'Square Metre':
            document.getElementById('SecLUnitBut').innerHTML = 'm²';
            document.getElementById('inputLNum').placeholder = 'Sq. M';
            break;
        case 'Square Mile':
            document.getElementById('SecLUnitBut').innerHTML = 'mi²';
            document.getElementById('inputLNum').placeholder = 'Sq. Mi';
            break;
        case 'Square Millimetre':
            document.getElementById('SecLUnitBut').innerHTML = 'mm²';
            document.getElementById('inputLNum').placeholder = 'Sq. Mm';
            break;
        case 'Square Yard':
            document.getElementById('SecLUnitBut').innerHTML = 'Yd²';
            document.getElementById('inputLNum').placeholder = 'Sq. Yd';
            break;        


        case 'BTC':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Bitcoin';
            break;
        case 'KWD':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Kuwaiti Dinar';
            break;
        case 'AED':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Emirati Dirham';
            break;
        case 'AUD':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Austrailian Dollar';
            break;
        case 'CAD':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Canadian Dollar';
            break;
        case 'HKD':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Hong Kong Dollar';
            break;
        case 'USD':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'United States Dollar';
            break;
        case 'EUR':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Euro';
            break;
        case 'CHF':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Swiss Franc';
            break;
        case 'COP':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Colombian Peso';
            break;
        case 'GBP':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Pound Sterling';
            break;
        case 'RUB':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Russian Rouble';
            break;
        case 'INR':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Indian Rupee';
            break;
        case 'PKR':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Pakistani Rupee';
            break;
        case 'LKR':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Sri Lankan Rupee';
            break;
        case 'JPY':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Japanese Yen';
            break;
        case 'CNY':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = 'Chinese Yuan';
            break;


        case 'Bit':
            document.getElementById('SecLUnitBut').innerHTML = 'b';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Byte':
            document.getElementById('SecLUnitBut').innerHTML = 'B';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Kilobyte':
            document.getElementById('SecLUnitBut').innerHTML = 'kB';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Megabyte':
            document.getElementById('SecLUnitBut').innerHTML = 'MB';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Gigabyte':
            document.getElementById('SecLUnitBut').innerHTML = 'GB';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Terabyte':
            document.getElementById('SecLUnitBut').innerHTML = 'TB';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Petabyte':
            document.getElementById('SecLUnitBut').innerHTML = 'PB';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Exabyte':
            document.getElementById('SecLUnitBut').innerHTML = 'EB';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;


        case 'Centimetre':
            document.getElementById('SecLUnitBut').innerHTML = 'cm';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Chain':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Decimetre':
            document.getElementById('SecLUnitBut').innerHTML = 'dm';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Feet':
            document.getElementById('SecLUnitBut').innerHTML = 'Ft';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Furlong':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Inch':
            document.getElementById('SecLUnitBut').innerHTML = 'In';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Kilometre':
            document.getElementById('SecLUnitBut').innerHTML = 'km';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'League':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Metre':
            document.getElementById('SecLUnitBut').innerHTML = 'm';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Mile':
            document.getElementById('SecLUnitBut').innerHTML = 'Mi';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Millimetre':
            document.getElementById('SecLUnitBut').innerHTML = 'mm';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Nautical Mile':
            document.getElementById('SecLUnitBut').innerHTML = 'NMi';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Rod':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Yard':
            document.getElementById('SecLUnitBut').innerHTML = 'Yd';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;


        case 'Feet/Minute':
            document.getElementById('SecLUnitBut').innerHTML = 'Ft/Min';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Feet/Second':
            document.getElementById('SecLUnitBut').innerHTML = 'Ft/Sec';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Kilometre/Hour':
            document.getElementById('SecLUnitBut').innerHTML = 'KM/H';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Knot':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Mach':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Mile/Hour':
            document.getElementById('SecLUnitBut').innerHTML = 'MPH';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Metre/Second':
            document.getElementById('SecLUnitBut').innerHTML = 'm/s';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Speed of Light':
            document.getElementById('SecLUnitBut').innerHTML = 'c';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        

        case 'Celsius':
            document.getElementById('SecLUnitBut').innerHTML = '°C';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Fahrenheit':
            document.getElementById('SecLUnitBut').innerHTML = '°F';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Kelvin':
            document.getElementById('SecLUnitBut').innerHTML = 'K';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Rankine':
            document.getElementById('SecLUnitBut').innerHTML = '°R';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        

        case 'Century':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Day':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Decade':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Hour':
            document.getElementById('SecLUnitBut').innerHTML = 'Hrs';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Millennium':
            document.getElementById('SecLUnitBut').innerHTML = 'M';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Millisecond':
            document.getElementById('SecLUnitBut').innerHTML = 'MS';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Minute':
            document.getElementById('SecLUnitBut').innerHTML = 'Mins';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Month':
            document.getElementById('SecLUnitBut').innerHTML = selectedValue;
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Second':
            document.getElementById('SecLUnitBut').innerHTML = 'S';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Week':
            document.getElementById('SecLUnitBut').innerHTML = 'Wks';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Year':
            document.getElementById('SecLUnitBut').innerHTML = 'Yrs';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;


        case 'Centilitre':
            document.getElementById('SecLUnitBut').innerHTML = 'cL';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Cubic Centimetre':
            document.getElementById('SecLUnitBut').innerHTML = 'cm³';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Cubic Feet':
            document.getElementById('SecLUnitBut').innerHTML = 'Ft³';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Cubic Inch':
            document.getElementById('SecLUnitBut').innerHTML = 'In³';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Cubic Metre':
            document.getElementById('SecLUnitBut').innerHTML = 'm³';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Cubic Millimetre':
            document.getElementById('SecLUnitBut').innerHTML = 'mm³';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Cubic Yard':
            document.getElementById('SecLUnitBut').innerHTML = 'Yd³';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Decilitre':
            document.getElementById('SecLUnitBut').innerHTML = 'dL';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Fluid Ounce UK':
            document.getElementById('SecLUnitBut').innerHTML = 'fl. oz UK';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Fluid Ounce US':
            document.getElementById('SecLUnitBut').innerHTML = 'fl. oz US';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Gallon UK':
            document.getElementById('SecLUnitBut').innerHTML = 'Gal. UK';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Gallon US':
            document.getElementById('SecLUnitBut').innerHTML = 'Gal. US';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Litre':
            document.getElementById('SecLUnitBut').innerHTML = 'L';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Millilitre':
            document.getElementById('SecLUnitBut').innerHTML = 'mL';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Pint UK':
            document.getElementById('SecLUnitBut').innerHTML = 'pt UK';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Pint US':
            document.getElementById('SecLUnitBut').innerHTML = 'pt US';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Tablespoon':
            document.getElementById('SecLUnitBut').innerHTML = 'tbsp.';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Teaspoon':
            document.getElementById('SecLUnitBut').innerHTML = 'tsp.';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
    
        
        case 'Carat':
            document.getElementById('SecLUnitBut').innerHTML = 'CT';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Gram':
            document.getElementById('SecLUnitBut').innerHTML = 'g';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Kilogram':
            document.getElementById('SecLUnitBut').innerHTML = 'kg';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Milligram':
            document.getElementById('SecLUnitBut').innerHTML = 'mg';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Ounce':
            document.getElementById('SecLUnitBut').innerHTML = 'oz.';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Pound':
            document.getElementById('SecLUnitBut').innerHTML = 'lb';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Stone':
            document.getElementById('SecLUnitBut').innerHTML = 'st';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
        case 'Ton':
            document.getElementById('SecLUnitBut').innerHTML = 't';
            document.getElementById('inputLNum').placeholder = selectedValue;
            break;
            
    }

    switch (Check) {
        case 'Area':
            Area_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Currency':
            Currency_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Data':
            Data_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Length':
            Length_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Speed':
            Speed_Converter(document.getElementById('inputLNum').value)
            break;
        case 'Temperature':
            Temperature_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Time':
            Time_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Volume':
            Volume_Converter(document.getElementById('inputLNum').value)
            break;
        case 'Weight':
            Weight_Converter(document.getElementById('inputLNum').value);
            break;
    }
}

function Change_Buttons_Unit2() {
    
    let Check_3 = '';

    switch (Check) {
        case 'Area':
            Check_3 = 'UnitA2';
            break;
        case 'Currency':
            Check_3 = 'UnitC2';
            break;
        case 'Data':
            Check_3 = 'UnitD2';
            break;
        case 'Length':
            Check_3 = 'UnitL2';
            break;
        case 'Speed':
            Check_3 = 'UnitS2';
            break;
        case 'Temperature':
            Check_3 = 'UnitTe2';
            break;
        case 'Time':
            Check_3 = 'UnitTi2';
            break;
        case 'Volume':
            Check_3 = 'UnitV2';
            break;
        case 'Weight':
            Check_3 = 'UnitW2';
            break;
    }
    
    let Get_Form_2 = document.getElementById(Check_3);
    let selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;

    switch (selectedValue_2) {
        case 'Are':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Acre':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Hectare':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Square Centimetre':
            document.getElementById('SecRUnitBut').innerHTML = 'cm²';
            document.getElementById('inputRNum').placeholder = 'Sq. Cm';
            break;
        case 'Square Decimetre':
            document.getElementById('SecRUnitBut').innerHTML = 'dm²';
            document.getElementById('inputRNum').placeholder = 'Sq. Dm';
            break;
        case 'Square Feet':
            document.getElementById('SecRUnitBut').innerHTML = 'Ft²';
            document.getElementById('inputRNum').placeholder = 'Sq. Ft';
            break;
        case 'Square Inch':
            document.getElementById('SecRUnitBut').innerHTML = 'In²';
            document.getElementById('inputRNum').placeholder = 'Sq. In';
            break;
        case 'Square Kilometre':
            document.getElementById('SecRUnitBut').innerHTML = 'km²';
            document.getElementById('inputRNum').placeholder = 'Sq. Km';
            break;
        case 'Square Metre':
            document.getElementById('SecRUnitBut').innerHTML = 'm²';
            document.getElementById('inputRNum').placeholder = 'Sq. M';
            break;
        case 'Square Mile':
            document.getElementById('SecRUnitBut').innerHTML = 'mi²';
            document.getElementById('inputRNum').placeholder = 'Sq. Mi';
            break;
        case 'Square Millimetre':
            document.getElementById('SecRUnitBut').innerHTML = 'mm²';
            document.getElementById('inputRNum').placeholder = 'Sq. Mm';
            break;
        case 'Square Yard':
            document.getElementById('SecRUnitBut').innerHTML = 'Yd²';
            document.getElementById('inputRNum').placeholder = 'Sq. Yd';
            break;        


        case 'BTC':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Bitcoin';
            break;
        case 'KWD':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Kuwaiti Dinar';
            break;
        case 'AED':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Emirati Dirham';
            break;
        case 'AUD':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Austrailian Dollar';
            break;
        case 'CAD':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Canadian Dollar';
            break;
        case 'HKD':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Hong Kong Dollar';
            break;
        case 'USD':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'United States Dollar';
            break;
        case 'EUR':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Euro';
            break;
        case 'CHF':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Swiss Franc';
            break;
        case 'COP':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Colombian Peso';
            break;
        case 'GBP':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Pound Sterling';
            break;
        case 'RUB':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Russian Rouble';
            break;
        case 'INR':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Indian Rupee';
            break;
        case 'PKR':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Pakistani Rupee';
            break;
        case 'LKR':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Sri Lankan Rupee';
            break;
        case 'JPY':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Japanese Yen';
            break;
        case 'CNY':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = 'Chinese Yuan';
            break;
    

        case 'Bit':
            document.getElementById('SecRUnitBut').innerHTML = 'b';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Byte':
            document.getElementById('SecRUnitBut').innerHTML = 'B';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Kilobyte':
            document.getElementById('SecRUnitBut').innerHTML = 'kB';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Megabyte':
            document.getElementById('SecRUnitBut').innerHTML = 'MB';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Gigabyte':
            document.getElementById('SecRUnitBut').innerHTML = 'GB';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Terabyte':
            document.getElementById('SecRUnitBut').innerHTML = 'TB';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Petabyte':
            document.getElementById('SecRUnitBut').innerHTML = 'PB';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Exabyte':
            document.getElementById('SecRUnitBut').innerHTML = 'EB';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;


        case 'Centimetre':
            document.getElementById('SecRUnitBut').innerHTML = 'cm';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Chain':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Decimetre':
            document.getElementById('SecRUnitBut').innerHTML = 'dm';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Feet':
            document.getElementById('SecRUnitBut').innerHTML = 'Ft';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Furlong':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Inch':
            document.getElementById('SecRUnitBut').innerHTML = 'In';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Kilometre':
            document.getElementById('SecRUnitBut').innerHTML = 'km';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'League':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Metre':
            document.getElementById('SecRUnitBut').innerHTML = 'm';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Mile':
            document.getElementById('SecRUnitBut').innerHTML = 'Mi';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Millimetre':
            document.getElementById('SecRUnitBut').innerHTML = 'mm';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Nautical Mile':
            document.getElementById('SecRUnitBut').innerHTML = 'NMi';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Rod':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Yard':
            document.getElementById('SecRUnitBut').innerHTML = 'Yd';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;


        case 'Feet/Minute':
            document.getElementById('SecRUnitBut').innerHTML = 'Ft/Min';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Feet/Second':
            document.getElementById('SecRUnitBut').innerHTML = 'Ft/Sec';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Kilometre/Hour':
            document.getElementById('SecRUnitBut').innerHTML = 'KM/H';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Knot':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Mach':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Mile/Hour':
            document.getElementById('SecRUnitBut').innerHTML = 'MPH';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Metre/Second':
            document.getElementById('SecRUnitBut').innerHTML = 'm/s';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Speed of Light':
            document.getElementById('SecRUnitBut').innerHTML = 'c';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        

        case 'Celsius':
            document.getElementById('SecRUnitBut').innerHTML = '°C';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Fahrenheit':
            document.getElementById('SecRUnitBut').innerHTML = '°F';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Kelvin':
            document.getElementById('SecRUnitBut').innerHTML = 'K';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Rankine':
            document.getElementById('SecRUnitBut').innerHTML = '°R';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        

        case 'Century':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Day':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Decade':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Hour':
            document.getElementById('SecRUnitBut').innerHTML = 'Hrs';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Millennium':
            document.getElementById('SecRUnitBut').innerHTML = 'M';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Millisecond':
            document.getElementById('SecRUnitBut').innerHTML = 'MS';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Minute':
            document.getElementById('SecRUnitBut').innerHTML = 'Mins';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Month':
            document.getElementById('SecRUnitBut').innerHTML = selectedValue_2;
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Second':
            document.getElementById('SecRUnitBut').innerHTML = 'S';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Week':
            document.getElementById('SecRUnitBut').innerHTML = 'Wks';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Year':
            document.getElementById('SecRUnitBut').innerHTML = 'Yrs';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;


        case 'Centilitre':
            document.getElementById('SecRUnitBut').innerHTML = 'cL';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Cubic Centimetre':
            document.getElementById('SecRUnitBut').innerHTML = 'cm³';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Cubic Feet':
            document.getElementById('SecRUnitBut').innerHTML = 'Ft³';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Cubic Inch':
            document.getElementById('SecRUnitBut').innerHTML = 'In³';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Cubic Metre':
            document.getElementById('SecRUnitBut').innerHTML = 'm³';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Cubic Millimetre':
            document.getElementById('SecRUnitBut').innerHTML = 'mm³';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Cubic Yard':
            document.getElementById('SecRUnitBut').innerHTML = 'Yd³';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Decilitre':
            document.getElementById('SecRUnitBut').innerHTML = 'dL';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Fluid Ounce UK':
            document.getElementById('SecRUnitBut').innerHTML = 'fl. oz UK';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Fluid Ounce US':
            document.getElementById('SecRUnitBut').innerHTML = 'fl. oz US';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Gallon UK':
            document.getElementById('SecRUnitBut').innerHTML = 'Gal. UK';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Gallon US':
            document.getElementById('SecRUnitBut').innerHTML = 'Gal. US';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Litre':
            document.getElementById('SecRUnitBut').innerHTML = 'L';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Millilitre':
            document.getElementById('SecRUnitBut').innerHTML = 'mL';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Pint UK':
            document.getElementById('SecRUnitBut').innerHTML = 'pt UK';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Pint US':
            document.getElementById('SecRUnitBut').innerHTML = 'pt US';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Tablespoon':
            document.getElementById('SecRUnitBut').innerHTML = 'tbsp.';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Teaspoon':
            document.getElementById('SecRUnitBut').innerHTML = 'tsp.';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
    
        
        case 'Carat':
            document.getElementById('SecRUnitBut').innerHTML = 'CT';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Gram':
            document.getElementById('SecRUnitBut').innerHTML = 'g';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Kilogram':
            document.getElementById('SecRUnitBut').innerHTML = 'kg';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Milligram':
            document.getElementById('SecRUnitBut').innerHTML = 'mg';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Ounce':
            document.getElementById('SecRUnitBut').innerHTML = 'oz.';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Pound':
            document.getElementById('SecRUnitBut').innerHTML = 'lb';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Stone':
            document.getElementById('SecRUnitBut').innerHTML = 'st';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
        case 'Ton':
            document.getElementById('SecRUnitBut').innerHTML = 't';
            document.getElementById('inputRNum').placeholder = selectedValue_2;
            break;
            
    }

    switch (Check) {
        case 'Area':
            Area_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Currency':
            Currency_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Data':
            Data_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Length':
            Length_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Speed':
            Speed_Converter(document.getElementById('inputLNum').value)
            break;
        case 'Temperature':
            Temperature_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Time':
            Time_Converter(document.getElementById('inputLNum').value);
            break;
        case 'Volume':
            Volume_Converter(document.getElementById('inputLNum').value)
            break;
        case 'Weight':
            Weight_Converter(document.getElementById('inputLNum').value);
            break;
    }
}

function Area_Converter(valNum) {
    
    let Area_Factor = {
    'Are': 100,
    'Acre': 4046.8564224,
    'Hectare': 10000,
    'Square Centimetre': 0.0001,
    'Square Decimetre': 0.01,
    'Square Feet': 0.09290304,
    'Square Inch': 0.00064516,
    'Square Kilometre': 1000000,
    'Square Metre': 1,
    'Square Mile': 2589988.110336,
    'Square Millimetre': 0.000001,
    'Square Yard': 0.83612736,
    };

    let Converted = 0;
    var Get_Form = document.getElementById("UnitA");
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;
    var Get_Form_2 = document.getElementById("UnitA2");
    var selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;
    Converted = (valNum * (Area_Factor[selectedValue])) / (Area_Factor[selectedValue_2]);
    document.getElementById('inputRNum').value = Converted.toFixed(5);
}

function Currency_Converter(valNum) {

    let Currency_Factor = {
        'BTC': 1,
        'KWD': 5944.00,
        'AED': 70323.77,
        'AUD': 30511.02,
        'CAD': 26452.57,
        'HKD': 150285.11,
        'USD': 19146.40,
        'EUR': 19733.58,
        'CHF': 19101.69,
        'COP': 88216593.78,
        'GBP': 17260.58,
        'RUB': 1220104.34,
        'INR': 1573615.28,
        'PKR': 4172957.88,
        'LKR': 7017988.47,
        'JPY': 2812156.22,
        'CNY': 137364.42
    }

    let Converted = 0;
    var Get_Form = document.getElementById("UnitC");
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;
    var Get_Form_2 = document.getElementById("UnitC2");
    var selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;
    Converted = (valNum / Currency_Factor[selectedValue]) * (Currency_Factor[selectedValue_2]);
    document.getElementById('inputRNum').value = Converted.toFixed(5);

}

function Data_Converter(valNum) {

    let Data_Factor = {
        'Bit': (1 / 8),
        'Byte': 1,
        'Kilobyte': (1000),
        'Megabyte': (1000 ** 2),
        'Gigabyte': (1000 ** 3),
        'Terabyte': (1000 ** 4),
        'Petabyte': (1000 ** 5),
        'Exabyte': (1000 ** 6)
    }
    let Converted = 0;
    var Get_Form = document.getElementById("UnitD");
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;
    var Get_Form_2 = document.getElementById("UnitD2");
    var selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;
    Converted = (valNum * Data_Factor[selectedValue]) / (Data_Factor[selectedValue_2]);
    document.getElementById('inputRNum').value = Converted.toFixed(5);
}

function Length_Converter(valNum) {

    let Length_Factor = {
        'Centimetre': 0.01,
        'Chain': 20.1168,
        'Decimetre': 0.1,
        'Feet': 0.3048,
        'Furlong': 201.168,
        'Inch': 0.0254,
        'Kilometre': 1000,
        'League': 4828.03,
        'Metre': 1,
        'Mile': 1609.344,
        'Millimetre': 0.001,
        'Nautical Mile': 1852,
        'Rod': 5.0292,
        'Yard': 0.9144
    }
    let Converted = 0;
    var Get_Form = document.getElementById("UnitL");
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;
    var Get_Form_2 = document.getElementById("UnitL2");
    var selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;
    Converted = (valNum * Length_Factor[selectedValue]) / (Length_Factor[selectedValue_2]);
    document.getElementById('inputRNum').value = Converted.toFixed(5);
}

function Speed_Converter(valNum) {

    let Speed_Factor = {
        'Feet/Minute': 0.011363636363636,
        'Feet/Second': 0.68181818181818,
        'Kilometre/Hour': 0.62137119273443,
        'Knot': 1.1507794480136,
        'Mach': 767.269148,
        'Mile/Hour': 1,
        'Metre/Second': 2.2369362920544,
        'Speed of Light': 670616629.3844,
    }
    let Converted = 0;
    var Get_Form = document.getElementById("UnitS");
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;
    var Get_Form_2 = document.getElementById("UnitS2");
    var selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;
    Converted = (valNum * Speed_Factor[selectedValue]) / (Speed_Factor[selectedValue_2]);
    document.getElementById('inputRNum').value = Converted.toFixed(5);
}

function Temperature_Converter(valNum) {

    var Get_Form = document.getElementById("UnitTe");
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;
    var Get_Form_2 = document.getElementById("UnitTe2");
    var selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;

    switch (selectedValue) {
        case 'Celsius':
            switch (selectedValue_2) {
                case 'Celsius':
                    document.getElementById('inputRNum').value = valNum;
                    break;
                case 'Fahrenheit':
                    document.getElementById('inputRNum').value = ((valNum * 1.8) + (32)).toFixed(5);
                    break;
                case 'Kelvin':
                    document.getElementById('inputRNum').value = (valNum - (-273.15)).toFixed(5);
                    break;
                case 'Rankine':
                    document.getElementById('inputRNum').value = ((valNum * 1.8) + (491.67)).toFixed(5);
                    break;
            }
            break;
        case 'Fahrenheit':
            switch (selectedValue_2) {
                case 'Celsius':
                    document.getElementById('inputRNum').value = ((valNum - 32) / (1.8)).toFixed(5);
                    break;
                case 'Fahrenheit':
                    document.getElementById('inputRNum').value = valNum;
                    break;
                case 'Kelvin':
                    document.getElementById('inputRNum').value = (((valNum - 32) / (1.8)) + (273.15)).toFixed(5);
                    break;
                case 'Rankine':
                    document.getElementById('inputRNum').value = (valNum + 459.67).toFixed(5);
                    break;
            }
            break;
        case 'Kelvin':
            switch (selectedValue_2) {
                case 'Celsius':
                    document.getElementById('inputRNum').value = (valNum - 273.15).toFixed(5);
                    break;
                case 'Fahrenheit':
                    document.getElementById('inputRNum').value = ((valNum * 1.8) - (459.67)).toFixed(5);
                    break;
                case 'Kelvin':
                    document.getElementById('inputRNum').value = valNum;
                    break;
                case 'Rankine':
                    document.getElementById('inputRNum').value = (valNum * 1.8).toFixed(5);
                    break;
            }
            break;
        case 'Rankine':
            switch (selectedValue_2) {
                case 'Celsius':
                    document.getElementById('inputRNum').value = ((valNum - 491.67) * (5 / 9)).toFixed(5);
                    break;
                case 'Fahrenheit':
                    document.getElementById('inputRNum').value = (valNum - 459.67).toFixed(5);
                    break;
                case 'Kelvin':
                    document.getElementById('inputRNum').value = ((valNum) / (5 / 9)).toFixed(5);
                    break;
                case 'Rankine':
                    document.getElementById('inputRNum').value = valNum;
                    break;
            }
            break;
    }
}

function Time_Converter(valNum) {

    let Time_Factor = {
        'Century': 3153600000,
        'Day': 86400,
        'Decade': 315360000,
        'Hour': 3600,
        'Millennium': 31536000000,
        'Millisecond': 0.001,
        'Minute': 60,
        'Month': 2628288,
        'Second': 1,
        'Week': 604800,
        'Year': 31536000
    }

    let Converted = 0;
    var Get_Form = document.getElementById("UnitTi");
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;
    var Get_Form_2 = document.getElementById("UnitTi2");
    var selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;
    Converted = (valNum * Time_Factor[selectedValue]) / (Time_Factor[selectedValue_2]);
    document.getElementById('inputRNum').value = Converted.toFixed(5);
}

function Volume_Converter(valNum) {

    let Volume_Factor = {
        'Centilitre': 10,
        'Cubic Centimetre': 1,
        'Cubic Feet': 28316.846592,
        'Cubic Inch': 16.387064,
        'Cubic Metre': 1000000,
        'Cubic Millimetre': 0.001,
        'Cubic Yard': 764554.857984,
        'Decilitre': 100,
        'Fluid Ounce UK': 28.4130625,
        'Fluid Ounce US': 29.5735295625,
        'Gallon UK': 4546.09,
        'Gallon US': 3785.411784,
        'Litre': 1000,
        'Millilitre': 1,
        'Pint UK': 568.26125,
        'Pint US': 473.176473,
        'Tablespoon': 15,
        'Teaspoon': 5,
    }

    let Converted = 0;
    var Get_Form = document.getElementById("UnitV");
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;
    var Get_Form_2 = document.getElementById("UnitV2");
    var selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;
    Converted = (valNum * Volume_Factor[selectedValue]) / (Volume_Factor[selectedValue_2]);
    document.getElementById('inputRNum').value = Converted.toFixed(5);
}

function Weight_Converter(valNum) {
    
    let Weight_Factor = {
        'Carat': 0,
        'Gram': 0.001,
        'Kilogram': 1,
        'Milligram': 0.000001,
        'Ounce': 0.02834952,
        'Pound': 0.45359237,
        'Stone': 6.35029,
        'Ton': 1000
    }

    let Converted = 0;
    var Get_Form = document.getElementById("UnitW");
    var selectedValue = Get_Form.options[Get_Form.selectedIndex].value;
    var Get_Form_2 = document.getElementById("UnitW2");
    var selectedValue_2 = Get_Form_2.options[Get_Form_2.selectedIndex].value;
    Converted = (valNum * Weight_Factor[selectedValue]) / (Weight_Factor[selectedValue_2]);
    document.getElementById('inputRNum').value = Converted.toFixed(5);
}

function But_1() {
    document.getElementById('inputLNum').value += '1';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_2() {
    document.getElementById('inputLNum').value += '2';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_3() {
    document.getElementById('inputLNum').value += '3';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_4() {
    document.getElementById('inputLNum').value += '4';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_5() {
    document.getElementById('inputLNum').value += '5';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_6() {
    document.getElementById('inputLNum').value += '6';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_7() {
    document.getElementById('inputLNum').value += '7';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_8() {
    document.getElementById('inputLNum').value += '8';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_9() {
    document.getElementById('inputLNum').value += '9';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_0() {
    document.getElementById('inputLNum').value += '0';
    ON_Change(document.getElementById('inputLNum').value);
}

function But_Del() {
    document.getElementById('inputLNum').value = document.getElementById('inputLNum').value.slice(0, -1);
    if (isNaN(document.getElementById('inputLNum').value)){
        document.getElementById('inputLNum').value = '';
        document.getElementById('inputRNum').value = '';
    }
    ON_Change(document.getElementById('inputLNum').value);
}

function But_AC() {
    document.getElementById('inputLNum').value = '';
    document.getElementById('inputRNum').value = '';
    
}

function But_PM() {
    document.getElementById('inputLNum').value *= -1;
    document.getElementById('inputRNum').value *= -1;
}

function But_Swap() {

    let Check_4 = '';

    switch (Check) {
        case 'Area':
            Check_4 = 'UnitA';
            break;
        case 'Currency':
            Check_4 = 'UnitC';
            break;
        case 'Data':
            Check_4 = 'UnitD';
            break;
        case 'Length':
            Check_4 = 'UnitL';
            break;
        case 'Speed':
            Check_4 = 'UnitS';
            break;
        case 'Temperature':
            Check_4 = 'UnitTe';
            break;
        case 'Time':
            Check_4 = 'UnitTi';
            break;
        case 'Volume':
            Check_4 = 'UnitV';
            break;
        case 'Weight':
            Check_4 = 'UnitW';
            break;
    }

    let Check_5 = '';

    switch (Check) {
        case 'Area':
            Check_5 = 'UnitA2';
            break;
        case 'Currency':
            Check_5 = 'UnitC2';
            break;
        case 'Data':
            Check_5 = 'UnitD2';
            break;
        case 'Length':
            Check_5 = 'UnitL2';
            break;
        case 'Speed':
            Check_5 = 'UnitS2';
            break;
        case 'Temperature':
            Check_5 = 'UnitTe2';
            break;
        case 'Time':
            Check_5 = 'UnitTi2';
            break;
        case 'Volume':
            Check_5 = 'UnitV2';
            break;
        case 'Weight':
            Check_5 = 'UnitW2';
            break;
    }

    let LInp = document.getElementById(Check_4).value;
    let RInp = document.getElementById(Check_5).value;
    let Temp = '';

    Temp = LInp;
    LInp = RInp;
    RInp = Temp;

    document.getElementById(Check_4).value = LInp;
    document.getElementById(Check_5).value = RInp;

    let LLabel = document.getElementById('SecLUnitBut').innerHTML;
    let RLabel = document.getElementById('SecRUnitBut').innerHTML;
    Temp = '';

    Temp = LLabel;
    LLabel = RLabel;
    RLabel = Temp;

    document.getElementById('SecLUnitBut').innerHTML = LLabel;
    document.getElementById('SecRUnitBut').innerHTML = RLabel;

    let LPHld = document.getElementById('inputLNum').placeholder;
    let RPHld = document.getElementById('inputRNum').placeholder;
    Temp = '';

    Temp = LPHld;
    LPHld = RPHld;
    RPHld = Temp;

    document.getElementById('inputLNum').placeholder = LPHld;
    document.getElementById('inputRNum').placeholder = RPHld;


    ON_Change(document.getElementById('inputLNum').value);

}

function But_DP() {
    if (document.getElementById('inputLNum').value.indexOf('.') == -1){
        document.getElementById('inputLNum').value += '.';
    }
}

function Reveal_Options_A() {

    let reveal = 'Unit';

    document.getElementById('UnitA').setAttribute("class", reveal);
    document.getElementById('UnitA2').setAttribute("class", reveal);

    document.getElementById("UnitA").style.top = '475px';
    document.getElementById("UnitA").style.left = '126px';

    document.getElementById("UnitA2").style.top = '475px';
    document.getElementById("UnitA2").style.left = '1206px';

    document.getElementById('SecLUnitBut').innerHTML = 'Are';
    document.getElementById('SecRUnitBut').innerHTML = 'Acre';

    document.getElementById('inputLNum').placeholder = 'Are';
    document.getElementById('inputRNum').placeholder = 'Acre';

}

function Reveal_Options_C() {
    let reveal = 'Unit';

    document.getElementById('UnitC').setAttribute("class", reveal);
    document.getElementById('UnitC2').setAttribute("class", reveal);

    document.getElementById("UnitC").style.top = '475px';
    document.getElementById("UnitC").style.left = '126px';

    document.getElementById("UnitC2").style.top = '475px';
    document.getElementById("UnitC2").style.left = '1206px';

    document.getElementById('SecLUnitBut').innerHTML = 'BTC';
    document.getElementById('SecRUnitBut').innerHTML = 'KWD';

    document.getElementById('inputLNum').placeholder = 'Bitcoin';
    document.getElementById('inputRNum').placeholder = 'Kuwaiti Dinar';
    
    document.getElementById('UnitC').style.fontSize = '28px';
    document.getElementById('UnitC2').style.fontSize = '28px';
}

function Reveal_Options_D() {

    let reveal = 'Unit';

    document.getElementById('UnitD').setAttribute("class", reveal);
    document.getElementById('UnitD2').setAttribute("class", reveal);

    document.getElementById("UnitD").style.top = '475px';
    document.getElementById("UnitD").style.left = '126px';

    document.getElementById("UnitD2").style.top = '475px';
    document.getElementById("UnitD2").style.left = '1206px';

    document.getElementById('SecLUnitBut').innerHTML = 'b';
    document.getElementById('SecRUnitBut').innerHTML = 'B';

    document.getElementById('inputLNum').placeholder = 'Bit';
    document.getElementById('inputRNum').placeholder = 'Byte';

}

function Reveal_Options_L() {

    let reveal = 'Unit';

    document.getElementById('UnitL').setAttribute("class", reveal);
    document.getElementById('UnitL2').setAttribute("class", reveal);

    document.getElementById("UnitL").style.top = '475px';
    document.getElementById("UnitL").style.left = '126px';

    document.getElementById("UnitL2").style.top = '475px';
    document.getElementById("UnitL2").style.left = '1206px';

    document.getElementById('SecLUnitBut').innerHTML = 'cm';
    document.getElementById('SecRUnitBut').innerHTML = 'Chain';

    document.getElementById('inputLNum').placeholder = 'Centimetre';
    document.getElementById('inputRNum').placeholder = 'Chain';
      

}

function Reveal_Options_S() {

    let reveal = 'Unit';

    document.getElementById('UnitS').setAttribute("class", reveal);
    document.getElementById('UnitS2').setAttribute("class", reveal);

    document.getElementById("UnitS").style.top = '475px';
    document.getElementById("UnitS").style.left = '126px';

    document.getElementById("UnitS2").style.top = '475px';
    document.getElementById("UnitS2").style.left = '1206px';

    document.getElementById('SecLUnitBut').innerHTML = 'Ft/Min';
    document.getElementById('SecRUnitBut').innerHTML = 'Ft/Sec';

    document.getElementById('inputLNum').placeholder = 'Feet/Minute';
    document.getElementById('inputRNum').placeholder = 'Feet/Second';

}

function Reveal_Options_Te() {

    let reveal = 'Unit';

    document.getElementById('UnitTe').setAttribute("class", reveal);
    document.getElementById('UnitTe2').setAttribute("class", reveal);

    document.getElementById("UnitTe").style.top = '475px';
    document.getElementById("UnitTe").style.left = '126px';

    document.getElementById("UnitTe2").style.top = '475px';
    document.getElementById("UnitTe2").style.left = '1206px';

    document.getElementById('SecLUnitBut').innerHTML = '°C';
    document.getElementById('SecRUnitBut').innerHTML = '°F';

    document.getElementById('inputLNum').placeholder = 'Celsius';
    document.getElementById('inputRNum').placeholder = 'Fahrenheit';  

}

function Reveal_Options_Ti() {

    let reveal = 'Unit';

    document.getElementById('UnitTi').setAttribute("class", reveal);
    document.getElementById('UnitTi2').setAttribute("class", reveal);

    document.getElementById("UnitTi").style.top = '475px';
    document.getElementById("UnitTi").style.left = '126px';

    document.getElementById("UnitTi2").style.top = '475px';
    document.getElementById("UnitTi2").style.left = '1206px';

    document.getElementById('SecLUnitBut').innerHTML = 'Century';
    document.getElementById('SecRUnitBut').innerHTML = 'Day';

    document.getElementById('inputLNum').placeholder = 'Century';
    document.getElementById('inputRNum').placeholder = 'Day';

}

function Reveal_Options_V() {

    let reveal = 'Unit';

    document.getElementById('UnitV').setAttribute("class", reveal);
    document.getElementById('UnitV2').setAttribute("class", reveal);

    document.getElementById("UnitV").style.top = '475px';
    document.getElementById("UnitV").style.left = '126px';

    document.getElementById("UnitV2").style.top = '475px';
    document.getElementById("UnitV2").style.left = '1206px';

    document.getElementById('SecLUnitBut').innerHTML = 'cL';
    document.getElementById('SecRUnitBut').innerHTML = 'cm³';

    document.getElementById('inputLNum').placeholder = 'Centilitre';
    document.getElementById('inputRNum').placeholder = 'Cubic Centimetre';

}

function Reveal_Options_W() {

    let reveal = 'Unit';

    document.getElementById('UnitW').setAttribute("class", reveal);
    document.getElementById('UnitW2').setAttribute("class", reveal);

    document.getElementById("UnitW").style.top = '475px';
    document.getElementById("UnitW").style.left = '126px';

    document.getElementById("UnitW2").style.top = '475px';
    document.getElementById("UnitW2").style.left = '1206px';

    document.getElementById('SecLUnitBut').innerHTML = 'CT';
    document.getElementById('SecRUnitBut').innerHTML = 'g';

    document.getElementById('inputLNum').placeholder = 'Carat';
    document.getElementById('inputRNum').placeholder = 'Gram';  

}

function Reveal_Page_Attributes() {

    document.getElementById("SecC1").style.position = but_position;
    document.getElementById("SecC1").style.width = '400px';
    document.getElementById("SecC1").style.height = '93px';
    document.getElementById("SecC1").style.top = '843px';
    document.getElementById("SecC1").style.left = '126px';

    document.getElementById("SecC2").style.position = but_position;
    document.getElementById("SecC2").style.width = '400px';
    document.getElementById("SecC2").style.height = '93px';
    document.getElementById("SecC2").style.top = '843px';
    document.getElementById("SecC2").style.left = '1206px';

    document.getElementById('inputLNum').value = '';
    document.getElementById('inputRNum').value = '';

}

function Hide_All() {

    let Hide = 'invis';

    document.getElementById('UnitA').setAttribute("class", Hide);
    document.getElementById('UnitC').setAttribute("class", Hide);
    document.getElementById('UnitD').setAttribute("class", Hide);
    document.getElementById('UnitL').setAttribute("class", Hide);
    document.getElementById('UnitS').setAttribute("class", Hide);
    document.getElementById('UnitTe').setAttribute("class", Hide);
    document.getElementById('UnitTi').setAttribute("class", Hide);
    document.getElementById('UnitV').setAttribute("class", Hide);
    document.getElementById('UnitW').setAttribute("class", Hide);

    document.getElementById('UnitA2').setAttribute("class", Hide);
    document.getElementById('UnitC2').setAttribute("class", Hide);
    document.getElementById('UnitD2').setAttribute("class", Hide);
    document.getElementById('UnitL2').setAttribute("class", Hide);
    document.getElementById('UnitS2').setAttribute("class", Hide);
    document.getElementById('UnitTe2').setAttribute("class", Hide);
    document.getElementById('UnitTi2').setAttribute("class", Hide);
    document.getElementById('UnitV2').setAttribute("class", Hide);
    document.getElementById('UnitW2').setAttribute("class", Hide);

    document.getElementById('inputLNum').value = '';
    document.getElementById('inputRNum').value = '';

}