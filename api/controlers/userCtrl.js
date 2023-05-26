export default (userRepo) => {

    // Test functions

    const checkId = (id) => {
        if (id.length !== 10) {
            return false
        }
        return true
    }

    const checkBirth = (birth) => {
        const regex = /^\d{2}(-|\/)\d{2}(-|\/)\d{4}$/
        if (! regex.test(birth)) {
            return false
        }
        return true
    }

    const checkPhone = (phone) => {
        const regex = /(([00|+])\d{1}|([0]\d{1}))\d{8}/
        if (!regex.test(phone)) {
            return false
        }
        return true
    }



    // API functions
    const listUsers = (_, res) => {
        res.send({
            data: userRepo.listUsers()
        });
    };

    const createUser = (req, res) => {
        // run tests
        if (!checkId(req.body.id)) {
            res.status(400).send({
                error: `Id incorrect. User id must be 10 characters.`
            });
        }
        else if (!checkBirth(req.body.birthDate)) {
            res.status(400).send({
                error: 'Birth date incorrect. Must be of format dd/mm/yyyy'
            })
        }
        else if (!checkPhone(req.body.phone)) {
            res.status(400).send({
                error: 'Phone number incorrect. Must be of format 0x and 4 times two digits or 00x / +33x and 4 times two digits.'
            })
        }
        // fetch API
        else {
            const user = userRepo.createUser(req.body);
            res.status(201).send({
                data: user
            });
        }
    };

    const getUser = (req, res) => {
        const id = req.params.id;
        const user = userRepo.findUser(id);

        if (user) {
            return res.send({
                data: user
            });
        }

        res.status(404).send({
            error: `User ${id} not found`
        });
    };

    const updateUser = (req, res) => {
        const id = req.params.id;
        const user = userRepo.updateUser(id, req.body);

        if (user) {
            return res.send({
                data: user
            });
        }

        res.status(404).send({
            error: `User ${id} not found`
        });
    };

    const deleteUser = (req, res) => {
        const id = req.params.id;
        const deletedUser = userRepo.deleteUser(id, req.body);

        if (deletedUser) {
            return res.send({
                meta: {
                    _deleted: deletedUser
                }
            });
        }

        res.status(404).send({
            error: `User ${id} not found`
        });
    };

    return {
        listUsers,
        createUser,
        getUser,
        updateUser,
        deleteUser
    };
}