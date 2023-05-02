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
            user.id,
            user.lastName,
            user.firstName,
            user.birthDate,
            user.address,
            user.phone,
            user.email
        ));
        return user;
    };

    const findUser = (id) => {
        return users.find((user) => user.id === id);
    };

    const updateUser = (id, user) => {
        let foundUserIdx = '';
        users.forEach((user, idx) => {
            if (user.id === id) {
                foundUserIdx = idx;
            }
        });

        if (foundUserIdx !== '') {
            users[foundUserIdx] = new User(
                user.id,
            user.lastName,
            user.firstName,
            user.birthDate,
            user.address,
            user.phone,
            user.email
            );
            return user;
        }
        return null;
    };

    const deleteUser = (id) => {
        let deletedUser = null;
        users.forEach((user, idx) => {
            if (user.id === id) {
                deletedUser = Object.assign({}, user);
                users.splice(idx, 1);
            }
        });
        return deletedUser;
    };

    return {
        listUsers,
        createUser,
        findUser,
        updateUser,
        deleteUser
    }

}