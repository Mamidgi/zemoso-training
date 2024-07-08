// Arrow function
const initials=(firstName, lastName)=>{
    const firstInitial = firstName.charAt(0);
    const lastInitial = lastName.charAt(0);

    return firstInitial + lastInitial;
}
const firstName='Roger';
const lastName='Water';
console.log(initials(firstName,lastName));


