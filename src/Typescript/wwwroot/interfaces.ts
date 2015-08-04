
//Hopes for a number
function hopesForANumber(myNumberIHope) {

}

//Only takes a number
function takesANumber(myNumber: number) {

}

//My first interface
interface IMyFirstInterface {
    myNumber: number;
}

//Using IMyFirstInterface
function takesIMyFirstInterfaceAndAddsMyNumber(someValue: IMyFirstInterface) {
    console.log('takesIMyFirstInterfaceAndAddsMyNumber');
    console.log(someValue.myNumber + someValue['myNumber']);
} 

//Optional Properties
interface IOptional{
    option?: boolean;
}

//Extend IMyFirstInterface
interface IExtended extends IMyFirstInterface {
    myString: string;
}

//Using IExtended
function takesIExtendedAndLogsMyStringAndTheSquareOfMyNumberToConsole(value: IExtended) {
    console.log('takesIExtendedAndLogsMyStringAndTheSquareOfMyNumberToConsole');
    console.log(value.myString);
    console.log(value.myNumber * value.myNumber);
}