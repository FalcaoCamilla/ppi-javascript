function verificaUser(email1, email2){
    const user1 = email1.split("@");
    const user2 = email2.split("@");
    return (user1[0] === user2[0]);
}

console.log(verificaUser('camilla@gmail', 'bruno@gmail')) //return false