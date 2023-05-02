export default (User) => {
    const users = [
        new User('0123456789', 'LapinSorcier', 'Kwain', '12/04/2000', '5 rue Mtg', '0011223344', 'kwain@lapinsorcier.mtg'),
        new User('9876543210', 'Le Gredin', 'Anowon', '13/12/1883', '0 faubourg du marais', '0908070605', 'anowon@meuletondeck.gre')
    ];

    const listUsers = () => {
        return users;
    };

    const createUser = (user) => {
        users.push(new User(
            user.id = id,
            user.lastName = lastName,
            user.firstName = firstName,
            user.birthDate = birthDate,
            user.address = address,
            user.phone = phone,
            user.email = email
        ));
        return user;
    }

    return {
        listUsers,
        createUser
    }

}