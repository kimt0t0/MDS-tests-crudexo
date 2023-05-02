export default (userRepo) => {
    const listUsers = (_, res) => {
        res.send({
            data: userRepo.listUsers()
        });
    }

    const createUser = (req, res) => {
        const user = userRepo.createUser(req.body);
        res.status(201).send({
            data: user
        });
    }

    return {
        listUsers,
        createUser
    }
}