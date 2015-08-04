//Hopes for a number
function hopesForANumber(myNumberIHope) {
}
//Only takes a number
function takesANumber(myNumber) {
}
//Using IMyFirstInterface
function takesIMyFirstInterfaceAndAddsMyNumber(someValue) {
    console.log('takesIMyFirstInterfaceAndAddsMyNumber');
    console.log(someValue.myNumber + someValue['myNumber']);
}
//Using IExtended
function takesIExtendedAndLogsMyStringAndTheSquareOfMyNumberToConsole(value) {
    console.log('takesIExtendedAndLogsMyStringAndTheSquareOfMyNumberToConsole');
    console.log(value.myString);
    console.log(value.myNumber * value.myNumber);
}
